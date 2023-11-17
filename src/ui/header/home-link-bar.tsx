'use client'
import React, { useState, useRef } from 'react';
import { Icon } from '@iconify/react';
import BetaLogo from '@/icon/beta-logo';
import YouLearnLogo from '@/icon/youlearn-logo';
import useClickOutside from '@/hooks/use-click-outside';
import Link from 'next/link';
import Image from 'next/image';

const SearchBar = () => {
  const [smallSearch, setSmallSearch] = useState(false);
  const searchBarRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(searchBarRef, () => setSmallSearch(false))

  const searchClick = (e: React.FormEvent) => {
    e.preventDefault();
  };


  return (
    <>
    <div className="flex justify-center flex-1">
      <form
        className="flex items-center align-items:center hover:border-secondary drop-shadow-sm rounded-xl bg-absolute_white px-1 py-.5 md:mr-12 ml-5 flex-grow max-w-xl h-[42.5px] dark:bg-neutral-800 focus-within:ring-2 focus-within:ring-secondary"
      >
        <div
          className="text-neutral-400 text-[35px] dark:text-neutral-400"
        />
          <input
            type="text"
            className="w-full outline-none ml-2 bg-absolute_white dark:bg-transparent"
            placeholder="I want to learn..."
          />
          <button type="submit">
            <Icon icon="iconamoon:search"
              className="h-6 w-6 mr-1"
            />
          </button>
        </form>
      </div>
    {!smallSearch &&
    <>
      <div className='lg:hidden'>
        <Link href="/" className="dark:hidden">
            <Image
              src="youlearn.svg"
              alt="YouLearn"
              width={100}
              height={100}
            />
          </Link>
          <Link href="/" className="dark:block hidden">
            <Image
              src="youlearnDark.svg"
              alt="YouLearn"
              width={100}
              height={100}
            />
          </Link>
      </div>
      <div className='lg:hidden flex justify-between' onClick={() => setSmallSearch(true)}>
        <Icon icon="iconamoon:search-light" className="text-[25px] cursor-pointer mr-1"/>
      </div>
    </>
    }
    {smallSearch && (
      <div ref={searchBarRef} className="lg:hidden w-full">
        <form className="flex items-center align-items:center hover:border-secondary drop-shadow-sm rounded-xl bg-absolute_white px-1 py-.5 flex-grow h-[42.5px] dark:bg-neutral-800 focus-within:ring-2 focus-within:ring-secondary" onSubmit={searchClick}>
          <Icon icon="tabler:plus" className='header-icons'/>
          <input
            type="text"
            className="w-full bg-transparent outline-none pl-2"
            placeholder="I want to learn..."
          />
          <button type="submit">
            <Icon icon="iconamoon:search-light" className="text-[25px]" />
          </button>
        </form>
      </div>
    )}
  </>
  );
};

export default SearchBar;