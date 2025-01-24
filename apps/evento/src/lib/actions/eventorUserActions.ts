"use server"

import {prisma} from "../prisma"
import {Eventor, UserRole,EventorUser} from "@prisma/client";
import {prismaQueryWrapper} from "@/lib/actions/prismaQueryWrapper";


/*export type $UserRole = (typeof UserRole)[keyof typeof UserRole]*/

export async function addUserToEventor(userId: string, userRole: UserRole,eventorId:bigint,){
    const data: Omit<EventorUser, "id" | "createdAt"> = {eventorId,userId,role:userRole}
    await prismaQueryWrapper(()=>prisma.eventorUser.create({data}))
}
