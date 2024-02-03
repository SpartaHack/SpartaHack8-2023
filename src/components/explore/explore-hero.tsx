import React from "react";
import ExploreCarousel from "./explore-carousel";

const ExploreHero = () => {
  return (
    <div className="w-full bg-neutral-900 h-[480px] pt-6">
      <div className="mx-6">
        <h1 className="text-white text-2xl pb-1">Explore your curiosity</h1>
        <span className="text-neutral-500 text-sm">
          Learn from the best, and create yours too
        </span>
        <div className="mt-5 pr-10 w-full flex flex-row justify-center">
          <ExploreCarousel />
        </div>
      </div>
    </div>
  );
};

export default ExploreHero;
