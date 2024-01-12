import Header from "@/ui/header/header";
import Content from "@/components/learn/content/content";
import React from "react";

const learnGroupLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col min-h-screen bg-neutral-100 dark:bg-neutral-900">
      <Header />
      {children}
    </main>
  );
};

export default learnGroupLayout;
