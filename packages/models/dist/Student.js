import { createClient } from "@repo/utils/supabase";
const supabase = createClient();
export function getStudentFullName(student) {
    return `${student.first_name} ${student.last_name}`;
}
export async function getStudentBySchoolId(schoolId) {
    const { data, error } = await supabase
        .from("students")
        .select("*")
        .eq("school_id", schoolId)
        .maybeSingle();
    if (error) {
        console.error("Error fetching student:", error);
        return null;
    }
    console.log("Fetched student:", data);
    return data;
}
export async function getAllStudents() {
    const { data, error } = await supabase.from("students").select("*");
    if (error) {
        console.error("Error fetching all students:", error);
    }
    console.log("All students", data);
    return data;
}
export async function addStudent(student) {
    const { data, error } = await supabase
        .from("students")
        .insert(student)
        .select()
        .maybeSingle();
    if (error?.code === "23505") {
        console.log("School ID already exists");
        return "SCHOOL_ID_EXISTS";
    }
    if (error) {
        console.error("Error adding student:", error);
        throw new Error();
    }
    console.log("Added student:", data);
    return data;
}
export async function updateStudent(student) {
    const { data, error } = await supabase
        .from("students")
        .update(student)
        .eq("id", student.id)
        .select()
        .maybeSingle();
    if (error) {
        console.error("Error updating student:", error);
        throw error;
    }
    console.log("Updated student:", data);
    return data;
}
export async function updateStudentBySchoolId(schoolId, updates) {
    const { data, error } = await supabase
        .from("students")
        .update(updates)
        .eq("school_id", schoolId)
        .select()
        .maybeSingle();
    if (error) {
        console.error("Error updating student:", error);
        return null; // Return null or handle the error appropriately
    }
    console.log("Updated student:", data);
    return data; // Return the updated data
}
export async function deactivateStudent(student) {
    const { data, error } = await supabase
        .from("students")
        .update({ is_active: false })
        .eq("id", student.id)
        .single();
    if (error) {
        console.error("Error deactivating student:", error);
        return null;
    }
    console.log("Deactivated student:", data);
    return data;
}
export async function getFilteredPaginatedStudents(currentPage, query, deptId, status, limit = 9) {
    let queryBuilder = supabase
        .from("students")
        .select("*", { count: "exact" })
        .eq("is_active", status)
        .or(`first_name.ilike.%${query}%,last_name.ilike.%${query}%,school_id.ilike.%${query}%`)
        .range((currentPage - 1) * limit, currentPage * limit - 1); // Adjust range to be inclusive of the last item
    if (deptId) {
        queryBuilder = queryBuilder.eq("dept_id", deptId);
    }
    const { data, count, error } = await queryBuilder;
    if (error) {
        console.error("Error fetching filtered students:", error);
        throw error;
    }
    // return data as Student[];
    return { students: data, count };
}
export const getStudentRowCount = async () => {
    const { count, error } = await supabase
        .from("students")
        .select("id", { count: "exact", head: true });
    if (error) {
        console.error("Error fetching total student row count:", error);
        return 0;
    }
    console.log("Total student row count:", count);
    return count || 0;
};
export const isValidSchoolId = (id) => {
    // Regular expression to match the format "YYYY-NNNN"
    const schoolIdRegex = /^\d{4}-\d{4}$/;
    // Test the string against the regular expression
    return schoolIdRegex.test(id);
};
