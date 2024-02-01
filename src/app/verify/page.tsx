"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import SecondaryHeader from "@/ui/header/secondary-header";
import { CustomButton } from "@/helpers/custom-btn";
import { auth } from "../../../db/firebase";
import { sendEmailVerification } from "firebase/auth";
import { toast } from "sonner";
import Link from "next/link";

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
        <div className="w-full flex p-8 space-y-4 max-w-lg items-center justify-center">
          <div className="p-8 space-y-4 max-w-md w-full">
            <h1 className="text-3xl text-center font-black text-black dark:text-white">
              Verify Your Account
            </h1>
            <p className="text-md text-center font-thin text-neutral-500 dark:text-neutral-300">
              Check your inbox or junk email to verify your account.
            </p>
            <CustomButton
              title={<h1 className="font-bold">Resend Email</h1>}
              btnType="button"
              btnStyling="dark:bg-white bg-black text-white py-2 dark:text-black font-bold flex items-center justify-center rounded-md h-[50px] md:w-full mt-8"
              clickEvent={resendEmail}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Verify;
