"use client";
import React, { useEffect } from "react";
import ContentCard from "./content-card";
import { useContentStore } from "@/context/content-store";
import { History } from "../../../types";
import useStore from "@/hooks/use-store";
import SpaceHeader from "@/ui/header/space-header";
import { getContentHistory } from "@/app/api/user";
import { auth } from "../../../db/firebase";
import NoHistoryContents from "./no-history-contents";

const Dashboard = () => {
  const contents = useStore(useContentStore, (state) => state.contents);
  const { setContents } = useContentStore();

  useEffect(() => {
    const fetchHistory = async () => {
      const historyLoading = localStorage.getItem("historyLoading");
      if (auth.currentUser?.uid && historyLoading === "true") {
        localStorage.setItem("historyLoading", "false");
        const response = await getContentHistory(auth.currentUser?.uid!);
        setContents(response?.data);
      }
    };

    fetchHistory();
  }, [setContents]);

  return (
    <div className="flex-grow">
      <SpaceHeader />
      <NoHistoryContents />
      <main className="lg:my-10 h-full lg:pb-10 md:my-5 lg:ml-6 md:pt-0 pt-10 pb-10 flex justify-center md:px-20 text-center">
        <div className="grid gap-5 md:gap-10 lg:gap-15 2xl:grid-cols-4 md:grid-cols-3 md:w-full justify-center">
          {contents &&
            (contents.space ? (
              <></>
            ) : (
              contents.map((history: History, key: number) => (
                <ContentCard
                  key={key}
                  spaceId={history.space_id}
                  type={history.content.type}
                  contentID={history.content.content_id}
                  contentURL={history.content.content_url}
                  title={history.content.title}
                  thumbnail_url={history.content.thumbnail_url}
                />
              ))
            ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
