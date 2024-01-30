"use client";
import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  Spinner,
} from "@nextui-org/react";
import { CustomButtonProps } from "../../types";

export const CustomButton = ({
  title,
  size,
  btnStyling,
  popOver,
  popOverTitle,
  popOverClickEvent,
  popOverStyling,
  clickEvent,
  btnType,
  autoFocus,
  fullWidth = true,
  isLoading,
}: CustomButtonProps) => {
  return popOver ? (
    <Popover placement="bottom">
      <PopoverTrigger>
        <Button
          autoFocus={autoFocus}
          fullWidth={fullWidth}
          disableRipple
          size={size}
          type={btnType}
          className={`${btnStyling}`}
        >
          {isLoading && <Spinner size="sm" />}
          {title}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className={`${popOverStyling}`} onClick={popOverClickEvent}>
          <div className="p-2">{popOverTitle}</div>
        </div>
      </PopoverContent>
    </Popover>
  ) : (
    <Button
      fullWidth
      disableRipple
      type={btnType}
      size={size}
      className={`${btnStyling}`}
      onClick={clickEvent}
    >
      {isLoading && <Spinner size="sm" />}
      {title}
    </Button>
  );
};
