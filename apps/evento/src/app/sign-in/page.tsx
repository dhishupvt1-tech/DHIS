
import { CalendarDays, Download, Map, TriangleAlert, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from 'next/image'
import { motion } from "framer-motion"
import { AuroraBackground } from "@/components/ui/aurora-background";
import FeaturesCarousel from "@/components/FeaturesCarousel";
import InstallButton from "@/components/InstallButton";
import SignInButton from "@/components/auth/sign-in-button";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import DevInfo from "@/components/DevInfo";
import {auth} from "@/lib/auth";
import {redirect} from "next/navigation";

export default async function SignInPage() {
    const session = await auth()

    if(session?.user){
        redirect("/")
    }


    return (
        <div className="w-full flex items-center justify-center gap-8 flex-col flex-auto h-full py-16">
            <div className="rounded-lg items-center justify-center flex flex-col">
                <h1 className="font-extrabold lg:text-7xl text-6xl tracking-tighter">
                    evento
                </h1>
                <p className="text-balance  text-xs opacity-70 flex gap-1 items-center"><Zap className="size-3"/>Streamlining
                    events</p>
            </div>

            <SignInButton/>
           {/* <Button variant="default" onClick={() => signIn("google", {redirectTo: "/"})}>
                Sign In
            </Button>*/}

            <div className="rounded-lg flex flex-col gap-6">
                <InstallButton/>
                <DevInfo/>
            </div>
        </div>
    )
}
