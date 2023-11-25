import React from "react";
import { useContainerHeight } from "@/hooks/use-container-height";
import { ScrollShadow } from "@nextui-org/react";
import { CustomButton } from "@/helpers/custom-btn";
import useStore from "@/hooks/use-store";
import { useLearnStore } from "@/context/learn-context";

const Quiz = () => {
  const learnContent = useStore(useLearnStore, (state) => state.learnContent)
  const type = learnContent?.type!
  const height = useContainerHeight({ type: type });

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
        TEXT FOR DUMMIES sadad TEXT FOR DUMMIES TEXT FOR DUMMIES TEXT FOR
        DUMMIES TEXT FOR DUMMIES
      </ScrollShadow>
      <div className="mt-3 w-full">
        <CustomButton
          btnStyling="w-full bg-secondary text-black"
          title="Submit Quiz"
          btnType="submit"
        />
      </div>
    </div>
  );
};

export default Quiz;
