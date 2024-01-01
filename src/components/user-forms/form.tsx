"use client";
import React, { FormEvent, useState } from "react";
import CustomTextInput from "@/helpers/custom-text-input";
import { CustomButton } from "@/helpers/custom-btn";
import { toast } from "sonner";
import CustomTextArea from "@/helpers/custom-text-area";
import CustomAutocomplete from "@/helpers/custom-autocomplete";
import { feedbackOptions } from "../../../utils/constants";
import { formSubmit } from "@/app/api/form";

// million-ignore
const Form = () => {
  const [selectedFeedback, setSelectedFeedback] = useState("");
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

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (
      !isInvalid(name, "name") &&
      !isInvalid(email, "email") &&
      !isInvalid(message, "message")
    ) {
      const response = await formSubmit(name, email, message, selectedFeedback);
      console.log(response);
      if (response) {
        toast.success("Form submitted!");
        //reset form
        setName("");
        setEmail("");
        setMessage("");
        setSelectedFeedback("");
      } else {
        toast.error("Error submitting the form");
      }
    } else {
      toast.error("Check form");
    }
  };

  const handleScheduleClick = () => {
    window.open(
      "https://app.cal.com/advait-paliwal-personal/youlearn",
      "_blank"
    );
  };

  return (
    <>
      <form className="container mx-auto">
        <div className="flex flex-row">
          <CustomTextInput
            value={name}
            type="name"
            label="Name"
            isInvalid={isInvalid(name, "name")}
            styling="mt-8 bg-transparent w-1/2 mr-2"
            eventChange={(e) => setName(e.target.value)}
          />
          <CustomTextInput
            value={email}
            type="email"
            label="Email"
            isInvalid={isInvalid(email, "email")}
            styling="mt-8 bg-transparent w-1/2 ml-2"
            eventChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <CustomAutocomplete
          allowsCustomValue
          size="lg"
          datas={feedbackOptions}
          isInvalid={selectedFeedback === ""}
          label="Select Feedback Type"
          onValueChange={(value) => setSelectedFeedback(value)}
          style="pb-6 pt-4"
        />
        <CustomTextArea
          value={message}
          type="message"
          label="Message"
          isInvalid={isInvalid(message, "message")}
          styling="mb-2 bg-transparent w-full mr-1"
          eventChange={(e) => setMessage(e.target.value)}
          description={message.length.toString() + "/500"}
          maxLength={500}
        />
        <CustomButton
          title="Send"
          btnType="submit"
          clickEvent={handleSubmit}
          btnStyling="bg-secondary py-6 text-black font-bold flex items-center justify-center rounded-xl h-[50.5px] w-full"
        />
        <CustomButton
          title="👋 Schedule a 20 min meeting with the founders"
          btnType="button"
          btnStyling="bg-black dark:bg-white text-white dark:text-black font-bold flex items-center justify-center rounded-xl h-[50.5px] w-full mt-4"
          clickEvent={handleScheduleClick}
        />
      </form>
    </>
  );
};

export default Form;
