import { ToastContainer } from "react-toastify";
import { EventorForm } from "../EventorForm";
import "react-toastify/dist/ReactToastify.css";

import { Calendar } from "lucide-react";
import Link from "next/link";

export default function AddEventPage() {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold tracking-tight">Add Eventor</h1>
                <Link
                    href="/eventors"
                    className="flex gap-2 items-center button font-semibold border p-2 rounded-lg"
                >
                    <Calendar className="mr size-4" />
                    View Eventors
                </Link>
            </div>

            <div className="gap-y-6">
                <EventorForm />
            </div>

            <ToastContainer />
        </div>
    );
}
