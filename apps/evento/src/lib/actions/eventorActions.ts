"use server"

import {prisma} from "../prisma"
import {type Eventor, EventorUser, UserRole} from "@prisma/client";
import {prismaQueryWrapper} from "@/lib/actions/prismaQueryWrapper";

export async function addEventor(eventor: Omit<Eventor,"createdAt" | "isActive">, ownerUserId:string){

    const eventorUserData: Omit<EventorUser, "id" | "createdAt"> = {eventorId:eventor.id,userId:ownerUserId,role:UserRole.OWNER}


    const [addEventor, addUserToEventor] = await prisma.$transaction([
        prisma.eventor.create({data:eventor}),

    ])


    /*await prismaQueryWrapper(()=>prisma.eventor.create({data:eventor}))*/
}









export async function updateEventor(eventor: Omit<Eventor, "createdAt">){
    await prismaQueryWrapper(()=>prisma.eventor.update({where:{id:eventor.id},data:eventor}))
}
