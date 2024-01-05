import { Icon } from "@iconify/react/dist/iconify.js";
import { Features } from "../../types";

export const freePlanBenefits: Features[] = [
  {
    icon: (
      <Icon
        icon="fluent:checkmark-16-filled"
        className="w-4 h-4 lg:w-5 lg:h-5 mt-0.5 text-black dark:text-white mr-4"
      />
    ),
    label: "Add up to 10 content links per space",
  },
  {
    icon: (
      <Icon
        icon="fluent:checkmark-16-filled"
        className="w-4 h-4 lg:w-5 lg:h-5 mt-0.5 text-black dark:text-white mr-4"
      />
    ),
    label: "100 total messages per day with the AI co-pilot",
  },
  {
    icon: (
      <Icon
        icon="fluent:checkmark-16-filled"
        className="w-4 h-4 lg:w-5 lg:h-5 mt-0.5 text-black dark:text-white mr-4"
      />
    ),
    label: "1 dedicated space to organize your content",
  },
];

export const premiumMonthlyPlanBenefits: Features[] = [
  {
    icon: (
      <Icon
        icon="fluent:checkmark-16-filled"
        className="w-4 h-4 lg:w-5 lg:h-5 mt-0.5 text-black dark:text-white mr-4"
      />
    ),
    label: "Add unlimited content links",
  },
  {
    icon: (
      <Icon
        icon="fluent:checkmark-16-filled"
        className="w-4 h-4 lg:w-5 lg:h-5 mt-0.5 text-black dark:text-white mr-4"
      />
    ),
    label: "Unlimited messages with the AI co-pilot",
  },
  {
    icon: (
      <Icon
        icon="fluent:checkmark-16-filled"
        className="w-4 h-4 lg:w-5 lg:h-5 mt-0.5 text-black dark:text-white mr-4"
      />
    ),
    label: "Unlimited spaces to organize your content",
  },
  {
    icon: (
      <Icon
        icon="fluent:checkmark-16-filled"
        className="w-4 h-4 lg:w-5 lg:h-5 mt-0.5 text-black dark:text-white mr-4"
      />
    ),
    label: "Unlimited PDF file uploads of up to 20 MB",
  },
];
