"use client";
import React, { useState, useRef } from "react";
import { Icon } from "@iconify/react";
import BetaLogo from "@/icon/beta-logo";
import YouLearnLogo from "@/icon/youlearn-logo";
import useClickOutside from "@/hooks/use-click-outside";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();
  const [smallSearch, setSmallSearch] = useState(false);
  const searchBarRef = useRef<HTMLDivElement | null>(null);
  const [query, setQuery] = useState("");

  useClickOutside(searchBarRef, () => setSmallSearch(false));

  const searchClick = (e: React.FormEvent) => {
    e.preventDefault();
    if (query) {
      router.push(`/results?search_query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <>
      <motion.div
        className="hidden lg:flex"
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <YouLearnLogo size="lg" />
        <BetaLogo />
      </motion.div>
      <div className="hidden lg:flex justify-center lg:mr-[180px] flex-1">
        <form
          className="flex items-center align-items:center hover:border-secondary rounded-lg bg-absolute_white px-1 py-.5 ml-5 flex-grow max-w-xl h-[42.5px] border border-neutral-200 dark:bg-black dark:border-neutral-800 focus-within:ring-2 focus-within:ring-secondary transition-all duration-150"
          onSubmit={searchClick}
        >
          <input
            type="text"
            className="w-full outline-none ml-3 bg-absolute_white dark:bg-transparent"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">
            <Icon
              icon="uil:search"
              className="md:header-icons md:h-10 md:w-10 w-6 h-6 text-neutral-400"
            />
          </button>
        </form>
      </div>
      {!smallSearch && (
        <>
          <motion.div
            className="lg:hidden mr-2"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <YouLearnLogo size="lg" />
          </motion.div>
          <div
            className="lg:hidden flex mr-1 justify-between"
            onClick={() => setSmallSearch(true)}
          >
            <Icon icon="uil:search" className="w-6 h-6 cursor-pointer" />
          </div>
        </>
      )}
      {smallSearch && (
        <div ref={searchBarRef} className="lg:hidden w-full">
          <form
            className="flex items-center align-items:center hover:border-secondary hover:bg-white rounded-lg bg-absolute_white px-1 py-.5 flex-grow h-[42.5px] border border-neutral-200 dark:bg-black dark:border-neutral-800 focus-within:ring-2 focus-within:ring-secondary transition-all duration-150"
            onSubmit={searchClick}
          >
            <input
              type="text"
              className="w-full bg-transparent outline-none pl-2"
              placeholder="Search..."
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />
            <button type="submit">
              <Icon icon="uil:search" className="w-6 h-6" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default SearchBar;
