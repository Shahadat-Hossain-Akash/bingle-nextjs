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
      <div className="flex w-full justify-center h-full overflow-hidden text-white">
        <div className="w-full max-w-md">
          <TabGroup>
            <TabList className="flex gap-4">
              {categories.map(({ name }) => (
                <TabComponent
                  key={name}
                  className={({ selected }) =>
                    `text-md py-1 px-3 font-semibold focus:outline-none  
                                    ${
                                      selected
                                        ? "border-b-[1px] border-white"
                                        : ""
                                    }`
                  }
                >
                  {name}
                </TabComponent>
              ))}
            </TabList>
            <TabPanels className="mt-3">
              {categories.map(({ name, component }) => (
                <TabPanel
                  key={name}
                  className="rounded-xl h-[calc(100vh-(96px+16px))] overflow-hidden scrollbar-none px-2"
                >
                  {component()}
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    );
}
