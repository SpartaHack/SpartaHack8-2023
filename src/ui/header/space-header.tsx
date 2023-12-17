import React, { ChangeEvent, useState } from "react";
import { useContentStore } from "@/context/content-store";
import useStore from "@/hooks/use-store";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Spinner, Switch } from "@nextui-org/react";
import CustomModal from "@/helpers/custom-modal";
import CustomTextInput from "@/helpers/custom-text-input";
import { useSpaceStore } from "@/context/space-context";
import { getUserSpaceResponse } from "../../../types";
import { addContent, updateSpace } from "@/app/api/endpoints";
import { auth } from "../../../db/firebase";
import { toast } from "sonner";

const SpaceHeader = () => {
  const contents = useStore(useContentStore, (state) => state.contents);
  const [editSpaceName, setEditSpaceName] = useState("");
  const [contentURL, setContentURL] = useState("");
  const [spacePrivacy, setSpacePrivacy] = useState(true);

  if (!contents) {
    return <Spinner color="current" size="sm" />;
  }

  const spaceName = contents.space ? contents.space.space_name : "History";

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setEditSpaceName(e.target.value);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setContentURL(e.target.value);
  };

  const handleSave = async (spacePrivacy: boolean, editSpaceName: string) => {
    const updatedDataSpace = {
      _id: contents.space._id,
      space_name: editSpaceName,
      visibility: spacePrivacy ? "private" : "public",
    } as Partial<getUserSpaceResponse>;

    const updatedData = {
      _id: contents.space._id,
      space_name: editSpaceName,
    };

    const response = await updateSpace(
      auth.currentUser?.uid!,
      contents.space._id,
      editSpaceName,
      spacePrivacy ? "private" : "public"
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

  const handleAdd = async () => {
    const contentStream = await addContent(
      auth.currentUser?.uid!,
      contents.space._id,
      contentURL
    );

    if (contentStream) {
      for await (const content of contentStream) {
        useContentStore.getState().addContent(content);
      }
    }
    setContentURL("");
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
                actionEvent={() => handleSave(spacePrivacy, editSpaceName)}
                contentTitle="Edit your space"
                contentMain={
                  <>
                    <Switch
                      color="success"
                      isSelected={spacePrivacy}
                      onValueChange={setSpacePrivacy}
                    >
                      Make space private
                    </Switch>
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
              <CustomModal
                title={
                  <div className="shadow-xl rounded-2xl px-4 py-3 bg-black cursor-pointer dark:bg-white text-white dark:text-black dark:white font-semibold font-sans flex flex-row">
                    <Icon icon="mi:add" className="w-4 h-4 mt-0.5 mr-1" />
                    <span className="text-sm">Add content</span>
                  </div>
                }
                btnStyling1="bg-white text-black border dark:border-black dark:bg-black dark:text-white"
                btnStyling2="bg-black text-white border dark:bg-white dark:text-black"
                actionEvent={handleAdd}
                contentTitle="Add content"
                contentMain={
                  <CustomTextInput
                    value={contentURL}
                    type={"text"}
                    eventChange={(e) => handleChange(e, setContentURL)}
                    isInvalid={contentURL === ""}
                    label={"Add content URL"}
                  />
                }
                footer
                actionTitle="Add Content"
              />
            </div>
          )}
        </div>
      </div>

      <div className="border-[.5px] sm:mx-24 mx-10 mt-8 dark:border-neutral-800" />
    </>
  );
};

export default SpaceHeader;
