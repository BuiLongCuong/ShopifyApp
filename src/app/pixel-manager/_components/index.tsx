import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, PlusCircle } from "lucide-react";
import { IPixel } from "@/types/pixel";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { DataTableSkeleton } from "@/components/ui/table/data-table-skeleton";
import FBPixelPage from "./facebook-pixel-page";
import TiktokPixelPage from "./tiktok-pixel-page";

type IDashboardProps = {
  dataPixel: IPixel[];
  totalItems: number;
}

export default async function PixelManager({dataPixel, totalItems} : IDashboardProps) {

  const helpfulCards = [
    {
      title: "Meta Pixel Helper Event Display Limitation",
      description: "Meta Pixel Helper only tracks browser events, leading to the omission of InitiateCheckout & Purchase Event"
    },
    {
      title: "The importance of Conversion API",
      description: "Conversion API helps bypass iOS 14 & Ad Blockers when browser tracking fails..."
    },
    {
      title: "Difficulty Locating API Conversion Token",
      description: "Pixels in personal accounts do not have an Access Token to use the Conversion"
    }
  ];

  return (
    <div className="w-[950px] pt-10">
      <h1 className="text-2xl font-semibold mb-6">Pixel Manager</h1>

      <div className="w-[950px] h-auto px-4 py-4 rounded-xl bg-white shadow-md border border-gray-200">
      <Tabs defaultValue="facebook" className="w-full">
        <div className="flex items-center flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        <TabsList>
            <TabsTrigger value="facebook">
                <span className="flex items-center gap-2 font-medium">
                <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-500" viewBox="0 0 512 512">
                    <path fill="#0866ff" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"></path>
                </svg>
                Facebook
                </span>
            </TabsTrigger>
            <TabsTrigger value="tiktok">
                <span className="flex items-center gap-2 font-medium">
                <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-500" viewBox="0 0 512 512">
                    <path fill="black" d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"></path>
                </svg>
                Tiktok
                </span>
            </TabsTrigger>
        </TabsList>
        </div>

        <div className="border-t mt-5"></div>
        <TabsContent value="facebook" className="pt-1">
        {/* <div className="flex items-center justify-between space-x-2">
          <div className="flex-1 h-[32px] relative flex items-center">
              <Search className="absolute left-3 text-gray-400 w-4 h-4" />
              <Input
              placeholder="Search Facebook pixel name"
              className="pl-10 flex-1 outline-none"
              />
          </div>
          <Button className="w-[153.46px] h-[32px] flex items-center font-[500] text-[13px] leading-[17px] font-sans" onClick={routerCreatePixel}>
              Create Facebook Pixel
          </Button>
        </div> */}
          <FBPixelPage/>
        </TabsContent>

        <TabsContent value="tiktok" className="pt-1">
        {/* <div className="flex items-center justify-between space-x-2">
          <div className="flex-1 h-[32px] relative flex items-center">
              <Search className="absolute left-3 text-gray-400 w-4 h-4" />
              <Input
              placeholder="Search Tiktok pixel name"
              className="pl-10 flex-1 outline-none"
              />
          </div>
          <Button className="w-[153.46px] h-[32px] flex items-center font-[500] text-[13px] leading-[17px] font-sans" onClick={routerCreatePixel}>
              Create Tiktok Pixel
          </Button>
        </div> */}
          <TiktokPixelPage/>
        </TabsContent>
      </Tabs>
      </div>

        <div className="flex items-center w-full mt-6 mb-6">
            <div className="flex-grow border-t border-gray-300"></div>
                <div className="flex items-center bg-transparent px-3">
                    <svg viewBox="0 0 20 20" className="w-5 h-5 text-gray-500">
                    <path d="M13.28 9.03a.75.75 0 0 0-1.06-1.06l-2.97 2.97-1.22-1.22a.75.75 0 0 0-1.06 1.06l1.75 1.75a.75.75 0 0 0 1.06 0l3.5-3.5Z"></path>
                    <path fillRule="evenodd" d="M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"></path>
                    </svg>
                    <p className="ml-1 text-sm font-semibold text-gray-700">
                    It might be helpful for you
                    </p>
                </div>
            <div className="flex-grow border-t border-gray-300"></div>
        </div>



    
      <div className="w-[950px] h-[208px] px-2 py-2 rounded-xl shadow-md border bg-white border-gray-200">
      <div className="grid grid-cols-3 gap-4 p-2">
          {helpfulCards.map((card) => (
            // <Card key={card.title} className="w-[295.33px] h-[176px] flex flex-col justify-center">
            //   <CardHeader>
            //     <CardTitle className="font-[600] text-[14px] leading-[17px] text-[#303030] font-sans">{card.title}</CardTitle>
            //   </CardHeader>
            //   <CardContent>
            //     <p className="font-[400] text-[13px] leading-[17px] text-[#303030] font-sans">{card.description}</p>
            //   </CardContent>
            //   <Button variant="outline" size="sm" className="w-[89.53px] h-[28px] shadow-sm ">Learn more</Button>
            // </Card>

            <div key={card.title} className="w-[295.33px] h-[176px] bg-[#f7f7f7] flex flex-col justify-between p-4 rounded-xl">
                <div className="flex flex-col">
                <div>
                    <p className="font-[600] text-[14px] leading-[17px] text-[#303030] font-sans mb-2">{card.title}</p>
                </div>
                <div className="">
                    <p className="font-[400] text-[13px] leading-[17px] text-[#303030] font-sans">{card.description}</p>
                </div>
                </div>
                <Button variant="outline" size="sm" className="w-[89.53px] h-[28px] font-[500] text-[13px] leading-[17px] text-[#303030] font-sans shadow-md border border-gray-200">Learn more</Button>
                
            </div>
          ))}
        </div>
        </div>

        <div className="flex justify-center items-center font-[400] text-[15px] leading-[17px] text-[#303030] font-sans mt-7 mb-10">
            Learn more about&nbsp;<a className="text-[blue] underline" href="https://zotek.gitbook.io/facebook-multiple-pixel/getting-started/get-your-pixels-ready"> Pixel</a>
        </div>
      
    </div>
  );
}


