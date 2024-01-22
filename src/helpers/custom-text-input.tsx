import { Input } from "@nextui-org/react";
import React from "react";

export type CustomTextInputProps = {
  value: unknown;
  type?: string;
  label?: string | JSX.Element;
  isInvalid?: boolean;
  eventChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  styling?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  endContent?: React.ReactNode;
  autoFocus?: boolean;
  maxLength?: number;
  classNames?: any;
  startContent?: JSX.Element;
  labelPlacement?: "outside" | "outside-left" | "inside" | undefined;
};

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
  startContent,
  classNames,
  labelPlacement = "outside",
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
        labelPlacement={labelPlacement}
        color={isInvalid ? "danger" : "success"}
        onChange={eventChange}
        size="lg"
        className={`${styling}` || "max-w-xs"}
        endContent={endContent}
        maxLength={maxLength}
        classNames={classNames}
      />
    </>
  );
};

export default CustomTextInput;
