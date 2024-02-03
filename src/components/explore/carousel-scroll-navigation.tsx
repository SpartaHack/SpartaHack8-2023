import React from "react";
import { usePagination } from "@nextui-org/react";
import { cn } from "../../../utils";
import { CarouselScrollNavigationProps } from "../../../types";

const CarouselScrollNavigation = ({
  current,
  count,
  handleScroll,
}: CarouselScrollNavigationProps) => {
  const { range } = usePagination({
    total: count,
  });

  return (
      <ul className="flex gap-2 items-center">
        {range.map((index) => {
          return (
            <li key={index} className="w-1.5 h-1.5">
              <button
                className={cn(
                  "w-full h-full bg-default-300 rounded-full",
                  index === current && "bg-tertiary",
                )}
                onClick={() => handleScroll(parseInt(index.toString()) - 1)}
              />
            </li>
          );
        })}
      </ul>
  );
};

export default CarouselScrollNavigation;
