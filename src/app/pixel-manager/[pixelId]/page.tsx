import { Suspense } from "react";
import PixelFormPage from "../_components/pixel-form-page";


export const metaData = {
    title: 'Create New Pixel'
};

type PageProps = {
    params: {
        pixelId?: string;
    }
}

export default function Page({params} : PageProps) {
    if (!params.pixelId) return <div>Loading...</div>;
    
    return ( 
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <PixelFormPage pixelId={params.pixelId}/>
            </Suspense>
        </>
     );
};