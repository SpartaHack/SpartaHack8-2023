"use client";
import { CustomButton } from "@/helpers/custom-btn";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function NotFound({}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  const handleReset = () => {
    router.push("/");
  };

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <Image
        unoptimized
        className="dark:hidden"
        src="/errorIcon.svg"
        alt="errorIcon"
        width={300}
        height={300}
      />
      <Image
        unoptimized
        className="hidden dark:block"
        src="/errorIconDark.svg"
        alt="errorIconDark"
        width={300}
        height={300}
      />
      <span className="text-4xl font-sans font-bold mb-4 ">404 Error</span>
      <span className="text-xl font-sans font-semibold mb-4 ">
        Sorry, page not found.
      </span>
      <CustomButton
        title="Back to home"
        btnType="button"
        btnStyling="font-sans mt-10 h-[50.5px] dark:bg-white text-md font-semibold w-[60%] md:w-[20%] bg-black text-white dark:text-black mb-4"
        clickEvent={handleReset}
      />
      <h1 className="mt-2 lg:mb-12 mb-10 text-center">
        Still having trouble? &nbsp;
        <Link href="/contact" className="underline">
          Contact Us
        </Link>
      </h1>
    </div>
  );
}
