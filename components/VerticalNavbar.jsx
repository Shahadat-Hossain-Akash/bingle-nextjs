"use client";

import Image from "next/image";
import { useState } from "react";
import DrawerComponent from "./DrawerComponent";

export default function VerticalNavbar({ tabs, activeTab, onTabChange }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleTabClick = (value) => {
    onTabChange(value);
  };

  const renderTabIcon = (tab, index) => (
    <button
      key={index}
      className={`rounded-lg p-4 cursor-pointer ${
        activeTab === tab.value ? "bg-[#9b9b9b]/10" : "hover:bg-[#9b9b9b]/5"
      }`}
      onClick={() => handleTabClick(tab.value)}
    >
      <Image
        src={`/assets/${tab.value.toLowerCase()}.svg`}
        alt={`${tab.label} icon`}
        width={22}
        height={22}
      />
    </button>
  );

  const renderUtilityIcon = (src, alt) => (
    <div className="rounded-lg hover:bg-[#9b9b9b]/5 p-4">
      <Image src={src} alt={alt} width={22} height={22} />
    </div>
  );

  return (
    <div className="h-full w-[72px] rounded-lg">
      <div className="flex h-full flex-col items-center justify-between py-4">
        <div className="flex flex-col items-center gap-4">
          <nav className="flex flex-col items-center gap-2">
            {tabs.map(renderTabIcon)}
          </nav>
        </div>
        <div className="flex flex-col items-center gap-2">
          <button
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            className="p-4 rounded-xl bg-[#1C1D1F] text-sm"
          >
            <Image
              src={"/assets/drawer.svg"}
              width={20}
              height={20}
              alt="drawer"
            />
          </button>
          {renderUtilityIcon("/assets/notify.svg", "notifications icon")}
          {renderUtilityIcon("/assets/settings.svg", "settings icon")}
          <div className="rounded-lg hover:bg-[#9b9b9b]/5 p-2 mt-2">
            <div className="rounded-full bg-white">
              <Image
                src={"/assets/avatar2.svg"}
                alt="user avatar"
                width={38}
                height={38}
              />
            </div>
          </div>
        </div>
      </div>
      <DrawerComponent
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
    </div>
  );
}
