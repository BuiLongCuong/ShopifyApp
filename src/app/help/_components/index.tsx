"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const faqData = [
  {
    category: "Overview",
    items: [
      { question: "Why should you use the Zotek app?", answer: "Zotek allows you to quickly set up unlimited Facebook and TikTok pixels for your store. It also utilizes Server-Side Tracking to ensure precise data by bypassing restrictions from iOS 14 and Ad Blockers. This helps optimize your ads and boosts your ROAS (Return on Ad Spend)." },
      { question: "How to add Zotek app to your theme?", answer: "To access the theme settings page for your store, click the button below and follow the instructions in the image." }
    ]
  },
  {
    category: "Set up and manage Facebook/TikTok Pixel.",
    items: [
      { question: "Why You Should Use Server-Side Tracking (Conversion API)?", answer: "Server-Side Tracking ensures accurate data collection by bypassing browser-based limitations like iOS 14 restrictions and Ad Blockers. It provides better event tracking reliability, enabling advertisers to optimize their campaigns effectively, increase ROAS, and make data-driven decisions with confidence." },
      { question: "Meta/TikTok Pixel Helper Cannot Detect Events?", answer: "You don’t need to worry. The Pixel Helper Extension only detects browser events, which are often blocked by iOS 14 and Ad Blockers. To ensure optimal pixel performance, Zotek uses Conversion API to send server events. You can refer to the guide below for testing events effectively." },
      { question: "Why are the match quality of events like PageView, ViewContent, and AddToCart so low?", answer: "If you see a score between 4-6, it’s a positive start. Event scores heavily depend on customer data such as email, phone, name, and country. If shoppers haven’t logged in or completed checkout, the events they trigger might lack this information. However, with more high-quality orders, your event scores will gradually improve."},
      { question: "Why does Meta require event verification for CartView and CollectionView events?", answer: "Because the remaining events are standard events predefined by Meta. However, for the CartView and CollectionView events, we found that there would be valuable product information for advertising. So we have provided additional options for users."},
      { question: "Are you worried about your events being duplicated?", answer: "Duplicate events usually occur when multiple methods or apps are used to set up the same Pixel ID in your store. I recommend using only one application to configure your Pixel to avoid this issue."},
      { question: "The Campaign Report does not update the event count as reported by Zotek.", answer: "The Campaign report often experiences delays and significant inaccuracies. Facebook and TikTok have methods for event tracking that involve considerable discrepancies, which we cannot influence. Therefore, we provide our own report specifically detailing the event counts related to your ads."},
    ]
  },
  {
    category: "Manage and Sync Product Feed",
    items: [
        { question: "Why is optimizing my Facebook Product Feed important?", answer: "Optimizing your Facebook Product Feed is crucial because it enhances product visibility, increases ad relevance, and maximizes sales conversions, thereby improving overall marketing effectiveness and ROI."},
        { question: "What can I use my Facebook Product Data Feed for?", answer: "You can use your Facebook Product Data Feed to advertise products on Facebook and Instagram, create dynamic ads, suggest shopping options, and improve product visibility to targeted customers."},
        { question: "The impact of linking your product catalog with Pixel.", answer: "Linking your product catalog with Facebook Pixel enables the collection of user interaction data, crucial for effective dynamic retargeting ads on Facebook."},
        { question: "Is it necessary to create a product feed and simultaneously link it to the catalog through the Zotek app?", answer: "It's highly necessary. This ensures the synchronization of Product IDs between the events we send in the Pixel and the Product IDs in the Product Feed. If you use a different app to create the Pixel or Feed, we cannot guarantee that consistency."},
        { question: "How often should I update my Product Feed?", answer: "It's generally recommended to update your Facebook Product Feed regularly, especially when there are changes to your product inventory, prices, or product details. The frequency of updates can depend on factors such as how often your product information changes and how frequently you run ads. Some businesses update their feeds daily or weekly to ensure accuracy and relevance in their advertising campaigns."},
    ]
  },
  {
    category: "Update and Manage Catalog",
    items: [
        { question: "Why can't you connect Catalog with Pixel?", answer: "To connect Catalog with Pixel, you need full administrative access to both the Catalog and Pixel within your business account."},
    ]
  }
];

export default function HelpPage() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const toggleItem = (question: string) => {
    setOpenItem(openItem === question ? null : question);
  };

  return (
    <div className="w-[950px] h-auto pt-10">
      <div className="w-full flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Help</h1>
        <Button className="bg-black font-[500] text-[13px] leading-[17px] font-sans text-sm transition-all rounded-lg px-4 py-2">
          Contact Us
        </Button>
      </div>

      {faqData.map((section) => (
        <Card key={section.category} className="mb-3 border border-gray-200 rounded-lg shadow-md">
          <div
            className="flex justify-between items-center px-4 py-3 cursor-pointer bg-white hover:bg-gray-50 transition-all rounded-xl"
            onClick={() => toggleCategory(section.category)}
          >
            <span className="font-[500] text-[14px] leading-[17px] font-sans">{section.category}</span>
            {openCategory === section.category ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </div>

          {openCategory === section.category && section.items.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-gray-50 overflow-hidden"
            >
              {section.items.map((item) => (
                <div key={item.question} className="border-t">
                  <div
                    className="flex justify-between items-center px-4 py-3 cursor-pointer bg-white hover:bg-gray-100 transition-all"
                    onClick={() => toggleItem(item.question)}
                  >
                    <span className="font-[500] text-[13px] leading-[17px] font-sans">{item.question}</span>
                    {openItem === item.question ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>

                  {openItem === item.question && (
                    <motion.div
                        initial={{ scaleY: 0, opacity: 0 }}
                        animate={{ scaleY: 1, opacity: 1 }}
                        exit={{ scaleY: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="px-4 py-3 font-[400] text-[13px] leading-[17px] font-sans bg-white rounded-b-lg overflow-hidden origin-top"
                    >
                        <strong>Answer:</strong> {item.answer}
                    </motion.div>
                    )}
                </div>
              ))}
            </motion.div>
          )}
        </Card>
      ))}
    </div>
  );
}
