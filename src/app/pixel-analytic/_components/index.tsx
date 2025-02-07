'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuLabel, DropdownMenuRadioItem, DropdownMenuRadioGroup } from "@/components/ui/dropdown-menu";
import { CalendarIcon, RefreshCw, ChevronDown, ChevronUp, ShoppingCart, Eye, CreditCard, Package, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import App from "@/components/ui/date-picker-antd";
import { DatePickerWithRange } from "@/components/ui/date-picker";
import { Component } from "@/components/chart-component";
import { motion } from "framer-motion";




export default function AnalyticsDashboard() {
    const [position, setPosition] = useState<string>("Facebook");

    const PageViewIcon = () => (
        <svg viewBox="0 0 20 20" className="w-5 h-5 text-gray-200">
          <path d="M6.75 6a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5Z"></path>
          <path d="M6.75 9a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5Z"></path>
          <path d="M6.75 12a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5Z"></path>
          <path d="M12 6.75a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"></path>
          <path d="M12 9.75a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"></path>
          <path fillRule="evenodd" d="M7.586 3.5c.87 0 1.714.273 2.414.771a4.164 4.164 0 0 1 2.414-.771h2.336c.966 0 1.75.784 1.75 1.75v9.5a1.75 1.75 0 0 1-1.75 1.75h-.238a9.25 9.25 0 0 0-3.161.557l-1.095.398a.75.75 0 0 1-.493.007l-1.46-.487a9.25 9.25 0 0 0-2.926-.475h-.127a1.75 1.75 0 0 1-1.75-1.75v-9.5c0-.966.784-1.75 1.75-1.75h2.336Zm-2.586 1.75a.25.25 0 0 1 .25-.25h2.336c.608 0 1.194.208 1.664.584v10.125l-.473-.157a10.75 10.75 0 0 0-3.4-.552h-.127a.25.25 0 0 1-.25-.25v-9.5Zm5.75 10.43v-10.096a2.664 2.664 0 0 1 1.664-.584h2.336a.25.25 0 0 1 .25.25v9.5a.25.25 0 0 1-.25.25h-.238a10.75 10.75 0 0 0-3.674.647l-.088.032Z"></path>
        </svg>
    );

    const ViewContentIcon = () => (
        <svg viewBox="0 0 20 20" className="w-5 h-5 text-gray-200">
            <path d="M12 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>
            <path fillRule="evenodd" d="M7.42 3.5h5.16c.535 0 .98 0 1.345.03.38.03.736.098 1.073.27a2.75 2.75 0 0 1 1.202 1.202c.172.337.24.693.27 1.073.03.365.03.81.03 1.345v1.91c0 .535 0 .98-.03 1.345-.03.38-.098.736-.27 1.073a2.751 2.751 0 0 1-1.201 1.202c-.338.172-.694.24-1.074.27-.365.03-.81.03-1.345.03h-5.16c-.535 0-.98 0-1.345-.03-.38-.03-.736-.098-1.073-.27a2.75 2.75 0 0 1-1.202-1.201c-.172-.338-.24-.694-.27-1.074-.03-.365-.03-.81-.03-1.345v-1.91c0-.535 0-.98.03-1.345.03-.38.098-.736.27-1.073a2.75 2.75 0 0 1 1.202-1.202c.337-.172.693-.24 1.073-.27.365-.03.81-.03 1.345-.03Zm-1.223 1.525c-.287.023-.424.065-.514.111a1.25 1.25 0 0 0-.547.547c-.046.09-.088.227-.111.514-.024.296-.025.68-.025 1.253v1.548l.908-1.073a1.75 1.75 0 0 1 2.68.01l2.412 2.894 1.086-1.304a1.75 1.75 0 0 1 2.778.116l.135.192.001-.533v-1.85c0-.572 0-.957-.025-1.253-.023-.287-.065-.424-.111-.514a1.25 1.25 0 0 0-.546-.547c-.091-.046-.228-.088-.515-.111-.296-.024-.68-.025-1.253-.025h-5.1c-.572 0-.957 0-1.253.025Zm-.514 6.589a1.25 1.25 0 0 1-.516-.49l1.886-2.23a.25.25 0 0 1 .383.001l2.38 2.855h-2.366c-.572 0-.957 0-1.253-.025-.287-.023-.424-.065-.514-.111Zm6.867.136h-.365l1.054-1.265a.25.25 0 0 1 .397.017l.751 1.073a1.274 1.274 0 0 1-.07.039c-.09.046-.227.088-.514.111-.296.024-.68.025-1.253.025Z"></path>
            <path d="M4 15.75a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Z"></path>
            <path d="M12.75 15a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z"></path>
        </svg>
      );
      
      const AddToCartIcon = () => (
        <svg viewBox="0 0 20 20" className="w-5 h-5 text-gray-200">
        <path fillRule="evenodd" d="M2.5 3.75a.75.75 0 0 1 .75-.75h1.612a1.75 1.75 0 0 1 1.732 1.5h9.656a.75.75 0 0 1 .748.808l-.358 4.653a2.75 2.75 0 0 1-2.742 2.539h-6.351l.093.78a.25.25 0 0 0 .248.22h6.362a.75.75 0 0 1 0 1.5h-6.362a1.75 1.75 0 0 1-1.738-1.543l-1.04-8.737a.25.25 0 0 0-.248-.22h-1.612a.75.75 0 0 1-.75-.75Zm4.868 7.25h6.53a1.25 1.25 0 0 0 1.246-1.154l.296-3.846h-8.667l.595 5Z"></path>
        <path d="M10 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
        <path d="M15 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
        </svg>
      );
      
      const InitiateCheckoutIcon = () => (
        <svg viewBox="0 0 20 20" className="w-5 h-5 text-gray-200">
            <path d="M8 7.5a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z"></path>
            <path d="M8.75 9.75a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z"></path><path fillRule="evenodd" d="M2.5 5.75a2 2 0 0 1 2-2h8.5a2 2 0 0 1 2 2v7.5h2a.75.75 0 0 1 .75.75v1.5a2.25 2.25 0 0 1-2.25 2.25h-7.75a2.75 2.75 0 0 1-2.75-2.75v-4.75h-1.75a.75.75 0 0 1-.75-.75v-3.75Zm5.25 10.5c.69 0 1.25-.56 1.25-1.25v-1a.75.75 0 0 1 .75-.75h3.75v-7.5a.5.5 0 0 0-.5-.5h-6.563a1.982 1.982 0 0 1 .063.5v9.25c0 .69.56 1.25 1.25 1.25Zm2.75-1.5v.25c0 .45-.108.875-.3 1.25h5.3a.75.75 0 0 0 .75-.75v-.75h-5.75Zm-6.5-9a.5.5 0 0 1 .498-.5h.002a.5.5 0 0 1 .5.5v3h-1v-3Z"></path>
        </svg>
      );
      
      const PurchaseIcon = () => (
        <svg viewBox="0 0 20 20" className="w-5 h-5 text-gray-200">
            <path d="M9.5 6.5a.75.75 0 0 1 1.5 0v.25h.75a.75.75 0 0 1 0 1.5h-2.25a.5.5 0 0 0 0 1h1a2 2 0 1 1 0 4v.25a.75.75 0 0 1-1.5 0v-.25h-.75a.75.75 0 0 1 0-1.5h2.25a.5.5 0 0 0 0-1h-1a2 2 0 1 1 0-4v-.25Z"></path>
            <path fillRule="evenodd" d="M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"></path>
        </svg>
      );
      
      const CollectionViewIcon = () => (
        <svg viewBox="0 0 20 20" className="w-5 h-5 text-gray-200">
            <path d="M11.5 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path><path fillRule="evenodd" d="M7.517 4.098a3.75 3.75 0 0 1 2.652-1.098h2.081a2.75 2.75 0 0 1 2.75 2.75v2.289a3.25 3.25 0 0 1-.952 2.298l-4.206 4.206a2.5 2.5 0 0 1-3.536 0l-2.672-2.672a2.75 2.75 0 0 1 0-3.89l3.883-3.883Zm2.652.402a2.25 2.25 0 0 0-1.591.659l-3.883 3.883a1.25 1.25 0 0 0 0 1.768l2.672 2.672a1 1 0 0 0 1.414 0l4.206-4.206a1.75 1.75 0 0 0 .513-1.237v-2.289c0-.69-.56-1.25-1.25-1.25h-2.081Z"></path>
            <path d="M16.75 5.5a.75.75 0 0 1 .75.75v3.029a3.25 3.25 0 0 1-.968 2.313l-4.755 4.692a.75.75 0 1 1-1.054-1.068l4.756-4.692a1.75 1.75 0 0 0 .521-1.245v-3.029a.75.75 0 0 1 .75-.75Z"></path>
        </svg>
      );

      const ExportDataIcon = () => (
        <svg viewBox="0 0 20 20" className="w-5 h-5 text-gray-200">
            <path d="M10.75 12.75a.75.75 0 0 1-1.5 0v-6.69l-1.72 1.72a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06l-1.72-1.72v6.69Z"></path>
            <path d="M16.5 13.75a.75.75 0 0 0-1.5 0v.76a.75.75 0 0 1-.75.75h-8.5a.75.75 0 0 1-.75-.75v-.76a.75.75 0 0 0-1.5 0v.76a2.25 2.25 0 0 0 2.25 2.25h8.5a2.25 2.25 0 0 0 2.25-2.25v-.76Z"></path>
        </svg>
      );

      const ResfreshIcon = () => (
        <svg viewBox="0 0 20 20" className="w-5 h-5 text-gray-200">
          <path d="M3.5 9.25a.75.75 0 0 0 1.5 0 3 3 0 0 1 3-3h6.566l-1.123 1.248a.75.75 0 1 0 1.114 1.004l2.25-2.5a.75.75 0 0 0-.027-1.032l-2.25-2.25a.75.75 0 1 0-1.06 1.06l.97.97h-6.44a4.5 4.5 0 0 0-4.5 4.5Z"></path>
          <path d="M16.5 10.75a.75.75 0 0 0-1.5 0 3 3 0 0 1-3 3h-6.566l1.123-1.248a.75.75 0 1 0-1.114-1.004l-2.25 2.5a.75.75 0 0 0 .027 1.032l2.25 2.25a.75.75 0 0 0 1.06-1.06l-.97-.97h6.44a4.5 4.5 0 0 0 4.5-4.5Z"></path>
        </svg>
      )

      const events = [
        { name: "PageView", icon: PageViewIcon, count: 0 },
        { name: "ViewContent", icon: ViewContentIcon, count: 0 },
        { name: "AddToCart", icon: AddToCartIcon, count: 0 },
        { name: "InitiateCheckout", icon: InitiateCheckoutIcon, count: 0 },
        { name: "Purchase", icon: PurchaseIcon, count: 0 },
        { name: "CollectionView", icon: CollectionViewIcon, count: 0 },
      ];

      const [isOpen, setIsOpen] = useState<boolean>(true);
      

  return (
    <>
  
    <div className="p-6 space-y-4 w-[1236.8px] h-auto">
         
      <div className="flex flex-col items-start justify-center gap-5">
        <h1 className="text-xl font-bold">Analytics</h1>
        <div className="flex gap-2">
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="font-[500] text-[14px] leading-[17px] text-[#303030] font-sans">{position}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Platform</DropdownMenuLabel>
            <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                <DropdownMenuRadioItem value="Facebook" className="font-[500] text-[14px] leading-[17px] text-[#303030] font-sans">Facebook</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Tiktok" className="font-[500] text-[14px] leading-[17px] text-[#303030] font-sans">Tiktok</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
        <Button variant="outline"><CalendarIcon className="mr-2 h-4 w-4" /> Last 7 days</Button>
        <App/>
        <DatePickerWithRange/>
        <Button variant="outline" className="font-[500] text-[14px] leading-[17px] text-[#303030] font-sans"><ResfreshIcon/> Refresh</Button>
        </div>
      </div>

      <div className="p-6 space-y-4 bg-white h-auto rounded-xl">
        <div 
          className="flex justify-end items-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-gray-500">
            {isOpen ? <ChevronUp className="w-4 h-4"/> : <ChevronDown className="w-4 h-4"/>}
          </span>
        </div>
        <div className="flex flex-row justify-between text-sm mt-4 mb-10">
          <div className="font-[500] text-[15px] text-[#303030]">
            View Content to Add To Cart <p className="font-bold">0.00%</p>
          </div>
          <div className="font-[500] text-[15px] text-[#303030]">
            Add To Cart to Initiate Checkout <p className="font-bold">0.00%</p>
          </div>
          <div className="font-[500] text-[15px] text-[#303030]">
            Initiate Checkout to Purchase <p className="font-bold">0.00%</p>
          </div>
        </div>


      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <h4 className="text-sm font-bold">Total Event</h4>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {events.map((event, index) => (
            <Card key={index} className="flex justify-between p-4 bg-[#f1f1f1] shadow-md border border-gray-200">
              <CardContent className="p-0">
                <p className="font-[500] text-[15px] text-[#303030] mb-3">{event.name}</p>
                <p className="font-[500] text-[14px] text-[#303030]">{event.count}</p>
              </CardContent>
              <event.icon />
            </Card>
          ))}
        </div>
      </motion.div>
    </div>

      <Component/>

      <div className="p-6 space-y-4 bg-white h-auto rounded-xl">
        <h4 className="text-sm font-bold">Pixel Report</h4>
        <div className="flex w-full items-center justify-between space-x-2">
            <div className="flex-1 h-[32px] relative flex items-center">
                <Search className="absolute left-3 text-gray-400 w-4 h-4 " />
                <Input
                placeholder="Search pixel name"
                className="pl-10 flex-1 outline-none"
                />
            </div>
            <Button variant="outline" className="w-[112px] h-[32px] shadow-sm border border-gray-200 flex items-center font-[500] text-[13px] leading-[17px] font-sans">
                <ExportDataIcon/>  Export Data
            </Button>
        </div>

            <div className="w-full h-[374px] mt-6 rounded-xl p-4 flex justify-center items-start">
                <div className="flex-col items-center text-center">
                <img src="https://d3p7e4b35qbbpe.cloudfront.net/images/no-data-two.jpg" alt="" style={{width: '200px', height: '200px'}}/>
                <p className="font-[650] text-[16px] leading-[17px] text-[#303030] font-sans">No records found</p>
                <p className="font-[500] text-[13px] leading-[17px] text-[#303030] font-sans mt-2">Try changing the filters or search term</p>
                </div>
            </div>
        </div>

        <div className="flex justify-center items-center font-[400] text-[15px] leading-[17px] text-[#303030] font-sans mt-7">
            <blockquote className="mt-6 mb-6 pl-6 italic font-[400] text-[14px] leading-[17px] text-[#303030] font-sans">
            Please note: The tracking data report will follow the date you have selected. The maximum is the last
            <strong> 60 days. </strong> All times in
            <strong> UTC</strong>
            </blockquote >
        </div>

        <div className="flex justify-center items-center font-[400] text-[15px] leading-[17px] text-[#303030] font-sans">
            Learn more about&nbsp;<a className="text-[blue] underline" href="https://zotek.gitbook.io/facebook-multiple-pixel/getting-started/get-your-pixels-ready"> Analytic</a>
        </div>
    </div>
    </>
  );
}
