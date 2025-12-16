import { ToastContainer } from "react-toastify";
import { EventorForm } from "../EventorForm";
import "react-toastify/dist/ReactToastify.css";

import {Calendar, ChevronLeft} from "lucide-react";
import Link from "next/link";
import BaseLayout from "@/components/BaseLayout";
import {Button} from "@/components/ui/button";

export default function AddEventorPage() {
    return (
        <BaseLayout title="Add eventor" topRight={
            <Link href="/eventors">
                <Button className="rounded-lg">
                    <ChevronLeft className=""/>
                </Button>
            </Link>
        }>

            <BaseLayout.Content>
                    <EventorForm/>
            </BaseLayout.Content>


            <ToastContainer/>

        </BaseLayout>
    );
}
