'use client';
import CustomAutocomplete from "@/helpers/custom-autocomplete";
import { CustomButton } from "@/helpers/custom-btn";
import CustomTextInput from "@/helpers/custom-text-input";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { educationOptions } from "../../../utils/constants";
import { useRouter } from "next/navigation";
import { useHandleSignUpFinal } from "@/functions/auth";

const Form = () => {
  const { handleSignUpFinal, signUpFinalStatus } = useHandleSignUpFinal();
  const [name, setName] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const router = useRouter();

  const handleContinue = async () => {
    if (name !== "" && educationLevel !== "") {
      const userId = localStorage.getItem("userId");
      const email = localStorage.getItem("email");
      const photoURL = localStorage.getItem("photoURL");

      handleSignUpFinal(userId!, email!, photoURL!, educationLevel, name);
    } else {
      toast.error("Error signing up, please try again.");
    }
  };

  useEffect(() => {
    if (signUpFinalStatus) {
      router.push(signUpFinalStatus);
    }
  }, [signUpFinalStatus, router]);

  return (
    <div className="flex bg-white dark:bg-neutral-900 flex-col h-screen items-center justify-center">
      <div className="w-full sm:w-3/5 flex p-8 space-y-4 max-w-lg items-center justify-center">
        <div className="p-8 space-y-4 max-w-md w-full">
          <h1 className="text-3xl text-left font-black">Sign up</h1>
          <p className="pb-5 text-md text-left font-thin text-neutral-500 dark:text-neutral-500">
            Let&apos;s get started with some questions!
          </p>
          <div className="h-full">
            <CustomTextInput
              value={name}
              type="name"
              label="Name"
              isInvalid={name === ""}
              styling="mb-4 mt-8 bg-transparent"
              eventChange={(e) => setName(e.target.value)}
            />
            <CustomAutocomplete
              size="lg"
              datas={educationOptions}
              isInvalid={educationLevel === ""}
              label="Select education Level"
              onValueChange={setEducationLevel}
            />
            <CustomButton
              title="Continue"
              btnType="button"
              btnStyling="mt-12 mt-8 bg-secondary py-6 text-black font-bold flex items-center justify-center rounded-xl h-[50.5px] w-full"
              clickEvent={handleContinue}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;