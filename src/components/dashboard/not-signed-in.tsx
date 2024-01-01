import React from "react";
import { CustomButton } from "@/helpers/custom-btn";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/use-auth";

const NotSignedIn = () => {
  const router = useRouter();
  const userId = useAuth();
  return (
    <>
      {!userId && (
        <div className="flex w-full mt-6 px-10 flex-col items-center justify-center">
          <div className="flex w-[5rem] items-center justify-center">
            <CustomButton
              title={<h1 className="font-sans text-sm">Sign In</h1>}
              btnType="button"
              btnStyling="dark:bg-white bg-black text-white py-2 dark:text-black font-semibold flex items-center justify-center rounded-xl h-[40px]"
              clickEvent={() => router.push("/signin")}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default NotSignedIn;
