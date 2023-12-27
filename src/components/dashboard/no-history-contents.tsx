import React from "react";
import useStore from "@/hooks/use-store";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useHistoryStore } from "@/context/history-store";

const NoHistoryContents = () => {
  const contents = useStore(useHistoryStore, (state) => state.history);
  return (
    <>
      {contents && contents.length == 0 && (
        <div className="flex w-full mt-24 px-10 flex-col items-center justify-center">
          <div className="flex flex-row">
            <h1 className="text-2xl font-sans text-center font-semibold mr-1">
              Start your learning journey to populate your history
            </h1>
            <Icon
              icon="fluent:arrow-sprint-20-filled"
              className="w-8 h-8 font-black hidden md:block"
              style={{ transform: "rotate(-30deg)" }}
            />
          </div>
          <h2 className="font-sans mt-4 text-neutral-500 text-center md:hidden block">
            Learn at your own pace and track your progress. <br /> Your history
            will be a collection of all the content you&apos;ve learned or
            watched.
          </h2>
          <h2 className="font-sans mt-4 text-neutral-500 text-center text-wrap px-8 md:block hidden">
            Learn at your own pace and track your progress. Your history will be
            a collection of all the content you&apos;ve learned or watched.
          </h2>
        </div>
      )}
    </>
  );
};

export default NoHistoryContents;
