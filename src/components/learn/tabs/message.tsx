import React from "react";
import Response from "./response";
import { MessageProps } from "../../../../types";
import { Icon } from "@iconify/react/dist/iconify.js";

const Message = ({
  message,
  index,
  copiedState,
  copyToClipboard,
}: MessageProps) => {
  return (
    <div
      key={index}
      className={
        message.type === "bot"
          ? "bg-white dark:bg-neutral-900 dark:text-white text-black my-2 rounded-xl p-4 leading-relaxed mr-auto lg:max-w-full w-fit"
          : "bg-absolute_white dark:bg-secondary border dark:border-none text-black my-2 w-fit rounded-xl p-4 leading-relaxed ml-auto break-words"
      }
    >
      <Response message={message.response} source={message.sources} />

      {message.type === "bot" && (
        <div className="flex mt-2 ml-auto space-x-2 w-fit">
          {copiedState[`${index}`] ? (
            <Icon
              icon="charm:tick"
              className="text-xl text-tertiary dark:text-secondary"
            />
          ) : (
            <Icon
              icon="ci:copy"
              onClick={() => copyToClipboard(message.response, index)}
              className="text-xl cursor-pointer"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Message;
