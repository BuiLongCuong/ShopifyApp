import { getAllPixels } from "@/services/pixel/pixel.service";
import PixelManager from "./_components";
import { IPixel } from "@/types/pixel";
import { Suspense } from "react";
import { SearchParams } from "next/dist/server/request/search-params";
import { searchParamsCache } from '@/lib/searchparams';

type IPageProps = {
    searchParams: SearchParams;
};

export default async function Page({ searchParams }: IPageProps) {
    searchParamsCache.parse(searchParams);

    const res = await getAllPixels();
    const dataPixel: IPixel[] = res.results.data;
    const totalItems = res.results.total;

    return(
        <PixelManager dataPixel={dataPixel} totalItems={totalItems}/>
    )
}