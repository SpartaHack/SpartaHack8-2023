"use client";
import { CustomButton } from "@/helpers/custom-btn";
import YouLearnLogo from "@/icon/youlearn-logo";
import { useRouter } from "next/navigation";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  const handleReset = () => {
    reset();
    router.push("/");
  };

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <span className="text-2xl mb-10">An error occurred.</span>
      <CustomButton
        title="Go Back"
        btnType="button"
        btnStyling="mt-10 text-xl w-[10%]"
        clickEvent={handleReset}
      />
    </div>
  );
}
