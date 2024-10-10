'use client'
import {setActiveServer} from "@/store/serverSlice";
import Image from "next/image";
import {useRouter, useSearchParams} from "next/navigation";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

export default function ServerCard({server}) {
    const dispatch = useDispatch();

    const handleServerChange = (value) => {
        dispatch(setActiveServer(value));
    };
    return (
        <div
            role="none"
            onClick={() => {
                handleServerChange(
                    server
                        ?.id
                )
            }}
            className="w-full flex gap-4 px-4 py-2 hover:bg-[#9b9b9b]/5 items-center rounded-lg cursor-pointer">
            <Image src={"/assets/server.svg"} alt={"server"} width={30} height={30}/>
            <div className="flex flex-col gap-1 w-full">
                <div className="flex gap-1 w-full justify-between ">
                    <span>Username</span>
                </div>
                {
                    server
                        ?.description
                            ? (
                                <div className="text-sm text-zinc-500 w-full overflow-hidden">
                                    server?.description
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
