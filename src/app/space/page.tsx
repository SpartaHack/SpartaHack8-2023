"use client";
import React, { Suspense } from "react";
import Header from "../../ui/header/header";
import Loading from ".././loading";
import Footer from "@/ui/footer/footer";
import { useSearchParams } from "next/navigation";
import SpaceBoard from "@/components/space/space-board";
import ErrorMessage from "@/helpers/error-message";

export default function App() {
  const params = useSearchParams();
  const spaceId = params.get("s");
  return (
    <main className="flex flex-col min-h-screen">
      <Suspense fallback={<Loading />}>
        <Header />
        <ErrorMessage />
        <SpaceBoard spaceId={spaceId!} />
        <Footer />
      </Suspense>
    </main>
  );
}
