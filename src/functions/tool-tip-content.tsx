import { Tooltip } from "@nextui-org/react";
import { TooltipContentProps } from "../../types";
import { useLearnStore } from "@/context/learn-context";

export const TooltipContent = ({ source, children }: TooltipContentProps) => {
  const { updateLearnContent} = useLearnStore();
  let tooltipContent = "Source";
  if (source && typeof children === "string") {
    const key = parseInt(children.replace(/\*/g, ""), 10);
    tooltipContent = source[key - 1] || "Source";
  }
  const handleSource = () => {
    const source = tooltipContent.substring(1, tooltipContent.length - 1)
    updateLearnContent({ source: source })
  }

  return (
    <Tooltip className="border" content={tooltipContent}>
      <sup className="text-[10px] px-[4px] py-[2px] rounded-full bg-neutral-300 hover:invert dark:bg-neutral-700 cursor-pointer" onClick={handleSource}>
        {children}
      </sup>
    </Tooltip>
  );
};
