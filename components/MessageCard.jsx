import Image from 'next/image';
import React from 'react'

export default function MessageCard() {
  return (
    <div className="w-full flex gap-4 px-4 py-2 hover:bg-[#9b9b9b]/5 items-center rounded-lg cursor-pointer">
      <Image src={"/assets/avatar1.svg"} alt={"user"} width={40} height={40} />
      <div className="flex flex-col gap-1 w-full">
        <div className="flex gap-1 w-full justify-between ">
          <span>Username</span>
          <span className="text-zinc-500 text-sm ">1h ago</span>
        </div>
        <div className="text-sm text-zinc-500 w-full overflow-hidden">
          Their latest message in the chat
        </div>
      </div>
    </div>
  );
}
