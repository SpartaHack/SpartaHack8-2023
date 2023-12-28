"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation"; // Correct this import if necessary
import SecondaryHeader from "@/ui/header/secondary-header"; // Ensure this is the correct path
import { CustomButton } from "@/helpers/custom-btn";
import { auth } from "../../../db/firebase"; // Adjust path as necessary
import { sendEmailVerification } from "firebase/auth";
import { toast } from "sonner"; // Ensure toast is correctly implemented

const Verify = () => {
  const router = useRouter();

  useEffect(() => {
    const intervalId = setInterval(async () => {
      const user = auth.currentUser;
      if (user) {
        await user.reload();
        if (user.emailVerified) {
          router.push("/form");
        }
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [router]);

  const resendEmail = async () => {
    const user = auth.currentUser;
    try {
      if (user) {
        await sendEmailVerification(user);
        toast.message("Verification email sent.");
      }
    } catch (error) {
      toast.error("Error sending verification email. Please try again.");
    }
  };

  return (
    <>
      <SecondaryHeader />
      <div className="flex bg-absolute_white dark:bg-black flex-col h-screen items-center justify-center">
        <div className="w-full sm:w-3/5 flex p-8 space-y-4 max-w-lg items-center justify-center">
          <div className="p-8 space-y-4 max-w-md w-full">
            <h1 className="text-3xl text-left font-black text-black dark:text-white">
              Verify Your Account
            </h1>
            <p className="text-md text-left font-thin text-neutral-500 dark:text-neutral-300">
              Check your mailbox to verify your email.
            </p>
            <CustomButton
              title="Resend Email"
              btnType="button"
              btnStyling="bg-secondary py-2 text-black font-bold flex items-center justify-center rounded-xl h-[50px] w-full mt-4"
              clickEvent={resendEmail}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Verify;
