// TODO: Connect api routes 
// TODO: finish css styling

"use client"

import CustomTextInput from "@/helpers/custom-text-input";
import { CustomButton } from "@/helpers/custom-btn";
import SecondaryHeader from "@/ui/header/secondary-header";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const FeedbackPage = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    return (    
        <div className="flex bg-white dark:bg-neutral-900 flex-col h-screen items-center justify-center">
        <SecondaryHeader/>
        <div className="w-full sm:w-4/5 flex-col p-8 space-y-4 max-w-lg items-center justify-center">
            <h1 className="text-4xl font-bold mb-6 text-center">Share your feedback</h1>
            <form className="container mx-auto">
            <div className="flex flex-row">
                <CustomTextInput
                    value={name}
                    type="name"
                    label="Name"
                    isInvalid={name === ""}
                    styling="mb-4 mt-8 bg-transparent w-1/2 mr-2"
                    eventChange={(e) => setName(e.target.value)}
                />
                <CustomTextInput
                    value={email}
                    type="email"
                    label="Email"
                    // isInvalid={isInvalid(email, "email")}
                    styling="mb-2 mt-8 bg-transparent w-1/2 ml-2"
                    eventChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <CustomTextInput
                    value={message}
                    type="message"
                    label="Message"
                    isInvalid={message === ""}
                    styling="mb-4 mt-8 bg-transparent w-full mr-1"
                    eventChange={(e) =>setMessage(e.target.value)}
                />
            </div>
            <CustomButton
                title="Send"
                btnType="submit"
                btnStyling="bg-black dark:bg-white text-white dark:text-black font-bold flex items-center justify-center rounded-xl h-[50.5px] w-full mb-8"
                // clickEvent={() => signInEmail(email, password)}
            />
            </form>
            <h1 className="text-center">
                We greatly appreciate your feedback!
            </h1>
        </div>
        </div>
      );
};

export default FeedbackPage;
