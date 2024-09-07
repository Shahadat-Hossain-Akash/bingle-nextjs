/**
 * v0 by Vercel.
 * @see https://v0.dev/t/UQxJ29XGVzl
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {Collapsible, CollapsibleTrigger, CollapsibleContent} from "@/components/ui/collapsible";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
    return (<div className="flex flex-col md:flex-row h-screen w-full">
        <div
            className="flex h-24 md:h-full w-full md:w-64 flex-col rounded-2xl bg-[#17181a] shadow-sm transition-all duration-300 data-[collapsed=true]:w-16">
            {/*<div className="flex h-16 items-center justify-between px-4">
                <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full transition-all duration-300 data-[collapsed=true]:rotate-180">
                    <ChevronRightIcon className="h-5 w-5"/>
                    <span className="sr-only">Toggle Sidebar</span>
                </Button>
            </div>*/
            }
            <div className="relative flex-1 overflow-auto p-2 ">
                <nav className="grid gap-1">
                    <Collapsible className="grid gap-1">
                        <CollapsibleTrigger
                            className="flex items-center justify-between rounded-lg p-4 text-sm  transition-colors hover:bg-[#9B9B9B]/5 data-[state=open]:[&>svg]:rotate-90">
                            <div className="flex items-center gap-2">
                                <Image
                                    src={"/assets/dashboard.svg"}
                                    alt="icon"
                                    width={22}
                                    height={22}
                                    key={"home"}/>
                                <span
                                    className="transition-all duration-300 data-[collapsed=true]:opacity-0 data-[collapsed=true]:scale-0">
                                    Dashboard
                                </span>
                            </div>
                        </CollapsibleTrigger>
                    </Collapsible>
                    <Collapsible className="grid gap-1">
                        <CollapsibleTrigger
                            className="flex items-center justify-between rounded-lg p-4 text-sm font-medium transition-colors hover:bg-[#9B9B9B]/5 data-[state=open]:[&>svg]:rotate-90">
                            <div className="flex items-center gap-2">
                                <Image src={"/assets/server.svg"} alt="icon" width={22} height={22}/>
                                <span
                                    className="transition-all duration-300 data-[collapsed=true]:opacity-0 data-[collapsed=true]:scale-0">
                                    Server
                                </span>
                            </div>
                            <ChevronRightIcon className="h-4 w-4 transition-all duration-300"/>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="grid gap-1 pl-6">
                            <Link
                                href="#"
                                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-[#9B9B9B]/5"
                                prefetch={false}>
                                <Image
                                    src={"/assets/server.svg"}
                                    alt="icon"
                                    width={22}
                                    height={22}
                                    key={"home"}/>
                                <span
                                    className="transition-all duration-300 data-[collapsed=true]:opacity-0 data-[collapsed=true]:scale-0">
                                    Server
                                </span>
                            </Link>
                            <Link
                                href="#"
                                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                                prefetch={false}>
                                <PackageIcon className="h-4 w-4"/>
                                <span
                                    className="transition-all duration-300 data-[collapsed=true]:opacity-0 data-[collapsed=true]:scale-0">
                                    Categories
                                </span>
                            </Link>
                            <Link
                                href="#"
                                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                                prefetch={false}>
                                <PackageIcon className="h-4 w-4"/>
                                <span
                                    className="transition-all duration-300 data-[collapsed=true]:opacity-0 data-[collapsed=true]:scale-0">
                                    Inventory
                                </span>
                            </Link>
                        </CollapsibleContent>
                    </Collapsible>
                </nav>
            </div>
        </div>
    </div>
    ); } function ChevronRightIcon(props) {
        return (
            <svg
                {...props}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
            </svg>
        );
    }

    function PackageIcon(props) {
        return (
            <svg
                {...props}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="m7.5 4.27 9 5.15"/>
                <path
                    d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
                <path d="m3.3 7 8.7 5 8.7-5"/>
                <path d="M12 22V12"/>
            </svg>
        );
    }