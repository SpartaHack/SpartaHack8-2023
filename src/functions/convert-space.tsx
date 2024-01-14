import React from "react";
import { Icon } from "@iconify/react";
import { getUserSpaceResponse } from "../../types";
import { addContent } from "@/app/api/content";
import { auth } from "../../db/firebase";
import { toast } from "sonner";

export function convertSpace(
  spaces: getUserSpaceResponse[],
  contentURL: string,
) {
  const handleMove = async (spaceId: string) => {
    const movingToast = toast.loading("Moving", { duration: 90000 });
    try {
      const contentStream = await addContent(auth.currentUser?.uid!, spaceId, [
        contentURL,
      ]);
      for await (const content of contentStream!) {
        toast.dismiss(movingToast);
        if ("error" in content) {
          toast.error(content.error);
        } else {
          toast.success("Content added");
        }
      }
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
            <span className="ml-6">{space.name}</span>
          </div>
        ),
      },
    ],
  }));
}
