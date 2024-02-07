import React, { useEffect } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/helpers/carousel";
import Autoplay from "embla-carousel-autoplay";
import ExploreSpaceCard from "./explore-space-card";
import CarouselScrollNavigation from "./carousel-scroll-navigation";

const ExploreCarousel = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleScroll = (number: number) => {
    if (!api) {
      return;
    }
    api.scrollTo(number);
  };

  return (
    <Carousel
      className="w-full z-10"
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.play}
      opts={{
        align: "start",
        loop: true,
      }}
      setApi={setApi}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="lg:basis-[550px]">
            <div className="p-1">
              <ExploreSpaceCard />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext className="z-12 mr-2 hover:bg-transparent" />
      <div className="absolute top-0 right-0 bottom-0 z-1 w-1/5 bg-gradient-to-r from-transparent via-neutral-900/80 to-neutral-900" />
      <div className="flex mt-6 text-white text-sm justify-center">
        <CarouselScrollNavigation
          current={current}
          count={count}
          handleScroll={handleScroll}
        />
      </div>
    </Carousel>
  );
};

export default ExploreCarousel;
