import React from "react";
import SpaceBoard from "@/components/space/space-board";
import Header from "@/ui/header/header";
import Footer from "@/ui/footer/footer";

const SpacePage = ({ params }: { params: { spaceId: string } }) => {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <SpaceBoard spaceId={params.spaceId!} />
    </main>
  );
};

export default SpacePage;
