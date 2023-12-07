import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center flex-wrap border-t border-neutral-300 dark:border-neutral-700 sm:px-6 py-3">
      <p className="md:block text-sm hidden text-neutral-500 dark:text-neutral-400">
        @2023 YouLearn, Inc. All rights reserved
      </p>

      <div className="flex flex-grow justify-center md:justify-end">
        <div className="text-sm flex items-center space-x-3">
          <Link href="/feedback">Give Feedback</Link>
          <Link href="/contact" className="hidden sm:block">
            Contact Us
          </Link>
          <Link href="https://discord.gg/meXu3tZD4q">
            <Icon
              icon="ic:baseline-discord"
              className="dark:text-secondary text-black text-xl"
            />
          </Link>
          <Link href="/contact" className="block sm:hidden">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
