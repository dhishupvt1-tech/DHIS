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

export default function EventorsPage() {







    return (
        <div className="flex flex-col h-full gap-4 border-red-500">
            <div className="flex gap-2 items-center">
                <h1 className="text-2xl font-bold tracking-tighter mr-auto border-red-500">Eventors</h1>
                {/*<Link href="/events/create">
                    <Button variant={"ghost"}>
                        <Plus className="size-4" />
                        Add
                    </Button>
                </Link>*/}
            </div>

            {/*CONTENT*/}
            <div className="flex rounded-lg flex-col gap-4 w-full p-8 backdrop-contrast-50 backdrop-opacity-20">

                <div className="flex flex-col gap-1">
                    <h2 className="font-bold">Banaybanay Student Council</h2>
                    <p className="font-medium leading-tight opacity-50">The University Student Council of Davao Oriental State
                        University Banaybanay Campus</p>
                </div>

                <div className="flex flex-wrap gap-2">
                    <h3 className="text-sm font-bold">Members</h3>
                    <Badge variant="secondary">danodoms@gmail.com</Badge>
                    <Badge variant="secondary">johndoe@gmail.com</Badge>
                    <Badge variant="secondary">marianophil@gmail.com</Badge>
                    <Badge variant="secondary">danodoms@gmail.com</Badge>
                    <Badge variant="secondary">danodoms@gmail.com</Badge>
                </div>


                <Button className="flex gap-4 mt-4"><Scan/> Scan Attendees</Button>
                <Button className="flex gap-4 -mt-2" variant="ghost"><Pen className="size-4"/>Manage eventor</Button>

            </div>

            <Link href="/eventors/create" className="flex justify-center gap-2 items-center p-4 w-full rounded-lg opacity-50 bg-opacity-10">
                <Plus className="" />
                <p className="font-bold">Create Eventor</p>
            </Link>
        </div>
    );
}
