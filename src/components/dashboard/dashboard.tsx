"use client";
import React, { useEffect } from "react";
import ContentCard from "./content-card";
import { useContentStore } from "@/context/content-store";
import { History } from "../../../types";
import useStore from "@/hooks/use-store";
import SpaceHeader from "@/ui/header/space-header";
import { getHistory } from "@/app/api/endpoints";
import { auth } from "../../../db/firebase";

const Dashboard = () => {
  const contents = useStore(useContentStore, (state) => state.contents);
  const { setContents } = useContentStore();

  useEffect(() => {
    const fetchHistory = async () => {
      const response = await getHistory(auth.currentUser?.uid!);
      setContents(response?.data);
    };

    fetchHistory();
  }, []);

  return (
    <div className="flex-grow">
      <SpaceHeader />
      <main className="lg:my-10 h-full lg:pb-10 md:my-5 lg:ml-6 md:pt-0 pt-10 pb-10 flex justify-center md:px-20 text-center">
        <div className="grid gap-5 md:gap-10 lg:gap-15 2xl:grid-cols-4 md:grid-cols-3 md:w-full justify-center">
          {contents &&
            (contents.space ? (
              <></>
            ) : (
              contents.map((content: History, key: number) => (
                <ContentCard
                  key={key}
                  spaceId={content.space_id}
                  type={content.content.type}
                  contentID={content.content.content_id}
                  title={content.content.title}
                  thumbnail_url={content.content.thumbnail_url}
                />
              ))
            ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
