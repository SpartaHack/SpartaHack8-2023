import React from "react";
import Content from "@/components/learn/content/content";

const LearnPage = ({ params }: { params: { contentId: string } }) => {
  return (
      <Content contentId={params.contentId} />
  );
};

export default LearnPage;
