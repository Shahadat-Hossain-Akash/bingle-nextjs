'use client';
import CompoundLayout from '@/components/compound/CompoundLayout';
import DrawerComponent from '@/components/DrawerComponent';
import DynamicComponent from '@/components/DynamicComponent';
import FriendList from '@/components/FriendList';
import Header from '@/components/Header';
import List from '@/components/List';
import useDeviceWidth from '@/hooks/useDeviceWidth';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
	const { width } = useDeviceWidth();
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	return (
		<main className="flex min-h-screen flex-col p-2 gap-2 ">
			<Header />
			<DrawerComponent isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
			{width < 768 && (
				<div className="justify-end w-full flex h-fit px-2">
					<button
						onClick={() => setIsDrawerOpen(!isDrawerOpen)}
						className="p-2 rounded-xl bg-[#1C1D1F] text-sm"
					>
						<Image src={'/assets/drawer.svg'} width={20} height={20} alt="drawer" />
					</button>
				</div>
			)}
			{
				<CompoundLayout className="w-full grid grid-cols-8 h-[calc(100vh-(56px+0.5rem))] gap-2">
					<CompoundLayout.Left className="w-full h-full hidden md:grid col-span-2 md:visible overflow-hidden">
						<DynamicComponent render={List} />
					</CompoundLayout.Left>
					<CompoundLayout.Middle className="w-full h-full grid col-span-8 md:col-span-4 overflow-hidden">
						M
					</CompoundLayout.Middle>
					<CompoundLayout.Right className="w-full h-full hidden md:grid col-span-3 md:col-span-2 overflow-hidden">
						<DynamicComponent render={FriendList} />
					</CompoundLayout.Right>
				</CompoundLayout>
			}
		</main>
	);
}
