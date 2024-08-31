import React from 'react'
import Drawer from './common/Drawer'
import Tab from './Tab'

export default function DrawerComponent({ isDrawerOpen, setIsDrawerOpen}) {
    return (
        <Drawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen}>
            <Tab/>
        </Drawer>
    )
}
