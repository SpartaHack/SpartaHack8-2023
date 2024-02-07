import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/react";
import { CustomDropdownProps } from "../../types";

export const CustomDropdown = ({
  title,
  offset,
  sections,
  placement,
  closeOnSelect,
}: CustomDropdownProps) => {
  return (
    <Dropdown
      offset={offset}
      closeOnSelect={closeOnSelect}
      radius="sm"
      className="pt-3"
      placement={placement}
    >
      <DropdownTrigger>{title}</DropdownTrigger>
      <DropdownMenu className="p-1">
        {sections.map((section, index) => (
          <DropdownSection aria-label={section.label} key={index}>
            {section.items.map((item, i) => {
              return (
                <DropdownItem
                  key={i}
                  onClick={item.clickEvent}
                  className={item.dropStyling}
                >
                  {item.label}
                </DropdownItem>
              );
            })}
          </DropdownSection>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};
