"use client";

import {
	CalendarFold,
	House,
	Lock,
	Scan,
	QrCode,
	UsersRound,
	GalleryHorizontalEnd,
	UserRound,
	UserRoundIcon, Landmark, Circle, Component
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { unknown } from "zod";
import { ModeToggle } from "../ModeToggle";
import useNavStore from "@/store/useNavStore";

export default function BottomNav() {
	const pathname = usePathname();
	const [activeLink, setActiveLink] = useState("");


	useEffect(() => {
		if (pathname) {
			if (pathname === "/") {
				setActiveLink("home");
			} else if (pathname === "/records") {
				setActiveLink("records");
			} else if (pathname === "/eventors") {
				setActiveLink("eventors");
			} else if (pathname === "/events") {
				setActiveLink("events");
			} else if (pathname === "/profile") {
				setActiveLink("profile");
			}
		}
	}, [pathname]);

	const linkClasses = (link: string) => `
        flex flex-col items-center  p-2
        ${activeLink === link ? "opacity-100 bg-neutral-500 rounded-full p-2 px-8 bg-opacity-20" : "opacity-50"}
        transition-all duration-125 ease-in-out hover:opacity-100
    `;

	const { isNavHidden } = useNavStore();

	if (isNavHidden) {
		return null
	}

	/*if (pathname !== "/sign-in") {*/
		return (
			<nav className="w-full z-50">
				{/* <nav className="fixed bottom-0 w-full bg-background border-t z-50"> */}
				<div className="max-w-lg mx-auto flex justify-around items-center p-2 ">
					<Link href="/" className={linkClasses("home")}>
						<House size={24} />
						{/* <span className="text-xs  scale-75 tracking-wider font-semibold">Home</span> */}
					</Link>

					<Link href="/records" className={linkClasses("records")}>
						<GalleryHorizontalEnd size={24} />
						{/* <span className="text-xs  scale-75 tracking-wider font-semibold">Students</span> */}
					</Link>


					<Link href="/eventors" className={linkClasses("eventors")}>
						<Component size={24} />
						{/* <span className="text-xs scale-75 tracking-wider font-semibold">Scan</span> */}
					</Link>

					{/*<Link href="/events" className={linkClasses("events")}>
						<CalendarFold size={24} />
						 <span className="text-xs scale-75 tracking-wider font-semibold">Events</span>
					</Link>*/}

					<Link href="/profile" className={linkClasses("profile")}>
						<UserRoundIcon size={24} />
						{/* <span className="text-xs scale-75 tracking-wider font-semibold">Scan</span> */}
					</Link>
				</div>
			</nav>
		);
	/*}*/
}
