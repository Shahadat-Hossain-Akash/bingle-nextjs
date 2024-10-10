// components/MainContent.js
import Header from "@/components/Header";
import HomePage from "@/components/HomePage";
import React from "react";

const MainContent = () => {
  return (
    <main className="flex min-h-screen flex-col p-2 gap-2 text-white">
      <Header />
      <HomePage />
    </main>
  );
};

export default MainContent;
