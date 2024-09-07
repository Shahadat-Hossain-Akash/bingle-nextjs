import React from 'react';
import DynamicCard from './DynamicCard';
import DynamicEmptyState from './DynamicEmptyState';
import DropDown from './common/Dropdown';

export default function Server() {
	const serverIcons = [
		{
			icon: ['/assets/add.svg'],
			style: 'default-button hover:bg-zinc-700',
			onClick: () => {
				console.log('t');
			},
		},
	];
	const components = [{ component: DropDown }];
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
			<DynamicCard title="Server" icons={serverIcons} component={components} />
			<div className="overflow-y-scroll scrollbar-none mt-2 h-full">
				{friendList?.length > 0 ? (
					friendList.map((el) => (
						<div key={el.name} className="p-2">
							{el.name}
						</div>
					))
				) : (
					<DynamicEmptyState title="No servers to show" subTitle="Create new server and join room " />
				)}
			</div>
		</div>
	);
}
