import React from "react";
import { useContentStore } from "@/context/content-store";
import useStore from "@/hooks/use-store";
import { Icon } from "@iconify/react/dist/iconify.js";

const NoSpaceContent = () => {
  const contents = useStore(useContentStore, (state) => state.contents);
  return (
    <>
      {contents && contents.contents.length == 0 && (
        <div className="flex w-full mt-24 flex-col items-center justify-center">
          <div className="flex flex-row">
            <h1 className="text-2xl font-sans font-semibold mr-1">
              Add a content to this space
            </h1>
            <Icon
              icon="fluent:arrow-sprint-20-filled"
              className="w-8 h-8 font-black hidden md:block"
              style={{ transform: "rotate(-30deg)" }}
            />
          </div>
          <h2 className="font-sans mt-4 text-neutral-500 text-center md:hidden block">
            Learn twice as fast and personalize with YouLearn. <br /> Avoid the
            tedious convention of just reading and watching.
          </h2>
          <h2 className="font-sans mt-4 text-neutral-500 text-center text-wrap px-8 md:block hidden">
            Learn twice as fast and personalize with YouLearn. Avoid the tedious
            convention of just reading and watching.
          </h2>
        </div>
      )}
    </>
  );
};

export default NoSpaceContent;
