import { Spinner } from "@nextui-org/react";
import React from "react";
import { LoadingProps } from "../../types";

const Loading = ({ styling, size }: LoadingProps) => {
  return (
    <div
      className={
        styling ? styling : `h-screen w-full flex items-center justify-center`
      }
    >
      <Spinner color="current" size={size} />
    </div>
  );
};
export default Loading;
