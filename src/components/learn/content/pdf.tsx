"use client";
import { useLearnStore } from "@/context/learn-context";
import { Worker } from "@react-pdf-viewer/core";
import React, { useEffect, useState } from "react";
import { useStore } from "zustand";
import { Viewer } from "@react-pdf-viewer/core";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/page-navigation/lib/styles/index.css";
import { SpecialZoomLevel } from "@react-pdf-viewer/core";
import Loading from "@/app/loading";

const PDF = () => {
  const [showIframe, setShowIframe] = useState(false);
  const pageNavigationPluginInstance = pageNavigationPlugin();
  const learnContent = useStore(useLearnStore, (state) => state.learnContent);

  let source: number;
  if (learnContent?.source) {
    source = parseInt(learnContent?.source!);
  } else {
    source = 0;
  }
  const pdfUrl = showIframe
    ? learnContent?.metadata.content_url + `#page=${source}`
    : learnContent?.metadata.content_url;

  const renderErrorComponent = () => {
    setShowIframe(true);
    return <Loading />;
  };

  useEffect(() => {
    pageNavigationPluginInstance.jumpToPage(source - 1);
  }, [source]);

  return (
    <div className="lg:w-[70%] w-full items-center justify-center">
      <div className="h-[75vh] lg:h-screen rounded-xl overflow-hidden">
        {!showIframe ? (
          <div className="rounded-xl h-full lg:h-[85.3%] overflow-hidden">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
              <Viewer
                renderError={renderErrorComponent}
                defaultScale={SpecialZoomLevel.PageWidth}
                plugins={[pageNavigationPluginInstance]}
                fileUrl={pdfUrl!}
              />
            </Worker>
          </div>
        ) : (
          <iframe
            key={pdfUrl}
            src={pdfUrl}
            width="100%"
            height={window.innerWidth >= 1024 ? "85%" : "100%"}
            className="rounded-xl border-none"
          />
        )}
      </div>
    </div>
  );
};

export default PDF;
