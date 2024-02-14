import { useLearnStore } from "@/context/learn-context";
import { useSpaceStore } from "@/context/space-context";
import { convertSpace } from "@/functions/convert-space";
import { CustomDropdown } from "@/helpers/custom-dropdown";
import useStore from "@/hooks/use-store";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const AddToSpace = () => {
  const spaces = useStore(useSpaceStore, (state) => state.spaces);
  const content = useStore(useLearnStore, (state) => state.learnContent);
  return (
    <>
      {spaces && content && (
        <CustomDropdown
          offset={26}
          placement="left"
          title={
            <div className="flex flex-row w-full cursor-pointer items-center">
              <Icon
                icon="fluent:add-32-filled"
                className="mt-1 mr-4 header-icons"
              />
            </div>
          }
          sections={convertSpace(spaces!, content?.content_url!)}
        />
      )}
    </>
  );
};

export default AddToSpace;
