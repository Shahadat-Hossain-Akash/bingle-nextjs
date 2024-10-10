"use client";

import {useState} from "react";
import CompoundLayout from "@/components/compound/CompoundLayout";
import DynamicComponent from "@/components/DynamicComponent";
import VerticalNavbar from "./VerticalNavbar";
import Chat from "./Chat";
import Dropdown from "./Dropdown";
import {useQuery} from "@tanstack/react-query";
import APIController from "@/common/helpers/APIController";
import {TABS} from "@/common/helpers/Utility";
import {useDispatch, useSelector} from "react-redux";
import {setActiveTab} from "@/store/tabSlice";
import Room from "./Room";

export default function HomePage() {
    const dispatch = useDispatch();
    const activeTab = useSelector((state) => state.tab.activeTab);
    const activeServer = useSelector((state) => state.server.activeServer);

    const handleTabChange = (value) => {
        dispatch(setActiveTab(value));
    };

    const activeComponent = TABS.find((tab) => tab.value === activeTab)
        ?.component;

    const {data} = useQuery({
        queryKey: ["server"],
        queryFn: () => APIController
            .public
            .getServer()
            .then(({data}) => data)

    });
    console.log(data);
    return (
        <CompoundLayout className="w-full h-[calc(100vh-72px)] flex flex-col gap-4">
            <CompoundLayout.Row className={"block md:hidden"}>
                <Dropdown tabs={TABS} activeTab={activeTab} onTabChange={handleTabChange}/>
            </CompoundLayout.Row>
            <CompoundLayout.Row className="w-full gap-2 h-[calc(100vh-72px)]">
                <CompoundLayout.Column className={`hidden md:flex`}>
                    <VerticalNavbar
                        tabs={TABS}
                        activeTab={activeTab}
                        onTabChange={handleTabChange}/>
                </CompoundLayout.Column>
                <CompoundLayout.Column className="h-full">
                    {!!activeServer ? <Room/> : <DynamicComponent render={activeComponent}/>}
                </CompoundLayout.Column>
                <CompoundLayout.Column className="w-full h-full">
                    <Chat/>
                </CompoundLayout.Column>
            </CompoundLayout.Row>
        </CompoundLayout>
    );
}
