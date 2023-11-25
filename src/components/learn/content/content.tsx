"use client";
import React from "react";
import { ContentProps } from "../../../../types";
import YoutubeVideo from "./youtube-video";
import PDF from "./pdf";
import TabComponent from "../tabs/tab-component";

const Content = ({ type }: ContentProps) => {
  return (
    <main className="flex-grow min-h-screen">
      <div className="flex flex-col w-full pt-2 pl-2 pr-2 sm:p-4 lg:flex-row">
        {type === "youtube" && <YoutubeVideo />}
        {type === "pdf" && <PDF />}
        <div className="lg:tabs-lg tabs-sm">
          <TabComponent />
        </div>
      </div>
    </main>
  );
};

export default Content;
