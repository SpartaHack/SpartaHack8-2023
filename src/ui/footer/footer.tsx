import React from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react/dist/iconify.js';

const Footer = () => {
  return (
    <footer className='flex justify-between items-center flex-wrap border-t border-neutral-300 dark:border-neutral-700 sm:px-6 py-3'>
      <p className='md:block text-[12px] hidden'>@2023 YouLearn, Inc. All rights reserved</p>

      <div className="flex flex-grow justify-center md:justify-end">
        <div className="flex items-center space-x-3">
          <Link href="https://www.youlearn.ai/contactApp">
              Give Feedback / Contact Us
          </Link>
          <Link href="https://discord.gg/meXu3tZD4q" className="">
              <Icon icon='ic:baseline-discord' className='dark:text-secondary text-black text-xl'/>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;