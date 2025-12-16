// import useQueuedAttendanceStore from "@/store/useQueuedAttendanceStore";
import { createClient } from "@repo/utils/supabase";
import { differenceInMinutes, differenceInSeconds, parseISO, format, } from "date-fns";
const supabase = createClient();
// Utility functions
const getCurrentTime = () => new Date().toLocaleTimeString("en-US", { hour12: false });
const getCurrentDate = () => {
    return format(new Date(), "yyyy-MM-dd");
};
const fetchTodayRecords = async (schoolId) => {
    const today = getCurrentDate(); // This function returns the date in 'YYYY-MM-DD' format
    const { data, error } = await supabase
        .from("attendance")
        .select("*")
        .eq("school_id", schoolId)
        .eq("date", today)
        .order("date", { ascending: true });
    if (error) {
        throw new Error("Error fetching today's attendance records: " + error.message);
    }
    return data;
};
const hasCompleteRecords = (records) => records.length >= 16;
const isEarlyTimeOut = (records, minutesSinceTimeIn = 1) => {
    // If the number of records is even, return false early
    if (records.length % 2 === 0) {
        return false;
    }
    // Get the last attendance record from the array
    const lastRecord = records[records.length - 1];
    // Check if the last record exists
    if (lastRecord) {
        // Parse the time_in from the last record's date and time
        const timeIn = parseISO(`${lastRecord.date}T${lastRecord.time}`);
        const now = new Date(); // Get the current date and time
        // Calculate the difference in minutes between now and the time_in
        return differenceInMinutes(now, timeIn) < minutesSinceTimeIn;
    }
    // If no last record exists, return false
    return false;
};
const isEarlyTimeIn = (records, secondsSinceLastTimeOut = 10) => {
    // If the number of records is odd, return false early
    if (records.length % 2 !== 0) {
        return false;
    }
    // Get the last attendance record from the array
    const lastRecord = records[records.length - 1];
    // Check if the last record exists and has a time_out value
    if (lastRecord) {
        // Parse the time_out from the last record's date and time
        const lastTimeOut = parseISO(`${lastRecord.date}T${lastRecord.time}`);
        const now = new Date(); // Get the current date and time
        // Calculate the difference in seconds between now and the time_out
        return differenceInSeconds(now, lastTimeOut) < secondsSinceLastTimeOut;
    }
    // If no last record exists or it doesn't have a time_out, return false
    return false;
};
export const createOrUpdateAttendanceRecord = async (schoolId, scannedByEmail, scanModeOverride) => {
    const records = await fetchTodayRecords(schoolId);
    if (scanModeOverride === "auto") {
        if (isEarlyTimeOut(records)) {
            throw new Error("EARLY_TIMEOUT");
        }
        if (isEarlyTimeIn(records)) {
            throw new Error("EARLY_TIMEIN");
        }
    }
    if (hasCompleteRecords(records)) {
        return null; // Exit if there are already two complete records
    }
    let isTimeIn;
    if (scanModeOverride === "auto") {
        isTimeIn = records.length % 2 === 0;
    }
    else {
        isTimeIn = scanModeOverride === "in";
    }
    const { data, error } = await supabase
        .from("attendance")
        .insert({
        date: getCurrentDate(),
        school_id: schoolId,
        time: getCurrentTime(),
        is_time_in: isTimeIn,
        scanned_by_email: scannedByEmail,
    })
        .select("*");
    if (error)
        throw new Error("Error adding new attendance record: " + error.message);
    return data[0];
};
//! DEPRECATED
// Fetch all attendance records with student details
export const getAllAttendanceRecords = async () => {
    const { data, error } = await supabase
        .from("attendance")
        .select("*, student:students!attendance_studentId_fkey(school_id, name)");
    if (error)
        throw new Error("Error fetching attendance records: " + error.message);
    return data;
};
export const getRecentAttendance = async () => {
    const { data, error } = await supabase
        .from("attendance_recent")
        .select("*")
        .limit(100);
    if (error)
        throw new Error("Error fetching attendance: " + error.message);
    return data;
};
// Fetch attendance records by student ID
export const getAttendanceRecordsBySchoolId = async (schoolId) => {
    const { data, error } = await supabase
        .from("attendance")
        .select("*")
        .eq("school_id", schoolId);
    if (error)
        throw new Error("Error fetching attendance records: " + error.message);
    console.log("ATTENDANCE RECORDS for school_id ", schoolId, data);
    return data;
};
export async function getFilteredPaginatedSchoolIds(currentPage, query, limit = 9) {
    const { data, error } = await supabase.rpc("get_filtered_paginated_school_ids", {
        current_page: currentPage,
        search_query: query,
        limit_count: limit,
    });
    if (error) {
        console.error("Error fetching filtered school IDs:", error);
        throw error;
    }
    // Extract total count from the first row if data is not empty
    const count = data.length > 0 ? data[0].total_count : 0;
    // Extract school IDs from the data
    const schoolIds = data.map((row) => row.school_id);
    console.log("school ids", data);
    return { schoolIds, count };
}
