"use client";

import "react-toastify/dist/ReactToastify.css";
import {
    Calendar,
    Ellipsis,
    Filter,
    MapPin,
    Plus,
    TableProperties,
    Trash,
    FileBarChart2,
    PlusCircle,
    LogIn,
    LogOut,
    Hourglass,
    BadgeCheck, Scan, Pen
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { generateCSV } from "@/lib/utils/utils";
import BaseLayout from "@/components/BaseLayout";

export default function ProfilePage() {

    return (
        <BaseLayout title="Profile">
            <BaseLayout.Content>
                <></>
            </BaseLayout.Content>
        </BaseLayout>
    );
}
