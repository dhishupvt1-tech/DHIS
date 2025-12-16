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
    BadgeCheck, Scan, Pen, ChevronLeft, Diamond, Gem,
    Settings, Pencil, UsersRound
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { generateCSV } from "@/lib/utils/utils";
import BaseLayout from "@/components/BaseLayout";
import { getEventorsByUserId } from "@/lib/actions/eventorActions";
import { useSession } from "next-auth/react";
import { Eventor, EventorUser, User, UserRole } from "@prisma/client";
import ScanDrawer from "@/app/eventors/ScanDrawer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function EventorsPage() {

    const { data: session } = useSession();
    const user = session?.user



    type ExtendedEventorUser = EventorUser & { user: User }
    type EventorWithUsers = Eventor & { eventorsUsers: ExtendedEventorUser[]; }


    const handleGetEventors = async () => {
        if (!user?.id) {
            throw new Error("User ID is required");
        }
        const data = await getEventorsByUserId(user.id);
        console.log(data);
        return data
    }



    const {
        data: eventors = [],
        error: eventorsError,
        isLoading: eventorsIsLoading,
    } = useQuery<EventorWithUsers[]>({
        queryKey: ["eventors"],
        queryFn: handleGetEventors,
    });


    function handleScan() {

    }



    type UserEventorRoleComponentProps = {
        eventorUser: ExtendedEventorUser;
    };

    function UserEventorRoleComponent({ eventorUser }: UserEventorRoleComponentProps) {
        // Helper function to render the Badge component
        const renderBadge = (roleLabel: string) => {
            return (
                <Badge className="rounded-full px-0 pr-4 flex gap-2" variant="secondary">
                    <Avatar className="size-8">
                        {eventorUser.user.image && (
                            <AvatarImage src={eventorUser.user.image} alt="user-image" />
                        )}
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col justify-center gap-0">
                        <p>{eventorUser.user.name}</p>
                        <p className="font-medium text-xs opacity-50">{roleLabel}</p>
                    </div>
                </Badge>
            );
        };

        // Return based on user role
        switch (eventorUser.role) {
            case UserRole.OWNER:
                return renderBadge("owner");
            case UserRole.ADMIN:
                return renderBadge("admin");
            case UserRole.MEMBER:
                return renderBadge("member");
            default:
                return null; // If no valid role, return nothing
        }
    }



    return (
        <BaseLayout title="Eventors" topRight={
            <Link href="/pricing">
                <Button className="rounded-full">
                    <Gem className="mr-2" />
                    See Pricing
                </Button>
            </Link>
        }>
            <BaseLayout.InfoBar text="Eventors are event organizers who can scan attendees" />

            <BaseLayout.Content>
                {eventorsIsLoading && <BaseLayout.Loading />}
                {eventorsError && <BaseLayout.Error text="Error fetching eventors" />}

                {!eventorsIsLoading && !eventorsError &&
                    eventors.map((eventor) => (

                        <div key={eventor.id} className="flex rounded-lg flex-col gap-4 w-full p-4 backdrop-contrast-50 backdrop-opacity-20">
                            <div className="flex flex-col gap-1 mb-2">
                                <div className="flex justify-between">
                                    <h2 className="font-bold">{eventor.name}</h2>


                                    <p className="cursor-pointer text-xs opacity-50 font-bold flex gap-2 hover:opacity-100">
                                        {/*<Pencil className="size-4"/>*/}
                                        Edit
                                    </p>

                                </div>

                                <p className="font-medium text-sm leading-tight opacity-50">{eventor.description}</p>
                            </div>


                            <div className="flex flex-wrap gap-2">
                                {/*<h3 className="text-sm font-bold">Members</h3>*/}
                                {eventor.eventorsUsers.map((item) => (
                                    /*<Badge key={item.id} variant="secondary">{item.user.name}</Badge>*/
                                    <UserEventorRoleComponent key={item.id} eventorUser={item} />
                                ))}

                                <Badge className="rounded-full flex gap-1 cursor-pointer hover:opacity-80">
                                    <UsersRound className="p-1" />
                                    <div className="flex flex-col justify-center gap-0">
                                        Edit Access
                                    </div>
                                </Badge>
                            </div>


                            {/*<Button className="flex gap-4 mt-2 rounded-lg" onClick={()=>handleScan()} ><Scan/> Scan Attendees</Button>*/}
                            <ScanDrawer eventor={eventor} trigger={(
                                <Button className="flex gap-2 p-8 w-full mt-2 rounded-lg" onClick={() => handleScan()} ><Scan /> Scan</Button>
                            )} />



                        </div>
                    ))
                }


                <Link href="/eventors/create"
                    className="flex justify-center gap-2 items-center p-4 w-full rounded-lg opacity-50 bg-opacity-10">
                    <Plus className="" />
                    <p className="font-bold">Create Eventor</p>
                </Link>

            </BaseLayout.Content>
        </BaseLayout>
    );
}
