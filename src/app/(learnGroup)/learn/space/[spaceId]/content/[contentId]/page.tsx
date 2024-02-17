import React from "react";
import Content from "@/components/learn/content/content";
import { Metadata } from "next";
import { getContentSeo } from "@/app/api/generation";
import { LearnParamProps } from "../../../../../../../../types";

export async function generateMetadata({
  params,
}: LearnParamProps): Promise<Metadata> {
  let response;
  try {
    response = await getContentSeo(params.contentId);
  } catch (err) { }

  return {
    title: response ? response?.data.title : "YouLearn",
    description: response
      ? response?.data.description
      : "YouLearn is reimagining the future of learning by building AI software for students, teachers, and communities to democratize quality education worldwide.",
    metadataBase: new URL("https://app.youlearn.ai"),
    twitter: {
      card: "summary_large_image",
    },
    openGraph: {
      images: response ? response?.data.image : "",
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
