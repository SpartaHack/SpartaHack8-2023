import { Skeleton } from "@nextui-org/react";
import React from "react";

const SummarySkeleton = () => {
  return (
    <div className="w-full mt-3 flex flex-col">
      <Skeleton className="flex w-full h-96 rounded-lg text-right" />
    </div>
  );
};

export default SummarySkeleton;
