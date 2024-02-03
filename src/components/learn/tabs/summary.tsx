import React from "react";
import { useContainerHeight } from "@/hooks/use-container-height";
import { ScrollShadow } from "@nextui-org/react";
import useCopyToClipboard from "@/hooks/use-copy-clipboard";
import { Icon } from "@iconify/react/dist/iconify.js";
import useStore from "@/hooks/use-store";
import { useLearnStore } from "@/context/learn-context";
import { replaceMessage } from "../../../../utils";
import Response from "./response";
import markdownComponents from "@/functions/markdown-components";

const Summary = () => {
  const learnContent = useStore(useLearnStore, (state) => state.learnContent);
  const type = learnContent?.type!;
  const dimensions = useContainerHeight({ type: type });
  const summary = learnContent
    ? replaceMessage(type, learnContent?.generations.summary!)
    : { replacedMessage: "", sources: [""] };
  const { copiedState, copyToClipboard } = useCopyToClipboard();
  const copiedStateTyped: { [key: number]: boolean } = copiedState;

  return (
    <div
      className="lg:h-full h-[70vh] flex-col flex"
      style={
        type === "youtube" || type === "mediaspace"
          ? { maxHeight: `${dimensions.elementHeight - 90}px` }
          : { maxHeight: `${dimensions.elementHeight - 100}px` }
      }
    >
      <ScrollShadow
        size={5}
        hideScrollBar
        className="flex-grow overflow-hidden overflow-y-auto rounded-lg"
      >
        <div className="bg-white dark:bg-neutral-900 dark:text-white text-black my-2 rounded-lg p-4 leading-relaxed drop-shadow-sm mr-auto lg:max-w-full w-fit">
          <Response
            message={summary.replacedMessage}
            source={summary.sources}
            additionalMarkdown={markdownComponents}
          />
          <div className="flex justify-end p-2 cursor-pointer">
            {copiedStateTyped[0] ? (
              <Icon
                icon="charm:tick"
                className="text-xl text-[#04E762] dark:text-secondary"
              />
            ) : (
              <Icon
                icon="ci:copy"
                onClick={() => copyToClipboard(summary.replacedMessage, 0)}
                className="text-xl cursor-pointer"
              />
            )}
          </div>
        </div>
      </ScrollShadow>
    </div>
  );
};

export default Summary;
