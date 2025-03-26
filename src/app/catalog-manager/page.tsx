import { searchParamsCache } from "@/lib/searchparams";
import CatalogManager from "./_components";
import { SearchParams } from "next/dist/server/request/search-params";

export default function Page({searchParams} : {searchParams : SearchParams}) {
    searchParamsCache.parse(searchParams);
    return(
        <>
        <CatalogManager/>
        </>
    )
}