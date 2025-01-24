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
/*import {EventorSchema} from "../../../prisma/generated/zod";*/
import {EventorSchema} from "@/lib/schemas/EventorSchema"
import {addEventor, updateEventor} from "@/lib/actions/eventorActions";
import {useSession} from "next-auth/react";


const formSchema = EventorSchema;

type EventorFormProps = {
    eventor?: Eventor;
    handleClose?: () => void;
    handleError?: (message: string) => void;
};

export function EventorForm({ eventor, handleClose, handleError }: EventorFormProps) {

    const { data: session } = useSession();
    const user = session?.user;

    if(!eventor){
        console.log("No eventor passed, this should be an add eventor form")
    }

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: eventor
            ? {
                name: eventor.name,
                description: eventor.description,
            }
            : {
                name: "",
                description: ""
            },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log("Submitting eventor");

        // Ensure user is logged in
        if (!user?.id) {
            toast.error("User not logged in or unable to retrieve user data.");
            return;
        }

        try {
            const baseEventorData = {
                name: values.name,
                description: values.description,
            };

            if (!eventor) {
                // Add new eventor
                const newEventor = { ...baseEventorData };
                await addEventor(newEventor, user.id);
                form.reset();
                toast.success("Eventor successfully created!");
                return;
            }

            // Update existing eventor
            const eventorToUpdate: Omit<Eventor, "createdAt"> = {
                id: eventor.id,
                isActive: values.isActive,
                ...baseEventorData
            };
            await updateEventor(eventorToUpdate);
            toast.success("Eventor successfully updated!");

            handleClose?.();
        } catch (error) {
            console.error("Error processing eventor:", error);
            handleError?.(eventor ? "Error updating eventor" : "Error adding eventor");
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 h-full ">

                {/* Name Field */}
                <FormField
                    control={form.control}
                    name="name"

                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Enter eventor name"
                                    className="backdrop-contrast-50 backdrop-opacity-20 bg-transparent border-0"
                                    {...field}
                                />
                            </FormControl>
                            {form.formState.errors.name && (
                                <FormMessage>{form.formState.errors.name.message}</FormMessage>
                            )}
                        </FormItem>
                    )}
                />

                {/* Description Field */}
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Enter eventor description"
                                    className="backdrop-contrast-50 backdrop-opacity-20 bg-transparent border-0"
                                    {...field}
                                    value={field.value ?? ""}
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

                {/* Submit Button */}
                <Button
                    type="submit"
                    disabled={form.formState.isSubmitting}
                    className="w-full p-4 rounded-lg"
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
