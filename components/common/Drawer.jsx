'use client'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react'

export default function Drawer({ children, title = "", isDrawerOpen, setIsDrawerOpen }) {
    return (
        <Dialog open={isDrawerOpen} onClose={setIsDrawerOpen} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-zinc-900/20 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
            />

            <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <DialogPanel
                            transition
                            className="bg-[#1C1D1F] flex flex-col pointer-events-auto relative w-screen max-w-sm transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
                        >
                            <div className="flex h-full flex-col overflow-y-scroll scrollbar-none shadow-xl">
                                {title && <div className="px-4 sm:px-6">
                                    <DialogTitle className="text-base font-semibold leading-6 text-gray-900">{title}</DialogTitle>
                                </div>}
                                <div className="relative mt-2 flex-1 px-2">{children}</div>
                            </div>
                            <TransitionChild>
                                <div className="h-12 w-full z-10 flex justify-end duration-500 ease-in-out bg-[#1C1D1F] shadow-xl p-1">
                                    <button
                                        type="button"
                                        onClick={() => setIsDrawerOpen(false)}
                                        className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-0 focus:ring-none bg-zinc-900 px-2 py-1"
                                    >
                                        Close
                                    </button>
                                </div>
                            </TransitionChild>
                        </DialogPanel>
                    </div>
                </div>
            </div>
        </Dialog>
    )
}