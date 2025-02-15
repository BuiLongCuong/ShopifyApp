"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type Props = {
    content: string;
}

function BtnCreatePixel({content}: Props) {
    const router = useRouter();

    const routerCreatePixel = () => {
        router.push("/create-pixel");
    }
    return ( 
        <>
            <Button 
                className="w-[153.46px] h-[32px] flex items-center font-[500] text-[13px] leading-[17px] font-sans"
                onClick={routerCreatePixel}
            >
                Create {content} Pixel
            </Button>
        </>
     );
}

export default BtnCreatePixel;