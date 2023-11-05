'use client'
import React, { useState } from 'react'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, User, Switch } from "@nextui-org/react";
import { AccountProps } from '../../../types';
import { Icon } from '@iconify/react';
import { SunIcon } from '@/icon/sun-icon';
import { MoonIcon } from '@/icon/moon-icon';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';

const Account = ({name, description, picture}: AccountProps) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme()
  const [isLightMode, setIsLightMode] = useState(theme == 'light' ? true : false);

  const handleThemeChange = () => {
    setIsLightMode(!isLightMode);
    setTheme(isLightMode ? 'dark' : 'light');
  };

  return (
    <div className='cursor-pointer mt-0.5'>
      <Dropdown radius="sm">
        <DropdownTrigger>
          <Icon icon="charm:person" className=' h-6 w-6' />
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
            <DropdownItem onClick={() => router.push('/signin')}>
              Sign In
            </DropdownItem>
            <DropdownItem onClick={() => router.push('/upgrade')}>
              Upgrade Account
            </DropdownItem>
            <DropdownItem
              isReadOnly
              key="theme"
              className="cursor-pointer"
              onClick={handleThemeChange}
              endContent={
              <Switch
                isSelected={isLightMode} 
                onValueChange={handleThemeChange}
                size="sm"
                color="success"
                startContent={<SunIcon />}
                endContent={<MoonIcon />}
              />
              }
            >
              Theme
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
    )
}

export default Account