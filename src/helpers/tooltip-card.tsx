"use client";
import React, { useEffect, useMemo } from "react";
import { Content, TooltipCardProps } from "../../types";
import { useRouter } from "next/navigation";
import useStore from "@/hooks/use-store";
import { useContentStore } from "@/context/content-store";
import Image from "next/image";

const TooltipCard = ({ content }: TooltipCardProps) => {
  const router = useRouter();
  const contentId = content.replace(/^\[|\]$/g, "");
  const regex = /\[[a-zA-Z0-9_-]+\]/;
  const contents = useStore(useContentStore, (state) => state.contents);

  const spaceId = contents && contents.space ? contents.space._id : null;

  const matchedContent = useMemo(() => {
    return contents?.contents?.find(
      (item: Content) => item._id === contentId || item.id === contentId
    );
  }, [contents, contentId]);

  const thumbnailUrl = matchedContent?.thumbnail_url;
  const title = matchedContent?.title;

  const clickCard = () => {
    router.push(`/learn/space/${spaceId}/content/${contentId}`);
  };

  if (regex.test(content) && thumbnailUrl && title) {
    return (
      <div
        className="w-[200px] space-y-2 p-3 drop-shadow-md cursor-pointer hover:scale-105 transition"
        onClick={clickCard}
      >
        <Image
          src={thumbnailUrl}
          alt={content}
          width={360}
          height={200}
          className="rounded-lg"
        />
        <h2 className="rounded-lg">{title}</h2>
      </div>
    );
  } else {
    return <div>{content}</div>;
  }
};

export default TooltipCard;
