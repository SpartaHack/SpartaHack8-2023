'use client'
import React, { FormEvent, useState } from 'react'
import CustomTextInput from "@/helpers/custom-text-input";
import { CustomButton } from "@/helpers/custom-btn";
import { toast } from 'sonner';

const Form = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const isInvalid = (value: string, type?: string) => {
        if (type === "email") {
          return !emailRegex.test(value);
        }
        return value === "";
      };
    
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        if (!isInvalid(name, "name") && !isInvalid(email, "email") && !isInvalid(message, "message")) {
            toast.success("Submitted")
        } else {
            toast.error("Check form")
        }
    }

  return (
    <>
            <form className="container mx-auto" onSubmit={handleSubmit}>
            <div className="flex flex-row">
                <CustomTextInput
                    value={name}
                    type="name"
                    label="Name"
                    isInvalid={isInvalid(name, "name")}
                    styling="mb-4 mt-8 bg-transparent w-1/2 mr-2"
                    eventChange={(e) => setName(e.target.value)}
                />
                <CustomTextInput
                    value={email}
                    type="email"
                    label="Email"
                    isInvalid={isInvalid(email, "email")}
                    styling="mb-2 mt-8 bg-transparent w-1/2 ml-2"
                    eventChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <CustomTextInput
                    value={message}
                    type="message"
                    label="Message"
                    isInvalid={isInvalid(message, "message")}
                    styling="mb-4 mt-8 bg-transparent w-full mr-1"
                    eventChange={(e) =>setMessage(e.target.value)}
                />
            </div>
            <CustomButton
                title="Send"
                btnType="submit"
                btnStyling="bg-black dark:bg-white text-white dark:text-black font-bold flex items-center justify-center rounded-xl h-[50.5px] w-full mb-8"
            />
            </form>
    </>
  )
}

export default Form