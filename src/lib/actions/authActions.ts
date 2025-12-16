"use server";

import {signIn, signOut} from "@/lib/auth";

export async function handleSignOut() {
    await signOut({redirect:true,redirectTo: "/sign-in"});
}

export async function handleSignIn() {
    await signIn("google",{ redirectTo: "/" })
}
