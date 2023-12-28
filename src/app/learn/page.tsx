import Header from "@/ui/header/header";
import React from "react";
import Content from "@/components/learn/content/content";

const LearnPage = () => {
  return (
    <main className="flex flex-col min-h-screen bg-neutral-100 dark:bg-neutral-900">
      <Header />
      <Content />
    </main>
  );
};

export default LearnPage;
