'use client'
import React from 'react'
import CompoundCard from './compound/CompoundCard'
import Server from './Server'
import Room from './Room'


export default function List() {
    return (
        <CompoundCard>
            <div className={"h-full md:h-[calc(50vh-2.5rem)] bg-[#353535]/5 rounded-xl p-2 overflow-hidden"}>
                <Server/>
            </div>
            <div className={"h-full md:h-[calc(50vh-2.5rem)] bg-[#353535]/5 rounded-xl p-2 overflow-hidden"}>
                <Room/>
            </div>
        </CompoundCard>
    )
}
