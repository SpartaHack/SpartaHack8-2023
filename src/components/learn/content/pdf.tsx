import { useLearnStore } from "@/context/learn-context";
import React from "react";
import { useStore } from "zustand";

const PDF = () => {
  const learnContent = useStore(useLearnStore, (state) => state.learnContent);

  let source;
  if (learnContent?.source) {
    source = parseInt(learnContent?.source!);
  } else {
    source = 0;
  }
  const pdfUrl = learnContent?.metadata.content_url + `#page=${source}`;

  return (
    <div className="lg:w-[70%] w-full items-center justify-center">
      <div className="h-[75vh] lg:h-screen">
      <iframe
        key={pdfUrl}
        src={pdfUrl}
        width="100%"
        className="rounded-xl border-none h-full lg:h-[85%]"
      />
      </div>
    </div>
  );
};

export default PDF;