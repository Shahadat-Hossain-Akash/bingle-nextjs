'use client';
import Header from '@/components/Header';
import HomePage from '@/components/HomePage';
import useDeviceWidth from '@/hooks/useDeviceWidth';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {useState} from 'react';
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";
import { store } from '@/store/store';


const queryClient = new QueryClient()

export default function Home() {
    return (
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <main className="flex min-h-screen flex-col p-2 gap-2 text-white">
            <Header />
            <HomePage />
          </main>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Provider>
    );
}
