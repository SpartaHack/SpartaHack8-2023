'use client'
import React, { useState, useRef } from 'react';
import { Icon } from '@iconify/react';
import BetaLogo from '@/icon/beta-logo';
import YouLearnLogo from '@/icon/youlearn-logo';
import useClickOutside from '@/hooks/use-click-outside';

const SearchBar = () => {
  const [smallSearch, setSmallSearch] = useState(false);
  const searchBarRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(searchBarRef, () => setSmallSearch(false))

  const searchClick = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <div className='hidden lg:flex'>
        <YouLearnLogo size='lg'/>
        <BetaLogo/>
      </div>
      <div className="hidden lg:flex justify-center lg:mr-[180px] flex-1">
        <form className="flex items-center align-items:center hover:border-secondary drop-shadow-sm rounded-xl bg-absolute_white px-1 py-.5  ml-5 flex-grow max-w-xl h-[42.5px] dark:bg-neutral-800 focus-within:ring-2 focus-within:ring-secondary">
          <input
            type="text"
            className="w-full outline-none ml-3 bg-absolute_white dark:bg-transparent"
            placeholder="Upload pdf or youtube link..."
          />
          <button type="submit">
            <Icon icon="mi:add" className="md:header-icons md:h-9 md:w-9 w-6 h-6"/>
          </button>
        </form>
      </div>
    {!smallSearch &&
    <>
      <div className='lg:hidden mr-2'>
        <YouLearnLogo size='lg'/>
      </div>
      <div className='lg:hidden flex mr-1 justify-between' onClick={() => setSmallSearch(true)}>
        <Icon icon="mi:add" className="w-6 h-6 cursor-pointer"/>
      </div>
    </>
    }
    {smallSearch && (
      <div ref={searchBarRef} className="lg:hidden w-full">
        <form className="flex items-center align-items:center hover:border-secondary drop-shadow-sm rounded-xl bg-absolute_white px-1 py-.5 flex-grow h-[42.5px] dark:bg-neutral-800 focus-within:ring-2 focus-within:ring-secondary" onSubmit={searchClick}>
          <input
            type="text"
            className="w-full bg-transparent outline-none pl-2"
            placeholder="Upload pdf or youtube link..."
          />
          <button type="submit">
            <Icon icon="mi:add" className="w-6 h-6" />
          </button>
        </form>
      </div>
    )}
  </>
  );
};

export default SearchBar;