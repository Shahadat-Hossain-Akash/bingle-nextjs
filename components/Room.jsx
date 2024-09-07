import React from 'react'
import DynamicCard from './DynamicCard'
import DynamicEmptyState from './DynamicEmptyState'
import CompoundCard from './compound/CompoundCard'
import DropDown from './common/Dropdown'

export default function Room() {
    const roomIcons = []
        const components = [
            {component: DropDown}
        ]
        const friendList = [
            { name: 'name' },
            { name: 'name' },
            { name: 'name' },
            { name: 'name' },
            { name: 'name' },
            { name: 'name' },
            { name: 'name' },
            { name: 'name' },
            { name: 'name' },
            { name: 'name' },
            { name: 'name' },
            { name: 'name' },
            { name: 'name' },
            { name: 'name' },
            { name: 'name' },
            { name: 'name' },
            { name: 'name' },
            { name: 'name' },
            { name: 'name' },
            { name: 'name' },
            { name: 'name' },
            { name: 'name' },
            { name: 'name' },
            { name: 'name' },
            { name: 'name' },
            { name: 'name' },
            { name: 'name' },
            { name: 'name' },
            { name: 'name' },
            { name: 'name' },
        ];
    
    return (
        <div className='flex flex-col h-full overflow-hidden min-w-80 w-full'>
            <DynamicCard title='Room' component={components} icons={roomIcons} showSearchBar />
            <div className='overflow-y-scroll scrollbar-none mt-2 h-full'>
                {
                    friendList?.length > 0 ? (
                        friendList.map((el) => (
                            <div key={el.name} className="p-2">
                                {el.name}
                            </div>
                        ))
                    ) : (
                        <DynamicEmptyState title='No channels to join' subTitle='Create new channels and start chatting' />
                )}
            </div>
        </div>
    )
}
