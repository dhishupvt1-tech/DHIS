"use server"

import {prisma} from "../prisma"
import {type Eventor, EventorUser, UserRole} from "@prisma/client";
import {prismaQueryWrapper} from "@/lib/actions/prismaQueryWrapper";




/*export async function addEventor(eventor: Omit<Eventor,"createdAt" | "isActive">, ownerUserId:string){
    const eventorUserData: Omit<EventorUser, "id" | "createdAt"> = {eventorId:eventor.id,userId:ownerUserId,role:UserRole.OWNER}

    const [addEventor, addUserToEventor] = await prisma.$transaction([
        prisma.eventor.create({data:eventor}),
        prisma.eventorUser.create({data:eventorUserData})
    ])
}*/



export async function addEventor(eventor: Omit<Eventor,"id" |"createdAt" | "isActive">, ownerUserId:string){
     const result =  await prisma.eventor.create({
         data:{
             name:eventor.name,
             description:eventor.description,
             eventorsUsers:{
                 create:[
                     {userId:ownerUserId, role:UserRole.OWNER}
                 ]
             }
         }
     })

    return result;
}




export async function updateEventor(eventor: Omit<Eventor, "createdAt">){
    await prismaQueryWrapper(()=>prisma.eventor.update({where:{id:eventor.id},data:eventor}))
}
