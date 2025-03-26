import { getAllCatalogs } from "@/services/catalog/catalog.service";
import CatalogDashboard from "./_component/catalog-dashboard";
import { ICatalog } from "@/types/catalog";
import { searchParamsCache } from "@/lib/searchparams";
import { SearchParams } from "next/dist/server/request/search-params";
// import { SessionProvider } from "next-auth/react";

export default async function Page({searchParams} : {searchParams: SearchParams;}) {
    searchParamsCache.parse(searchParams);

    // const page = searchParamsCache.get('page') || 1;
    // const pageLimit = searchParamsCache.get('limit') || 20;
    // const filters = {
    //     page_number: page,
    //     limit: pageLimit,
    // };

    const res = await getAllCatalogs();
    const dataCatalog: ICatalog[] = res.results.data;
    const totalItems = res.results.total;

    

    return(
        <>
            <CatalogDashboard dataCatalog={dataCatalog} totalItems={totalItems}/>
        </>
    )
}