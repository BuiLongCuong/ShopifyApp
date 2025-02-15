import { getAllPixels } from "@/services/pixel/pixel.service";
import PixelManager from "./_components";
import { IPixel } from "@/types/pixel";
import { Suspense } from "react";

export default async function Page() {
    const res = await getAllPixels();
    const dataPixel: IPixel[] = res.results.data;
    const totalItems = res.results.total;

    return(
        <PixelManager dataPixel={dataPixel} totalItems={totalItems}/>
    )
}