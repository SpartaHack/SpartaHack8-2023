"use client";
import CustomAutocomplete from "@/helpers/custom-autocomplete";
import { CustomButton } from "@/helpers/custom-btn";
import CustomTextInput from "@/helpers/custom-text-input";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { educationOptions } from "../../../utils/constants";
import { useRouter } from "next/navigation";
import { useHandleSignUpFinal } from "@/functions/auth";

// million-ignore
const Form = () => {
  const { handleSignUpFinal, signUpFinalStatus } = useHandleSignUpFinal();
  const [name, setName] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const [customEducation, setCustomEducation] = useState("");
  const [username, setUsername] = useState("");
  const router = useRouter();

  const validateForm = () => {
    const errors = [];

    if (!name) {
      errors.push("Please enter your name.");
    }

    if (!educationLevel) {
      errors.push("Please select your education level.");
    } else if (educationLevel === "Other" && !customEducation) {
      errors.push("Please specify your education level.");
    }

    if (!/^[a-zA-Z0-9_]{3,15}$/.test(username)) {
      errors.push(
        "Please choose a username between 3 and 15 characters, containing only letters, numbers, and underscores.",
      );
    }

    if (errors.length > 0) {
      errors.forEach((error) => toast.error(error));
      return false;
    }

    return true;
  };

  const handleContinue = async () => {
    if (!validateForm()) {
      return;
    }

    const userId = localStorage.getItem("userId")!;
    const email = localStorage.getItem("email")!;
    const photoURL = localStorage.getItem("photoURL")!;
    const finalEducationLevel =
      educationLevel === "Other" ? customEducation : educationLevel;

    handleSignUpFinal(
      userId,
      username.toLowerCase(),
      email,
      photoURL,
      finalEducationLevel,
      name,
    );
  };

  useEffect(() => {
    if (signUpFinalStatus) {
      router.push(signUpFinalStatus);
    }
  }, [signUpFinalStatus, router]);

  return (
    <div className="flex bg-absolute_white dark:bg-black flex-col h-screen items-center justify-center">
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
              styling="bg-transparent"
              eventChange={(e) => setName(e.target.value)}
              autoFocus
            />
            <CustomTextInput
              startContent={<span className="text-neutral-400">@</span>}
              value={username}
              type="username"
              label="Username"
              isInvalid={!/^[a-zA-Z0-9_]{3,15}$/.test(username)}
              styling="pt-4 bg-transparent"
              eventChange={(e) => setUsername(e.target.value.toLowerCase())}
            />
            <CustomAutocomplete
              size="lg"
              datas={educationOptions}
              isInvalid={educationLevel === ""}
              label="Select education level"
              onValueChange={setEducationLevel}
              style={`pt-4 ${
                educationLevel === "Other" ? "bg-transparent" : "pb-6"
              }`}
            />
            {educationLevel === "Other" && (
              <CustomTextInput
                value={customEducation}
                type="customEducation"
                label="Please specify"
                isInvalid={customEducation === ""}
                styling="pt-4 pb-6"
                eventChange={(e) => setCustomEducation(e.target.value)}
              />
            )}
            <CustomButton
              title="Continue"
              btnType="button"
              btnStyling="bg-secondary py-6 text-black font-bold flex items-center justify-center rounded-xl h-[50.5px] w-full"
              clickEvent={handleContinue}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
