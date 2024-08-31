import { Tab as TabComponent, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import Server from './Server'
import Room from './Room'
import FriendList from './FriendList'

const categories = [
    {
        name: 'Server',
        active: true,
        component: Server
    },
    {
        name: 'Room',
        active: false,
        component: Room
    },
    {
        name: 'Friends',
        active: false,
        component: FriendList
    },
]

export default function Tab() {
    return (
        <div className="flex w-full justify-center h-full overflow-hidden">
            <div className="w-full max-w-md">
                <TabGroup>
                    <TabList className="flex gap-4">
                        {categories.map(({ name }) => (
                            <TabComponent
                                key={name}
                                className="text-md rounded-full py-1 px-3 font-semibold text-white focus:outline-none data-[selected]:bg-[#0C0D0E]/30 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
                            >
                                {name}
                            </TabComponent>
                        ))}
                    </TabList>
                    <TabPanels className="mt-3">
                        {categories.map(({ name, component }) => (
                            <TabPanel key={name} className="rounded-xl h-[calc(100vh-(96px+16px))] overflow-hidden scrollbar-none px-2">
                                    {component()}
                            </TabPanel>
                        ))}
                    </TabPanels>
                </TabGroup>
            </div>
        </div>
    )
}
