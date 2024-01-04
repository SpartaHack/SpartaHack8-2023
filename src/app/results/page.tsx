"use client";
import React, { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Loading from "../loading";
import Header from "@/ui/header/header";
import Footer from "@/ui/footer/footer";
import ResultBoard from "@/components/results/result-board";
import ErrorMessage from "@/helpers/error-message";

const ResultPage = () => {
  const params = useSearchParams();
  const query = params.get("search_query");
  return (
    <main className="flex flex-col min-h-screen">
      <Suspense fallback={<Loading />}>
        <Header />
        <ErrorMessage />
        <ResultBoard query={query!} />
        <Footer />
      </Suspense>
    </main>
  );
};

export default ResultPage;
