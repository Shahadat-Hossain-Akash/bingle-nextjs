"use client";

import Image from "next/image";
import React, {useState} from "react";
import {Door01Icon} from "hugeicons-react";
import {useDispatch} from "react-redux";
import {setActiveRoom} from "@/store/roomSlice";

export default function RoomCard({room}) {
    const dispatch = useDispatch();

    const handleRoomChange = (value) => {
        dispatch(setActiveRoom(value));
    };

    return (
        <div
            role="none"
            onClick={() => handleRoomChange(room?.id)}
            className="w-full flex gap-4 px-4 py-2 hover:bg-[#9b9b9b]/5 items-center rounded-lg cursor-pointer">
            <Door01Icon size={30}/>
            <div className="flex flex-col gap-1 w-full">
                <div className="flex gap-1 w-full justify-between ">
                    <span>{
                            room
                                ?.name
                        }</span>
                </div>
                {
                    room
                        ?.description
                            ? (
                                <div className="text-sm text-zinc-500 w-full overflow-hidden">
                                    {
                                        room
                                            ?.description
                                    }
                                </div>
                            )
                            : (
                                <div className="text-sm text-zinc-500 w-full overflow-hidden">
                                    No description yet!
                                </div>
                            )
                }
            </div>
        </div>
    );
}
