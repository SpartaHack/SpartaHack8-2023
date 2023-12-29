import { Input } from "@nextui-org/react";
import React from "react";
import { CustomTextInputProps } from "../../types";

// million-ignore
const CustomTextInput = ({
  value,
  type,
  label,
  isInvalid,
  eventChange,
  placeholder,
  styling,
  onKeyDown,
  endContent,
  autoFocus,
}: CustomTextInputProps) => {
  return (
    <>
      <Input
        autoFocus={autoFocus}
        placeholder={placeholder}
        value={value as string}
        type={type}
        label={label}
        variant="bordered"
        onKeyDown={onKeyDown}
        labelPlacement="outside"
        color={isInvalid ? "danger" : "success"}
        onChange={eventChange}
        size="lg"
        className={`${styling}` || "max-w-xs"}
        endContent={endContent}
      />
    </>
  );
};

export default CustomTextInput;
