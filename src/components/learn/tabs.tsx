import React, { useRef, useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function VideoTabs() {
  const divRef = useRef<HTMLDivElement | null>(null);

  let [tabs] = useState([
    {
      id: "chat",
      label: "Chat",
    },
    {
      id: "summary",
      label: "Summary",
    },
    {
      id: "quiz",
      label: "Quiz",
    },
  ]);

  return (
    <div ref={divRef} className="flex flex-col w-full h-full overflow-hidden">
      <div className="sticky top-0 z-10 pt-6 ml-3 mr-3 overflow-visible bg-white sm:px-0 dark:bg-neutral-800">
        <Tab.Group>
          <Tab.List className="items-center flex rounded-[15px] border dark:border-neutral-700 h-[42.5px] p-1">
            {tabs.map((tab) => (
              <Tab
                key={tab.id}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-[10px] py-1.5 items text-sm font-medium",
                    "ring-white focus:outline-none",
                    selected
                      ? "bg-neutral-100 dark:bg-neutral-900"
                      : "hover:bg-neutral-50 dark:hover:bg-neutral-700"
                  )
                }
              >
                {tab.label}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            <Tab.Panel>
                hi
            </Tab.Panel>
            <Tab.Panel>
              hi
            </Tab.Panel>
            <Tab.Panel>
              he
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
