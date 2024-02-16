import React, { ChangeEvent, useCallback, useState, useEffect } from "react";
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
import { useErrorStore } from "@/context/error-context";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@radix-ui/react-tooltip";

// million-ignore
const AddContent = () => {
  const contents = useStore(useContentStore, (state) => state.contents);
  const [contentURL, setContentURL] = useState("");
  const [links, setLinks] = useState<string[]>([]);
  const setError = useErrorStore((state) => state.setError);
  const setToast = useErrorStore((state) => state.setToast);

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
        let addingToast;
        try {
          if (auth.currentUser?.uid) {
            addingToast = toast.loading("Adding", { duration: 90000 });
            const contentStream = await addContent(
              auth.currentUser?.uid,
              contents.space._id,
              [link],
            );

            for await (const content of contentStream!) {
              if ("error" in content) {
                toast.dismiss(addingToast);
                toast.error(content.error);
              } else {
                useContentStore.getState().addContent(content);
                toast.success("Content added");
              }
            }
            toast.dismiss(addingToast);
          } else {
            toast.error("Could not add content");
          }
        } catch (err) {
          toast.dismiss(addingToast);
          if (isAxiosError(err)) {
            setToast!(true);
            setError(err);
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

  const [currentLinkIndex, setCurrentLinkIndex] = useState(0);
  const rotationLinks = [
    "What are black holes?",
    "https://youtu.be/kqtD5dpn9C8",
    "https://youtube.com/playlist?list=PLZHQObO...",
    "https://arxiv.org/pdf/1706.03762.pdf",
    "https://mediaspace.stanford.edu/media/...i257wd8",
  ];

  const updateLinkIndex = () => {
    setCurrentLinkIndex((prevIndex) => (prevIndex + 1) % rotationLinks.length);
  };

  useEffect(() => {
    const interval = setInterval(updateLinkIndex, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <CustomModal
        size="3xl"
        isModalDefaultOpen
        placement="top-center"
        title={
          <div className="rounded-2xl shadow-lg px-4 py-3 bg-black cursor-pointer dark:bg-white text-white dark:text-black dark:white font-semibold font-sans flex flex-row">
            <Icon icon="mingcute:add-fill" className="w-4 h-4 mt-0.5 mr-1" />
            <span className="text-sm truncate font-sans font-semibold">
              Add content
            </span>
          </div>
        }
        btnStyling1="bg-white text-black border dark:border-black dark:bg-black dark:text-white font-sans font-semibold"
        btnStyling2="bg-black text-white border dark:bg-white dark:text-black font-sans font-semibold"
        actionEvent={handleAdd}
        contentTitle={
          <div className="flex flex-col">
            <div className="mt-0.5 font-semibold flex flex-row">
              <Icon icon="mi:add" className="w-4 h-4 mt-0.5 mr-1" />
              <span className="text-sm">Add content</span>
            </div>
            <div className="flex flex-row items-baseline">
              <span className="mt-4 text-3xl font-sans">Upload contents</span>
              <span className="ml-3 text-sm text-neutral-600 dark:text-neutral-400 font-sans font-normal md:block">
                YouTube videos, playlist, PDFs, mediaspace or &nbsp;
                <TooltipProvider>
                  <Tooltip delayDuration={0}>
                    <TooltipTrigger className="group">
                      <span className="font-semibold flex flex-row dark:text-secondary text-green-600 cursor-pointer">
                        search using AI
                          <Icon
                            icon="ph:question-bold"
                            className="ml-1 mt-0.5 h-4 w-4"
                          />
                      </span>
                    </TooltipTrigger>
                    <TooltipContent
                      sideOffset={2}
                      className="mr-12 p-1.5 px-2 duration-150 bg-neutral-900 text-white rounded-xl"
                    >
                      <p className="text-sm">
                        Type your query and let AI search the content
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
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
              placeholder={rotationLinks[currentLinkIndex]}
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
        actionTitle="Add content"
      />
    </>
  );
};

export default AddContent;
