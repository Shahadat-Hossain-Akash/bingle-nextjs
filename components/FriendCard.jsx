import Image from "next/image";
import React from "react";

export default function FriendCard() {
  return (
    <div className="w-full flex gap-2 px-4 py-2 hover:bg-[#9b9b9b]/5 items-center rounded-lg cursor-pointer">
      <Image src={"/assets/avatar1.svg"} alt={"user"} width={40} height={40} />
      <div className="flex gap-1 w-full items-center">
        <div className="flex gap-1 w-full justify-between ">
          <span>Username</span>
        </div>
        <div className="text-sm text-zinc-500 overflow-hidden rounded-full bg-[#9b9b9b]/5 w-fit p-0.5">
          <Image
            src={"/assets/meatball.svg"}
            alt={"user"}
            width={20}
            height={20}
          />
        </div>
      </div>
    </div>
  );
}
