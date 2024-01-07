"use client";
import React from "react";
import { TooltipCardProps } from "../../types";
import { useRouter } from "next/navigation";
import useStore from "@/hooks/use-store";
import { useContentStore } from "@/context/content-store";
import Image from "next/image";

const TooltipCard = ({ content }: TooltipCardProps) => {
  const router = useRouter();
  const contentId = content.replace(/^\[|\]$/g, "");
  const regex = /\[[A-Za-z0-9_-]+\]/g;
  const contents = useStore(useContentStore, (state) => state.contents);

  const spaceId = contents?.space._id;
  const matchedContent =
    contents &&
    contents.contents?.find((item: { _id: string }) => item._id === contentId);

  const thumbnailUrl = matchedContent?.thumbnail_url;
  const title = matchedContent?.title;

  const clickCard = () => {
    router.push(`/learn?c=${contentId}&s=${spaceId}`);
  };

  if (regex.test(content)) {
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
