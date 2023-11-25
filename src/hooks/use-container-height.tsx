import { useState, useEffect } from "react";
import { useContainerHeightProps } from "../../types";

export const useContainerHeight = ({ type }: useContainerHeightProps) => {
  const [containerWidth, setContainerWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0,
  );
  const [containerHeight, setContainerHeight] = useState(
    typeof window !== "undefined" ? window.innerHeight : 0,
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setContainerWidth(window.innerWidth);
        setContainerHeight(window.innerHeight);
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  let elementWidth;
  let elementHeight;

  if (containerWidth <= 1024) {
    elementWidth = containerWidth * 2;
  } else {
    elementWidth = containerWidth * 0.675;
  }

  if (type === "youtube") {
    elementHeight = (elementWidth * 9) / 16;
  } else {
    elementHeight = containerHeight;
  }

  return elementHeight;
};
