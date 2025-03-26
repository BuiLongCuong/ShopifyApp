"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type Props = {
    content: string;
}

function BtnCreateCatalog({content}: Props) {
    const router = useRouter();

    const routerCreatePixel = () => {
        router.push("/catalog-manager/catalog-dashboard/new");
    }
    return ( 
        <>
            <Button 
                className="w-auto h-[32px] flex items-center font-[500] text-[13px] leading-[17px] font-sans"
                onClick={routerCreatePixel}
            >
                Create {content} catalog
            </Button>
        </>
     );
}

export default BtnCreateCatalog;