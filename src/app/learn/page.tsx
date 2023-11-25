"use client";
import Header from "@/ui/header/header";
import React, { Suspense, useEffect } from "react";
import Content from "@/components/learn/content/content";
import Loading from "../loading";
import { useStore } from "zustand";
import { useLearnStore } from "@/context/learn-context";
import { useSearchParams } from "next/navigation";
import { auth } from "../../../db/firebase";
import { getContent } from "../api/endpoints";

const LearnPage = () => {
  const learnContent = useStore(useLearnStore, (state) => state.learnContent);
  const setLearnContent = useStore(
    useLearnStore,
    (state) => state.setLearnContent,
  );
  const params = useSearchParams();
  const contentId = params.get("c");
  const spaceId = params.get("s");

  useEffect(() => {
    if (contentId && auth.currentUser?.uid) {
      const fetchData = async () => {
        let response;

        if (spaceId) {
          response = await getContent(
            auth.currentUser?.uid!,
            contentId,
            spaceId,
          );
          if (response && response.data) {
            response.data.space_id = spaceId;
          }
        } else {
          response = await getContent(auth.currentUser?.uid!, contentId);
        }
        if (response?.data) {
          setLearnContent(response.data);
        }
      };
      fetchData();
    }
  }, [contentId, spaceId]);

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
