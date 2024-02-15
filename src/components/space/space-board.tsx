"use client";
import React, { useState } from "react";
import { useContentStore } from "@/context/content-store";
import { Content, SpaceBoardProps } from "../../../types";
import useStore from "@/hooks/use-store";
import SpaceHeader from "@/ui/header/space-header";
import ContentCard from "../dashboard/content-card";
import SpaceChatBase from "../dashboard/space-chat-base";
import NoSpaceContent from "./no-space-content";
import { useSpace } from "@/hooks/use-space";
import Loading from "@/app/loading";
import Footer from "@/ui/footer/footer";
import ErrorMessage from "@/helpers/error-message";

const SpaceBoard = ({ spaceId }: SpaceBoardProps) => {
  const { loading } = useSpace(spaceId);
  const contents = useStore(useContentStore, (state) => state.contents);
  const [isLoading, setLoading] = useState(false);

  if (isLoading) {
    return <Loading />;
  }

  return loading ? (
    <Loading />
  ) : (
    <>
      <div className="flex-grow">
        <ErrorMessage />
        <SpaceHeader />
        <NoSpaceContent />
        <main className="flex my-12 pb-2 justify-center w-full">
          <div className="grid gap-6 md:gap-12 lg:gap-20 2xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 sm:px-24 px-12 sm:grid-cols-2">
            {contents &&
              (contents.length === 0 ? (
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
                    setLoading={setLoading}
                  />
                ))
              ))}
          </div>
          <div className="fixed z-2 bottom-0 right-0 drop-shadow-lg lg:mr-10 lg:mb-10 mr-5 mb-5">
            <SpaceChatBase />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default SpaceBoard;
