"use client";

import { handleSignOut } from "@/lib/actions/signOutAction";

export function SignOutButton() {
    return (
        <form action={handleSignOut}>
            <button type="submit">Sign Out</button>
        </form>
    );
}
