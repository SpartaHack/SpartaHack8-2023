"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import SecondaryHeader from "@/ui/header/secondary-header";
import { CustomButton } from "@/helpers/custom-btn";
import { auth } from "../../../db/firebase";
import { sendEmailVerification } from "firebase/auth";
import { toast } from "sonner";

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
      <div className="h-screen w-full text-2xl flex flex-col items-center justify-center">
        Email Verification sent! Check your mailbox
        <CustomButton
          btnStyling="w-[10%] bg-black dark:bg-white mt-5 lg:mb-0 mb-7 text-white dark:text-black dark:white font-semibold font-sans flex items-center justify-center rounded-xl h-[50.5px]"
          title="Resend Email"
          btnType={undefined}
          clickEvent={resendEmail}
        />
      </div>
    </>
  );
};

export default Verify;
