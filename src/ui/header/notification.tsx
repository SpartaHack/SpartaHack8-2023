"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { CustomDropdown } from "@/helpers/custom-dropdown";
import React, { useState, useEffect } from "react";
import Pusher from "pusher-js";
import { NotificationProps } from "../../../types";

const pusher = new Pusher("a41d49a2b329a6bb790f", {
  cluster: "us2",
});

//million-ignore
const Notification = () => {
  const [notifications, setNotifications] = useState<NotificationProps[]>([]);

  useEffect(() => {
    const channel = pusher.subscribe("youlearn-ai");

    channel.bind("alerts", (data: NotificationProps) => {
      setNotifications([...notifications, data]);
    });

    return () => {
      pusher.unsubscribe("youlearn-ai");
    };
  }, [notifications]);

  const data = {
    title: (
      <div className="flex flex-row">
        <Icon
          icon="ri:notification-line"
          className="lg:header-icons lg:h-10 lg:w-10 w-6 h-6"
        />
        <div className="lg:hidden">
          <span className="ml-5">Notification</span>
        </div>
      </div>
    ),
    sections: notifications.map((notification) => ({
      label: "Section 1",
      items: [
        {
          label: notification.message,
        },
      ],
    })),
  };

  if (notifications.length == 0) {
    setNotifications([
      {
        id: "-1",
        message: "No new notifications",
      },
    ]);
  }

  return (
    <div className="cursor-pointer mt-1 mr-5">
      <CustomDropdown title={data.title} sections={data.sections} />
    </div>
  );
};

export default Notification;
