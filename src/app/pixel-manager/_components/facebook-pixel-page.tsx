// "use client";

import { DataTableSkeleton } from "@/components/ui/table/data-table-skeleton";
import { getAllPixels } from "@/services/pixel/pixel.service";
import { IPixel } from "@/types/pixel";
import { Suspense } from "react";
import { DataTable } from "./pixel-table/data-table";
import { columns } from "./pixel-table/columns";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import BtnCreatePixel from "./pixel-table/button-create-pixel";

export default async function FBPixelPage() {
    const res = await getAllPixels();
    const dataPixel: IPixel[] = res.results.data;
    const totalItems = res.results.total;
    
    return(
        <>
            {
                dataPixel.length > 0 ? (
                    <div className="container mx-auto rounded-xl">
                        <Suspense fallback={<DataTableSkeleton columnCount={5} rowCount={10} />}>
                            <DataTable columns={columns} data={dataPixel} placeholder="Facebook" contentBtn="Facebook"/>
                        </Suspense>
                    </div>
                ) : (
                    <>
                        <div className="flex items-center justify-between gap-5">
                            <div className="flex-1 h-[32px] relative flex items-center">
                                <Search className="absolute left-3 text-gray-400 w-4 h-4" />
                                <Input
                                placeholder="Search Facebook pixel name"
                                className="pl-10 flex-1 outline-none"
                                />
                            </div>
                            {/* <Button 
                                className="w-[153.46px] h-[32px] flex items-center font-[500] text-[13px] leading-[17px] font-sans"
                                onClick={routerCreatePixel}
                            >
                                Create Facebook Pixel
                            </Button> */}
                            <BtnCreatePixel content="Facebook"/>
                        </div>
                        <div className="w-[918px] h-[374px] mt-6 border rounded-xl p-4 flex justify-center items-start">
                            <div className="flex-col items-center text-center">
                                <img loading="lazy" src="https://d3p7e4b35qbbpe.cloudfront.net/images/no-data-two.jpg" alt="" style={{width: '200px', height: '200px'}}/>
                                <p className="font-[650] text-[16px] leading-[17px] text-[#303030] font-sans">No records found</p>
                                <p className="font-[500] text-[13px] leading-[17px] text-[#303030] font-sans mt-2">Try changing the filters or search term</p>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
}