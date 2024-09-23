import Message from "@/components/Message";
import Server from "@/components/Server";

export const TABS = [
  {
    label: "Dashboard",
    value: "DASHBOARD",
    component: Message,
  },
  {
    label: "Server",
    value: "SERVER",
    component: Server,
  },
];
