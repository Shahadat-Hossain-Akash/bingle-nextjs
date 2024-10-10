import React, {useCallback} from 'react'
import DynamicCard from './DynamicCard'
import DynamicEmptyState from './DynamicEmptyState'
import CompoundCard from './compound/CompoundCard'
import DropDown from './common/Dropdown'
import {ArrowLeft02Icon} from "hugeicons-react";
import {useDispatch, useSelector} from 'react-redux';
import {setActiveServer} from '@/store/serverSlice'
import { useQuery } from '@tanstack/react-query'
import APIController from '@/common/helpers/APIController'
import RoomCard from './RoomCard'

const BackButton = () => {
    return (
        <ArrowLeft02Icon
            size={40}
            className="cursor-pointer p-2 rounded-xl hover:bg-[#9b9b9b]/5"
            onClick={() => handleServerChange(null)}/>
    );
}

export default function Room() {
    const dispatch = useDispatch();
    const activeServer = useSelector((state) => state.server.activeServer)

    const handleServerChange = (value) => {
        dispatch(setActiveServer(value));
    };
    const { data } = useQuery({
        queryKey: ['rooms', activeServer],
        queryFn: () => APIController.public.getRoomByServer(activeServer).then(({data}) => data)
    })
    const BackButton = useCallback(() => {
        return (
            <ArrowLeft02Icon
                size={40}
                className="cursor-pointer p-2 rounded-xl hover:bg-[#9b9b9b]/5"
                onClick={() => handleServerChange(null)}/>
        );
    }, [activeServer]);

    console.log(data)

    const roomIcons = []
    const components = [
        {
            component: DropDown
        }, {
            navigate: BackButton
        }
    ];

    return (
        <div className="flex flex-col h-full overflow-hidden min-w-80 w-full">
            <div className='flex gap-2 flex-col justify-center'>
                <DynamicCard
                    title="Room"
                    component={components}
                    icons={roomIcons}
                    showSearchBar="showSearchBar"
                    isRoutable={true}/>
            </div>
            <div className="overflow-y-scroll scrollbar-none mt-2 h-full">
                {
                    data
                        ?.length > 0
                            ? (data.map((el) => (
                                <RoomCard key={el} room={el}/>
                            )))
                            : (
                                <DynamicEmptyState
                                    title="No channels to join"
                                    subTitle="Create new channels and start chatting"/>
                            )
                }
            </div>
        </div>
    );
}
