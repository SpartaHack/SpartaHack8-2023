'use client'
import React, { useState } from 'react'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, User, Switch } from "@nextui-org/react";
import { AccountProps } from '../../../types';
import { Icon } from '@iconify/react';
import { SunIcon } from '@/icon/sun-icon';
import { MoonIcon } from '@/icon/moon-icon';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import { logOut } from '../../../utils';

const Account = ({name, description, picture}: AccountProps) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme()
  const [isLightMode, setIsLightMode] = useState(theme == 'light' ? true : false);

  const handleThemeChange = () => {
    setIsLightMode(!isLightMode);
    setTheme(isLightMode ? 'dark' : 'light');
  };

  return (
    <div className='cursor-pointer mt-1'>
      <Dropdown radius="sm">
        <DropdownTrigger>
          <div className='flex flex-row'>
            <Icon icon="bx:user" className='md:header-icons md:h-10 md:w-10 w-6 h-6' />
            <div className='lg:hidden'>
                <span className='ml-5 mt-1'>Account</span>
            </div>
        </div>
        </DropdownTrigger>
        <DropdownMenu className="p-3">
          <DropdownSection showDivider>
            <DropdownItem key="profile" className="opacity-100 h-14 gap-2" onClick={() => router.push('/profile')}>
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
            </DropdownSection>

          <DropdownSection aria-label="Preferences" showDivider>
            <DropdownItem onClick={() => router.push('/signin')}>
              Sign In
            </DropdownItem>
            <DropdownItem onClick={() => router.push('/upgrade')}>
              Upgrade
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
            <DropdownItem key="logout" onClick={logOut}>
              Log Out
            </DropdownItem>
          </DropdownSection> 
        </DropdownMenu>
      </Dropdown>
    </div>
    )
}

export default Account