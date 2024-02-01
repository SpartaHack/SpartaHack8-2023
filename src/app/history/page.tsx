"use client";
import React, { Suspense } from "react";
import Dashboard from "@/components/dashboard/dashboard";
import Footer from "@/ui/footer/footer";
import ErrorMessage from "@/helpers/error-message";
import useAmplitudeInit from "@/hooks/use-amplitude";
import Loading from "../loading";
import Header from "@/ui/header/header";

export default function App() {
  useAmplitudeInit();
  return (
    <main className="flex flex-col min-h-screen">
      <Suspense fallback={<Loading />}>
        <Header />
        <ErrorMessage />
        <Dashboard />
        <Footer />
      </Suspense>
    </main>
  );
}
