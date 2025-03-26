import { Suspense } from "react";
import CatalogFormPage from "../_component/catalog-form-page";


export const metaData = {
    title: 'Create New Catalog'
};

type PageProps = {
    params: {
        catalogId?: string;
    }
}

export default function Page({params} : PageProps) {
    if (!params || !params.catalogId) {
        return <div>Loading...</div>;
    }
    
    return ( 
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <CatalogFormPage catalogId={params.catalogId}/>
            </Suspense>
        </>
     );
};