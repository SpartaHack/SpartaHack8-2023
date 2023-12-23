"use client";
import Header from "@/ui/header/header";
import React, { Suspense } from "react";
import Content from "@/components/learn/content/content";
import Loading from "../loading";

const LearnPage = () => {

  return (
    <main className="flex flex-col min-h-screen bg-neutral-100 dark:bg-neutral-900">
        <Suspense fallback={<Loading />}>
          <Header />
          <Content />
        </Suspense>
    </main>
  );
};

export default LearnPage;
