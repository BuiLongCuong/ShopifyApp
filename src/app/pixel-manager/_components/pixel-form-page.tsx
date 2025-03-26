'use client';

import { getPixelDetails } from "@/services/pixel/pixel.service";
import PixelForm from "./pixel-form";
import { IPixel } from "@/types/pixel";
import { useEffect, useState } from "react";

type IPixelFormPageProps = {
    pixelId: string;
}

export default function PixelFormPage({pixelId} : IPixelFormPageProps) {
    const [pageTitle, setPageTitle] = useState<string>('Create pixel');
    const [pixelDetails, setPixelDetails] = useState<IPixel | null>(null);

    useEffect(() => {
        if (pixelId !== 'new') {
            getPixelDetails(Number(pixelId))
                .then((res) => {
                    setPixelDetails(res);
                    setPageTitle('Edit pixel');
                })
                .catch((error) => console.error("Error fetching pixel details:", error));
        }
    }, [pixelId]);

    return <PixelForm initialData={pixelDetails} pageTitle={pageTitle} />;
}
