'use client'
import { Icon } from '@iconify/react';

const HomeLinkBar = () => {
  return (
    <div className="flex justify-center flex-1 mr-[4%] lg:mr-[10%] sm:ml-[3%]">
      <form
        className="flex items-center align-items:center hover:border-[#7DFF97] drop-shadow-sm rounded-[10px] px-1 py-.5 sm:mr-12 ml-5 flex-grow max-w-xl h-[42.5px] bg-white dark:bg-neutral-800 focus-within:ring-2 focus-within:ring-[#7DFF97]"
      >
        <div
          className="header-icons text-neutral-400 text-[35px] dark:text-neutral-400"
        />
          <input
            type="text"
            className="w-full outline-none ml-2"
            placeholder="I want to learn..."
          />
          <div className="absolute right-10 w-px h-full bg-gray-300"/>
          <button type="submit">
            <Icon icon="iconamoon:search-light"
                className="text-[25px] mr-1"
            />
        </button>
      </form>
    </div>
  );
};

export default HomeLinkBar;
