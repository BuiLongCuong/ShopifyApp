'use client';

import { useRouter } from "next/navigation";

export default function CampaignsReport() {
    const router = useRouter();

    return(
        <>
        <div className="w-full flex flex-col items-center justify-center bg-[#f1f1f1] py-10">
            <div className="flex-col justify-start">
            <h2 className="text-xl font-semibold mb-5">Campaigns Report</h2>
            
            <div className="w-[950px] flex items-center justify-between p-4 rounded-xl bg-white shadow-md border border-gray-200">
                
                <div className="flex flex-col gap-1">
                    <div className="flex items-center font-[500] text-[15px] leading-[17px] text-[#303030] font-sans">
                        <div>Beta Access Available Now!</div>
                       
                        <span className="ml-2 text-[#003A5A] font-[500] text-[12px] leading-[17px] px-[8px] py-[2px] bg-blue-100 rounded-lg">Free unlock</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-5 mt-1">
                    Our
                    <strong> Campaign Report </strong>
                    feature offers powerful data to track and optimize you r
                    <strong> ad performance</strong>
                    . Reach out to us if you want to start using it today and stay ahead with actionable insights!             
                    </p>
                    <button 
                        className="w-[136.15px] h-[28px] mt-1 shadow-md border-[1px] px-[12px] py-[6px] font-[500] text-[12px] leading-[17px] text-[#303030] font-sans bg-gray-100 rounded-lg hover:bg-gray-200"
                        onClick={() => router.push("/campaign-report-dashboard")}
                    >
                        Free unlock feature
                    </button>
                </div>

                <img 
                    loading="lazy"
                    src="https://d3p7e4b35qbbpe.cloudfront.net/images/campaign-beta.jpg" 
                    alt="Product Feed Illustration" 
                    className="w-[100px] h-[66.66px] object-contain"
                />
            </div>
            </div>
        </div>
        </>
    )
}