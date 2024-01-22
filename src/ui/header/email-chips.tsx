import { Chip, ScrollShadow } from "@nextui-org/react";
import React from "react";

export type EmailChipsProps = {
  chips: string[];
  setChips: React.Dispatch<React.SetStateAction<string[]>>;
};

const EmailChips = ({ chips, setChips }: EmailChipsProps) => {
  const handleRemove = (chipToRemove: string) => {
    setChips((prevLinks) => prevLinks.filter((chip) => chip !== chipToRemove));
  };

  return (
    <ScrollShadow
      className="flex flex-row overflow-x-auto"
      hideScrollBar
      size={20}
      orientation="horizontal"
    >
      {chips.map((chip, index) => (
        <Chip key={index} onClose={() => handleRemove(chip)}>
          {chip}
        </Chip>
      ))}
    </ScrollShadow>
  );
};

export default EmailChips;
