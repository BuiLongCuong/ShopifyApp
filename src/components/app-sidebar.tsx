'use client';

import { useState } from "react";
import { navItems } from '@/constants/data';
import { ChevronDown, ChevronRight } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { filterItemsByCriteria } from "@/utils/common.utils";
import { NavItem } from "@/types";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "./ui/collapsible";
import { Calendar, Home, Inbox, Search, Settings, CircleHelp, FolderKanban, ChartNoAxesCombined, ClipboardPlus, Newspaper, SquareChartGantt } from "lucide-react"
import { usePathname } from 'next/navigation';

export function AppSidebar() {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
  const pathname = usePathname();

  const toggleMenu = (title: string) => {
    setOpenMenus((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const filteredNavItems = filterItemsByCriteria<NavItem>(
    navItems,
    (item) => !!item.items,
    'items'
  );

  const items = [
    {
      title: "Zotel Facebook Pixel",
      url: "/zotek-facebook-pixel",
      icon: Home,
    },
    {
      title: "Pixel Manager",
      url: "/pixel-manager",
      icon: SquareChartGantt ,
    },
    {
      title: "Pixel Analytic",
      url: "/pixel-analytic",
      icon: ChartNoAxesCombined,
    },
    {
      title: "Campaigns Report",
      url: "/campaigns-report",
      icon: ClipboardPlus,
    },
    {
      title: "Catalog Manager",
      url: "/catalog-manager",
      icon: FolderKanban,
    },
    {
      title: "Product Feed",
      url: "/product-feed",
      icon: Newspaper,
    },
    {
      title: "Help",
      url: "/help",
      icon: CircleHelp,
    },
  ]

  return (
    // <Sidebar>
    //   <SidebarContent>
    //     <SidebarGroup>
    //       <SidebarGroupLabel>Application</SidebarGroupLabel>
    //       <SidebarGroupContent>
    //         <SidebarMenu>
    //           {filteredNavItems.map((item) => (
    //             <Collapsible 
    //               key={item.title} 
    //               defaultOpen={openMenus[item.title] || false}
    //               className="group/collapsible"
    //             >
    //               <SidebarMenuItem>
    //                 <CollapsibleTrigger asChild>
    //                   <SidebarMenuButton onClick={() => toggleMenu(item.title)}>
    //                     <div className="flex items-center justify-between w-full cursor-pointer">
    //                       <a href={item.url} className="flex items-center gap-2">
    //                         {item.icon && <item.icon />}
    //                         <span>{item.title}</span>
    //                       </a>
    //                       {item.items && (
    //                         <span>
    //                           {openMenus[item.title] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
    //                         </span>
    //                       )}
    //                     </div>
    //                   </SidebarMenuButton>
    //                 </CollapsibleTrigger>
                    
    //                 {item.items && (
    //                   <CollapsibleContent>
    //                     <SidebarMenuSub>
    //                       {item.items.map((subItem) => (
    //                         <SidebarMenuSubItem key={subItem.title}>
    //                           <a href={subItem.url} className="flex items-center gap-2 pl-4">
    //                             {subItem.icon && <subItem.icon />}
    //                             <span>{subItem.title}</span>
    //                           </a>
    //                         </SidebarMenuSubItem>
    //                       ))}
    //                     </SidebarMenuSub>
    //                   </CollapsibleContent>
    //                 )}
    //               </SidebarMenuItem>
    //             </Collapsible>
    //           ))}
    //         </SidebarMenu>
    //       </SidebarGroupContent>
    //     </SidebarGroup>
    //   </SidebarContent>
    // </Sidebar>

    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActive = pathname === item.url;
                return(
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a 
                    href={item.url}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md ${isActive ? "bg-blue-400 text-white" : "hover:bg-gray-100"}`}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                )
            })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
