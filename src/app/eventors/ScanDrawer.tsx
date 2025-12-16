import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


import { Student } from "@/lib/db/Student";
import useMediaQuery from "@custom-react-hooks/use-media-query";
import { TableProperties, CircleAlert, Eye, AlignLeft, GalleryHorizontalEnd, Scan, ChevronDown } from "lucide-react";
import AttendanceHistory from "../../components/AttendanceHistory";
import { ReactNode } from "react";
import { Eventor } from "@prisma/client";
import Scanner from "@/app/scan/Scanner";
import AttendanceQueueSection from "@/app/scan/AttendanceQueueSection";
import { useAttendanceStore } from "@/store/useAttendanceStore";

type ScanDrawerProps = {
    eventor: Eventor;
    trigger: ReactNode
}




const ScanDrawer = ({ eventor, trigger }: ScanDrawerProps) => {

    const { attendanceRecords } = useAttendanceStore();


    const isDesktop = useMediaQuery("(min-width: 768px)");


    /* if (isDesktop) {
         return (
             <Dialog>
                 <DialogTrigger>
                     {/!* <Button variant="ghost" className="">Edit</Button> *!/}
                     <Trigger />
                 </DialogTrigger>
                 <DialogContent className="sm:max-w-[425px]">
                     <DialogHeader>
                         <DialogTitle>{title}</DialogTitle>
                         <DialogDescription className="text-balance">
                         </DialogDescription>
                     </DialogHeader>
 
                     <div className="max-h-96 overflow-auto">
 
                         <AttendanceHistory />
                     </div>
                 </DialogContent>
             </Dialog>
         );
     }*/

    return (
        <Drawer>
            <DrawerTrigger>
                {/* <Button variant="ghost" className="">Edit</Button> */}
                {/*<Trigger />*/}
                {trigger}
            </DrawerTrigger>
            <DrawerContent className="">
                <DrawerHeader>
                    <DrawerTitle className="text-xl flex gap-2 m-auto items-center"><Scan />{eventor.name}</DrawerTitle>

                    <DrawerDescription className="text-balance text-xs px-4"></DrawerDescription>
                </DrawerHeader>

                <div className="min-h-5/6 overflow-auto">

                    {/*<AttendanceHistory />*/}
                    <Scanner />

                    <AttendanceQueueSection results={attendanceRecords} />
                </div>


                <DrawerFooter>
                    {/* <Button>Submit</Button> */}
                    <DrawerClose>
                        <ChevronDown className="w-full opacity-50" />
                        {/*  <Button variant="ghost" className="w-full">
                            Close
                        </Button>*/}
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};




const Trigger = () => {
    return (
        <h4 className="text-xs font-semibold text-center px-4 py-1 border rounded-e-full flex gap-2 items-center hover:bg-neutral-500 hover:bg-opacity-20">
            <GalleryHorizontalEnd className="size-4" />
            View History
        </h4>
    )
}

export default ScanDrawer;
