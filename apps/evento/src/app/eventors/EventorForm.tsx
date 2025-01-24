"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { Value } from "@radix-ui/react-select";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import type { z } from "zod";

import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";

import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

import { cn } from "@/lib/utils";

import { Textarea } from "@/components/ui/textarea";

import { MapPin } from "lucide-react";

import {type Eventor} from "@prisma/client";
import {Prisma} from "@prisma/client";
import {EventorSchema} from "../../../prisma/generated/zod";
import {addEventor, updateEventor} from "@/lib/actions/eventorActions";
import {useSession} from "next-auth/react";


const formSchema = EventorSchema;

type EventorFormProps = {
    eventor?: Eventor;
    handleClose?: () => void;
    handleError?: (message: string) => void;
};

const Eventor: Prisma.EventorSelect={id:true}

export function EventorForm({ eventor, handleClose, handleError }: EventorFormProps) {

    const { data: session } = useSession();
    const user = session?.user;



    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: eventor
            ? {
                name: eventor.name,
                description: eventor.description,
                isActive: eventor.isActive,
            }
            : {
                name: "",
                description: "",
            },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log("pass");
        console.log(values);

        const newEventor: Omit<Eventor,"id" | "createdAt" | "isActive"> = {
            name: values.name,
            description: values.description,
        };

        if (eventor) {
            const eventorToUpdate: Omit<Eventor,"createdAt"> = {
                id: eventor.id,
                isActive: values.isActive,
                name: values.name,
                description: values.description,
            };

            console.log("eventor to update: ", eventorToUpdate);
            await updateEventor(eventorToUpdate)
                .then(() => {
                    handleClose?.();
                    console.log("eventor form dialog should close now");
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                    handleError?.("Error updating eventor");
                });
        } else {





            if(!user?.id){
                return <div>Loading user...</div>
            }

            await addEventor(newEventor,user?.id)
                .then(() => {
                    handleClose?.();
                    console.log("eventor form dialog should close now");
                    form.reset();
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                    handleError?.("Error adding eventor");
                });
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 border border-red-500 h-full">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Enter event name"
                                    className="resize-none"
                                    {...field}
                                />
                            </FormControl>
                            {form.formState.errors.name && (
                                <FormMessage>{form.formState.errors.name.message}</FormMessage>
                            )}
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Enter eventor description"
                                    className="resize-none"
                                    {...field}
                                />
                            </FormControl>
                            {form.formState.errors.description && (
                                <FormMessage>
                                    {form.formState.errors.description.message}
                                </FormMessage>
                            )}
                        </FormItem>
                    )}
                />


                <Button
                    type="submit"
                    disabled={form.formState.isSubmitting}
                    className="w-full"
                >
                    {eventor
                        ? form.formState.isSubmitting
                            ? "Saving changes..."
                            : "Save changes"
                        : form.formState.isSubmitting
                            ? "Submitting..."
                            : "Submit"}
                </Button>
            </form>
        </Form>
    );
}
