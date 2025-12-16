import { createClient } from "@repo/utils/supabase";
const supabase = createClient();
export async function getEvents() {
    const { data, error } = await supabase.from("events").select("*");
    if (error) {
        console.error("Error fetching events", error);
    }
    console.log("All events", data);
    return data;
}
export async function getActiveEvents() {
    const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("is_active", true); // Add condition to filter active events
    if (error) {
        console.error("Error fetching events", error);
    }
    console.log("All events", data);
    return data;
}
export async function addEvent(event) {
    const { data, error } = await supabase.from("events").insert(event).single(); // Use .single() if you expect only one row to be inserted
    if (error) {
        console.error("Error adding event:", error);
        throw new Error("Error adding event");
    }
    console.log("Added event:", data);
    return data;
}
export async function updateEvent(event) {
    const { data, error } = await supabase
        .from("events")
        .update(event)
        .eq("id", event.id)
        .single(); // Use .single() if you expect only one row to be updated
    if (error) {
        console.error("Error updating event:", error);
        throw new Error("Error updating event");
    }
    console.log("Updated event:", data);
    return data;
}
export async function deactivateEvent(event) {
    const { data, error } = await supabase
        .from("events")
        .update({ is_active: false })
        .eq("id", event.id)
        .single(); // Use .single() if you expect only one row to be updated
    if (error) {
        console.error("Error deactivating event:", error);
        return null;
    }
    console.log("Deactivated event:", data);
    return data;
}
export async function getAttendanceForDate(attendanceDate) {
    const { data, error } = await supabase.rpc("get_attendance_by_date", {
        attendance_date: attendanceDate,
    });
    if (error) {
        console.error("Error fetching attendance", error);
        throw error;
    }
    return data;
}
export const getEventRowCount = async () => {
    const { count, error } = await supabase
        .from("events")
        .select("id", { count: "exact", head: true });
    if (error) {
        console.error("Error fetching total event row count:", error);
        return 0;
    }
    console.log("Total event row count:", count);
    return count || 0;
};
export const getEventsStats = async () => {
    const { data, error } = await supabase.from("event_stats_view").select("*");
    if (error) {
        console.error("Error fetching event stats", error);
        return 0;
    }
    console.log("Event stats", data);
    return data;
};
export const getEventScannerStats = async () => {
    const { data, error } = await supabase
        .from("event_scanner_stats_view")
        .select("*");
    if (error) {
        console.error("Error fetching event scanner stats", error);
        return 0;
    }
    console.log("Event scanner stats", data);
    return data;
};
