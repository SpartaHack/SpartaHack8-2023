"use client";
import React from "react";
import { useContentStore } from "@/context/content-store";
import { Content, SpaceBoardProps } from "../../../types";
import useStore from "@/hooks/use-store";
import SpaceHeader from "@/ui/header/space-header";
import ContentCard from "../dashboard/content-card";
import SpaceChatBase from "../dashboard/space-chat-base";
import NoSpaceContent from "./no-space-content";

const SpaceBoard = ({ spaceId }: SpaceBoardProps) => {
  const contents = useStore(useContentStore, (state) => state.contents);

  return (
    <div className="flex-grow">
      <SpaceHeader />
      <NoSpaceContent />
      <main className="flex my-12 pb-2 justify-center w-full px-10">
        <div className="grid gap-6 md:gap-12 lg:gap-20 2xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
          {contents &&
            (contents.length == 0 ? (
              <></>
            ) : (
              contents.contents.map((content: Content, key: number) => (
                <ContentCard
                  spaceId={spaceId!}
                  key={key}
                  type={content.type}
                  contentURL={content.content_url}
                  contentID={content.content_id}
                  title={content.title}
                  thumbnail_url={content.thumbnail_url}
                />
              ))
            ))}
        </div>
        <div className="fixed z-2 bottom-0 right-0 drop-shadow-lg lg:mr-10 lg:mb-10 mr-5 mb-5">
          <SpaceChatBase />
        </div>
      </main>
    </div>
  );
};

export default SpaceBoard;
