import Loading from "@/app/loading";
import Header from "@/ui/header/header";
import React, { Suspense } from "react";

const learnGroupLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense fallback={<Loading/>}>
      <main className="flex flex-col min-h-screen bg-neutral-100 dark:bg-neutral-900">
        <Header />
        {children}
      </main>
    </Suspense>
  );
};

export default learnGroupLayout;
