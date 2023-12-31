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
import ContentUploader from "./content-uploader";
import { isAxiosError } from "axios";

// million-ignore
const AddContent = () => {
  const contents = useStore(useContentStore, (state) => state.contents);
  const [contentURL, setContentURL] = useState("");
  const [links, setLinks] = useState<string[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContentURL(e.target.value);
  };

  const handleLinkUpload = (link: string) => {
    const newLinks = [...links, link];
    setLinks(newLinks);
  };

  const handleAdd = async () => {
    const newLinks = contentURL === "" ? [...links] : [...links, contentURL];
    setLinks(newLinks);
    if (newLinks.length !== 0) {
      for (let link of newLinks) {
        const addingToast = toast.loading("Adding", { duration: 90000 });
        try {
          const contentStream = await addContent(
            auth.currentUser?.uid!,
            contents.space._id,
            [link],
          );
          for await (const content of contentStream!) {
            if ("error" in content) {
              toast.error(content.error);
            } else {
              useContentStore.getState().addContent(content);
              toast.success("Content added");
            }
          }
          toast.dismiss(addingToast);
        } catch (err) {
          console.log(err);
          toast.dismiss(addingToast);
          if (isAxiosError(err)) {
            if (err.response?.status === 401) {
              toast.error("Sign in to add a content");
            } else if (err.response?.status === 402) {
              toast.error(
                "You have reached the maximum number of contents. Upgrade to add more.",
              );
            }
          }
        }
      }
    } else {
      toast.error("Content link cannot be empty.");
    }
    setContentURL("");
    setLinks([]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && contentURL) {
      if (links.length < 5 && !links.includes(contentURL)) {
        setLinks((prevLinks) => [...prevLinks, contentURL]);
        setContentURL("");
      } else if (links.includes(contentURL)) {
        toast.warning("You have already added this content");
      } else if (links.length >= 5) {
        toast.warning("Only 5 contents can be added at once");
      }
    }
  };

  const handleDelete = useCallback((indexToRemove: number) => {
    setLinks((prevLinks) =>
      prevLinks.filter((_, index) => index !== indexToRemove),
    );
  }, []);

  return (
    <>
      <CustomModal
        size="2xl"
        title={
          <div className="rounded-2xl px-4 py-3 bg-black cursor-pointer dark:bg-white text-white dark:text-black dark:white font-semibold font-sans flex flex-row">
            <Icon icon="mi:add" className="w-4 h-4 mt-0.5 mr-1" />
            <span className="text-sm truncate">Add content</span>
          </div>
        }
        btnStyling1="bg-white text-black border dark:border-black dark:bg-black dark:text-white"
        btnStyling2="bg-black text-white border dark:bg-white dark:text-black"
        actionEvent={handleAdd}
        contentTitle={
          <div className="flex flex-col">
            <div className="mt-0.5 font-semibold flex flex-row">
              <Icon icon="mi:add" className="w-4 h-4 mr-1" />
              <span className="text-sm">Add content</span>
            </div>
            <div className="flex flex-row items-baseline">
              <span className="mt-4 text-3xl font-sans">
                Upload videos or PDFs
              </span>
              <span className="ml-3 text-sm text-neutral-600 dark:text-neutral-400">
                Paste link and / or upload file (PDF & YouTube)
              </span>
            </div>
          </div>
        }
        contentMain={
          <>
            <CustomTextInput
              autoFocus
              onKeyDown={handleKeyDown}
              value={contentURL}
              placeholder="https://youtu.be/kqtD5dpn9C8"
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
            <ContentUploader handleLinkUpload={handleLinkUpload} />
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
