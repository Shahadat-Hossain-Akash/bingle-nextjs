'use client';
import CompoundLayout from '@/components/compound/CompoundLayout';
import DrawerComponent from '@/components/DrawerComponent';
import DynamicComponent from '@/components/DynamicComponent';
import FriendList from '@/components/FriendList';
import Header from '@/components/Header';
import HomePage from '@/components/HomePage';
import List from '@/components/List';
import Room from '@/components/Room';
import Sidebar from '@/components/Sidebar';
import useDeviceWidth from '@/hooks/useDeviceWidth';
import Image from 'next/image';
import {useState} from 'react';

export default function Home() {
    const {width} = useDeviceWidth();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    return (
      <main className="flex min-h-screen flex-col p-2 gap-2 text-white">
        <Header />
        <HomePage/>
      </main>
    );
}
