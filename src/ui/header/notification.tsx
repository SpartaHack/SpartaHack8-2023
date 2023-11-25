"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { CustomDropdown } from "@/helpers/custom-dropdown";
import { NotificationData } from "@/functions/dropdown-contsants";

const Notification = () => {
  const data = {
    title: <Icon icon="ri:notification-line" className="h-6 w-6" />,
    sections: [
      {
        label: "Section 1",
        items: [
          {
            label: "Welcome to YouLearn! A Github for your spaces.",
            clickEvent: () => console.log("Clicked on WebDev"),
          },
        ],
      },
    ],
  };

  return (
    <div className="cursor-pointer mt-1 mr-5">
      <CustomDropdown
        title={NotificationData.title}
        sections={NotificationData.sections}
      />
    </div>
  );
};

export default Notification;
