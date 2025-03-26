"use client";

import { ChevronDown, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import BtnCreateCatalog from "./catalog-table/button-create-catalog";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ICatalog } from "@/types/catalog";
import { Suspense } from "react";
import { DataTableSkeleton } from "@/components/ui/table/data-table-skeleton";
import { DataTable } from "./catalog-table/data-table";
import { columns } from "./catalog-table/columns";


type IFBCatalogPageProps = {
    name: string | null | undefined;
    logOut: () => void;
    dataCatalog: ICatalog[],
    totalItems: number
}

export default function FBCatalogPage({name, logOut, dataCatalog, totalItems} : IFBCatalogPageProps) {    
    return(
        <>
            {
                dataCatalog.length > 0 ? (
                    <>
                        <div className="w-full h-auto flex flex-row justify-between items-center mb-3">
                            <div>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="outline" className="h-[28px] px-3 gap-1 text-[13px] font-medium text-[#303030]">
                                        {name ? name : "Name of User"}
                                        <ChevronDown className="w-4 h-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="center" className="w-[100px]">
                                        <DropdownMenuItem onClick={logOut} className="cursor-pointer h-[28px]">
                                        Log out
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>

                            <div className="flex flex-row justify-center items-center gap-2">
                                <span className="font-[600] text-[14px] leading-[17px] text-[#303030] font-sans">Select Business Account</span>
                                <div>
                                    <Select>
                                        <SelectTrigger className="w-auto h-[32px] gap-1">
                                            <SelectValue placeholder="Business Account" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup defaultValue={"business account"}>
                                                <SelectItem value="business account">Business Account</SelectItem>
                                                <SelectItem value="all business account">All Business Account</SelectItem>
                                                <SelectItem value="zotek official">Zotek Official</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>
                        <div className="container mx-auto rounded-xl mt-2">
                            <Suspense fallback={<DataTableSkeleton columnCount={5} rowCount={10} />}>
                                <DataTable columns={columns} data={dataCatalog} placeholder="Catalog" contentBtn="facebook" hasCreateBtn={true} totalItems={totalItems}/>
                            </Suspense>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="w-full h-auto flex flex-row justify-between items-center mb-3">
                            <div>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="outline" className="h-[28px] px-3 gap-1 text-[13px] font-medium text-[#303030]">
                                        {name ? name : "Name of User"}
                                        <ChevronDown className="w-4 h-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="center" className="w-[100px]">
                                        <DropdownMenuItem onClick={logOut} className="cursor-pointer h-[28px]">
                                        Log out
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>

                            <div className="flex flex-row justify-center items-center gap-2">
                                <span className="font-[600] text-[14px] leading-[17px] text-[#303030] font-sans">Select Business Account</span>
                                <div>
                                    <Select>
                                        <SelectTrigger className="w-auto h-[32px] gap-1">
                                            <SelectValue placeholder="Business Account" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup defaultValue={"business account"}>
                                                <SelectItem value="business account">Business Account</SelectItem>
                                                <SelectItem value="all business account">All Business Account</SelectItem>
                                                <SelectItem value="zotek official">Zotek Official</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between gap-5">
                            <div className="flex-1 h-[32px] relative flex items-center">
                                <Search className="absolute left-3 text-gray-400 w-4 h-4" />
                                <Input
                                placeholder="Search Catalog name"
                                className="pl-10 flex-1 outline-none"
                                />
                            </div>
                            {/* <Button 
                                className="w-[153.46px] h-[32px] flex items-center font-[500] text-[13px] leading-[17px] font-sans"
                                onClick={routerCreatePixel}
                            >
                                Create Facebook Pixel
                            </Button> */}
                            <BtnCreateCatalog content="Facebook"/>
                        </div>
                        <div className="w-[918px] h-[374px] mt-3 border rounded-xl p-4 flex justify-center items-start">
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