'use client';
import React from 'react';
import DynamicCard from './DynamicCard';
import DynamicEmptyState from './DynamicEmptyState';

export default function FriendList() {
	const friendIcons = [
		{
			icon: ['/assets/add.svg', '/assets/friend.svg'],
			style: 'default-button bg-[#43A0FC] flex  rounded-2xl',
			width: 16,
			height: 16,
			onClick: () => {
				console.log('t');
			},
		},
	];
	const components = []
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
		<div className="flex flex-col h-full overflow-hidden">
			<DynamicCard title="Friends" icons={friendIcons} component={components} showSearchBar />
			<div className="overflow-y-scroll scrollbar-none mt-2 h-full">
				{friendList?.length > 100 ? (
					friendList.map((el) => (
						<div key={el.name} className="p-2">
							{el.name}
						</div>
					))
				) : (
					<DynamicEmptyState title="No friends to chat" subTitle="Try adding new friends" />
				)}
			</div>
		</div>
	);
}
