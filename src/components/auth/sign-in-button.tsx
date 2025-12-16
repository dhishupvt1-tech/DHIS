
import { signIn } from "@/lib/auth"
import {Button} from "@/components/ui/button";
import GoogleIcon from '@mui/icons-material/Google';

export default function SignInButton() {
    return (
        <form
            action={async () => {
                "use server"
                await signIn("google",{ redirectTo: "/" })
            }}
        >
            <Button type="submit" className="p-8 flex gap-4 rounded-xl"><GoogleIcon className=""/>Continue with Google</Button>

        </form>
    )
}
