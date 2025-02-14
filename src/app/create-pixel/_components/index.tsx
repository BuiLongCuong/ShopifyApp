"use client";

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { SelectTargetArea } from "./select-target-area"
import { RadioGroupDemo } from "./radio-group"
import { Button } from "@/components/ui/button"
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useRouter } from "next/navigation";
import { FormLabel } from "@/components/ui/form";
import { useFormik } from "formik";
import { createNewPixel } from "@/services/pixel/pixel.service";

export default function CreatePixelPage() {
    const [showTestEvent, setShowTestEvent] = useState<boolean>(false);
    const [selectedValue, setSelectedValue] = useState<string>("entire store");
    const [turnOn, setTurnOn] = useState<boolean>(false);
    const router = useRouter();
    const [statusPixel, setStatusPixel] = useState<boolean>(true);
    

    const formik = useFormik<{
        name: string; 
        pixelId: string; 
        targetArea: string; 
        lstEvents: string;
        status: boolean;
        platform: string;
        mode: string;
        shop: string;
        isActiveCApi: boolean;
        accessTokenFB: string;
        adAccount: string;
    }>({
        initialValues: {
            name: "",
            pixelId: "",
            targetArea: "",
            lstEvents: `{"ViewContent":{"isActive":true,"variant":"variantId","isHasVariant":true},"AddToCart":{"isActive":true,"variant":"variantId","isHasVariant":true},"InitiateCheckout":{"isActive":true,"variant":"variantId","isHasVariant":true},"Purchase":{"isActive":true,"variant":"variantId","isHasVariant":true},"PageView":{"isActive":true,"variant":"variantId","isHasVariant":true},"Search":{"isActive":true,"variant":"variantId","isHasVariant":true},"CollectionView":{"isActive":true,"variant":"variantId","isHasVariant":true},"CartView":{"isActive":true,"variant":"variantId","isHasVariant":true},"AddPaymentInfo":{"isActive":true,"variant":"variantId","isHasVariant":true}}`,
            status: statusPixel,
            platform: 'facebook',
            mode: 'manual',
            shop: 'my-project-test-shop-ify.myshopify.com',
            isActiveCApi: true,
            accessTokenFB: '',
            adAccount: '7367622169381076993'
        },
        onSubmit: async (values) => {
            console.log("Form Values:", values);
            // await createNewPixel(values);
            // router.refresh();
        }
    })

    const handleCloseTestEvent = () => {
        setShowTestEvent(false);
    }

    const handleShowTestEvent = () => {
        setShowTestEvent(true);
    };

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

    const defaultEvents = [
        { id: 1, content: 'viewContent', label: 'ViewContent', checked: true },
        { id: 2, content: 'addToCart', label: 'AddToCart', checked: true },
        { id: 3, content: 'initiateCheckout', label: 'InitiateCheckout', checked: true },
        { id: 4, content: 'purchase', label: 'Purchase', checked: true },
      ];
      
      const customEvents = [
        { id: 5, content: 'pageView', label: 'PageView', checked: false },
        { id: 6, content: 'search', label: 'Search', checked: false },
        { id: 7, content: 'collectionView', label: 'CollectionView', checked: false },
        { id: 8, content: 'cartView', label: 'CartView', checked: false },
        { id: 9, content: 'addPaymentInfo', label: 'AddPaymentInfo', checked: false },
      ];

    const [events, setEvents] = useState([...defaultEvents, ...customEvents]);

    const toggleEvent = (id: number) => {
        setEvents((prevEvents) =>
        prevEvents.map((event) =>
            event.id === id ? { ...event, checked: !event.checked } : event
        )
        );
    };
    return(
        <>
            <div className="w-[950px] h-auto flex flex-col mt-10">
                <div className="w-full h-auto flex flex-row justify-start items-center mb-[24px] gap-2">
                    <div className="w-[28px] h-[28px] flex justify-center items-center rounded-lg cursor-pointer hover:bg-[#dbdbdb]" onClick={() => router.push("/pixel-manager")}>
                        <BackIcon/>
                    </div>
                    <span className="font-[650] text-[20px] leading-[17px] text-[#303030] font-sans">Create pixel</span>
                </div>

                <form onSubmit={formik.handleSubmit}>
                <div className="w-full h-auto flex flex-col gap-2 mb-4">
                    <div className="w-full h-auto flex flex-row gap-2">
                        <div className="flex-1 h-[348px] font-[650] text-[14px] leading-[17px] text-[#303030] font-sans">
                            Pixel Config
                        </div>
                        <Card className="flex flex-col w-[667.15px] h-auto px-4 py-5">
                            <div className="flex items-center space-x-3">
                                <Label htmlFor="airplane-mode" className="font-[500] text-[14px] leading-[17px] text-[#303030] font-sans">Status</Label>
                                <Switch 
                                    id="airplane-mode" 
                                    className="h-5" 
                                    checked={statusPixel}
                                    onCheckedChange={(checked) => {
                                        setStatusPixel(checked);
                                        formik.setFieldValue("status", checked);
                                    }}
                                />
                            </div>
                            <div className="w-full flex flex-row gap-3 mt-3">
                                <div className="flex items-center space-x-2">
                                    <input name="pixel_input" value="manual" id="manual" type="radio" defaultChecked/>
                                    <span className="font-[500] text-[14px] leading-[17px] text-[#303030] font-sans">Manual input pixel</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <input name="pixel_input" value="auto" id="auto" type="radio"/>
                                    <span className="font-[500] text-[14px] leading-[17px] text-[#303030] font-sans">Auto input pixel</span>
                                </div>   
                            </div>
                            <div className="mt-7 mb-5 flex flex-col gap-2">
                                {/* <FormLabel requiredLabel>Title</FormLabel> */}
                                <span className="font-[500] text-[14px] leading-[17px] text-[#303030] font-sans">Pixel Name *</span>
                                <Input 
                                    type="text" 
                                    placeholder="Pixel Name facilitate easier pixel management" 
                                    className="h-[32px] font-[500] text-[12px] leading-[15px] text-[#303030] font-sans rounded-lg"
                                    id="name"
                                    name="name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </div>
                            <div className="mb-5">
                                {/* <FormLabel requiredLabel>Facebook Pixel ID</FormLabel>  */}
                                <span className="font-[500] text-[14px] leading-[17px] text-[#303030] font-sans">Facebook Pixel ID * </span> &nbsp;
                                <span><a href="https://youtu.be/0X8ec55G-Lk?si=CSzgXbKo7iFQayrQ" className="font-[400] text-[14px] leading-[17px] font-sans text-blue-700 underline">How to get it?</a></span>
                                <Input 
                                    type="text" 
                                    placeholder="Pixel Name facilitate easier pixel management" 
                                    className="h-[32px] font-[500] text-[12px] leading-[15px] text-[#303030] font-sans rounded-lg"
                                    id="pixelId"
                                    name="pixelId"
                                    value={formik.values.pixelId}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="font-[500] text-[14px] leading-[17px] text-[#303030] font-sans">Target Area</span>
                                <select 
                                    name="targetArea" 
                                    id="targetArea" 
                                    className="h-[32px] rounded-lg font-[500] text-[14px] leading-[15px] text-[#303030] font-sans pl-[7px] border-black"
                                    defaultValue={"entire store"}
                                    value={formik.values.targetArea}
                                    onChange={formik.handleChange}
                                >
                                    <option value="entire store">Entire Store</option>
                                    <option value="collections">Collections</option>
                                    <option value="products">Products</option>
                                </select>
                            </div>
                        </Card>
                    </div>


                    <div className="w-full h-auto flex flex-row gap-6 mt-3">
                        <div className="flex-1 w-full h-[209.6px] flex flex-col justify-start items-start gap-3">
                            <div className="w-full h-[20px] flex flex-row gap-2 items-center">
                                <div className="font-[700] text-[15px] leading-[17px] text-[#303030] font-sans">Server side config</div>
                                <div className="w-[122.21px] h-[20px] py-[2px] px-[8px] bg-[#D5EBFF] rounded-lg flex items-center justify-center font-[500] text-[12px] leading-[17px] text-[#00335A] font-sans">highly recommend</div>
                            </div>
                            <div className="font-[400] text-[14px] leading-[17px] text-[#303030] font-sans">
                                Track every customer action seamlessly with server-side APIs, 
                                <strong> bypassing IOS 14 </strong>and <strong>ad-blocker </strong>limitations. Ensure 
                                <strong> maximum event accuracy </strong>
                                <strong>and minimize missed data</strong> effortlessly
                            </div>
                        </div>


                        <Card className="flex flex-col w-[667.15px] h-auto p-4 mb-3">
                            <div className="w-full h-[28px] flex flex-row justify-between items-center">
                                <div className="flex flex-row items-center gap-2">
                                    <div className="font-[500] text-[13px] leading-[17px] text-[#303030] font-sans">Conversion API enable</div>
                                    <div className={`w-[34.08px] h-[20px] py-[2px] px-[8px]  rounded-lg flex items-center justify-center font-[500] text-[13px] leading-[17px] ${turnOn ? "bg-[#4BFED2]" : "bg-[#0000000F]"}`}>{turnOn ? "On" : "Off"}</div>
                                    <div className="mb-2">
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                <span tabIndex={0}>
                                                    <WarningIcon/>
                                                </span>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>A solution for enhancing tracking events</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </div>
                                </div>

                                <Button variant="outline" type="button" onClick={() => setTurnOn(!turnOn)} className="w-auto h-[28px] mb-1 font-[500] text-[13px] leading-[17px] text-[#303030] font-sans shadow-md border-gray-200 ">
                                    {turnOn ? "Turn off" : "Turn on"}
                                </Button>
                            </div>


                            <div className="flex flex-col gap-2 mt-4">
                                <div className="flex flex-row items-center gap-2">
                                    <span className={`font-[700] text-[14px] leading-[17px] font-sans ${turnOn ? "text-[#303030]" : "text-[#B5B5B5]"}`}>Facebook Access Token {turnOn ? "*" : ""}</span>
                                    {
                                        turnOn && (
                                            <span><a href="https://youtu.be/zvoA7aWwai0?si=JenKY4IaUG0xBpaG" className="font-[400] text-[14px] leading-[17px] font-sans text-blue-700 underline">How to get it?</a></span>
                                        )
                                    }
                                </div>
                                <Input 
                                    type="text" 
                                    disabled={!turnOn} 
                                    className={`h-[32px] font-[500] text-[12px] leading-[15px] text-[#303030] font-sans rounded-lg ${turnOn ? "bg-white border-#dbdbdb" : "bg-[#0000000F]"}`}
                                    id="accessTokenFB"
                                    name="accessTokenFB"
                                    value={formik.values.accessTokenFB}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </div>

                            {
                                !showTestEvent && (
                                    <div className="mt-4 mb-8">
                                        <span className="text-blue-600">+</span>
                                        <span onClick={handleShowTestEvent} className="font-[500] text-[14px] leading-[17px] text-blue-600 font-sans ml-2 hover:underline hover:cursor-pointer">Test Server Events</span>
                                    </div>
                                )
                            }
                            

                            {
                                showTestEvent && (
                                    <div className="flex flex-col gap-2 mt-4 mb-8">
                                        <div>
                                            <span className={`font-[700] text-[14px] leading-[17px]  font-sans ${turnOn ? "text-[#303030]" : "text-[#B5B5B5]"}`}>Test Event Code</span> &nbsp;
                                            <span><a href="https://youtu.be/-jwGRZuQsrg?si=VeKpdYrIKiKWQHb90" className="font-[400] text-[14px] leading-[17px] font-sans text-blue-700 underline">How to get it?</a></span>
                                        </div>
                                        <Input type="text" disabled={!turnOn} className={`h-[32px] font-[500] text-[12px] leading-[15px] text-[#303030] font-sans rounded-lg ${turnOn ? "bg-white border-#dbdbdb" : "bg-[#0000000F]"}`}/>
                                        <div className="flex flex-row justify-between items-center gap-2">
                                            <p className="font-[600] text-[13px] leading-[17px] text-[#616161] font-sans">Use this if you need to test Server-Side Events. Please remove it after testing. 
                                                <span className="text-red-800"> If you don't remove it, Facebook will not store your events.</span>
                                            </p>
                                            <Button variant="outline" onClick={handleCloseTestEvent} className="w-auto h-[28px] mb-1 font-[500] text-[13px] leading-[17px] font-sans shadow-md border-gray-200 text-red-800">
                                                Delete
                                            </Button>
                                        </div>
                                    </div>
                                )
                            }
                        </Card>
                    </div>


                    <div className="flex gap-3">
                        <div className="flex-1 w-full">
                            <h2 className="font-[700] text-[15px] leading-[17px] text-[#303030] font-sans">Events setting</h2>
                            <p className="font-[400] text-[14px] leading-[17px] text-[#303030] font-sans mt-4">
                            Please select the events you want to send to Facebook.
                            </p>
                        </div>

                        <Card className="p-4 w-[667.15px]">
                            <div>
                                <h3 className="text-md font-semibold mb-2">Default events</h3>
                                {events.slice(0, 4).map((event) => (
                                    <div key={event.id} className="flex items-center space-x-2 mb-5">
                                        <Checkbox 
                                            id={event.content} 
                                            // checked={formik.values.selectedEvents.includes(String(event.id))}
                                            checked={event.checked}
                                            onCheckedChange={() => toggleEvent(event.id)} 
                                        />
                                        <Label htmlFor={event.content} className="cursor-pointer">
                                            {event.label}
                                        </Label>
                                    </div>
                                ))}
                                </div>

                                <div className="mt-4 border-t pt-3">
                                    <h3 className="text-md font-semibold mb-3">Custom events</h3>
                                    {events.slice(4).map((event) => (
                                        <div key={event.id} className="flex items-center space-x-2 mb-5">
                                            <Checkbox 
                                                id={event.content} 
                                                // checked={formik.values.selectedEvents.includes(String(event.id))}
                                                checked={event.checked}
                                                onCheckedChange={() => toggleEvent(event.id)} 
                                            />
                                            <Label htmlFor={event.content} className="cursor-pointer">
                                                {event.label}
                                            </Label>
                                        </div>
                                    ))}
                            </div>
                        </Card>
                    </div>
                </div>
                <Button type="submit">Submit</Button>
                </form>
            </div>
        </>
    )
}