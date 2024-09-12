"use client";

import {useState} from "react";
import CompoundLayout from "@/components/compound/CompoundLayout";
import DynamicComponent from "@/components/DynamicComponent";
import VerticalNavbar from "./VerticalNavbar";
import Room from "./Room";
import Message from "./Message";
import Chat from "./Chat";
import Dropdown from "./Dropdown";

const TABS = [
    {
        label: "Dashboard",
        value: "DASHBOARD",
        component: Message
    }, {
        label: "Server",
        value: "SERVER",
        component: Room
    }
];

export default function HomePage() {
    const [activeTab, setActiveTab] = useState(TABS[0].value);

    const handleTabChange = (value) => {
        setActiveTab(value);
    };

    const activeComponent = TABS.find((tab) => tab.value === activeTab)
        ?.component;

    return (
      <CompoundLayout className="w-full h-[calc(100vh-72px)] flex flex-col gap-4">
        <CompoundLayout.Row className={"block md:hidden"}>
          <Dropdown
            tabs={TABS}
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />
        </CompoundLayout.Row>
        <CompoundLayout.Row className="w-full gap-2 h-[calc(100vh-72px)]">
          <CompoundLayout.Column className={`hidden md:flex`}>
            <VerticalNavbar
              tabs={TABS}
              activeTab={activeTab}
              onTabChange={handleTabChange}
            />
          </CompoundLayout.Column>
          <CompoundLayout.Column className="h-full">
            <DynamicComponent render={activeComponent} />
          </CompoundLayout.Column>
          <CompoundLayout.Column className="w-full h-full">
            <Chat />
          </CompoundLayout.Column>
        </CompoundLayout.Row>
      </CompoundLayout>
    );
}
