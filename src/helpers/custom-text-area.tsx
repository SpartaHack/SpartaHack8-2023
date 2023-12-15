import React from "react";
import { CustomTextAreaProps } from "../../types";
import { Textarea } from "@nextui-org/react";

const CustomTextArea = ({
  value,
  type,
  label,
  isInvalid,
  eventChange,
  styling,
  description,
}: CustomTextAreaProps) => {
  return (
    <div className="mb-2">
    <Textarea
      autoFocus
      minRows={10}
      size="lg"
      value={value as string}
      type={type}
      maxLength={255}
      label={label}
      variant="bordered"
      color={isInvalid ? "danger" : "success"}
      onChange={eventChange}
      className={`${styling}` || "max-w-xs"}
    />
    <p className="text-[12px] text-right text-default-500">{description}</p>
    </div>
  );
};

export default CustomTextArea;
