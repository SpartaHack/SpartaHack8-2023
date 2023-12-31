import { Input } from "@nextui-org/react";
import React from "react";

interface CustomTextInputProps {
  value: unknown;
  type?: string;
  label?: string;
  isInvalid?: boolean;
  eventChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  styling?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  endContent?: React.ReactNode;
  autoFocus?: boolean;
  maxLength?: number;
  startContent?: JSX.Element
}

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
  maxLength,
  startContent
}: CustomTextInputProps) => {
  return (
    <>
      <Input
        startContent={startContent}
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
        maxLength={maxLength}
      />
    </>
  );
};

export default CustomTextInput;
