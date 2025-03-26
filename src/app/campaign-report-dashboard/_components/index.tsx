'use client';

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Download, BarChart, Eye, DollarSign, ShoppingBag, MousePointer, ChevronUp } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { DatePickerWithRange } from "@/components/ui/date-picker";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { useState } from "react";
import { handleClickCopy } from "@/utils/common.utils";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";


function CampaignReportOpened() {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const FBIcon = () => (
        <svg className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" viewBox="0 0 512 512">
            <path fill="#0866ff" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"></path>
        </svg>
    );

    const TiktokIcon = () => (
        <svg className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" viewBox="0 0 512 512">
            <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"></path>
        </svg>
    );

    const ScheduleIcon = () => (
        <svg viewBox="0 0 20 20" className="w-4 h-4">
            <path fillRule="evenodd" d="M6.515 4.75a2 2 0 0 1 1.985-1.75h3a2 2 0 0 1 1.985 1.75h.265a2.25 2.25 0 0 1 2.25 2.25v7.75a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-7.75a2.25 2.25 0 0 1 2.25-2.25h.265Zm1.985-.25h3a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Zm-1.987 1.73.002.02h-.265a.75.75 0 0 0-.75.75v7.75c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75v-7.75a.75.75 0 0 0-.75-.75h-.265a2 2 0 0 1-1.985 1.75h-3a2 2 0 0 1-1.987-1.77Z"></path>
        </svg>
    );

    const FBIconBlack = () => (
        <svg viewBox="0 0 20 20" className="w-5 h-5">
            <path d="M10 3c-3.866 0-7 3.154-7 7.045 0 3.506 2.544 6.414 5.875 6.955v-4.187h-1.875v-2.186h1.875v-1.666c0-1.895 1.103-2.942 2.79-2.942.808 0 1.653.148 1.653.148v1.86h-.931c-.918 0-1.204.584-1.204 1.182v1.418h2.048l-.327 2.186h-1.72v4.177c3.302-.566 5.816-3.46 5.816-6.945 0-3.89-3.134-7.045-7-7.045Z"></path>
        </svg>
    );

    const ResfreshIcon = () => (
        <svg viewBox="0 0 20 20" className="w-5 h-5 text-gray-200">
          <path d="M3.5 9.25a.75.75 0 0 0 1.5 0 3 3 0 0 1 3-3h6.566l-1.123 1.248a.75.75 0 1 0 1.114 1.004l2.25-2.5a.75.75 0 0 0-.027-1.032l-2.25-2.25a.75.75 0 1 0-1.06 1.06l.97.97h-6.44a4.5 4.5 0 0 0-4.5 4.5Z"></path>
          <path d="M16.5 10.75a.75.75 0 0 0-1.5 0 3 3 0 0 1-3 3h-6.566l1.123-1.248a.75.75 0 1 0-1.114-1.004l-2.25 2.5a.75.75 0 0 0 .027 1.032l2.25 2.25a.75.75 0 0 0 1.06-1.06l-.97-.97h6.44a4.5 4.5 0 0 0 4.5-4.5Z"></path>
        </svg>
    );

    const DashIcon = () => (
        <svg viewBox="0 0 20 20" className="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
            <path fillRule="evenodd" d="M6 10a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z"></path>
        </svg>
    );

    const ExportDataIcon = () => (
        <svg viewBox="0 0 20 20" className="w-5 h-5 text-gray-200">
            <path d="M10.75 12.75a.75.75 0 0 1-1.5 0v-6.69l-1.72 1.72a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06l-1.72-1.72v6.69Z"></path>
            <path d="M16.5 13.75a.75.75 0 0 0-1.5 0v.76a.75.75 0 0 1-.75.75h-8.5a.75.75 0 0 1-.75-.75v-.76a.75.75 0 0 0-1.5 0v.76a2.25 2.25 0 0 0 2.25 2.25h8.5a2.25 2.25 0 0 0 2.25-2.25v-.76Z"></path>
        </svg>
    );

    const SearchIcon = () => (
        <svg viewBox="0 0 20 20" className="w-5 h-5 text-gray-200">
            <path fillRule="evenodd" d="M12.323 13.383a5.5 5.5 0 1 1 1.06-1.06l2.897 2.897a.75.75 0 1 1-1.06 1.06l-2.897-2.897Zm.677-4.383a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"></path>
        </svg>
    );

    const SortIcon = () => (
        <svg viewBox="0 0 20 20" className="w-5 h-5 text-gray-200">
            <path d="M7.75 6.06v7.69a.75.75 0 0 1-1.5 0v-7.69l-1.72 1.72a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 1 1-1.06 1.06l-1.72-1.72Z"></path>
            <path d="M13.75 6.25a.75.75 0 0 0-1.5 0v7.69l-1.72-1.72a.75.75 0 1 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72v-7.69Z"></path>
        </svg>
    );



    const ImpressionsIcon = () => (
        <svg viewBox="0 0 20 20" className="w-5 h-5 text-gray-200">
            <path fill-rule="evenodd" d="M3.5 6.25a2.75 2.75 0 0 1 2.75-2.75h7.5a2.75 2.75 0 0 1 2.75 2.75v4.5a2.75 2.75 0 0 1-2.75 2.75h-1.25v1.5h.75a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h.75v-1.5h-1.25a2.75 2.75 0 0 1-2.75-2.75v-4.5Zm5.5 7.25h2v1.5h-2v-1.5Zm-2.75-8.5c-.69 0-1.25.56-1.25 1.25v3.25h10v-3.25c0-.69-.56-1.25-1.25-1.25h-7.5Zm8.725 6c-.116.57-.62 1-1.225 1h-7.5a1.25 1.25 0 0 1-1.225-1h9.95Z"></path>
        </svg>
    );

    const ClicksIcon = () => (
        <svg viewBox="0 0 20 20" className="w-5 h-5 text-gray-200">
            <path d="M5.75 2.5a1.75 1.75 0 0 0-1.75 1.75v3.5c0 .966.784 1.75 1.75 1.75a.75.75 0 0 0 0-1.5.25.25 0 0 1-.25-.25v-3.5a.25.25 0 0 1 .25-.25h8.5a.25.25 0 0 1 .25.25v3.5a.25.25 0 0 1-.25.25h-.5a.75.75 0 0 0 0 1.5h.5a1.75 1.75 0 0 0 1.75-1.75v-3.5a1.75 1.75 0 0 0-1.75-1.75h-8.5Z"></path>
            <path fillRule="evenodd" d="M9.75 5a2.25 2.25 0 0 0-2.25 2.25v3.58l-.57-.258a1.75 1.75 0 0 0-2.429 1.216l-.07.312a2.25 2.25 0 0 0 .497 1.962l2.456 2.834a1.75 1.75 0 0 0 1.323.604h4.465a1.75 1.75 0 0 0 1.72-1.423l.67-3.523a1.75 1.75 0 0 0-1.267-2.018l-2.295-.612v-2.674a2.25 2.25 0 0 0-2.25-2.25Zm-.75 2.25a.75.75 0 0 1 1.5 0v3.25c0 .34.229.637.557.725l2.851.76a.25.25 0 0 1 .181.288l-.67 3.524a.25.25 0 0 1-.247.203h-4.465a.25.25 0 0 1-.19-.086l-2.456-2.835a.75.75 0 0 1-.165-.654l.07-.312a.25.25 0 0 1 .346-.173l1.63.735a.75.75 0 0 0 1.058-.684v-4.741Z"></path>
        </svg>
    );

    const CtrIcon = () => (
        <svg viewBox="0 0 20 20" className="w-5 h-5 text-gray-200">
            <path d="M4.75 10a5.25 5.25 0 0 1 10.5 0 .75.75 0 0 0 1.5 0 6.75 6.75 0 1 0-6.75 6.75.75.75 0 0 0 0-1.5 5.25 5.25 0 0 1-5.25-5.25Z"></path>
            <path d="M11.537 9.805a.75.75 0 0 0 1.486-.208 3 3 0 1 0-3.492 3.372.75.75 0 0 0 .26-1.478 1.5 1.5 0 1 1 1.746-1.686Z"></path>
            <path d="M11.611 10.973a.5.5 0 0 0-.638.638l2.121 6.01a.5.5 0 0 0 .871.135l1.172-1.558 1.038 1.037a.5.5 0 0 0 .707 0l.353-.353a.5.5 0 0 0 0-.707l-1.037-1.038 1.558-1.172a.5.5 0 0 0-.135-.87l-6.01-2.122Z"></path>
        </svg>
    );

    const CpcIcon = () => (
        <svg viewBox="0 0 20 20" className="w-5 h-5 text-gray-200">
            <path fill-rule="evenodd" d="M6.5 6.25a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-3Zm1.5 2.5v-2h4v2h-4Z"></path>
            <path d="M6.5 11.75a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75Z"></path>
            <path d="M11.25 11a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5Z"></path>
            <path d="M6.5 14a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75Z"></path>
            <path d="M11.25 13.25a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5Z"></path>
            <path fillRule="evenodd" d="M6.75 3a2.75 2.75 0 0 0-2.75 2.75v8.5a2.75 2.75 0 0 0 2.75 2.75h6.5a2.75 2.75 0 0 0 2.75-2.75v-8.5a2.75 2.75 0 0 0-2.75-2.75h-6.5Zm-1.25 2.75c0-.69.56-1.25 1.25-1.25h6.5c.69 0 1.25.56 1.25 1.25v8.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-8.5Z"></path>
        </svg>
    );

    const ReachIcon = () => (
        <svg viewBox="0 0 20 20" className="w-5 h-5 text-gray-200">
            <path d="m8.8 8.69.7-.3v3.11h-1a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-1v-3.5c0-.89-.92-1.5-1.74-1.14l-1.06.44a.75.75 0 0 0 .6 1.38Z"></path>
            <path fillRule="evenodd" d="M10 4a7.63 7.63 0 0 0-5.58 2.53 9.27 9.27 0 0 0-1.77 2.74c-.08.23-.15.49-.15.73s.07.5.15.73c.09.24.21.52.37.82.32.58.79 1.27 1.4 1.92a7.63 7.63 0 0 0 5.58 2.53 7.63 7.63 0 0 0 5.58-2.53 9.26 9.26 0 0 0 1.77-2.74c.08-.23.15-.49.15-.73s-.07-.5-.15-.73a9.27 9.27 0 0 0-1.77-2.74 7.63 7.63 0 0 0-5.58-2.53Zm-6 6 .07-.23a7.77 7.77 0 0 1 1.45-2.21 6.14 6.14 0 0 1 4.48-2.06c1.94 0 3.44.96 4.49 2.06a7.77 7.77 0 0 1 1.44 2.21l.07.23-.07.23a7.77 7.77 0 0 1-1.45 2.21 6.14 6.14 0 0 1-4.48 2.06 6.14 6.14 0 0 1-4.49-2.06 7.77 7.77 0 0 1-1.44-2.21l-.07-.23Z"></path>
        </svg>
    );

    const SpendIcon = () => (
        <svg viewBox="0 0 20 20" className="w-5 h-5 text-gray-200">
            <path fillRule="evenodd" d="M9.621 4h5.258c.395 0 .736 0 1.017.023.297.024.592.078.875.222.424.216.768.56.984.984.144.283.198.578.222.875.023.28.023.622.023 1.017v2.258c0 .395 0 .736-.023 1.017a2.29 2.29 0 0 1-.222.875 2.25 2.25 0 0 1-.983.984c-.284.144-.58.198-.876.222-.28.023-.622.023-1.017.023h-2.58c-.08.083-.169.16-.265.23l-2.73 1.965c-.565.407-.93.67-1.335.859-.358.167-.736.29-1.125.363-.44.083-.889.083-1.586.083h-1.508a.75.75 0 0 1 0-1.5h1.436c.794 0 1.095-.003 1.379-.057.266-.05.524-.134.77-.248.261-.122.508-.296 1.152-.76l2.67-1.923a.423.423 0 0 0-.35-.753l-4.875 1.219a.75.75 0 0 1-.364-1.456l.932-.233v-2.289c-.59.002-.821.011-1.033.062a2.25 2.25 0 0 0-.65.27c-.21.128-.398.31-.943.854l-.594.594a.75.75 0 0 1-1.06-1.06l.654-.655c.46-.46.78-.78 1.16-1.012a3.75 3.75 0 0 1 1.083-.45c.397-.095.813-.103 1.387-.103a6.79 6.79 0 0 1 .019-.396 2.29 2.29 0 0 1 .222-.875 2.25 2.25 0 0 1 .984-.984 2.29 2.29 0 0 1 .875-.222c.28-.023.622-.023 1.017-.023Zm5.229 7h-2.024a1.925 1.925 0 0 0-2.382-1.697l-2.444.611v-1.414h8.5v.85c0 .432 0 .712-.018.924-.017.204-.045.28-.064.317a.75.75 0 0 1-.328.327c-.037.02-.112.047-.316.064-.212.017-.492.018-.924.018Zm1.645-4.5h-8.49c.002-.104.006-.194.013-.274.017-.204.045-.28.064-.316a.75.75 0 0 1 .328-.328c.037-.02.112-.047.316-.064.212-.017.492-.018.924-.018h5.2c.432 0 .712 0 .924.018.204.017.28.045.316.064a.75.75 0 0 1 .328.328c.02.037.047.112.064.316.007.08.01.17.013.274Z"></path>
        </svg>
    );

    const TotalSalesIcon = () => (
        <svg viewBox="0 0 20 20" className="w-5 h-5 text-gray-200">
            <path fill-rule="evenodd" d="M9.755 3.145a1.25 1.25 0 0 1 1.008.015l5.654 2.591a1 1 0 0 1 .583.91v.59a1 1 0 0 1-1 1h-.5v3.749h.25a.75.75 0 0 1 0 1.5h-11.5a.75.75 0 0 1 0-1.5h.25v-3.75h-.5a1 1 0 0 1-1-1v-.584a1 1 0 0 1 .61-.921l6.145-2.6Zm.483 1.425-5.154 2.18h9.911l-4.757-2.18Zm3.762 7.43v-3.75h-1.5v3.75h1.5Zm-5-3.75h2v3.75h-2v-3.75Zm-1.5 3.75v-3.75h-1.5v3.75h1.5Z"></path><path d="M3.5 15.25a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 0 1.5h-11.5a.75.75 0 0 1-.75-.75Z"></path>
        </svg>
    );

    const  OrdersIcon = () => (
        <svg viewBox="0 0 20 20" className="w-5 h-5 text-gray-200">
            <path fill-rule="evenodd" d="M6.976 3.5a2.75 2.75 0 0 0-2.72 2.347l-.662 4.46a8.75 8.75 0 0 0-.094 1.282v1.661a3.25 3.25 0 0 0 3.25 3.25h6.5a3.25 3.25 0 0 0 3.25-3.25v-1.66c0-.43-.032-.858-.095-1.283l-.66-4.46a2.75 2.75 0 0 0-2.72-2.347h-6.05Zm-1.237 2.567a1.25 1.25 0 0 1 1.237-1.067h6.048c.62 0 1.146.454 1.237 1.067l.583 3.933h-2.484a1.25 1.25 0 0 0-1.185.855l-.159.474a.25.25 0 0 1-.237.171h-1.558a.25.25 0 0 1-.237-.17l-.159-.475a1.25 1.25 0 0 0-1.185-.855h-2.484l.583-3.933Zm-.738 5.433-.001.09v1.66c0 .966.784 1.75 1.75 1.75h6.5a1.75 1.75 0 0 0 1.75-1.75v-1.75h-2.46l-.1.303a1.75 1.75 0 0 1-1.66 1.197h-1.56a1.75 1.75 0 0 1-1.66-1.197l-.1-.303h-2.46Z"></path>
        </svg>
    );

    const stats = [
        { title: "Impressions", icon: <ImpressionsIcon/>, titleNote: 'This metric is sourced from Facebook.', desNote: 'This is the number of times your ad has been displayed to users. Each time your ad appears on someone’s screen, it counts as one impression.' },
        { title: "Clicks", icon: <ClicksIcon/> , titleNote: 'This metric is sourced from Facebook.', desNote: 'The number of clicks, taps or swipes on your ads.'},
        { title: "Ctr", icon: <CtrIcon/> , titleNote: 'This metric is sourced from Facebook.', desNote: 'CTR (link click-through rate) indicates how many link clicks your ad received compared to the number of impressions it received.' },
        { title: "Cpc", icon: <CpcIcon/> , titleNote: 'This metric is sourced from Facebook.', desNote: 'CPC (cost per link click) shows how much, on average, each link click costs you.'},
        { title: "Reach", icon: <ReachIcon/> , titleNote: 'This metric is sourced from Facebook.', desNote: 'The number of Accounts Center accounts that saw your ads at least once. Reach is different from impressions, which may include multiple views of your ads by the same Accounts Center accounts.'},
        { title: "Spend", icon: <SpendIcon/> , titleNote: 'This metric is sourced from Facebook.', desNote: "The total amount you've spent on ads during the tracked period." },
        { title: "Total sales over time", icon: <TotalSalesIcon/> , titleNote: 'This metric is sourced from Facebook.', desNote: 'The total revenue from your store within the selected timeframe.'},
        { title: "Orders over time", icon: <OrdersIcon/> , titleNote: 'This metric is sourced from Facebook.', desNote: 'The number of orders from your store within the selected timeframe.'},
    ];

    const handleExport = () => {
        // Dữ liệu mẫu
        const data = [
          { ID: 1, Tên: "Nguyễn Văn A", Tuổi: 25 },
          { ID: 2, Tên: "Trần Thị B", Tuổi: 30 },
          { ID: 3, Tên: "Lê Văn C", Tuổi: 22 },
        ];
    
        // Chuyển đổi JSON thành sheet Excel
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "DanhSach");
    
        // Ghi file Excel vào buffer
        const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    
        // Tạo file Blob và tải xuống
        const file = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
        saveAs(file, "DanhSach.xlsx");
      };

    return (
        <>
            <div className="w-[1236px] h-auto flex flex-col items-center">
                <div className="w-full flex justify-start">
                    <h2 className="text-xl font-semibold my-[24px]">Campaigns Report</h2>
                </div>
                

                <Tabs defaultValue="facebook" className="w-full">
                            <TabsList>
                                <TabsTrigger value="facebook"><FBIcon/><span className="mt-[2px]">Facebook</span></TabsTrigger>
                                <TabsTrigger value="tiktok"><TiktokIcon/><span className="mt-[2px]">Tiktok</span></TabsTrigger>
                            </TabsList>


                            <TabsContent value="facebook"></TabsContent>
                            <TabsContent value="tiktok"></TabsContent>
                </Tabs>

                <div className="w-full border-t border-[#dbdbdb] mb-[6px] mt-2"></div>

                <Card className="flex flex-col w-full h-auto p-4 mb-4 ">
                    <div className="flex flex-row justify-between items-center mb-4">
                        <span className="font-[650] text-[15px] leading-[17px] text-[#303030] font-sans">UTM parameter config guide</span>
                        
                        <div 
                            className="w-[21px] h-[21px] flex justify-center items-center cursor-pointer hover:bg-[#dbdbdb] rounded-xl"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                        <span className="text-gray-500">
                            {isOpen ? <ChevronUp className="w-4 h-4"/> : <ChevronDown className="w-4 h-4"/>}
                        </span>
                        </div>
                    </div>

                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="flex flex-col items-start gap-2">
                        <span className="font-[500] text-[13px] leading-[17px] text-[#303030] font-sans">
                            Step 1: Copy UTM string to put into your Facebook ads
                        </span>
                        <Card className="flex flex-col w-full h-[105.6px] items-start justify-center gap-4 p-4 bg-[#f7f7f7]">
                            <p
                                className="font-[500] text-[13px] leading-[17px] text-[#303030] font-sans"
                            >utm_source=facebook&amp;utm_medium=&#123;&#123;placement&#125;&#125;&amp;utm_content=&#123;&#123;ad.name&#125;&#125;&amp;utm_campaign=&#123;&#123;campaign.name&#125;&#125;&amp;ad_name=&#123;&#123;ad.name&#125;&#125;&amp;adset_name=&#123;&#123;adset.name&#125;&#125;</p>
                            <Button 
                                variant="outline" 
                                className="w-[101px] h-[28px] gap-1 hover:bg-white"
                                onClick={() => {
                                    const text = 'utm_source=facebook&amp;utm_medium=&#123;&#123;placement&#125;&#125;&amp;utm_content=&#123;&#123;ad.name&#125;&#125;&amp;utm_campaign=&#123;&#123;campaign.name&#125;&#125;&amp;ad_name=&#123;&#123;ad.name&#125;&#125;&amp;adset_name=&#123;&#123;adset.name&#125;&#125;'
                                    handleClickCopy(text);
                                }}
                            >
                                <ScheduleIcon/>
                                <span className="font-[500] text-[13px] leading-[17px] text-[#303030] font-sans">
                                    Copy UTM
                                </span>
                            </Button>
                        </Card>
                        <span className="font-[500] text-[13px] leading-[17px] text-[#303030] font-sans">
                            Step 2: Put UTM string to your Facebook ads
                        </span>
                        <span className="font-[500] text-[13px] leading-[17px] text-[#303030] font-sans">
                            Step 3: View the in-app Campaigns Report
                        </span>
                    </div>
                    </motion.div>
                </Card>


                <Card className="flex flex-col w-full h-auto p-4 mb-4 gap-3">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild className="w-[150px]">
                            <Button variant="outline" className="h-[28px] px-3 gap-1 text-[13px] font-medium text-[#303030]">
                            <FBIconBlack/> Bùi Long Cường
                            <ChevronDown className="w-4 h-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="center" className="w-[150px] h-auto">
                            <DropdownMenuItem className="cursor-pointer h-[18px]">
                            Log out
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <div className="flex flex-row gap-4 items-center justify-between">
                        <div className="w-1/2 h-auto flex flex-col items-start justify-center gap-2">
                            <span className="font-[500] text-[13px] leading-[17px] text-[#303030] font-sans">Select Business Account</span>
                            <Select>
                                <SelectTrigger className="w-full h-[32px] gap-1">
                                    <SelectValue placeholder="Business Account" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup defaultValue={"business account"}>
                                        <SelectItem value="business account">Business Account</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>


                        <div className="w-1/2 h-auto flex flex-col items-start justify-center gap-2">
                            <span className="font-[500] text-[13px] leading-[17px] text-[#303030] font-sans">Select Ad Account</span>
                            <Select>
                                <SelectTrigger className="w-full h-[32px] gap-1">
                                    <SelectValue placeholder="Ad Account" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup defaultValue={"ad account"}>
                                        <SelectItem value="ad account">Ad Account</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </Card>

                <div className="w-full h-[32px] flex flex-row justify-start items-center gap-4 mb-4">
                    <DatePickerWithRange className="h-[32px]"/>
                    <Button variant="outline" className="h-[32px] font-[500] text-[14px] leading-[17px] text-[#303030] font-sans"><ResfreshIcon/> Refresh</Button>
                </div>

                <div className="w-full grid grid-cols-4 gap-4">
                    {stats.map(({ title, icon, titleNote, desNote }, index) => (
                        <Card key={index} className="flex flex-col w-[297px] h-[85.6px] gap-2 p-4">
                            <div className="flex justify-between items-center">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                    <span tabIndex={0}>
                                        <span className="font-[650] text-[15px] leading-[17px] text-[#303030] font-sans">{title}</span>
                                    </span>
                                    </TooltipTrigger>
                                    <TooltipContent className="w-[285px] h-auto bg-white text-black border border-[#dbdbdb]">
                                        <p className="font-[650] text-[13px] leading-[17px] text-[#303030] font-sans mb-3">{titleNote}</p>
                                        <p className="font-[500] text-[12px] leading-[17px] text-[#303030] font-sans">{desNote}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            {icon}
                            </div>
                            <div>
                                <p className="font-[500] font-sans">0</p>
                            </div>
                        </Card>
                    ))}
                </div>
                
                <div className="w-full flex justify-start">
                    <Button 
                        variant="outline" 
                        className="w-[112px] h-[32px] gap-1 my-4 shadow-sm border border-gray-200 flex items-center font-[500] text-[13px] leading-[17px] font-sans"
                        onClick={handleExport}
                    >
                        <ExportDataIcon/> Export Data
                    </Button>
                </div>
                


                <Card className="flex flex-col w-full h-auto mb-4 ">
                    <Tabs defaultValue="campaigns">
                        <div className="flex flex-row justify-between items-center border-b border-[#dbdbdb] rounded-tl-xl rounded-tr-xl p-[6px]">
                            <div>
                                <TabsList>
                                <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
                                <TabsTrigger value="adset">Adset</TabsTrigger>
                                <TabsTrigger value="ad">Ad</TabsTrigger>
                                </TabsList>
                            </div>
                            
                            <div className="flex flex-row gap-2">
                                <button className="w-[28px] h-[28px] border-[#dbdbdb] border hover:bg-[#f6f6f6] flex justify-center items-center shadow-sm rounded-lg"><SearchIcon/></button>
                                <button className="w-[28px] h-[28px] border-[#dbdbdb] border hover:bg-[#f6f6f6] flex justify-center items-center shadow-sm rounded-lg"><SortIcon/></button>
                                
                            </div>
                        </div>
                        
                        <TabsContent value="campaigns">
                            <div className="flex flex-col items-center justify-center p-4">
                                <img 
                                    alt="Empty search results" 
                                    src="data:image/svg+xml,%3csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M41.87 24a17.87 17.87 0 11-35.74 0 17.87 17.87 0 0135.74 0zm-3.15 18.96a24 24 0 114.24-4.24L59.04 54.8a3 3 0 11-4.24 4.24L38.72 42.96z' fill='%238C9196'/%3e%3c/svg%3e" 
                                    draggable="false"
                                    className="mb-2"
                                />
                                <p className="text-lg font-semibold">No campaigns found</p>
                                <p className="text-gray-500 mb-3">Try changing the filters or search term</p>
                            </div>
                        </TabsContent>

                        <TabsContent value="adset">
                            <div className="flex flex-col items-center justify-center p-4">
                                <img 
                                    alt="Empty search results" 
                                    src="data:image/svg+xml,%3csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M41.87 24a17.87 17.87 0 11-35.74 0 17.87 17.87 0 0135.74 0zm-3.15 18.96a24 24 0 114.24-4.24L59.04 54.8a3 3 0 11-4.24 4.24L38.72 42.96z' fill='%238C9196'/%3e%3c/svg%3e" 
                                    draggable="false"
                                    className="mb-2"
                                />
                                <p className="text-lg font-semibold">No campaigns found</p>
                                <p className="text-gray-500 mb-3">Try changing the filters or search term</p>
                            </div>
                        </TabsContent>


                        <TabsContent value="ad">
                            <div className="flex flex-col items-center justify-center p-4">
                                <img 
                                    alt="Empty search results" 
                                    src="data:image/svg+xml,%3csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M41.87 24a17.87 17.87 0 11-35.74 0 17.87 17.87 0 0135.74 0zm-3.15 18.96a24 24 0 114.24-4.24L59.04 54.8a3 3 0 11-4.24 4.24L38.72 42.96z' fill='%238C9196'/%3e%3c/svg%3e" 
                                    draggable="false"
                                    className="mb-2"
                                />
                                <p className="text-lg font-semibold">No campaigns found</p>
                                <p className="text-gray-500 mb-3">Try changing the filters or search term</p>
                            </div>
                        </TabsContent>
                    </Tabs>
                </Card>

                <div className="flex justify-center items-center font-[400] text-[15px] leading-[17px] text-[#303030] font-sans mt-4 mb-5">
                    Learn more about&nbsp;<a className="text-[blue] underline" href="https://zotek.gitbook.io/facebook-multiple-pixel/getting-started/boost-performance-campaign"> Campaign report</a>
                </div>
            </div>
        </>
     );
}

export default CampaignReportOpened;