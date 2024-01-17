"use client";
import React, { Suspense } from "react";
import Header from "../ui/header/header";
import Dashboard from "@/components/dashboard/dashboard";
import Loading from "./loading";
import Footer from "@/ui/footer/footer";
import ErrorMessage from "@/helpers/error-message";
import useAmplitudeInit from "@/hooks/use-amplitude";

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
