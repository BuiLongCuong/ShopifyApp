"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { IPixel } from "@/types/pixel";
import { Description } from "@radix-ui/react-dialog";
import { set } from "date-fns";
import { Info, FileText, PlayCircle } from "lucide-react";
import { useEffect, useState } from "react";

type IDashboardProps = {
  dataPixel: IPixel[];
  totalItems: number;
}

export default function Dashboard({dataPixel, totalItems} : IDashboardProps) {
    const WarningIcon = () => (
        <svg viewBox="0 0 20 20" className="w-5 h-5 text-gray-200">
            <path d="M10 6.75a.75.75 0 0 1 .75.75v3.5a.75.75 0 1 1-1.5 0v-3.5a.75.75 0 0 1 .75-.75Z"></path>
            <path d="M11 13.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path><path fillRule="evenodd" d="M10 3.5c-1.045 0-1.784.702-2.152 1.447a449.26 449.26 0 0 1-2.005 3.847l-.028.052a403.426 403.426 0 0 0-2.008 3.856c-.372.752-.478 1.75.093 2.614.57.863 1.542 1.184 2.464 1.184h7.272c.922 0 1.895-.32 2.464-1.184.57-.864.465-1.862.093-2.614-.21-.424-1.113-2.147-2.004-3.847l-.032-.061a429.497 429.497 0 0 1-2.005-3.847c-.368-.745-1.107-1.447-2.152-1.447Zm-.808 2.112c.404-.816 1.212-.816 1.616 0 .202.409 1.112 2.145 2.022 3.88a418.904 418.904 0 0 1 2.018 3.875c.404.817 0 1.633-1.212 1.633h-7.272c-1.212 0-1.617-.816-1.212-1.633.202-.408 1.113-2.147 2.023-3.883a421.932 421.932 0 0 0 2.017-3.872Z"></path>
        </svg>
    );

    const CloseIcon = () => (
      <svg viewBox="0 0 20 20" className="w-5 h-5 text-gray-200">
        <path d="M12.72 13.78a.75.75 0 1 0 1.06-1.06l-2.72-2.72 2.72-2.72a.75.75 0 0 0-1.06-1.06l-2.72 2.72-2.72-2.72a.75.75 0 0 0-1.06 1.06l2.72 2.72-2.72 2.72a.75.75 0 1 0 1.06 1.06l2.72-2.72 2.72 2.72Z"></path>
      </svg>
    )

    const EysIcon = () => (
      <svg viewBox="0 0 20 20" className="w-6 h-6 text-gray-200">
        <path fillRule="evenodd" d="M13 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-1.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"></path>
        <path fillRule="evenodd" d="M10 4c-2.476 0-4.348 1.23-5.577 2.532a9.266 9.266 0 0 0-1.4 1.922 5.98 5.98 0 0 0-.37.818c-.082.227-.153.488-.153.728s.071.501.152.728c.088.246.213.524.371.818.317.587.784 1.27 1.4 1.922 1.229 1.302 3.1 2.532 5.577 2.532 2.476 0 4.348-1.23 5.577-2.532a9.265 9.265 0 0 0 1.4-1.922 5.98 5.98 0 0 0 .37-.818c.082-.227.153-.488.153-.728s-.071-.501-.152-.728a5.984 5.984 0 0 0-.371-.818 9.269 9.269 0 0 0-1.4-1.922c-1.229-1.302-3.1-2.532-5.577-2.532Zm-5.999 6.002v-.004c.004-.02.017-.09.064-.223a4.5 4.5 0 0 1 .278-.608 7.768 7.768 0 0 1 1.17-1.605c1.042-1.104 2.545-2.062 4.487-2.062 1.942 0 3.445.958 4.486 2.062a7.77 7.77 0 0 1 1.17 1.605c.13.24.221.447.279.608.047.132.06.203.064.223v.004c-.004.02-.017.09-.064.223a4.503 4.503 0 0 1-.278.608 7.768 7.768 0 0 1-1.17 1.605c-1.042 1.104-2.545 2.062-4.487 2.062-1.942 0-3.445-.958-4.486-2.062a7.766 7.766 0 0 1-1.17-1.605 4.5 4.5 0 0 1-.279-.608c-.047-.132-.06-.203-.064-.223Z"></path>
      </svg>
    )

    const StarIcon = () => (
      <svg viewBox="0 0 20 20" className="w-5 h-5 text-gray-200">
        <path d="M11.128 4.123c-.453-.95-1.803-.95-2.256 0l-1.39 2.912-3.199.421c-1.042.138-1.46 1.422-.697 2.146l2.34 2.222-.587 3.172c-.192 1.034.901 1.828 1.825 1.327l2.836-1.54 2.836 1.54c.924.501 2.017-.293 1.825-1.327l-.587-3.172 2.34-2.222c.762-.724.345-2.008-.697-2.146l-3.2-.421-1.389-2.912Z"></path>
      </svg>
    )

    const data = [
      {
        title: 'Enhance Event Tracking',
        description: 'Optimize pixel configuration for enhanced tracking and analysis of user behavior and preferences.',
        src: 'https://d3p7e4b35qbbpe.cloudfront.net/images/enhance.png',
        button: 'Contact us'
      },
      {
        title: 'Documents',
        description: 'Find detailed step-by-step instructions on how to use the features.',
        src: 'https://d3p7e4b35qbbpe.cloudfront.net/images/documents.png',
        button: 'Learn more'
      },
      {
        title: 'Video tutorials',
        description: 'Quickly watch tutorial videos to learn how to use features.',
        src: 'https://d3p7e4b35qbbpe.cloudfront.net/images/tutorials.png',
        button: 'Watch tutorial'
      }
    ];

    const dataPartner = [
      {
        title: 'UpPromote Affiliate Marketing',
        src: "https://cdn.shopify.com/app-store/listing_images/9c2f67b482aeae04937fd544c0bfe6a8/icon/CMjv-JmUpv0CEAE=.png",
        avgVote: 4.9,
        totalVote: 4083,
        description: 'Complete, easy referral & affiliate program app, trusted by top brands & experts for a revenue boost'
      },
      {
        title: 'Navi+ TabBar/Mega Menu Builder',
        src: "https://cdn.shopify.com/app-store/listing_images/9012f6c4203867f311edf8cc53758246/icon/CMbTwpThxYMDEAE=.png",
        avgVote: 5,
        totalVote: 129,
        description: 'AIO Menu Builder for every part of your website: Sticky Navbar, Tab Bar, Mega Menu, Slide Menu, and Grid Menu'
      },
    ];

    const [showAds, setShowAds] = useState<boolean>(true);
    const [showDialog, setShowDialog] = useState<boolean>(true);

    const toggleCloseAds = () => {
      setShowAds(false);
    }

    const toggleCloseDialog = () => {
      setShowDialog(false);
    }

    useEffect(() => {
      setShowDialog(true);
      setShowAds(true)
    }, []);
    
  return (
    <div 
      className={showDialog ? "relative w-full h-vh flex justify-center items-center pt-10 pb-10" : "w-full h-vh flex justify-center items-center pt-10 pb-10"}
      onClick={toggleCloseDialog} // Bắt sự kiện click ngoài dialog
    >
      {
        showDialog && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-opacity-50  bg-[#787878] w-full h-full  flex justify-center items-center">
            <div 
              className="w-[380px] h-[377.55px] bg-white rounded-xl shadow-xl"
              onClick={(e) => e.stopPropagation()}  // Ngăn click vào dialog đóng hộp thoại
            >
              <div className="w-full h-[52.8px] flex justify-between items-center p-4 border-b bg-[#f3f3f3] rounded-tl-xl rounded-tr-xl">
                <h2 className="font-[700] text-[16px] leading-[17px] text-[#303030] font-sans">App embedded is required</h2>
                <button className="text-gray-500 hover:text-black" onClick={toggleCloseDialog}><CloseIcon/></button>
              </div>

              <div className="p-4 flex flex-col items-center">
                <img
                  loading="lazy"
                  src="https://d3p7e4b35qbbpe.cloudfront.net/images/themeAppOnboarding.webp"
                  alt="Guide"
                  className="w-full rounded-lg"
                />
                <p className="mt-4 font-[400] text-[14px] leading-[17px] text-[#303030] font-sans">
                  <strong>Zotek works</strong> only if you <strong>activate app embed</strong> in your theme, as recommended by Shopify for using apps in your online store.
                </p>
              </div>

              <div className="w-full h-[60.8px] flex justify-end gap-2 p-4 border-t rounded-b-xl">
                <Button variant="outline" className="w-[54.06px] h-[28px] font-[500] text-[13px] leading-[17px] font-sans shadow-md border-gray-200 pr-5" onClick={toggleCloseDialog}>
                  Later
                </Button>
                <Button className="w-[88.36px] h-[28px] font-[500] text-[13px] leading-[17px] font-sans shadow-md border-gray-200 pr-5">
                  <a href="https://quickstart-4f38784d.myshopify.com/admin/themes/current/editor?context=apps&amp;template=index&amp;activateAppId=e17ae0a7-f600-440d-80e8-705183c6ec36/pixelEmbed">Active Now</a>
                </Button>
              </div>
            </div>
          </div>
        )
      }

      <div className="w-[950px] h-auto">
        <h1 className="text-xl font-bold mb-5">Home</h1>
          <div className="w-full h-[148px] flex flex-col items-start justify-start rounded-xl border bg-[#f1f1f1] shadow-md border-gray-200">
              <div className="w-full h-[44px] flex flex-row items-center pl-3 bg-[#feb800] rounded-tl-xl rounded-tr-xl">
                  <WarningIcon/>
                  <p className="pl-1 font-[650] text-[13px] leading-[17px] text-[#303030] font-sans">Before using our app, please make the following changes:</p>
              </div>
              <div className="flex-1 flex-col p-4 justify-between bg-white rounded-br-xl rounded-bl-xl">
                  <p className="font-[500] text-[13px] leading-[17px] text-[#303030] font-sans mb-3">
                      To ensure smooth operation and avoid any potential issues, please make sure the following
                      changes are implemented before using our app: Go to{" "}
                      <strong>Online Store &gt; Customize &gt; App Embeds</strong> &gt; Turn on{" "}
                      <strong>Zotek Multiple Pixel</strong> and click Save (or simply click the Enable button
                      below).
                  </p>
                  
                  <Button variant="outline" className="w-[90.78px] h-[28px] shadow-sm border border-gray-200 flex items-center font-[500] text-[13px] leading-[17px] font-sans">
                  Enable Now
                  </Button>
              </div>
          </div>

        <div className="mt-4 bg-white p-5 shadow-md border-gray-200 rounded-xl">
          <h2 className="font-[650] text-[15px] leading-[17px] text-[#303030] font-sans">Setup guide</h2>
          <p className="font-[500] text-[13px] leading-[17px] text-[#303030] font-sans mt-2">
            Welcome to Zotek! Before you get started, here's a quick guide on how to use our app.
          </p>

          <div className="bg-gray-100 px-3 py-2 rounded-md mt-4">
            <h3 className="font-[500] text-[14px] leading-[17px] text-[#303030] font-sans mb-3">Add your Facebook or TikTok Pixel</h3>
            <p className="font-[500] text-[13px] leading-[17px] text-[#303030] font-sans">
              Create a Facebook or TikTok Pixel on Zotek and enable the Conversion API to bypass iOS
              14 and Ad blockers, ensuring no missed events.{" "}
              <a href="https://zotek.gitbook.io/facebook-multiple-pixel/getting-started/setup-facebook-pixel/setup-facebook-pixel" className="text-blue-500">
                Learn more
              </a>
            </p>

            <div className="mt-3 flex items-center gap-2">
              <Button variant="default" className="w-[150.56px] h-[28px] font-[500] text-[13px] leading-[17px] text-white font-sans">Create facebook pixel</Button>
              <Button variant="ghost" className="font-[500] text-[13px] leading-[17px] text-[#303030] font-sans">Create tiktok pixel</Button>
            </div>
          </div>

          <Button variant="ghost" className="w-full flex items-center justify-start mt-1 font-[500] text-[13px] leading-[17px] text-[#303030] font-sans">Create your catalog</Button>
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-[18px]">
          {
            data.map((item, index) => (
              <Card className="w-[306px] h-[164px]" key={index}>
                <CardContent className="p-4 w-full h-full flex gap-2">
                  <div className="flex flex-col justify-between items-start">
                  <h3 className="font-[600] text-[15px] leading-[17px] text-[#303030] font-sans">{item.title}</h3>
                  <div className="flex align-top justify-start h-[60px]">
                    <p className="font-[500] text-[13px] leading-[17px] text-[#303030] font-sans">
                      {item.description}
                    </p>
                  </div>
                  
                  <Button variant="outline" className="w-auto h-[28px] font-[500] text-[13px] leading-[17px] text-[#303030] font-sans shadow-md border-gray-200">
                    {item.button}
                  </Button>
                  </div>
                  <img loading="lazy" alt="" src={item.src} className="w-[50px] h-[50px]"/>
                </CardContent>
              </Card>
            ))
          }
        </div>

        {/* <div className="w-full h-[144px] flex flex-row gap-5  rounded-xl border bg-white shadow-md border-gray-200 mt-4 p-4">
          <div className="flex flex-1 flex-col justify-between">
            <div>
              <p className="font-[650] text-[13px] leading-[17px] text-[#303030] font-sans">Important Note About Testing Your Pixel</p>
            </div>
            <div>
              <p className="font-[500] text-[13px] leading-[17px] text-[#303030] font-sans">Don't worry if <strong>Pixel Helper </strong> doesn't show your events - we use <strong>Conversion API </strong> Conversion API for better tracking.</p>
              <p className="font-[500] text-[13px] leading-[17px] text-[#303030] font-sans">Click the button below for the most accurate way to test your events.</p>
            </div>
            <Button variant="outline" className="w-[107.03px] h-[28px] font-[500] text-[13px] leading-[17px] text-[#303030] font-sans shadow-md border-gray-200 ">
              Test pixel now
            </Button>
          </div>
          <img loading="lazy" className="rounded-lg w-[200px] h-[112px]" src="https://d3p7e4b35qbbpe.cloudfront.net/images/Test-Event-Code.webp"/>
        </div> */}

          <div className="w-full h-[170px] mt-4 flex flex-col items-start justify-start rounded-xl border shadow-md border-gray-200">
              <div className="w-full h-[44px] flex flex-row items-center pl-3 bg-[#feb800] rounded-tl-xl rounded-tr-xl">
                  <WarningIcon/>
                  <p className="pl-1 font-[650] text-[13px] leading-[17px] text-[#303030] font-sans">Important Note About Testing Your Pixel</p>
              </div>
              <div className="flex flex-row w-full bg-white rounded-bl-xl rounded-br-xl">
                <div className="flex-1 flex flex-col p-4 justify-between  rounded-br-xl rounded-bl-xl">
                  <div>
                    <p className="font-[500] text-[13px] leading-[17px] text-[#303030] font-sans">Don't worry if <strong>Pixel Helper </strong> doesn't show your events - we use <strong>Conversion API </strong> Conversion API for better tracking.</p>
                    <p className="font-[500] text-[13px] leading-[17px] text-[#303030] font-sans">Click the button below for the most accurate way to test your events.</p>
                  </div>
                  <Button variant="outline" className="w-[107.03px] h-[28px] mb-1 font-[500] text-[13px] leading-[17px] text-[#303030] font-sans shadow-md border-gray-200 ">
                    Test pixel now
                  </Button>
                </div>
                <img loading="lazy" className="rounded-lg w-[200px] h-[112px] mr-4 my-2" src="https://d3p7e4b35qbbpe.cloudfront.net/images/Test-Event-Code.webp"/> 
              </div>
          </div>

        {
          showAds && (
            <div className="w-full h-[226.4px] flex flex-col rounded-xl border bg-white shadow-md border-gray-200 mt-4">
              <div className="w-full h-[27.2%] flex flex-row items-center justify-between border-b rounded-tl-xl rounded-tr-xl pl-3 pr-3">
                <h3 className="font-[700] text-[15px] leading-[17px] text-[#303030] font-sans">Partner list</h3>
                <div className="flex flex-row items-center">
                <Button variant="outline" className="w-[101.59px] h-[28px] font-[500] text-[13px] leading-[17px] text-[#303030] font-sans shadow-md border-gray-200 pr-5">
                  <EysIcon/><a href="/partners">View more</a> 
                </Button>
                <Button variant="ghost" className="w-[10px] h-[30px]" onClick={toggleCloseAds}><CloseIcon/></Button>
                </div>
              </div>

              <div className="flex flex-row flex-wrap gap-4 p-4 justify-start bg-white rounded-br-xl rounded-bl-xl">
                {
                  dataPartner.map((item, index) => (
                  <Card className="w-[295.33px] h-[133px] flex flex-col p-3 hover:bg-blue-50 cursor-pointer" key={index}>
                    <div className="w-full flex flex-1 flex-row justify-start items-center">
                      <img loading="lazy" alt="UpPromote Affiliate Marketing" className="w-[40px] h-[40px] rounded-lg" src={item.src}/>
                      <div className="flex flex-col ml-2 gap-1">
                        <p className="font-[500] text-[14px] leading-[17px] text-[#303030] font-sans ">{item.title}</p>
                        <div className="flex flex-row w-full gap-1">
                          <p className="font-[500] text-[13px] leading-[17px] text-[#303030] font-sans">{item.avgVote}</p>
                          <p><StarIcon/></p>
                          <p className="font-[500] text-[13px] leading-[17px] text-[#303030] font-sans">({item.totalVote})</p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-[60px] font-[500] text-[13px] leading-[17px] text-[#303030] font-sans">
                    {item.description}
                    </div>
                </Card>
                  ))
                }
              </div>
            </div>
          )
        }

          <div className="flex justify-center items-center font-[400] text-[15px] leading-[17px] text-[#303030] font-sans mt-7">
              Learn more about&nbsp;<a className="text-[blue] underline" href="https://zotek.gitbook.io/facebook-multiple-pixel/getting-started/get-your-pixels-ready"> Zotel Pixel</a>
          </div>


      </div>
    </div>
  );
}
