"use client";

import { useQuery } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SelectFilter from "@/components/SelectFilter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import {
    type Event,
    EventStat,
    deactivateEvent,
    type eventDuration,
    getAttendanceForDate,
    getEvents,
    getEventsStats
} from "@repo/models/Event";
import { format, getMonth, getYear, parseISO } from "date-fns";
import {
    Calendar,
    Clock,
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

export default function RecordsPage() {

    return (
        <BaseLayout title="Records">
            <BaseLayout.InfoBar text="View your attendance records"/>

            <BaseLayout.Content>
                <></>
            </BaseLayout.Content>


        </BaseLayout>
    );
}
