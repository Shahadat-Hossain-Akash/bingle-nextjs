import Image from "next/image";
import React from "react";

const messages = [
    {
        id: 1,
        sender: "John Doe",
        avatar: "/assets/avatar1.svg",
        content: "Lorem ipsum dolor sit amet consectetur. Cursus urna turpis enim justo. Sit at " +
                "sit molestie purus pharetra venenatis elementum ipsum. Mi varius diam a blandi" +
                "t amet porta non. Vitae urna amet condimentum tellus amet dignissim turpis urn" +
                "a vehicula.",
        timestamp: "10:45 AM",
        type: "incoming"
    }, {
        id: 2,
        sender: "You",
        avatar: "/assets/avatar2.svg",
        content: "I’m good, thanks! How about you?",
        timestamp: "10:47 AM",
        type: "outgoing"
    }, {
        id: 3,
        sender: "John Doe",
        avatar: "/assets/avatar1.svg",
        content: "I’m doing well, just working on some projects.",
        timestamp: "10:50 AM",
        type: "incoming"
    },
        {
        id: 1,
        sender: "John Doe",
        avatar: "/assets/avatar1.svg",
        content: "Lorem ipsum dolor sit amet consectetur. Cursus urna turpis enim justo. Sit at " +
                "sit molestie purus pharetra venenatis elementum ipsum. Mi varius diam a blandi" +
                "t amet porta non. Vitae urna amet condimentum tellus amet dignissim turpis urn" +
                "a vehicula.",
        timestamp: "10:45 AM",
        type: "incoming"
    }, {
        id: 2,
        sender: "You",
        avatar: "/assets/avatar2.svg",
        content: "I’m good, thanks! How about you?",
        timestamp: "10:47 AM",
        type: "outgoing"
    }, {
        id: 3,
        sender: "John Doe",
        avatar: "/assets/avatar1.svg",
        content: "I’m doing well, just working on some projects.",
        timestamp: "10:50 AM",
        type: "incoming"
    },
        {
        id: 1,
        sender: "John Doe",
        avatar: "/assets/avatar1.svg",
        content: "Lorem ipsum dolor sit amet consectetur. Cursus urna turpis enim justo. Sit at " +
                "sit molestie purus pharetra venenatis elementum ipsum. Mi varius diam a blandi" +
                "t amet porta non. Vitae urna amet condimentum tellus amet dignissim turpis urn" +
                "a vehicula.",
        timestamp: "10:45 AM",
        type: "incoming"
    }, {
        id: 2,
        sender: "You",
        avatar: "/assets/avatar2.svg",
        content: "I’m good, thanks! How about you?",
        timestamp: "10:47 AM",
        type: "outgoing"
    }, {
        id: 3,
        sender: "John Doe",
        avatar: "/assets/avatar1.svg",
        content: "I’m doing well, just working on some projects.",
        timestamp: "10:50 AM",
        type: "incoming"
    },
        {
        id: 1,
        sender: "John Doe",
        avatar: "/assets/avatar1.svg",
        content: "Lorem ipsum dolor sit amet consectetur. Cursus urna turpis enim justo. Sit at " +
                "sit molestie purus pharetra venenatis elementum ipsum. Mi varius diam a blandi" +
                "t amet porta non. Vitae urna amet condimentum tellus amet dignissim turpis urn" +
                "a vehicula.",
        timestamp: "10:45 AM",
        type: "incoming"
    }, {
        id: 2,
        sender: "You",
        avatar: "/assets/avatar2.svg",
        content: "I’m good, thanks! How about you?",
        timestamp: "10:47 AM",
        type: "outgoing"
    }, {
        id: 3,
        sender: "John Doe",
        avatar: "/assets/avatar1.svg",
        content: "I’m doing well, just working on some projects.",
        timestamp: "10:50 AM",
        type: "incoming"
    },
        {
        id: 1,
        sender: "John Doe",
        avatar: "/assets/avatar1.svg",
        content: "Lorem ipsum dolor sit amet consectetur. Cursus urna turpis enim justo. Sit at " +
                "sit molestie purus pharetra venenatis elementum ipsum. Mi varius diam a blandi" +
                "t amet porta non. Vitae urna amet condimentum tellus amet dignissim turpis urn" +
                "a vehicula.",
        timestamp: "10:45 AM",
        type: "incoming"
    }, {
        id: 2,
        sender: "You",
        avatar: "/assets/avatar2.svg",
        content: "I’m good, thanks! How about you?",
        timestamp: "10:47 AM",
        type: "outgoing"
    }, {
        id: 3,
        sender: "John Doe",
        avatar: "/assets/avatar1.svg",
        content: "I’m doing well, just working on some projects.",
        timestamp: "10:50 AM",
        type: "incoming"
    }
];

export default function Chat() {
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
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start gap-4 mb-4 ${
                  message.type === "outgoing" ? "justify-end" : ""
                }`}
              >
                {message.type === "incoming" && (
                  <Image
                    src={message.avatar}
                    alt="Avatar"
                    className="w-10 h-10 rounded-full object-cover relative"
                    width={32}
                    height={32}
                  />
                )}
                <div className="flex flex-col gap-1">
                  <div
                    className={`p-3 rounded-2xl max-w-4xl ${
                      message.type === "incoming"
                        ? "bg-[#1C1D1F]"
                        : "bg-[#1A8DFF] text-white"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                  {message.type === "incoming" ? (
                    <span className="text-xs text-gray-300 block text-left">
                      {message.timestamp}
                    </span>
                  ) : (
                    <span className="text-xs text-gray-300 block  text-right">
                      {message.timestamp}
                    </span>
                  )}
                </div>
                {message.type === "outgoing" && (
                  <Image
                    src={message.avatar}
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
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 p-2 bg-transparent text-white rounded-lg focus:outline-none"
              />
              <button className="ml-4 px-4 py-2 bg-[#1A8DFF] text-white rounded-xl">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}
