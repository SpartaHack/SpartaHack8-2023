import React from "react";
import SpaceBoard from "@/components/space/space-board";
import Header from "@/ui/header/header";
import { SpaceParamProps } from "../../../../types";
import { Metadata } from "next";
import { getSpace } from "@/app/api/space";

export async function generateMetadata({
  params,
}: SpaceParamProps): Promise<Metadata> {
  let response
  try {
    response = await getSpace("anonymous", params.spaceId);
  } catch (err) {
    // console.log(err)
  }
  return {
    title: response ? response?.data.space.name : "YouLearn",
    description: response
      ? response?.data.space.description
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
