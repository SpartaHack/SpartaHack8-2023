import React, { ChangeEvent, useState } from "react";
import { useContentStore } from "@/context/content-store";
import useStore from "@/hooks/use-store";
import { Icon } from "@iconify/react/dist/iconify.js";
import CustomModal from "@/helpers/custom-modal";
import CustomTextInput from "@/helpers/custom-text-input";
import { useSpaceStore } from "@/context/space-context";
import { getUserSpaceResponse } from "../../../types";
import { updateSpace } from "@/app/api/space";
import { auth } from "../../../db/firebase";
import { toast } from "sonner";
import AddContent from "./add-content";
import { Spinner } from "@nextui-org/react";

const SpaceHeader = () => {
  const contents = useStore(useContentStore, (state) => state.contents);
  const [editSpaceName, setEditSpaceName] = useState("");

  if (!contents) {
    return <Spinner color="current" size="sm" />;
  }

  const spaceName = contents.space ? contents.space.name : "History";

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setEditSpaceName(e.target.value);
  };

  const handleSave = async (editSpaceName: string) => {
    const updatedDataSpace = {
      _id: contents.space._id,
      name: editSpaceName,
    } as Partial<getUserSpaceResponse>;

    const updatedData = {
      _id: contents.space._id,
      name: editSpaceName,
    };

    const response = await updateSpace(
      auth.currentUser?.uid!,
      contents.space._id,
      editSpaceName,
      "private"
    );
    if (response) {
      useSpaceStore.getState().updateSpaceData(updatedData);
      useContentStore.getState().updateContent(updatedDataSpace);
      toast.success("Space updated successfully.");
    } else {
      toast.error("Could not update space.");
    }
    setEditSpaceName("");
  };

  return (
    <>
      <div className="sm:mt-16 sm:mx-24 mx-12 mt-8 ">
        <div className="font-sans font-medium text-neutral-500 mb-4">
          / {spaceName}
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="text-4xl flex flex-row group font-sans font-semibold mb-4">
            {spaceName}
            {spaceName !== "History" && (
              <CustomModal
                footer
                title={
                  <Icon
                    icon="lucide:pen"
                    className="opacity-0 h-5 w-5 mt-2 ml-2 cursor-pointer group-hover:opacity-50"
                  />
                }
                actionTitle="Save"
                actionEvent={() => handleSave(editSpaceName)}
                contentTitle="Edit your space"
                contentMain={
                  <>
                    <CustomTextInput
                      styling="mt-3 pt-1 mb-2"
                      value={editSpaceName}
                      type={"text"}
                      label={"Edit Space Name"}
                      isInvalid={editSpaceName == ""}
                      eventChange={(e) =>
                        handleInputChange(e, setEditSpaceName)
                      }
                    />
                  </>
                }
              />
            )}
          </div>
          {spaceName !== "History" && (
            <div className="flex flex-row mt-3 md:mt-0 space-between">
              <AddContent />
            </div>
          )}
        </div>
      </div>

      <div className="border-[.5px] sm:mx-24 mx-10 mt-8 dark:border-neutral-800" />
    </>
  );
};

export default SpaceHeader;
