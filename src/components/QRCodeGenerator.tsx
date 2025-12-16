"use client"

import { Card } from "@/components/ui/card"

import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { ArrowDownToLine, BadgeCheck, Building2, CircleUserRound, Pen, QrCode, RotateCw, Scan, UserRound, UserRoundIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


import * as htmlToImage from 'html-to-image';




interface QRCodeGeneratorProps {
    qrCodeText: string;
    photo: string; // Expecting photo prop for the avatar
    name: string; // Expecting name prop for the user name
}



const QRCodeGenerator = ({ qrCodeText, photo, name }: QRCodeGeneratorProps) => {
    const [qrCodeUrl, setQrCodeUrl] = useState(qrCodeText);


    const generateQRCode = async () => {
        try {
            const data = qrCodeText
            const url = await QRCode.toDataURL(data, {
                width: 200,
                margin: 2,
                color: {
                    dark: '#000000',
                    light: '#ffffff',
                },
            });
            setQrCodeUrl(url);
        } catch (error) {
            console.error('Error generating QR code:', error);
        }
    };

    useEffect(() => {
        generateQRCode();
    }, [photo, name, qrCodeText]);



    const downloadCardAsImage = async () => {
        const cardElement = document.getElementById('card'); // Get the card element by id

        if (cardElement) {
            htmlToImage.toJpeg(cardElement, { quality: 0.95 })
                .then(function (dataUrl) {
                    var link = document.createElement('a');
                    link.download = 'my-evento-qrcode.jpeg';
                    link.href = dataUrl;
                    link.click();
                });
        }

    };


    return (
        <div className="flex items-center justify-center ">

            <div className="bg-background">
                {/*
                    <h1 className="max-w-2xl tracking-tighter text-center font-bold text-xl">
                        Your evento QR Code
                    </h1>

                    <p className="text-sm text-muted-foreground max-w-2xl text-center mb-8">
                        Present this when attending events
                    </p>*/}


                <Card id="card" className="aspect-[2/3] p-2 max-w-sm min-w-80 grid gap-0 rounded-lg shadow-neutral-500 bg-muted shadow-sm bg-gradient-to-br from-muted to-slate-500 relative overflow-hidden drop-shadow-xl" >
                    <div className="absolute font-bold text-9xl rotate-90 top-52 right-4 z-0 opacity-30 bg-gradient-to-r bg-clip-text text-transparent from-transparent to-slate-500">
                        evento
                    </div>
                    <div className="absolute font-bold text-9xl rotate-90 top-8 left-8 z-0 opacity-30 bg-gradient-to-l bg-clip-text text-transparent from-transparent to-slate-500 ">
                        evento
                    </div>


                    <div className="flex flex-col bg-opacity-20 p-2 rounded-full z-50">
                        <div className="flex items-center gap-2 justify-between">

                            <p className="font-bold ">evento</p>
                            <BadgeCheck className="" />
                        </div>

                        <Avatar className="size-32 flex items-center justify-center m-auto outline-slate-500 outline bg-background">


                            <AvatarImage src={photo} alt="Profile photo" className="object-cover" />
                            <AvatarFallback>
                                <UserRound className="size-8" />
                            </AvatarFallback>

                        </Avatar>


                        <div className="flex flex-col align-center justify-center items-center mt-1">
                            <h3 className=" font-semibold text-xl  text-wrap">{name}</h3>
                        </div>
                    </div>
                    <div className="grid gap-4 z-50">
                        <div className="flex justify-center rounded-md flex-col items-center">
                            {qrCodeUrl && <img src={qrCodeUrl} alt="QR Code" className=" rounded-md opacity-80" />}
                            {/*<h1 className=" font-semibold tracking-widest my-2 text-center opacity-80">{name}</h1>*/}
                        </div>
                    </div>
                </Card>


                <div className="flex flex-col my-8 gap-2">
                    <Button
                        onClick={downloadCardAsImage}
                        variant={"outline"}
                        className="w-full flex gap-2 items-center"
                    >
                        <ArrowDownToLine className="size-4" />
                        Download
                    </Button>
                    <p className="m-auto opacity-50 text-sm">
                        or take a screenshot
                    </p>
                </div>


            </div>
        </div >
    );
};

export default QRCodeGenerator;
