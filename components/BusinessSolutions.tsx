"use client";
import { useState } from "react";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { StatsGrid } from "./StatsGrid";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

interface TabItem {
  id: string;
  title: string;
  content: string;
}

const tabs: TabItem[] = [
  {
    id: "streamline",
    title: "Streamline operations",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
  },
  {
    id: "efficiency",
    title: "Increasing efficiency",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
  },
  {
    id: "costs",
    title: "Reduce costs",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
  },
  {
    id: "insights",
    title: "Data insights",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
  },
];

export function BusinessSolutions() {
  const [activeTab, setActiveTab] = useState("efficiency");

  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <h2
            className={`text-3xl font-bold text-[#18042A] mb-4 ${bricolage.className}`}
          >
            We offer real-time solution tools for your entire business
          </h2>
          <p className={`text-[#8A9197] text-lg ${inter.className}`}>
            Our comprehensive tools offers small business owners a one-stop-shop
            solution to manage their accounting, sales, marketing, admission
            efforts, CRM, financial models, email campaigns, QuickBooks
            integration, record-keeping, and a range of other crucial business
            functions.
          </p>
        </div>

        {/* Tabs and Image Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 place-items-center">
          <div className="space-y-6">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`block text-left w-full transition-colors cursor-pointer ${
                  bricolage.className
                } ${
                  activeTab === tab.id
                    ? "text-[#701CC0]"
                    : "text-[#929C9A] hover:text-gray-600"
                }`}
              >
                <h3
                  className={`text-5xl mb-6 relative inline-block ${
                    // Underline
                    activeTab === tab.id &&
                    "before:absolute before:bottom-[-12px] before:left-0 before:w-full before:h-[2px] before:bg-[linear-gradient(to_right,#701CC0_0%,#701CC0_60%,#D9DEDD_60%,#D9DEDD_100%)]"
                  }`}
                >
                  {tab.title}
                </h3>

                {activeTab === tab.id && (
                  <div>
                    <p className="text-[#646A69] text-[18px] mb-2">
                      {tab.content}
                    </p>
                    <Button
                      variant="link"
                      className="text-[#022C22] text-[18px] hover:text-[#701CC0] p-0"
                    >
                      Learn more
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="relative mx-auto">
            <div className="absolute inset-0 ml-10 bg-[#701CC0] translate-y-10 translate-x-8 opacity-40 blur-[80px]" />
            <div className="relative overflow-hidden rounded-[60px]">
              <Image
                src="/client1.jpeg"
                alt="Woman working on laptop"
                width={200}
                height={100}
                className="w-[386px] h-[580px] object-cover rounded-[60px]"
              />
            </div>
          </div>
        </div>

        <div className="mt-24">
          <StatsGrid />
        </div>
      </div>
    </section>
  );
}
