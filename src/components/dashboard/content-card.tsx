import React from "react";
import { ContentCardProps } from "../../../types";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react/dist/iconify.js";
import { CustomDropdown } from "@/helpers/custom-dropdown";
import { menuDropDown } from "@/functions/content-dropdown-constants";
import { useContentStore } from "@/context/content-store";
import { addContent, deleteContent } from "@/app/api/content";
import { auth } from "../../../db/firebase";
import { toast } from "sonner";
import { useStore } from "zustand";
import { useSpaceStore } from "@/context/space-context";
import { useHistoryStore } from "@/context/history-store";
import Image from "next/image";
import ToastLoadingMessages from "@/functions/toast-loading-messages";

const ContentCard = ({
  contentAdd,
  contentID,
  contentURL,
  spaceId,
  title,
  thumbnail_url,
  deleteFromHistory,
  showDelete = true,
}: ContentCardProps) => {
  const router = useRouter();
  const spaces = useStore(useSpaceStore, (state) => state.spaces);
  const { deleteContentFromState, contents } = useContentStore();
  const { deleteContentFromHistoryState } = useHistoryStore();

  const clickCard = async () => {
    if (contentAdd) {
      const loadContent = toast.loading(ToastLoadingMessages(), {
        duration: 9000,
      });
      const userId = auth.currentUser?.uid ?? "anonymous";
      const contentStream = await addContent(userId, undefined, [contentURL!]);
      for await (const content of contentStream) {
        if ("error" in content) {
          toast.error(content.error);
          return;
        }
      }
      toast.dismiss(loadContent);
    }
    if (!spaceId) {
      router.push(`/learn/content/${contentID}`);
    } else {
      router.push(`/learn/space/${spaceId}/content/${contentID}`);
    }
  };

  const handleDelete = async (
    contentID: string,
    deleteContentFromHistory: boolean = deleteFromHistory!,
  ) => {
    const response = await deleteContent(
      auth.currentUser?.uid!,
      contents.space._id,
      [contentID],
      deleteContentFromHistory,
    );
    if (response) {
      if (deleteContentFromHistory) {
        deleteContentFromHistoryState(contentID);
      }
      deleteContentFromState(contentID);
      toast.success("Deleted content successfully.");
    } else {
      toast.error("Unable to delete content.");
    }
  };

  const handleCopy = async (contentID: string, spaceId?: string) => {
    try {
      let text;
      if (!spaceId) {
        text = `/learn/content/${contentID}`;
      } else {
        text = `/learn/space/${spaceId}/content/${contentID}`;
      }
      if (typeof window !== "undefined") {
        const domainName = window.location.origin;
        await navigator.clipboard.writeText(domainName + text);
        toast.success("Copied!");
      } else {
        throw new Error("Cannot access window object");
      }
    } catch (err) {
      toast.error("Error. Cannot copy.");
    }
  };

  return (
    <div
      className="relative cursor-pointer flex-col justify-center items-center gap-20 drop-shadow-sm rounded-xl hover:shadow-xl hover:scale-105 transition duration-300 border dark:border-neutral-800 max-w-[360px] min-h-full min-w-[220px] group"
      onClick={() => clickCard()}
    >
      <div className="absolute top-2 right-2 p-1 hover:scale-125 duration-200 cursor-pointer rounded-full group-hover:bg-neutral-100 group-hover:dark:bg-neutral-800">
        <CustomDropdown
          closeOnSelect={false}
          title={
            <Icon
              icon="solar:menu-dots-bold"
              rotate={1}
              className="w-4 h-4 opacity-0 group-hover:opacity-100 dark:text-white"
            />
          }
          sections={menuDropDown(
            contentID,
            contentURL!,
            spaceId!,
            handleDelete,
            handleCopy,
            spaces,
            showDelete,
          )}
        />
      </div>
      <div className="rounded-t-xl overflow-hidden">
        <Image
          width-full="true"
          src={thumbnail_url!}
          width={360}
          height={200}
          alt="thumbnail"
        />
      </div>
      <div className="w-full my-2">
        <h5 className="font-semibold px-4 line-clamp-2">{title}</h5>
      </div>
    </div>
  );
};

export default ContentCard;
