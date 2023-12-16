import React from "react";
import { useContainerHeight } from "@/hooks/use-container-height";
import { ScrollShadow } from "@nextui-org/react";
import useCopyToClipboard from "@/hooks/use-copy-clipboard";
import { Icon } from "@iconify/react/dist/iconify.js";
import useStore from "@/hooks/use-store";
import { useLearnStore } from "@/context/learn-context";

const Summary = () => {
  const learnContent = useStore(useLearnStore, (state) => state.learnContent);
  const type = learnContent?.type!;
  const height = useContainerHeight({ type: type });

  const { copiedState, copyToClipboard } = useCopyToClipboard();
  const copiedStateTyped: { [key: number]: boolean } = copiedState;

  return (
    <div
      className="lg:h-full h-[70vh] flex-col flex"
      style={{ maxHeight: `${height - 90}px` }}
    >
      <ScrollShadow
        size={5}
        hideScrollBar
        className="flex-grow overflow-hidden overflow-y-auto rounded-xl"
      >
        <div className="bg-white dark:bg-neutral-900 dark:text-white text-black my-2 rounded-xl p-4 leading-relaxed drop-shadow-sm mr-auto lg:max-w-full w-fit">
          <div className="flex-grow leading-7">
            {learnContent?.generations.summary}
          </div>
          <div className="flex justify-end p-2 cursor-pointer">
            {copiedStateTyped[0] ? (
              <Icon
                icon="charm:tick"
                className="text-xl text-tertiary dark:text-secondary"
              />
            ) : (
              <Icon
                icon="ci:copy"
                onClick={() =>
                  copyToClipboard(learnContent?.generations.summary!, 0)
                }
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
