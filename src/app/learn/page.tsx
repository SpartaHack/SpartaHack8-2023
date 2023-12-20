"use client";
import Header from "@/ui/header/header";
import React, { Suspense } from "react";
import Content from "@/components/learn/content/content";
import Loading from "../loading";
import { useSearchParams } from "next/navigation";
import { useLearnContent } from "@/hooks/use-learn-content";

const LearnPage = () => {
  const params = useSearchParams();
  const contentId = params.get("c");
  const spaceId = params.get("s");
  const { loading } = useLearnContent(contentId!, spaceId!);

  return (
    <main className="flex flex-col min-h-screen bg-neutral-50 dark:bg-neutral-900">
      {loading ? (
        <Loading />
      ) : (
        <Suspense fallback={<Loading />}>
          <Header />
          <Content />
        </Suspense>
      )}
    </main>
  );
};

export default LearnPage;
