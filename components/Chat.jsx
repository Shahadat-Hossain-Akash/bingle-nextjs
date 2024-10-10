import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import useWebSocket from "react-use-websocket";


export default function Chat() {
  const [messages, setMessages] = useState([])
  const activeServer = useSelector((state) => state.server.activeServer);
  const activeRoom = useSelector((state) => state.room.activeRoom);

  const socketURL = activeRoom ? `ws://127.0.0.1:8000/${activeServer}/${activeRoom}` : null
  console.log(activeServer, activeRoom)

  const {register,reset,handleSubmit} = useForm()

  const {sendJsonMessage} = useWebSocket(socketURL, {
    onOpen: () => {
      console.log("open")
    },
    onError: () => {
      console.log("error")
    },
    onClose: () => {
      console.log("close")
    },
    onMessage: (msg) => {
      console.log(JSON.parse(msg.data));
        const data = JSON.parse(msg.data)
        setMessages((prev) => [...prev, data])
    }
  });

    const onSubmit = (data) => {
      const message = {
        id: new Date().getTime(),
        sender: "You",
        avatar: "/assets/avatar2.svg",
        content: data.message,
        timestamp: new Date().toLocaleTimeString(),
        type: "outgoing",
      };

      sendJsonMessage({type:"message", message})
      reset()
    };
    console.log(messages)

    return (
      <div className="flex h-[calc(100vh-72px)] antialiased text-white bg-transparent">
        <div className="flex flex-col flex-1 gap-2">
          {/* Header */}
          <div className="p-4 text-white flex items-center justify-between bg-[#9B9B9B]/5 rounded-xl">
            <div className="flex items-center gap-4">
              <Image
                src="/assets/avatar1.svg"
                alt="Avatar"
                className="w-10 h-10 rounded-full object-cover relative"
                width={40}
                height={40}
              />
              <div>
                <div className="font-semibold">John Doe</div>
                <div className="text-xs text-gray-400">Online</div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto scrollbar-none">
            {messages.map((data) => (
              <div
                key={data?.message.id}
                className={`flex items-start gap-4 mb-4 ${
                  data?.message.type === "outgoing" ? "justify-end" : ""
                }`}
              >
                {data?.message.type === "incoming" && (
                  <Image
                    src={data?.message.avatar}
                    alt="Avatar"
                    className="w-10 h-10 rounded-full object-cover relative"
                    width={32}
                    height={32}
                  />
                )}
                <div className={`flex flex-col gap-1 ${
                      data?.message.type === "incoming"
                        ? ""
                        : "items-end"
                    }`}>
                  <div
                    className={`p-2.5 rounded-2xl max-w-4xl w-fit ${
                      data?.message.type === "incoming"
                        ? "bg-[#1C1D1F]"
                        : "bg-[#1A8DFF] text-white"
                    }`}
                  >
                    <p className="text-sm w-fit">{data?.message?.content}</p>
                  </div>
                  {data?.message.type === "incoming" ? (
                    <span className="text-xs text-gray-300 block text-left">
                      {data?.message.timestamp}
                    </span>
                  ) : (
                    <span className="text-xs text-gray-300 block  text-right">
                      {data?.message.timestamp}
                    </span>
                  )}
                </div>
                {data?.message.type === "outgoing" && (
                  <Image
                    src={data?.message.avatar}
                    alt="Avatar"
                    className="w-10 h-10 rounded-full object-cover relative"
                    width={32}
                    height={32}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 bg-[#9b9b9b]/5 rounded-2xl">
            <form className="flex items-center" onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("message", {required: true})}
                type="text"
                placeholder="Type a message..."
                className="flex-1 p-2 bg-transparent text-white rounded-lg focus:outline-none"
              />
              <button type="submit" className="ml-4 px-4 py-2 bg-[#1A8DFF] text-white rounded-xl">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    );
}
