"use client";
import React, { useEffect } from "react";
import ContentCard from "./content-card";
import { History } from "../../../types";
import useStore from "@/hooks/use-store";
import { getContentHistory, getUser } from "@/app/api/user";
import { auth } from "../../../db/firebase";
import NoHistoryContents from "./no-history-contents";
import { useHistoryStore } from "@/context/history-store";
import HistoryHeader from "./history-header";
import NotSignedIn from "./not-signed-in";
import useAuth from "@/hooks/use-auth";
import { useUserStore } from "@/context/user-context";

const Dashboard = () => {
  const history = useStore(useHistoryStore, (state) => state.history);
  const { setHistory } = useHistoryStore();
  const userId = useAuth();

  useEffect(() => {
    const fetchHistory = async () => {
      if (auth.currentUser?.uid || userId) {
        const response = await getContentHistory(
          auth.currentUser?.uid ? auth.currentUser.uid : userId!,
        );
        setHistory(response?.data);
      }
    };

    fetchHistory();
  }, [userId]);

  const { setUserData } = useUserStore();

  useEffect(() => {
    const fetchUser = async () => {
      if (auth.currentUser?.uid || userId) {
        const response = await getUser(
          auth.currentUser?.uid ? auth.currentUser.uid : userId!,
        );
        setUserData(response?.data);
      }
    };

    fetchUser();
  }, [userId]);

  return (
    <div className="flex-grow">
      <HistoryHeader />
      <NoHistoryContents />
      <NotSignedIn />
      <main className="flex my-12 pb-2 justify-center w-full">
        <div className="grid gap-6 md:gap-12 2xl:grid-cols-4 lg:gap-20 md:grid-cols-2 lg:grid-cols-3 sm:px-24 px-12 sm:grid-cols-2">
          {history &&
            history.map((history: History, key: number) => (
              <ContentCard
                key={key}
                deleteFromHistory
                spaceId={history.space_id}
                type={history.content.type}
                contentID={history.content.content_id}
                contentURL={history.content.content_url}
                title={history.content.title}
                thumbnail_url={history.content.thumbnail_url}
              />
            ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
