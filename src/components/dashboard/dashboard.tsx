"use client";
import React, { useEffect, useState } from "react";
import ContentCard from "./content-card";
import SpaceChatBase from "./space-chat-base";
import { useContentStore } from "@/context/content-store";
import { Content, History } from "../../../types";
import useStore from "@/hooks/use-store";
import SpaceHeader from "@/ui/header/space-header";

const Dashboard = () => {
  const contents = useStore(useContentStore, (state) => state.contents);
  const [spaceId, setSpaceId] = useState(null);

  useEffect(() => {
    console.log(contents)
    if (contents && contents.space) {
      setSpaceId(contents.space._id);
    }
  }, [contents]);

  return (
    <div className="flex-grow">
      <SpaceHeader />
      <main className="lg:my-10 h-full lg:pb-10 md:my-5 lg:ml-6 py-10 flex justify-center md:px-20 text-center">
        <div className="grid gap-5 md:gap-10 lg:gap-15 2xl:grid-cols-4 md:grid-cols-3 md:w-full justify-center">
          {contents &&
            (contents.space
              ? contents.contents.map((content: Content, key: number) => (
                  <ContentCard
                    spaceId={spaceId!}
                    key={key}
                    type={content.type}
                    contentID={content.content_id}
                    title={content.title}
                    thumbnail_url={content.thumbnail_url}
                  />
                ))
              : contents.map((content: History, key: number) => (
                  <ContentCard
                    key={key}
                    spaceId={content.space_id}
                    type={content.content.type}
                    contentID={content.content.content_id}
                    title={content.content.title}
                    thumbnail_url={content.content.thumbnail_url}
                  />
                )))}
        </div>
        <div className="fixed z-2 bottom-0 right-0 drop-shadow-lg lg:mr-10 lg:mb-10 mr-5 mb-5">
          <SpaceChatBase />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
