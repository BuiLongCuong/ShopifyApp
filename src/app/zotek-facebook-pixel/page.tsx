import { getAllPixels } from "@/services/pixel/pixel.service";
import Dashboard from "./_components";
import { IPixel } from "@/types/pixel";

export default async function ZotekFacebookPixel() {
    const res = await getAllPixels();
    const dataPixel: IPixel[] = res.results.data;
    const totalItems = res.results.total;
    
    return(
        <>
        <Dashboard dataPixel={dataPixel} totalItems={totalItems}/>
        </>
    )
}