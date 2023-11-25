import { CustomButton } from "@/helpers/custom-btn";
import CustomTextInput from "@/helpers/custom-text-input";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSignInEmail } from "@/functions/auth";

const SignInForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signInEmail, signInStatus } = useSignInEmail();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    setState(event.target.value);
  };

  useEffect(() => {
    if (signInStatus) {
      router.push(signInStatus);
    }
  }, [signInStatus, router]);

  const isInvalid = (value: string, type?: string) => {
    if (type === "email") {
      return !emailRegex.test(value);
    }
    return value === "";
  };

  return (
    <div className="mt-8">
      <CustomTextInput
        value={email}
        type="email"
        label="Email"
        isInvalid={isInvalid(email, "email")}
        styling="mb-10 mt-8 bg-transparent"
        eventChange={(e) => handleChange(e, setEmail)}
      />
      <CustomTextInput
        value={password}
        type="password"
        label="Password"
        isInvalid={isInvalid(password)}
        styling="mb-10 bg-transparent"
        eventChange={(e) => handleChange(e, setPassword)}
      />
      <CustomButton
        title="Sign In"
        btnType="submit"
        btnStyling="bg-secondary py-6 text-black font-bold flex items-center justify-center rounded-xl h-[50.5px] w-full"
        clickEvent={() => signInEmail(email, password)}
      />
    </div>
  );
};

export default SignInForm;
