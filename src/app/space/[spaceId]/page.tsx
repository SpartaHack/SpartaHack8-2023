import React from "react";
import SpaceBoard from "@/components/space/space-board";
import Header from "@/ui/header/header";
import { SpaceParamProps } from "../../../../types";
import { Metadata } from "next";
import { getSpaceSeo } from "@/app/api/generation";

export async function generateMetadata({
  params,
}: SpaceParamProps): Promise<Metadata> {
  let response;
  try {
    response = await getSpaceSeo(params.spaceId);
  } catch (err) {
    // console.log(err)
  }
  return {
    title: response ? response?.data.title : "YouLearn",
    description: response
      ? response?.data.description
      : "YouLearn is reimagining the future of learning by building AI software for students, teachers, and communities to democratize quality education worldwide.",
    metadataBase: new URL("https://app.youlearn.ai"),
  };
}

const SpacePage = ({ params }: SpaceParamProps) => {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <SpaceBoard spaceId={params.spaceId!} />
    </main>
  );
};

export default SpacePage;
