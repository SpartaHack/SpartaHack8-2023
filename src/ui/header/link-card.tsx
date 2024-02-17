import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { LinkCardProps } from "../../../types";
import { Chip } from "@nextui-org/react";

const LinkCard = ({ link, handleDelete }: LinkCardProps) => {
  const youtubeRegex = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/;
  const pdfOrArxivRegex = /^https:\/\/arxiv.org\/.*|.*\.pdf$/;

  let iconType = "";

  if (youtubeRegex.test(link)) {
    iconType = "mingcute:youtube-line";
  } else if (pdfOrArxivRegex.test(link)) {
    iconType = "bx:file";
  } else {
    iconType = "heroicons:sparkles";
  }

  return (
    <div className="flex flex-row p-2 rounded-lg border-[0.5px] border-neutral-500 justify-between">
      <div className="flex flex-row">
        <Icon icon={iconType} className="ml-1 mt-0.5 text-xl mr-5" />
        {link.includes("amazonaws.com/") ? "Document" : link}
      </div>
      <div className="gap-1 flex flex-row">
        {!youtubeRegex.test(link) && !pdfOrArxivRegex.test(link) && (
          <Chip
            radius="sm"
            variant="bordered"
            classNames={{
              content: "text-black dark:text-white",
              base: "dark:border-secondary border-neutral-300",
            }}
          >
            Searched with AI
          </Chip>
        )}
        <Icon
          icon="basil:cross-solid"
          className="text-2xl hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-full cursor-pointer mt-0.5 mr-1"
          onClick={handleDelete}
        />
      </div>
    </div>
  );
};

export default LinkCard;
