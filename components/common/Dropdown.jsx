import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import {
	ChevronDownIcon,
	PencilIcon,
} from '@heroicons/react/16/solid';

export default function DropDown() {
	return (
		<div className="w-fit text-right default-button p-0 ">
			<Menu>
				<MenuButton className="inline-flex default-button items-center gap-2 rounded-xl text-sm/6 font-semibold text-white  focus:outline-none data-[hover]:bg-zinc-700 data-[open]:bg-zinc-700 data-[focus]:outline-1 data-[focus]:outline-white">
					<ChevronDownIcon className="size-4 fill-white/60" />
				</MenuButton>

				<MenuItems
					transition
					anchor="bottom end"
					className="w-40 mt-1 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-300 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
				>
					<MenuItem>
						<button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
							<PencilIcon className="size-4 fill-white/30" />
							Edit
						</button>
					</MenuItem>
				</MenuItems>
			</Menu>
		</div>
	);
}
