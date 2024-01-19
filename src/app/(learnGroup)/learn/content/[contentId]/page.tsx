import React from "react";
import Content from "@/components/learn/content/content";
import { getContent } from "@/app/api/generation";
import { Metadata } from "next";
import { ParamProps } from "../../../../../../types";

export async function generateMetadata({
  params,
}: ParamProps): Promise<Metadata> {
  const response = await getContent("anonymous", params.contentId, "");
  return {
    title: response?.data.title ? response?.data.title : "YouLearn",
    description: response?.data.generations.summary
      ? response?.data.generations.summary
      : "YouLearn is reimagining the future of learning by building AI software for students, teachers, and communities to democratize quality education worldwide.",
    metadataBase: new URL("https://app.youlearn.ai"),
    twitter: {
      card: "summary_large_image",
    },
    openGraph: {
      images: response?.data.thumbnail_url ? response?.data.thumbnail_url : "",
    },
  };
}

const LearnPage = ({ params }: { params: { contentId: string } }) => {
  return <Content contentId={params.contentId} />;
};

export default LearnPage;
