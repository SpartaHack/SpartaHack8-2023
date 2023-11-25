"use client";
import Header from "@/ui/header/header";
import React, { Suspense } from "react";
import Content from "@/components/learn/content/content";
import Loading from "../loading";
import { useStore } from "zustand";
import { useLearnStore } from "@/context/learn-context";

const LearnPage = () => {
  const learnContent = useStore(useLearnStore, (state) => state.learnContent)
  return (
    <main className='flex flex-col min-h-screen"'>
      <Suspense fallback={<Loading />}>
        <Header />
        <Content type={learnContent?.type!} />
      </Suspense>
    </main>
  );
};

export default LearnPage;
