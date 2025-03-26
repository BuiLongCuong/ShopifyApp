'use client';

import { useEffect, useState } from "react";
import { ICatalog } from "@/types/catalog";
import { getCatalogDetails } from "@/services/catalog/catalog.service";
import CatalogForm from "./catalog-form";
import { IPixel } from "@/types/pixel";
import { getAllPixels } from "@/services/pixel/pixel.service";

type ICatalogFormPageProps = {
    catalogId: string;
}

export default function CatalogFormPage({catalogId} : ICatalogFormPageProps) {
    const [pageTitle, setPageTitle] = useState<string>('Create Catalog');
    const [catalogDetails, setCatalogDetails] = useState<ICatalog | null>(null);
    const [dataPixel, setDataPixel] = useState<IPixel[]>([]);
    const [totalItems, setTotalItems] = useState<number>(0);

    useEffect(() => {
        if (catalogId !== 'new') {
            getCatalogDetails(Number(catalogId))
                .then((res) => {
                    setCatalogDetails(res);
                    setPageTitle('Edit Catalog');
                })
                .catch((error) => console.error("Error fetching catalog details:", error));
        }

        if(catalogId === 'new') {
            getAllPixels()
                .then((res) => {
                    setDataPixel(res.results.data);
                    setTotalItems(res.results.total);
                })
                .catch((error) => console.error("Error fetching pixel list:", error));
        }
    }, [catalogId]);

    return <CatalogForm initialData={catalogDetails} pageTitle={pageTitle} dataPixel={dataPixel} totalItems={totalItems}/>;
}
