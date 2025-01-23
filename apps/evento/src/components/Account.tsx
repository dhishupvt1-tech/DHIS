"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { handleSignOut } from "@/app/actions/signOutAction";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Account() {
    const { data: session } = useSession();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            {/* Whole Account component as the trigger */}
            <DropdownMenuTrigger asChild>
                <div className="flex flex-wrap gap-3 items-center cursor-pointer">
                    <Avatar>
                        <AvatarImage src={session?.user?.image ?? undefined} />
                        <AvatarFallback>User</AvatarFallback>
                    </Avatar>

                    <div className="items-center">
                        <p className="text-xs opacity-50 hidden lg:block">Logged in as</p>
                        <p className="text-sm font-semibold">{session?.user?.name}</p>
                        {/* <p className="text-xs opacity-50 hidden lg:block">{session?.user?.email}</p>*/}
                    </div>
                </div>
            </DropdownMenuTrigger>

            {/* Dropdown Menu Content */}
            <DropdownMenuContent align="end">
                {/*<DropdownMenuItem onClick={() => setIsMenuOpen(false)}>
                    View Profile
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setIsMenuOpen(false)}>
                    Settings
                </DropdownMenuItem>*/}
                <DropdownMenuItem >
                    {/*THIS IS THE SIGN OUT BUTTON BUT IN FORM SINCE IT IS USING A SERVER ACTION*/}
                    <form action={handleSignOut}>
                        <Button variant="destructive" type="submit" className="p-0 h-0">Sign Out</Button>
                    </form>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
