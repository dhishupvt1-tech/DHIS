"use server"

import {prisma} from "../prisma"
import {type Eventor, EventorUser, UserRole} from "@prisma/client";
import {prismaQueryWrapper} from "@/lib/actions/prismaQueryWrapper";




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


export async function getEventorsByUserId(userId: string) {
    try {
        const eventors = await prisma.eventor.findMany({
            where: {
                eventorsUsers: {
                    some: {
                        userId: userId,
                    },
                },
            },
            include: {
                eventorsUsers: true, // Optional: Include related EventorUser records
                events: true,       // Optional: Include related Event records
            },
        });


        console.log(eventors);
        return eventors;
    } catch (error) {
        console.error("Error fetching eventors:", error);
        throw error;
    }
}




export async function updateEventor(eventor: Omit<Eventor, "createdAt">){
    await prismaQueryWrapper(()=>prisma.eventor.update({where:{id:eventor.id},data:eventor}))
}
