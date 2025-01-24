
import { Zap } from "lucide-react";
import InstallButton from "@/components/InstallButton";
import SignInButton from "@/components/auth/sign-in-button";
import DevInfo from "@/components/DevInfo";
import {auth} from "@/lib/auth";
import {redirect} from "next/navigation";
import GoogleIcon from "@mui/icons-material/Google";
import {handleSignIn} from "@/lib/actions/authActions";
import {Button} from "@/components/ui/button";

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

            {/*<form action={()=>handleSignIn()}>
                <Button type="submit" className="p-8 flex gap-4 rounded-xl"><GoogleIcon className=""/>Continue with Google</Button>
            </form>*/}

            <div className="rounded-lg flex flex-col gap-6">
                <InstallButton/>
                <DevInfo/>
            </div>
        </div>
    )
}
