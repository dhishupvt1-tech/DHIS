import { createClient } from "@repo/utils/supabase";
const supabase = createClient();
export async function getDepartments() {
    const { data, error } = await supabase.from("departments").select("*");
    if (error) {
        console.error("Error fetching departments", error);
    }
    console.log("All departments", data);
    return data;
}
