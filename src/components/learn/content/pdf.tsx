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
import { Skeleton } from "@nextui-org/react";
import { PDFProps } from "../../../../types";

const PDF = ({ loading }: PDFProps) => {
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
    <div className="lg:w-[70%] w-full rounded-lg items-center justify-center">
      <div className="h-[75vh] lg:h-[85.5vh] overflow-hidden">
        {loading ? (
          <Skeleton className="h-full rounded-lg" />
        ) : (
          <>
            {!showIframe ? (
              <div className="rounded-lg h-full overflow-hidden">
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
                height="100%"
                className="rounded-lg border-none"
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default PDF;
