import { addSpace, getSpace } from "@/app/api/endpoints";
import { useContentStore } from "@/context/content-store";
import { useSpaceStore } from "@/context/space-context";
import { useUserStore } from "@/context/user-context";
import CustomModal from "@/helpers/custom-modal";
import CustomTextInput from "@/helpers/custom-text-input";
import useStore from "@/hooks/use-store";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AddSpace = () => {
  const router = useRouter();
  const [spaceName, setSpaceName] = useState("");
  const userId = useStore(useUserStore, (state) => state.userId);
  const { addSpaceToState } = useSpaceStore();
  const { setContents } = useContentStore();

  const handleSpaceCreation = async () => {
    const response = await addSpace(userId!, spaceName, "private");
    if (response?.data) {
      addSpaceToState(response.data);
      const goToSpace = await getSpace(userId!, response.data._id);
      setContents(goToSpace?.data);
      router.push(`/space?s=${response.data._id}`)
    }
  };

  return (
    <div className="w-full">
      <CustomModal
        footer
        title={
          <div className="flex flex-row w-full cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-700 p-2 rounded-xl">
            <Icon
              icon="mdi:folder-add-outline"
              className="h-6 dark:text-neutral-500 text-neutral-400 w-6"
            />
            <span className="text-neutral-400 ml-5 dark:text-neutral-500">
              Add Space
            </span>
          </div>
        }
        contentTitle="Create a space"
        contentMain={
          <>
            <CustomTextInput
              value={spaceName}
              eventChange={(e) => {
                setSpaceName(e.target.value);
              }}
              styling="mt-2 mb-2"
              isInvalid={spaceName === ""}
              type="text"
              label="Space Name"
            />
          </>
        }
        actionTitle="Create New Space"
        actionEvent={() => handleSpaceCreation()}
      />
    </div>
  );
};

export default AddSpace;
