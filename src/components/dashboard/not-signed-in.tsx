import React from "react";
import { auth } from "../../../db/firebase";
import { CustomButton } from "@/helpers/custom-btn";
import { useRouter } from "next/navigation";

const NotSignedIn = () => {
  const router = useRouter();
  return (
    <>
      {!auth.currentUser?.uid && (
        <div className="flex w-full mt-8 px-10 flex-col items-center justify-center">
          <div className="flex space-y-4 w-[12rem] items-center justify-center">
            <CustomButton
              title={<h1 className="font-bold">Sign in</h1>}
              btnType="button"
              btnStyling="dark:bg-white bg-black text-white py-2 dark:text-black font-bold flex items-center justify-center rounded-xl h-[50px] mt-4"
              clickEvent={() => router.push("/signin")}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default NotSignedIn;
