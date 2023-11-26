import { useLearnStore } from "@/context/learn-context";
import React from "react";
import { useStore } from "zustand";

const PDF = () => {
  const learnContent = useStore(useLearnStore, (state) => state.learnContent)
  const pdfUrl = learnContent?.metadata.path;

  return (
    <div className="lg:w-[70%] w-full items-center justify-center">
      <div className="h-[75vh] lg:h-screen">
        <iframe
          key={pdfUrl}
          src={pdfUrl}
          width="100%"
          height="100%"
          className="rounded-xl border-none"
        />
      </div>
    </div>
  );
};

export default PDF;
