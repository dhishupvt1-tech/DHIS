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


const formSchema = EventorSchema;

type EventorFormProps = {
    eventor?: Eventor;
    handleClose?: () => void;
    handleError?: (message: string) => void;
};

const Eventor: Prisma.EventorSelect={id:true}

export function EventorForm({ eventor, handleClose, handleError }: EventorFormProps) {

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
            await addEventor(newEventor)
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
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                                    placeholder="Enter event description"
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

                <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="flex gap-2 items-center">
                                Location
                                {/* <MapPin className="size-4" /> */}
                            </FormLabel>
                            <FormControl>
                                <Input placeholder="Enter event location" {...field} />
                            </FormControl>
                            {form.formState.errors.location && (
                                <FormMessage>
                                    {form.formState.errors.location.message}
                                </FormMessage>
                            )}
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Schedule</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-full justify-start text-left font-normal",
                                                !field.value && "text-muted-foreground",
                                            )}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {field.value ? (
                                                format(field.value, "PPP")
                                            ) : (
                                                <span>Pick a date</span>
                                            )}
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                            {form.formState.errors.date && (
                                <FormMessage>{form.formState.errors.date.message}</FormMessage>
                            )}
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="duration"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Event duration</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select event duration" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Event Duration</SelectLabel>
                                        {eventTypes?.map((type, index) => (
                                            <SelectItem key={index} value={type.value}>
                                                {type.text}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {form.formState.errors.duration && (
                                <FormMessage>
                                    {form.formState.errors.duration.message}
                                </FormMessage>
                            )}
                        </FormItem>
                    )}
                />



                <FormField
                    control={form.control}
                    name="duration_in_minutes"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="flex gap-2 items-center">
                                Duration in Minutes
                                {/* <MapPin className="size-4" /> */}
                            </FormLabel>
                            <FormControl>
                                <Input type="number" placeholder="Enter event duration in minutes" {...field} value={field.value ?? 0}
                                       onChange={(e) => {
                                           const value = e.target.value;
                                           field.onChange(value ? Number(value) : 0); // Convert to number, or default to 0 if empty
                                       }} />
                            </FormControl>
                            {form.formState.errors.duration_in_minutes && (
                                <FormMessage>
                                    {form.formState.errors.duration_in_minutes.message}
                                </FormMessage>
                            )}
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="is_required"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="flex gap-2 items-center">
                                Require Attendance
                            </FormLabel>
                            <FormControl>
                                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                            {form.formState.errors.is_required && (
                                <FormMessage>
                                    {form.formState.errors.is_required.message}
                                </FormMessage>
                            )}
                        </FormItem>
                    )}
                />


                <FormField
                    control={form.control}
                    name="is_check_in_only"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="flex gap-2 items-center">
                                Check In Only
                            </FormLabel>
                            <FormControl>
                                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                            {form.formState.errors.is_check_in_only && (
                                <FormMessage>
                                    {form.formState.errors.is_check_in_only.message}
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
                    {event
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
