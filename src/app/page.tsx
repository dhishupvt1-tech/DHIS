"use client"


import { Separator } from "@/components/ui/separator";
import { appName, version } from "@/config";
import {

	Heart,
	QrCode,
	Map,
	RotateCw,
	UsersRound,
	CalendarFold,
	PieChart,

} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type React from "react";
import AttendanceHistory from "../components/AttendanceHistory";
import Account from "@/components/Account";
import { useQuery } from "@tanstack/react-query";
import FeaturesCarousel from "@/components/FeaturesCarousel";
import { ModeToggle } from "@/components/ModeToggle";
import EventScannerStats from "@/components/EventScannerStats";
import QRCodeGenerator from "@/components/QRCodeGenerator";
import { IdCardIcon } from "@radix-ui/react-icons";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import GoogleIcon from "@mui/icons-material/Google";
import BaseLayout from "@/components/BaseLayout";


export default function Home() {

	const { data: session } = useSession();

	const user = session?.user;




	return (

		<BaseLayout title="evento" topRight={
			<Account />
		}>

			{/*<div className="flex justify-between items-center gap-4 mb-4 lg:hidden  bg-opacity-80">
				<div className="flex gap-2 items-center">
					<h1 className="font-bold text-xl text-pretty">{appName}</h1>

					<div className="opacity-50 scale-90">
						<ModeToggle compactMode={true}/>
					</div>

					<h2 className="tracking-wide text-xs opacity-50 flex-auto">
						v {version}
					</h2>
				</div>
			</div>*/}


			<BaseLayout.Content>

				{/*<div className="flex justify-between items-center">
				<h2 className="text-4xl text-pretty  font-bold items-center gap-2">
					Home
				</h2>
				<div className="flex gap-2">
					<div className="flex-col flex ">
						<p className="font-bold text-right flex gap-2 items-center py-2 px-3  bg-neutral-500 bg-opacity-10 rounded-md">
							<UsersRound className="size-4"/>
							{studentsRowCount}
						</p>
					</div>
					<div className="flex-col flex ">

						<p className="font-bold text-right flex gap-2 items-center py-2 px-3  bg-neutral-500 bg-opacity-10 rounded-md">
							<CalendarFold className="size-4"/>
							{eventsRowCount}
						</p>
					</div>
				</div>
			</div>*/}



				{/*	<div className="font-semibold text-pretty flex items-center text-sm mt-2 gap-2">
				<Map className="size-5" />
				<span>Explore Features</span>
			</div>
			<FeaturesCarousel />*/}


				{/*<div className="font-semibold text-pretty flex items-center text-sm mt-2 gap-2">
				<PieChart className="size-5"/>
				<span>Statistics</span>
			</div>

			<EventScannerStats/>


			<div className="flex justify-between">
				<div className="font-semibold text-pretty flex items-center text-sm mt-2 gap-2">
					<QrCode className="size-5"/>
					<span>Recent Scan Results</span>
				</div>

				<div className="font-semibold text-pretty opacity-50 flex items-center text-sm mt-2 gap-2">
					<RotateCw className="size-5"/>
					Refresh
				</div>
			</div>

			<div className="overflow-auto flex-1 rounded-lg">
				<AttendanceHistory/>
			</div>*/}




				{/*<div className="font-semibold text-pretty flex items-center text-sm mt-2 gap-2">
				<IdCardIcon className="size-5"/>
				<span>evento QR Code</span>
			</div>*/}

				{user?.email && user?.image && user?.name ? (
					<QRCodeGenerator qrCodeText={user.email} photo={user.image} name={user.name} />
				) : (
					<QRCodeGenerator qrCodeText="0000" photo="" name="... ...." />
				)}

			</BaseLayout.Content>
		</BaseLayout>
	);
}
