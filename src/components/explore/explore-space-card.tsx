import { Card, CardFooter, Image } from "@nextui-org/react";

const ExploreSpaceCard = () => {
  return (
    <Card className="relative w-[512px] h-[288px] rounded-lg cursor-pointer overflow-hidden">
      <Image
        removeWrapper
        alt="space"
        className="z-0 w-full h-full object-cover rounded-lg"
        src="https://i.ytimg.com/vi/GPIuPRqDGG8/hq720.jpg"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-900" />
      <CardFooter className="absolute rounded-b-lg bottom-0 pl-6 pb-6 z-10">
        <div className="flex flex-grow items-center">
          <div className="flex flex-col">
            <p className="text-absolute_white text-lg">
              Python 101: Master the Fundamentals{" "}
            </p>
            <p className="text-neutral-400 text-sm">by achyut_benz19</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ExploreSpaceCard;
