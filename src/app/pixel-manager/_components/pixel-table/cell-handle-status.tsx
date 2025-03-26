'use client';

import { Switch } from "@/components/ui/switch";
import { updatePixel } from "@/services/pixel/pixel.service";
import { IPixel } from "@/types/pixel";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from 'sonner';

type ICellHandleStatusProps = {
    data: IPixel;
}

export default function CellHandleStatus({data} : ICellHandleStatusProps) {
    const status = data.status;
    const [isloading, setIsLoading] = useState<boolean>(false);
    const router = useRouter();

    const handleToggleStatus = async () => {
        setIsLoading(true);
        try {
            const currentData = data;

            const updatedData = {
                ...currentData,
                status: !status
            }

            await updatePixel(updatedData.id, updatedData);
            router.refresh();
            toast.success('Updated status successfully!');
        } catch (error:any) {
            console.log("Error: ", error);
            toast.error('Updated status fail !');
        } finally {
            setIsLoading(false);
        }  
    }

    return (
        <Switch 
            id="airplane-mode" 
            className="h-5" 
            checked={status}
            onCheckedChange={handleToggleStatus}
            disabled={isloading}
        />
    )
}