"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import BtnCreateCatalog from "./catalog-table/button-create-catalog";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";


export default function TiktokCatalogPage() {    
    return(
        <>
            {/* {
                dataPixel.length > 0 ? (
                    <div className="container mx-auto rounded-xl">
                        <Suspense fallback={<DataTableSkeleton columnCount={5} rowCount={10} />}>
                            <DataTable columns={columns} data={dataPixel} placeholder="Facebook" contentBtn="Facebook"/>
                        </Suspense>
                    </div>
                ) : (
                    <> */}

                        <div className="w-full h-auto flex flex-row justify-between items-center mb-3">
                            <div>
                                <Select>
                                    <SelectTrigger className="w-auto h-[28px] gap-1">
                                        <SelectValue 
                                            placeholder="Bùi Long Cường" 
                                            className="font-[500] text-[13px] leading-[17px] text-[#303030] font-sans"
                                        />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="apple">Log out</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                {/* <select name="" id="">
                                    <option value="">Bùi Long Cường</option>
                                </select> */}
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
                            <BtnCreateCatalog content="Tiktok"/>
                        </div>
                        <div className="w-[918px] h-[374px] mt-3 border rounded-xl p-4 flex justify-center items-start">
                            <div className="flex-col items-center text-center">
                                <img loading="lazy" src="https://d3p7e4b35qbbpe.cloudfront.net/images/no-data-two.jpg" alt="" style={{width: '200px', height: '200px'}}/>
                                <p className="font-[650] text-[16px] leading-[17px] text-[#303030] font-sans">No records found</p>
                                <p className="font-[500] text-[13px] leading-[17px] text-[#303030] font-sans mt-2">Try changing the filters or search term</p>
                            </div>
                        </div>
                    {/* </>
                )
            } */}
        </>
    )
}