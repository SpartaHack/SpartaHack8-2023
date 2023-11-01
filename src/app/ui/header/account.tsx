'use client'
import React from 'react'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, Button, User, Tooltip} from "@nextui-org/react";
import { AccountProps } from '@/types';
import { Icon } from '@iconify/react';

const Account = ({name, description, picture}: AccountProps) => {
  return (
    <Tooltip content="Account">
      <div className='cursor-pointer'>
        <Dropdown radius="sm">
          <DropdownTrigger>
            <Icon icon="line-md:account" className='header-icons h-6 w-6' />
          </DropdownTrigger>
          <DropdownMenu className="p-3">
            <DropdownSection showDivider>
              <DropdownItem key="profile" className="opacity-100 h-14 gap-2">
                <User
                  name={name}
                  description={description}
                  classNames={{
                    name: "text-default-600",
                    description: "text-default-500",
                  }}
                  avatarProps={{
                    size: "sm",
                    src: picture,
                  }}
                />
              </DropdownItem>
              <DropdownItem key="settings">Settings</DropdownItem>
              </DropdownSection>

            <DropdownSection aria-label="Preferences" showDivider>
              <DropdownItem key="quick_search">
                Quick search
              </DropdownItem>
            </DropdownSection>  

            <DropdownSection aria-label="Help & Feedback">
              <DropdownItem key="help_and_feedback">
                Help & Feedback
              </DropdownItem>
              <DropdownItem key="logout">
                Log Out
              </DropdownItem>
            </DropdownSection> 
          </DropdownMenu>
        </Dropdown>
      </div>
    </Tooltip>
    )
}

export default Account