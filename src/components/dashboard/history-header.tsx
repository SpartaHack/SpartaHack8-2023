import React, { useEffect, useState } from "react";
import { useContentStore } from "@/context/content-store";
import useStore from "@/hooks/use-store";
import Loading from "@/app/loading";

const HistoryHeader = () => {
  const contentsFromStore = useStore(
    useContentStore,
    (state) => state.contents,
  );
  const [contents, setContents] = useState(contentsFromStore);

  useEffect(() => {
    setContents(contentsFromStore);
  }, [contentsFromStore]);

  if (!contents) {
    return <Loading />;
  }

  return (
    <>
      <div className="sm:mx-24 md:mt-12 mt-8 mx-12">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="text-4xl flex flex-row group font-sans w-[80%] font-semibold md:mb-4">
            History
          </div>
        </div>
      </div>
      <div className="border-[.5px] sm:mx-24 mx-10 mt-8 dark:border-neutral-800" />
    </>
  );
};

export default HistoryHeader;
