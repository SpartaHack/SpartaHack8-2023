"use client";
import React, { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  User,
  Switch,
} from "@nextui-org/react";
import { AccountProps } from "../../../types";
import { Icon } from "@iconify/react";
import { SunIcon } from "@/icon/sun-icon";
import { MoonIcon } from "@/icon/moon-icon";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { logOut } from "@/functions/auth";
import useAuth from "@/hooks/use-auth";
import useCheckPro from "@/hooks/use-check-pro";

//million-ignore
const Account = ({ name, description, picture }: AccountProps) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [isLightMode, setIsLightMode] = useState(
    theme == "light" ? true : false,
  );
  const userId = useAuth();

  const handleThemeChange = () => {
    setIsLightMode(!isLightMode);
    setTheme(isLightMode ? "dark" : "light");
  };
  const isPro = useCheckPro();

  const handleLogOut = () => {
    router.push("/");
    logOut();
  };

  const handleProfile = () => {
    localStorage.setItem("profile", "true");
    router.push("/profile");
  };

  return (
    <div className="cursor-pointer mt-1">
      <Dropdown radius="sm" closeOnSelect={false}>
        <DropdownTrigger>
          <div className="flex flex-row">
            <Icon
              icon="bx:user"
              className="md:header-icons md:h-10 md:w-10 w-6 h-6"
            />
            <div className="lg:hidden md:mt-2">
              <span className="ml-5">Account</span>
            </div>
          </div>
        </DropdownTrigger>
        <DropdownMenu className="p-3">
          <DropdownSection showDivider>
            <DropdownItem
              key="profile"
              className="opacity-100 h-14 gap-2"
              onClick={handleProfile}
            >
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

          <DropdownSection aria-label="Settings" showDivider>
            <DropdownItem onClick={() => router.push("/pricing")}>
              {isPro ? "Pro Learner" : "Upgrade"}
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

          <DropdownSection aria-label="Auth">
            <DropdownItem
              key="Contact us"
              onClick={() => router.push("/contact")}
            >
              Contact us
            </DropdownItem>
            {userId ? (
              <DropdownItem key="logout" onClick={handleLogOut}>
                Sign out
              </DropdownItem>
            ) : (
              <DropdownItem onClick={() => router.push("/signin")}>
                Sign in
              </DropdownItem>
            )}
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default Account;
