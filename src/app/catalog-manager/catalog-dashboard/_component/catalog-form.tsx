"use client";

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { FormLabel } from "@/components/ui/form";
import { useFormik } from "formik";
import { toast } from "sonner";
import * as Yup from 'yup';
import { ICatalog } from "@/types/catalog";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import { DataTable } from "./catalog-table/data-table";
import { columnsPixel } from "./columns-pixel";
import { IPixel } from "@/types/pixel";
import { createNewCatalog, updateCatalog } from "@/services/catalog/catalog.service";

type ICatalogProps = {
    initialData: ICatalog | null;
    pageTitle: string;
    dataPixel: IPixel[];
    totalItems: number;
}

export default function CatalogForm({initialData, pageTitle, dataPixel, totalItems} : ICatalogProps) { 
    const router = useRouter();
    const [selectedOption, setSelectedOption] = useState("exists");


    console.log(initialData);
    
    const formik = useFormik({
        initialValues: {
            shop: initialData?.shop || "namperdang-store.myshopify.com",
            name: initialData?.name || "",
            catalogIdPlatform: initialData?.catalogIdPlatform || "1988877654871029",
            adAccount: initialData?.adAccount || "",
            adAccountName: initialData?.adAccountName || "",
            productCount: initialData?.productCount || 0,
            feedCount: initialData?.feedCount || 0,
            platform: initialData?.platform || "facebook",
            status: initialData?.status ?? false,
            viewError: initialData?.viewError || "",
            rule: initialData?.rule || "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Tên pixel không được để trống"),
            // pixelId: Yup.string().required("Pixel ID không được để trống"),
            // shop: Yup.string().required("Shop không được để trống"),
        }),
        onSubmit: async (values) => {
            try {
                if(initialData && initialData.id) {
                    await updateCatalog(initialData.id, values);
                    toast.success("Catalog updated successfully!");
                } else {
                    console.log(values);
                    await createNewCatalog(values);
                    toast.success('Create catalog successfully!');
                }
                router.push('/catalog-manager/catalog-dashboard');
                router.refresh();
            } catch (error: any) {
                console.log("Error: ", error);
                toast.error('Failed to create pixel!');
                return Promise.reject(error);
            }
        }
    })

    useEffect(() => {
        if (initialData) {
          formik.setValues({
            shop: initialData?.shop || "",
            name: initialData?.name || "",
            catalogIdPlatform: initialData?.catalogIdPlatform || "",
            adAccount: initialData?.adAccount || "",
            adAccountName: initialData?.adAccountName || "",
            productCount: initialData?.productCount || 0,
            feedCount: initialData?.feedCount || 0,
            platform: initialData?.platform || "facebook",
            status: initialData?.status ?? false,
            viewError: initialData?.viewError || `[{"message":"No connection permission or pixel is wrong."}]`,
            rule: initialData?.rule || "",
          });
        }
    }, [initialData]);

    // useEffect(() => {
    //     if (initialData) {
    //         setStatusPixel(initialData.status ?? false);
    //     }
    // }, [initialData]);

    const BackIcon = () => (
        <svg viewBox="0 0 20 20" className="w-5 h-5 text-gray-200">
            <path fillRule="evenodd" d="M16.5 10a.75.75 0 0 1-.75.75h-9.69l2.72 2.72a.75.75 0 0 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 1 1 1.06 1.06l-2.72 2.72h9.69a.75.75 0 0 1 .75.75Z"></path>
        </svg>
    );

    const WarningIcon = () => (
        <svg
        viewBox="0 0 20 20"
        className="w-5 h-5 text-[rgba(138, 138, 138, 1)] group-hover:#dbdbdb transition-colors duration-200"
    >
        <path d="M10 14a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 1 1.5 0v3.5a.75.75 0 0 1-.75.75Z"></path>
        <path d="M9 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"></path>
        <path
            fillRule="evenodd"
            d="M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
        ></path>
    </svg>
    );

    const dataOption = [
        {
            label: 'Business Account',
            value: '1087858355912399'
        },
        {
            label: 'Zotek Official',
            value: '7397610711872045073'
        },
    ];



    return(
        <>
            <div className="w-[950px] h-auto flex flex-col mt-10">
                <div className="w-full h-auto flex flex-row justify-start items-center mb-[24px] gap-2">
                    <div className="w-[28px] h-[28px] flex justify-center items-center rounded-lg cursor-pointer hover:bg-[#dbdbdb]" onClick={() => router.back()}>
                        <BackIcon/>
                    </div>
                    <span className="font-[650] text-[20px] leading-[17px] text-[#303030] font-sans">{pageTitle}</span>
                </div>

                <form onSubmit={formik.handleSubmit}>
                    <div className="w-full h-auto flex flex-col gap-2 mb-4">
                        
                        <div className="w-full h-auto flex flex-row gap-2">
                            <div className="flex-1 h-auto flex-col items-start justify-center">
                                <div className="font-[650] text-[14px] leading-[17px] text-[#303030] font-sans">Catalog config</div>
                                <div className="font-[400] text-[14px] leading-[17px] text-[#303030] font-sans mt-4">Select existing catalogs in your facebook business account or create a new catalog.</div>
                            </div>
                            {
                                pageTitle === 'Edit Catalog' ? (
                                    <Card className="flex flex-col w-[667.15px] h-[116px] px-4 py-4">
                                        <span 
                                            id="adAccount"
                                            className="font-[500] text-[14px] leading-[17px] text-[#303030] font-sans"
                                        >
                                            Catalog ID: {initialData ? initialData.adAccount : ''}
                                        </span>
                                    
                                        <div className="mt-3 flex flex-col gap-2">
                                            <span className="font-[500] text-[14px] leading-[17px] text-[#303030] font-sans">Catalog name</span>
                                            <Input 
                                                type="text" 
                                                className="h-[32px]" 
                                                id="name" 
                                                name="name"
                                                value={formik.values.name}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                        </div>
                                    </Card>
                                ) : (
                                    <Card className="flex flex-col w-[667.15px] h-[195px] px-4 py-5">
                                        <div className="flex flex-col gap-2">
                                            <span className="font-[500] text-[14px] leading-[17px] text-[#303030] font-sans">Select Business Account</span>
                                            <Select
                                                value={formik.values.adAccount}
                                                onValueChange={(selectedValue) => {
                                                    const selectedLabel = dataOption.find((item) => item.value === selectedValue)?.label || "";

                                                    formik.setFieldValue("adAccount", selectedValue);
                                                    formik.setFieldValue("adAccountName", selectedLabel);
                                                }}
                                            >
                                                <SelectTrigger className="w-full h-[32px]">
                                                    <SelectValue placeholder="Business Account" defaultValue={"1087858355912399"}/>
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        {
                                                            dataOption.map((item, index) => (
                                                                <SelectItem value={item.value} key={index}>{item.label}</SelectItem>
                                                            ))
                                                        }
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="w-full flex flex-row gap-3 mt-3">
                                            <div className="flex items-center space-x-2">
                                                <input 
                                                    name="pixel_input" 
                                                    value="exists" 
                                                    id="exists" 
                                                    type="radio" 
                                                    className="cursor-pointer" 
                                                    checked={selectedOption === 'exists'}
                                                    onChange={(e) => setSelectedOption(e.target.value)}
                                                    defaultChecked
                                                />
                                                <span className="font-[500] text-[14px] leading-[17px] text-[#303030] font-sans">Catalog exists on facebook</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <input 
                                                    name="pixel_input" 
                                                    value="new" 
                                                    id="new" 
                                                    type="radio" 
                                                    checked={selectedOption === 'new'}
                                                    onChange={(e) => setSelectedOption(e.target.value)}
                                                    className="cursor-pointer"
                                                />
                                                <span className="font-[500] text-[14px] leading-[17px] text-[#303030] font-sans">Create new catalog</span>
                                            </div>   
                                        </div>

                                        {
                                            selectedOption === 'exists' ? (
                                                <div className="mt-3 flex flex-col gap-2">
                                                    <span className="font-[500] text-[14px] leading-[17px] text-[#303030] font-sans">Select Business Account</span>
                                                    <Select>
                                                        <SelectTrigger className="w-full h-[32px]">
                                                            <SelectValue placeholder="Zotek Official" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectGroup>
                                                                <SelectItem value="entire store">Entire Store</SelectItem>
                                                                <SelectItem value="collections">Collections</SelectItem>
                                                                <SelectItem value="products">Products</SelectItem>
                                                            </SelectGroup>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            ) : (
                                                <div className="mt-3 flex flex-col gap-2">
                                                    <span className="font-[500] text-[14px] leading-[17px] text-[#303030] font-sans">Catalog name</span>
                                                    <Input 
                                                        type="text" 
                                                        className="h-[32px]" 
                                                        id="name" 
                                                        name="name"
                                                        value={formik.values.name}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                    />
                                                </div>
                                            )
                                        }

                                    </Card>
                                )
                            }

                        </div>


                        <div className="w-full h-auto flex flex-row gap-6 mt-3">
                            <div className="flex-1 w-full h-[182px] flex flex-col justify-start items-start gap-3">
                                <div className="w-full h-[20px] flex flex-row gap-2 items-center">
                                    <div className="font-[700] text-[15px] leading-[17px] text-[#303030] font-sans">Connect pixel to tracking
                                    </div>
                                </div>
                                <div className="font-[400] text-[14px] leading-[17px] text-[#303030] font-sans">
                                    Connect a Pixel to track the products people are interacting with on your website. You can only connect to pixels you have permission to manage.
                                </div>
                            </div>

                                
                            {
                                (dataPixel.length > 0) ? (
                                    <>
                                        <Card className="flex flex-col w-[667.15px] h-auto p-4 mb-3">
                                            <DataTable columns={columnsPixel} data={dataPixel} placeholder="" contentBtn="" hasCreateBtn={false} totalItems={totalItems}/>
                                        </Card>
                                    </>
                                ) : (
                                    <Card className="p-4 w-[667.15px] h-[444px]">
                                        <div className="flex-1 h-[32px] relative flex items-center">
                                            <Search className="absolute left-3 text-gray-400 w-4 h-4" />
                                            <Input
                                            placeholder=""
                                            className="pl-10 flex-1 outline-none"
                                            />
                                        </div>
                                        <div className="w-[635.15px] h-[372px] mt-2 border rounded-xl p-4 flex justify-center items-start">
                                            <div className="flex-col items-center text-center">
                                                <img loading="lazy" src="https://d3p7e4b35qbbpe.cloudfront.net/images/no-data-two.jpg" alt="" style={{width: '200px', height: '200px'}}/>
                                                <p className="font-[650] text-[16px] leading-[17px] text-[#303030] font-sans">No records found</p>
                                                <p className="font-[500] text-[13px] leading-[17px] text-[#303030] font-sans mt-2">Try changing the filters or search term</p>
                                            </div>
                                        </div>
                                    </Card>
                                )
                            }
                            
                        </div>


                        <div className="flex gap-3">
                            <div className="flex-1 w-full h-[444px]">
                                <h2 className="font-[700] text-[15px] leading-[17px] text-[#303030] font-sans">Connect product feed</h2>
                                <p className="font-[400] text-[14px] leading-[17px] text-[#303030] font-sans mt-4">
                                    Connecting a product feed lets you quickly add items to your catalog, but only feeds created with our app can be chosen.
                                </p>
                            </div>

                            <Card className="p-4 w-[667.15px] h-[444px]">
                                <div className="flex-1 h-[32px] relative flex items-center">
                                    <Search className="absolute left-3 text-gray-400 w-4 h-4" />
                                    <Input
                                    placeholder=""
                                    className="pl-10 flex-1 outline-none"
                                    />
                                </div>
                                <div className="w-[635.15px] h-[372px] mt-2 border rounded-xl p-4 flex justify-center items-start">
                                    <div className="flex-col items-center text-center">
                                        <img loading="lazy" src="https://d3p7e4b35qbbpe.cloudfront.net/images/no-data-two.jpg" alt="" style={{width: '200px', height: '200px'}}/>
                                        <p className="font-[650] text-[16px] leading-[17px] text-[#303030] font-sans">No records found</p>
                                        <p className="font-[500] text-[13px] leading-[17px] text-[#303030] font-sans mt-2">Try changing the filters or search term</p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>

                    

                    <div className="flex justify-end mb-6">
                        <Button type="submit">Submit</Button>
                    </div>
                </form>

                <div className="flex justify-center items-center font-[400] text-[15px] leading-[17px] text-[#303030] font-sans mt-4 mb-5">
                    Learn more about&nbsp;<a className="text-[blue] underline" href="https://zotek.gitbook.io/facebook-multiple-pixel/getting-started/catalog-manager"> Catalog manager</a>
                </div>
            </div>
        </>
    )
}