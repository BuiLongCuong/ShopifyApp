'use client';

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import FBCatalogPage from "./facebook-catalog-page";
import TiktokCatalogPage from "./titok-catalog-page";
// import { signIn, signOut, useSession } from "next-auth/react";
import FacebookLogin, { SuccessResponse } from '@greatsumini/react-facebook-login';
import { ICatalog } from "@/types/catalog";

const getSessionData = (key: string) => {
    if (typeof window !== "undefined") {
        const data = sessionStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    }
    return null;
};

export default function CatalogDashboard({dataCatalog, totalItems} : {dataCatalog: ICatalog[], totalItems: number}) {
    const [routerTiktokCatalogPage, setRouterTiktokCatalogPage] = useState<boolean>(false);
     // const { data: session } = useSession();

    const handleLogout = () => {
        // if (window.FB) {
        //     window.FB.logout(() => {
        //         console.log("Logged out from Facebook");
        //         sessionStorage.removeItem("fbOverview");
        //         sessionStorage.removeItem("fbProfile");
        //         window.location.reload();
        //     });
        // } else {
        //     console.log("FB SDK not loaded yet");
        //     // Nếu FB SDK chưa được tải, cũng có thể xóa sessionStorage ở đây
        //     sessionStorage.removeItem("fbOverview");
        //     sessionStorage.removeItem("fbProfile");
        //     window.location.reload(); // Làm mới trang
        // }

        sessionStorage.removeItem("fbOverview");
        sessionStorage.removeItem("fbProfile");
        window.location.reload();
    };

    const getSessionData = (key: string) => {
        const data = sessionStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    };
    
    const resOverview = getSessionData("fbOverview");
    const resProfile = getSessionData("fbProfile");

    // const [resOverview, setResOverview] = useState(null);
    // const [resProfile, setResProfile] = useState(null);

    // useEffect(() => {
    //     setResOverview(getSessionData("fbOverview"));
    //     setResProfile(getSessionData("fbProfile"));
    // }, []);

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

    return (
        <>
            <div className="w-full flex flex-col items-center justify-start bg-[#f1f1f1] py-10">
                <div className="flex-col justify-start">
                    <div className="mb-5">
                        <h2 className="text-xl font-semibold">Catalog Manager</h2>
                        <p className="font-[500] text-[13px] leading-[17px] text-[#707070] font-sans">Please note that we display catalogs and product feeds created within Zotek.</p>
                    </div>
                    
                    <div className="w-[950px] h-auto flex flex-col items-start justify-start p-4 rounded-xl bg-white shadow-md border border-gray-200">
                        
                        <Tabs defaultValue="facebook" className="w-full">
                            <TabsList>
                                <TabsTrigger value="facebook"><FBIcon/><span className="mt-[2px]">Facebook</span></TabsTrigger>
                                <TabsTrigger value="tiktok"><TiktokIcon/><span className="mt-[2px]">Tiktok</span></TabsTrigger>
                            </TabsList>


                            <TabsContent value="facebook">
                                {/* {
                                    session ? (
                                        <>
                                            <div className="border-t mt-2 mb-1"></div>
                                            <FBCatalogPage name={session.user?.name} signOut={signOut}/>
                                        </>
                                    ) : (
                                        <div className="w-full h-auto border-t border-[#dbdbdb] flex flex-col items-center justify-start mt-4 pb-14">
                                            <img 
                                                src="https://d2qfs3b62dkzxt.cloudfront.net/images/productFeed.webp" 
                                                alt="image" 
                                                className="w-[300px] h-[196px]"
                                            />
                                            <span className="font-[700] text-[15px] leading-[17px] text-[#303030] font-sans mb-5 mt-1">No records found</span>
                                            <Button
                                                className="font-[700] text-[15px] leading-[17px] font-sans bg-[#385b96] hover:bg-[#385b96] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white text-sm px-5 py-2.5 me-2 mb-2 small"
                                                onClick={() => signIn("facebook")}
                                            >
                                                Login with Facebook</Button>
                                            <span className="font-[500] text-[13px] leading-[17px] text-[#303030] font-sans mt-2">Try changing the filters or search term</span>
                                        </div>
                                    )
                                } */}


                                {
                                    resProfile ? (
                                        <>
                                            <div className="border-t mt-2 mb-1"></div>
                                            <FBCatalogPage name={resProfile.name} logOut={handleLogout} dataCatalog={dataCatalog} totalItems={totalItems}/>
                                        </>
                                    ) : (
                                        <div className="w-full h-auto border-t border-[#dbdbdb] flex flex-col items-center justify-start mt-4 pb-14">
                                            <img 
                                                src="https://d2qfs3b62dkzxt.cloudfront.net/images/productFeed.webp" 
                                                alt="image" 
                                                className="w-[300px] h-[196px]"
                                            />
                                            <span className="font-[700] text-[15px] leading-[17px] text-[#303030] font-sans mb-5 mt-1">No records found</span>
                                            <FacebookLogin
                                                appId="572624309075173"
                                                onSuccess={(response) => {
                                                    const overviewData = {
                                                        // accessToken: response.accessToken,
                                                        data_access_expiration_time: response.reauthorize_required_in,
                                                        expiresIn: response.expiresIn,
                                                        signedRequest: response.signedRequest,
                                                        userID: response.userID,
                                                    }

                                                    sessionStorage.setItem("fbOverview", JSON.stringify(overviewData))
                                                }}
                                                onFail={(error) => {
                                                    console.log('Login Failed!', error);
                                                }}
                                                onProfileSuccess={(profile) => {
                                                    const profileData = {
                                                        name: profile.name,
                                                        email: profile.email,
                                                        picture: profile.picture?.data?.url,
                                                        id: profile.id,
                                                    };
                                                    sessionStorage.setItem("fbProfile", JSON.stringify(profileData));
                                                }}
                                                render={({onClick}) => (
                                                    <Button
                                                        className="font-[700] text-[13px] leading-[17px] font-sans bg-[#385b96] hover:bg-[#385b96] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white text-sm px-5 py-2.5 me-2 mb-2 small"
                                                        onClick={onClick}
                                                    >
                                                        Login with Facebook</Button>
                                                )}
                                            />
                                            <span className="font-[500] text-[13px] leading-[17px] text-[#303030] font-sans mt-2">Try changing the filters or search term</span>
                                        </div>
                                    )
                                }


                                        
                            </TabsContent>

                        
                            <TabsContent value="tiktok">
                                {
                                    routerTiktokCatalogPage ? (
                                        <>
                                            <div className="border-t mt-2 mb-1"></div>
                                            <TiktokCatalogPage/>
                                        </>
                                    ) : (
                                        <div className="w-full h-auto border-t border-[#dbdbdb] flex flex-col items-center justify-start mt-4 pb-14">
                                            <img 
                                                src="https://d2qfs3b62dkzxt.cloudfront.net/images/productFeed.webp" 
                                                alt="image" 
                                                className="w-[300px] h-[196px]"
                                            />
                                            <span className="font-[700] text-[15px] leading-[17px] text-[#303030] font-sans mb-5 mt-1">No records found</span>
                                            <Button
                                                className=" font-[700] text-[15px] leading-[17px] font-sans transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white text-sm px-5 py-2.5 me-2 mb-2 small"
                                                // onClick={() => router.push('/catalog-dashboard/facebook-catalog-page')}
                                                onClick={() => setRouterTiktokCatalogPage(true)}
                                            >
                                                Login with Tiktok</Button>
                                            <span className="font-[500] text-[13px] leading-[17px] text-[#303030] font-sans mt-2">Try changing the filters or search term</span>
                                        </div>
                                    )
                                }
                            </TabsContent>
                        </Tabs>
                    </div>

                    <div className="flex justify-center items-center font-[400] text-[15px] leading-[17px] text-[#303030] font-sans mt-7">
                        Learn more about&nbsp;<a className="text-[blue] underline" href="https://zotek.gitbook.io/facebook-multiple-pixel/getting-started/catalog-manager"> Catalog manager</a>
                    </div>
                </div>
            </div>
        </>
    )
}