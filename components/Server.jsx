'use client';
import React from 'react';
import DynamicEmptyState from './DynamicEmptyState';
import DropDown from './common/Dropdown';
import APIController from '@/common/helpers/APIController';
import {useQuery} from '@tanstack/react-query';
import ServerCard from './ServerCard';
import DynamicCard from './DynamicCard';

export default function Server() {
    const serverIcons = [
        {
            icon: ['/assets/add.svg'],
            style: 'default-button hover:bg-zinc-700',
            onClick: () => {
                console.log('t');
            }
        }
    ];
    const components = [
        {
            component: DropDown
        }
    ];
    const {data} = useQuery({
        queryKey: ["server"],
        queryFn: () => APIController
            .public
            .getServer()
            .then(({data}) => data)
    });

    return (
        <div className="flex flex-col h-full overflow-hidden min-w-80 w-full">
            <DynamicCard
                title="Server"
                icons={serverIcons}
                component={components}
                showSearchBar={true}/>
            <div className="overflow-y-scroll scrollbar-none mt-2 h-full">
                {
                    data
                        ?.length > 0
                            ? (data.map((el) => (<ServerCard key={el} server={el}/>)))
                            : (
                                <DynamicEmptyState
                                    title="No servers to show"
                                    subTitle="Create new server and join room "/>
                            )
                }
            </div>
        </div>
    );
}
