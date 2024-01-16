"use client";
import { useLearnStore } from "@/context/learn-context";
import { Worker } from "@react-pdf-viewer/core";
import React, { useEffect } from "react";
import { useStore } from "zustand";
import { Viewer } from "@react-pdf-viewer/core";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/page-navigation/lib/styles/index.css";
import { SpecialZoomLevel } from "@react-pdf-viewer/core";

const PDF = () => {
  const pageNavigationPluginInstance = pageNavigationPlugin();
  const learnContent = useStore(useLearnStore, (state) => state.learnContent);

  let source: number;
  if (learnContent?.source) {
    source = parseInt(learnContent?.source!);
  } else {
    source = 0;
  }
  const pdfUrl = learnContent?.metadata.content_url;

  useEffect(() => {
    pageNavigationPluginInstance.jumpToPage(source - 1);
  }, [source]);

  return (
    <div className="lg:w-[70%] w-full items-center justify-center">
      <div className="h-[75vh] lg:h-screen rounded-xl overflow-hidden">
        <div className="rounded-xl h-full lg:h-[85.3%] overflow-hidden">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Viewer
              defaultScale={SpecialZoomLevel.PageWidth}
              plugins={[pageNavigationPluginInstance]}
              fileUrl={pdfUrl!}
            />
          </Worker>
        </div>
      </div>
    </div>
  );
};

export default PDF;
