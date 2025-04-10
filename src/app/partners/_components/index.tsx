import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";


export default function Partners() {
    const EysIcon = () => (
        <svg viewBox="0 0 20 20" className="w-6 h-6 text-gray-200">
          <path fillRule="evenodd" d="M13 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-1.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"></path>
          <path fillRule="evenodd" d="M10 4c-2.476 0-4.348 1.23-5.577 2.532a9.266 9.266 0 0 0-1.4 1.922 5.98 5.98 0 0 0-.37.818c-.082.227-.153.488-.153.728s.071.501.152.728c.088.246.213.524.371.818.317.587.784 1.27 1.4 1.922 1.229 1.302 3.1 2.532 5.577 2.532 2.476 0 4.348-1.23 5.577-2.532a9.265 9.265 0 0 0 1.4-1.922 5.98 5.98 0 0 0 .37-.818c.082-.227.153-.488.153-.728s-.071-.501-.152-.728a5.984 5.984 0 0 0-.371-.818 9.269 9.269 0 0 0-1.4-1.922c-1.229-1.302-3.1-2.532-5.577-2.532Zm-5.999 6.002v-.004c.004-.02.017-.09.064-.223a4.5 4.5 0 0 1 .278-.608 7.768 7.768 0 0 1 1.17-1.605c1.042-1.104 2.545-2.062 4.487-2.062 1.942 0 3.445.958 4.486 2.062a7.77 7.77 0 0 1 1.17 1.605c.13.24.221.447.279.608.047.132.06.203.064.223v.004c-.004.02-.017.09-.064.223a4.503 4.503 0 0 1-.278.608 7.768 7.768 0 0 1-1.17 1.605c-1.042 1.104-2.545 2.062-4.487 2.062-1.942 0-3.445-.958-4.486-2.062a7.766 7.766 0 0 1-1.17-1.605 4.5 4.5 0 0 1-.279-.608c-.047-.132-.06-.203-.064-.223Z"></path>
        </svg>
    );
  
    const StarIcon = () => (
        <svg viewBox="0 0 20 20" className="w-5 h-5 text-gray-200">
          <path d="M11.128 4.123c-.453-.95-1.803-.95-2.256 0l-1.39 2.912-3.199.421c-1.042.138-1.46 1.422-.697 2.146l2.34 2.222-.587 3.172c-.192 1.034.901 1.828 1.825 1.327l2.836-1.54 2.836 1.54c.924.501 2.017-.293 1.825-1.327l-.587-3.172 2.34-2.222c.762-.724.345-2.008-.697-2.146l-3.2-.421-1.389-2.912Z"></path>
        </svg>
    );

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

    return(
        <>
        <div className="w-full flex flex-col items-center justify-center bg-[#f1f1f1] py-10">
            <div className="flex-col justify-start">
                    <h2 className="text-xl font-semibold mb-5">Campaigns Report</h2>
                    <div className="w-[950px] h-[226.4px] flex flex-col rounded-xl border bg-white shadow-md border-gray-200 mt-4">
                        <div className="w-full h-[27.2%] flex flex-row items-center justify-between border-b rounded-tl-xl rounded-tr-xl pl-3 pr-3">
                            <h3 className="font-[700] text-[15px] leading-[17px] text-[#303030] font-sans">Partner list</h3>
                            <div className="flex flex-row items-center">
                                <Button variant="outline" className="w-[101.59px] h-[28px] font-[500] text-[13px] leading-[17px] text-[#303030] font-sans shadow-md border-gray-200 pr-5">
                                    <EysIcon/><a href="/partners">View more</a> 
                                </Button>
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
            </div>
        </div>
        </>
    )
}