const HomeLinkBar = () => {
  return (
    <div className="flex justify-center flex-1 mr-[4%] lg:mr-[10%] sm:ml-[3%]">
      <form
        className="flex items-center align-items:center hover:border-[#7DFF97] drop-shadow-sm rounded-[15px] px-1 py-.5 sm:mr-12 ml-5 flex-grow max-w-xl h-[42.5px] bg-white dark:bg-neutral-800 focus-within:ring-2 focus-within:ring-[#7DFF97]"
      >
        <div
          className="header-icons text-neutral-400 text-[35px] dark:text-neutral-400"
        />
        <input
          type="text"
          className="w-full focus:outline-none bg-inherit dark:bg-neutral-800"
        />
        <button type="submit" className="hidden">
          Submit
        </button>
      </form>
    </div>
  );
};

export default HomeLinkBar;
