"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { handleSignOut } from "@/lib/actions/signOutAction";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import GoogleIcon from '@mui/icons-material/Google';
import Link from "next/link";

export default function Account() {

    const { data: session } = useSession();
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    if(!session?.user){
        return(
            <Link href="/sign-in" className="lg:w-full">
                <Button className="lg:w-full flex gap-2" variant="default">
                    <GoogleIcon className=""/>Sign in
                </Button>
            </Link>

        )
    }

    return (
        <div className="p-3 rounded-lg items-center hover:bg-neutral-500 hover:bg-opacity-20 flex cursor-pointer">

            <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                {/* Whole Account component as the trigger */}
                <DropdownMenuTrigger asChild>
                    <div className="flex flex-wrap gap-3 items-center cursor-pointer">
                        <Avatar>
                            <AvatarImage src={session?.user?.image ?? undefined}/>
                            <AvatarFallback>User</AvatarFallback>
                        </Avatar>

                        <div className="items-center order-first md:order-last">
                            <p className="text-xs opacity-50 hidden lg:block">Logged in as</p>
                            <p className="text-sm font-semibold hidden lg:block">{session?.user?.name}</p>
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
                    <DropdownMenuItem>
                        {/*THIS IS THE SIGN OUT BUTTON BUT IN FORM SINCE IT IS USING A SERVER ACTION*/}
                        <form action={handleSignOut}>
                            <Button variant="destructive" type="submit" className="w-full">Sign Out</Button>
                        </form>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            </div>
            );
            }
