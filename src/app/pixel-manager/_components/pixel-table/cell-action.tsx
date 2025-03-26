'use-client';

import { IPixel } from "@/types/pixel";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { toast } from 'sonner';
import { deletePixel } from "@/services/pixel/pixel.service";
import { useRouter } from "next/navigation";

type ICellAction = {
    data: IPixel;
}

export default function CellAction({data} : ICellAction) {
    const router = useRouter();

    const EditIcon = () => (
        <svg viewBox="0 0 20 20" className="w-5 h-5 text-gray-200">
          <path fillRule="evenodd" d="M15.655 4.344a2.695 2.695 0 0 0-3.81 0l-.599.599-.009-.009-1.06 1.06.008.01-5.88 5.88a2.75 2.75 0 0 0-.805 1.944v1.922a.75.75 0 0 0 .75.75h1.922a2.75 2.75 0 0 0 1.944-.806l7.54-7.539a2.695 2.695 0 0 0 0-3.81Zm-4.409 2.72-5.88 5.88a1.25 1.25 0 0 0-.366.884v1.172h1.172c.331 0 .65-.132.883-.366l5.88-5.88-1.689-1.69Zm2.75.629.599-.599a1.195 1.195 0 1 0-1.69-1.689l-.598.599 1.69 1.689Z"></path>
        </svg>
    );
      
      const DeleteIcon = () => (
        <svg viewBox="0 0 20 20" className="w-5 h-5 text-gray-200">
          <path d="M11.5 8.25a.75.75 0 0 1 .75.75v4.25a.75.75 0 0 1-1.5 0v-4.25a.75.75 0 0 1 .75-.75Z"></path><path d="M9.25 9a.75.75 0 0 0-1.5 0v4.25a.75.75 0 0 0 1.5 0v-4.25Z"></path>
          <path fillRule="evenodd" d="M7.25 5.25a2.75 2.75 0 0 1 5.5 0h3a.75.75 0 0 1 0 1.5h-.75v5.45c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311c-.642.327-1.482.327-3.162.327h-.4c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311c-.327-.642-.327-1.482-.327-3.162v-5.45h-.75a.75.75 0 0 1 0-1.5h3Zm1.5 0a1.25 1.25 0 1 1 2.5 0h-2.5Zm-2.25 1.5h7v5.45c0 .865-.001 1.423-.036 1.848-.033.408-.09.559-.128.633a1.5 1.5 0 0 1-.655.655c-.074.038-.225.095-.633.128-.425.035-.983.036-1.848.036h-.4c-.865 0-1.423-.001-1.848-.036-.408-.033-.559-.09-.633-.128a1.5 1.5 0 0 1-.656-.655c-.037-.074-.094-.225-.127-.633-.035-.425-.036-.983-.036-1.848v-5.45Z"></path>
        </svg>
    );

    const handleDeletePixel = async () => {
        try {
            await deletePixel(data.id);
            router.refresh();
            toast.success('Delete pixel successfully!');
            router.refresh();
        } catch (error: any) {
            console.error('Error:', error);
            toast.error('Failed to delete pixel!');
            return Promise.reject(error);
        };
    }

    return (
        <>
            <div className="flex flex-row gap-2">
            <button 
                className="w-[28px] h-[28px] flex justify-center items-center rounded-lg border-[#dbdbdb] border hover:bg-[#f5f4f4]"
                onClick={() =>
                    router.push(
                      `/pixel-manager/${data.id}`
                    )
                  }
            ><EditIcon/></button>
            <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <button className="w-[28px] h-[28px] flex justify-center items-center rounded-lg border-[#dbdbdb] border hover:bg-[#f5f4f4]"><DeleteIcon/></button>
                    </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                    <AlertDialogTitle>Delete Confirm</AlertDialogTitle>
                    <AlertDialogDescription className="font-[500] text-[13px] leading-[17px] text-[#303030] font-sans">
                    Are you sure you want to delete pixel <span className="text-red-700">{data.name}</span>
                    </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    {/* <button className="w-[62px] h-[28px] py-[6px] px-[12px] rounded-xl flex justify-center items-center bg-white border">Cancel</button>
                    <button className="w-[62px] h-[28px] py-[6px] px-[12px] bg-red-500">Delete</button> */}
                        <AlertDialogCancel className="w-[62px] h-[28px] py-[6px] px-[12px] font-[500] text-[13px] leading-[17px] text-[#303030] font-sans shadow-md border-[1px]">Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={handleDeletePixel} className="w-[62px] h-[28px] py-[6px] px-[12px] bg-red-600 font-[500] text-[13px] leading-[17px] text-white font-sans shadow-md border-[1px] border-black hover:bg-red-800">Delete</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
            </div>
        </>
    )
}