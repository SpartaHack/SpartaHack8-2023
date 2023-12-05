"use client";
import { CustomButton } from "@/helpers/custom-btn";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Error({}: {
  error: Error & { digest?: string };
}) {
  const router = useRouter();

  const handleReset = () => {
    router.push("/");
  };

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <Image src="errorIcon.svg" alt="YouLearn" width={300} height={300} />
      <span className="text-4xl font-sans font-bold mb-4 ">404 Error</span>
      <span className="text-xl font-sans font-semibold mb-4 ">
        Sorry, error has occurred.
      </span>
      <CustomButton
        title="Back to home"
        btnType="button"
        btnStyling="mt-10 h-[50.5px] text-md font-black w-[60%] md:w-[20%] bg-black text-white mb-24"
        clickEvent={handleReset}
      />
    </div>
  );
}
