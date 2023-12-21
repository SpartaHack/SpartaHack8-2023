import React, { ChangeEvent, useCallback, useState } from "react";
import { useContentStore } from "@/context/content-store";
import useStore from "@/hooks/use-store";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Chip } from "@nextui-org/react";
import CustomModal from "@/helpers/custom-modal";
import CustomTextInput from "@/helpers/custom-text-input";
import { auth } from "../../../db/firebase";
import { toast } from "sonner";
import { addContent } from "@/app/api/content";
import LinkCard from "./link-card";

const AddContent = () => {
  const contents = useStore(useContentStore, (state) => state.contents);
  const [contentURL, setContentURL] = useState("");
  const [links, setLinks] = useState<string[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContentURL(e.target.value);
  };

  const handleAdd = async () => {
    for (let link of links) {
      toast.loading("Adding");
      try {
        const contentStream = await addContent(
          auth.currentUser?.uid!,
          contents.space._id,
          link,
        );
        for await (const content of contentStream!) {
          useContentStore.getState().addContent(content);
        }
        toast.success("Added successfully");
      } catch (err) {
        toast.error("Could not add content");
      }
      setContentURL("");
    }
    setLinks([]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && contentURL) {
      setLinks((prevLinks) => [...prevLinks, contentURL]);
      setContentURL("");
    }
  };

  const handleDelete = useCallback((indexToRemove: number) => {
    setLinks((prevLinks) =>
      prevLinks.filter((_, index) => index !== indexToRemove),
    );
  }, []);

  console.log(contentURL);
  console.log(links);

  return (
    <>
      <CustomModal
        size="4xl"
        title={
          <div className="shadow-xl rounded-2xl px-4 py-3 bg-black cursor-pointer dark:bg-white text-white dark:text-black dark:white font-semibold font-sans flex flex-row">
            <Icon icon="mi:add" className="w-4 h-4 mt-0.5 mr-1" />
            <span className="text-sm">Add content</span>
          </div>
        }
        btnStyling1="bg-white text-black border dark:border-black dark:bg-black dark:text-white"
        btnStyling2="bg-black text-white border dark:bg-white dark:text-black"
        actionEvent={handleAdd}
        contentTitle={
          <div className="flex flex-col">
            <div className="mt-2 font-semibold flex flex-row">
              <Icon icon="mi:add" className="w-4 h-4 mt-0.5 mr-1" />
              <span className="text-sm">Add content</span>
            </div>
            <div className="flex flex-row justify-between items-baseline">
              <span className="mt-4 text-2xl font-sans">
                Upload videos or PDFs
              </span>
              <span className="text-[12px] text-neutral-400">
                Paste link(PDF & YouTube)
              </span>
            </div>
          </div>
        }
        contentMain={
          <>
            <CustomTextInput
              onKeyDown={handleKeyDown}
              value={contentURL}
              placeholder="https://www.youtube.com/watch?v=xETr0cr1VNk"
              type={"text"}
              eventChange={(e) => handleChange(e)}
              isInvalid={contentURL === ""}
              endContent={
                contentURL !== "" || links.length !== 0 ? (
                  <Chip radius="sm" variant="bordered">
                    Press Enter to add more
                  </Chip>
                ) : (
                  <></>
                )
              }
            />
            {links &&
              links.map((link, index) => (
                <LinkCard
                  key={index}
                  link={link}
                  handleDelete={() => handleDelete(index)}
                />
              ))}
          </>
        }
        footer
        actionTitle="Add Content"
      />
    </>
  );
};

export default AddContent;
