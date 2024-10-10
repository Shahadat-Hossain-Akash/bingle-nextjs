'use client';
import MainContent from '@/components/MainContent';
import GlobalProvider from './GlobalProvider';

export default function Home() {
    return (
      <GlobalProvider>
        <MainContent />
      </GlobalProvider>
    );
}
