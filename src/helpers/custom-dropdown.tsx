import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, User } from "@nextui-org/react";
import { CustomDropdownProps } from "../../types";


export const CustomDropdown = ({title, sections}: CustomDropdownProps) => {
  return (
    <Dropdown radius="sm" className="pt-3">
      <DropdownTrigger>
        {title}
      </DropdownTrigger>
      <DropdownMenu
        className="p-1"
      >
        {sections.map((section, index) => (
          <DropdownSection aria-label={section.label} key={index}>
            {section.items.map((item, i) => {
                return (
                  <DropdownItem key={i} onClick={item.clickEvent} className={item.dropStyling}>
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
