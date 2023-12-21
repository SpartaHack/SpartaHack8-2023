import React from "react";
import { Icon } from "@iconify/react";
import { getUserSpaceResponse } from "../../types";
import { addContent } from "@/app/api/content";
import { auth } from "../../db/firebase";
import { useContentStore } from "@/context/content-store";
import { toast } from "sonner";

export function convertSpace(
  spaces: getUserSpaceResponse[],
  contentURL: string,
) {
  const handleMove = async (spaceId: string) => {
    toast.loading("Moving");
    try {
      const contentStream = await addContent(
        auth.currentUser?.uid!,
        spaceId,
        contentURL,
      );
      for await (const content of contentStream!) {
        useContentStore.getState().addContent(content);
      }
      toast.success("Moved successfully");
    } catch (err) {
      toast.error("Could not move content");
    }
  };

  return spaces.map((space, index) => ({
    label: `Section ${index + 1}`,
    items: [
      {
        label: (
          <div
            className="flex flex-row w-full cursor-pointer rounded-xl items-center"
            onClick={() => handleMove(space._id)}
          >
            <Icon icon="bxs:cube" className="h-6 w-6" />
            <span className="ml-6">{space.space_name}</span>
          </div>
        ),
      },
    ],
  }));
}
