import { useEffect, useState } from "react";
import { Tooltip } from "@nextui-org/react";
import { TooltipContentProps } from "../../types";
import { useLearnStore } from "@/context/learn-context";
import React from "react";
import TooltipCard from "@/helpers/tooltip-card";

const sourceMapping: { [key: string]: number } = {};
let sup = 1;

export const TooltipContent = ({ source, children }: TooltipContentProps) => {
  const { updateLearnContent } = useLearnStore();
  const [tooltipContent, setTooltipContent] = useState<string>("1");

  useEffect(() => {
    if (source && typeof children === "string") {
      const key = parseInt(children.replace(/\*/g, ""), 10);
      const sourceValue = source[key - 1] || "Source";
      if (!(sourceValue in sourceMapping)) {
        sourceMapping[sourceValue] = sup++;
      }
      setTooltipContent(sourceValue);
    }
  }, [children, sourceMapping, source]);

  const handleSource = () => {
    if (source && typeof children === "string") {
      const key = parseInt(children.replace(/\*/g, ""), 10);
      var sourceValue = source[key - 1] || "Source";
      sourceValue = tooltipContent.substring(1, tooltipContent.length - 1);
      updateLearnContent({ source: sourceValue });
    }
  };

  const key =
    typeof children === "string"
      ? parseInt(children.replace(/\*/g, ""), 10)
      : -1;
  const sourceValue = key !== -1 ? source![key - 1] || "Source" : "Source";
  const supValue =
    sourceValue in sourceMapping
      ? sourceMapping[sourceValue].toString()
      : "Source";

  return (
    <Tooltip content={<TooltipCard content={sourceValue} />}>
      <sup
        className="text-[10px] px-[4px] py-[2px] rounded-full bg-neutral-300 hover:invert dark:bg-neutral-700 cursor-pointer"
        onClick={handleSource}
      >
        {supValue}
      </sup>
    </Tooltip>
  );
};
