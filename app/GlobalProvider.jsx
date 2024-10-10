'use client'
import React from 'react'
import { store } from "@/store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";

const queryClient = new QueryClient();

export default function GlobalProvider( {children}) {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                    {children}
                <ReactQueryDevtools initialIsOpen={false}/>
            </QueryClientProvider>
        </Provider>
    )
}
