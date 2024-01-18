import React from "react";
import Content from "@/components/learn/content/content";
import { Metadata } from "next";
import { getContent } from "@/app/api/generation";

type Props = {
  params: { contentId: string; spaceId?: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const response = await getContent("anonymous", params.contentId, "");
  return {
    title: response?.data.title,
    description:
      response?.data.generations.summary ?? response?.data.generations.summary,
    metadataBase: new URL("https://app.youlearn.ai"),
    twitter: {
      card: "summary_large_image",
    },
    openGraph: {
      images: response?.data.thumbnail_url ?? response?.data.thumbnail_url,
    },
  };
}

const LearnPage = ({
  params,
}: {
  params: { contentId: string; spaceId: string };
}) => {
  return <Content spaceId={params.spaceId} contentId={params.contentId} />;
};

export default LearnPage;
