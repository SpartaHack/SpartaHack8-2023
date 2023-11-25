import { Input } from "@nextui-org/react";
import React from "react";
import { CustomTextInputProps } from "../../types";

const CustomTextInput = ({
  value,
  type,
  label,
  isInvalid,
  eventChange,
  styling,
}: CustomTextInputProps) => {
  return (
    <>
      <Input
        autoFocus
        value={value as string}
        type={type}
        label={label}
        variant="bordered"
        labelPlacement="outside"
        color={isInvalid ? "danger" : "success"}
        onChange={eventChange}
        size="lg"
        className={`${styling}` || "max-w-xs"}
      />
    </>
  );
};

export default CustomTextInput;
