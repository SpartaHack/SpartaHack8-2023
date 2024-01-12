import React from "react";
import Content from "@/components/learn/content/content";

const LearnPage = ({
  params,
}: {
  params: { spaceId: string; contentId: string };
}) => {
  return (
      <Content spaceId={params.spaceId} contentId={params.contentId} />
  );
};

export default LearnPage;
