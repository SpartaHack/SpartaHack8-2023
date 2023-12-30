"use client";
import React, { useState } from "react";
import { Accordion, AccordionItem, Selection } from "@nextui-org/react";
import CustomAutocomplete from "../../helpers/custom-autocomplete";
import { educationOptions } from "../../../utils/constants";
import { EditAccordionProps } from "../../../types";
import { CustomButton } from "@/helpers/custom-btn";
import { useUserStore } from "@/context/user-context";
import { updateUser } from "@/app/api/user";
import { toast } from "sonner";
import CustomTextInput from "@/helpers/custom-text-input";

//million-ignore
const EditAccordion = ({
  indicator,
  title,
  style,
  photo,
}: EditAccordionProps) => {
  const { userData, userId, updateUserData } = useUserStore();
  const [other, setOther] = useState(userData?.user_profile.education_level);
  const [selectedKeys, setSelectedKeys] = useState(new Set([title.toString()]));
  const otherValue = (
    educationOptions.find(
      (option) => option.value === userData?.user_profile.education_level,
    ) || { value: "Other" }
  ).value;
  const [educationLevel, setEducationLevel] = useState(otherValue);

  const handleSelectionChange = (keys: Selection) => {
    if (typeof keys === "string") {
      setSelectedKeys(new Set([keys]));
    } else if (keys instanceof Set) {
      setSelectedKeys(new Set(Array.from(keys, (key) => key.toString())));
    } else {
      setSelectedKeys(new Set());
    }
  };

  const handleSave = async (photo: string, education: string) => {
    if (education === "Other" && other) {
      education = other;
    }
    const response = await updateUser(
      userId!,
      education,
      photo,
      userData?.user_profile.username!,
    );
    if (response) {
      updateUserData({ education_level: education, photo_url: photo });
      setSelectedKeys(new Set());
    } else {
      toast.error("Could not update your data");
    }
  };

  return (
    <Accordion
      selectedKeys={selectedKeys}
      onSelectionChange={handleSelectionChange}
    >
      <AccordionItem
        indicator={indicator || <></>}
        title={title}
        className={style}
      >
        <CustomAutocomplete
          size="lg"
          allowsCustomValue
          datas={educationOptions}
          isInvalid={educationLevel === ""}
          label="Select education level"
          onValueChange={setEducationLevel}
          initValue={otherValue}
        />
        {(educationLevel || other) === "Other" && (
          <CustomTextInput
            value={other}
            type="other"
            label="Please specify"
            isInvalid={other === ""}
            styling="pt-4 pb-6"
            eventChange={(e) => setOther(e.target.value)}
          />
        )}
        <CustomButton
          title="Save Changes"
          btnType="submit"
          btnStyling="w-full mt-5 text-[15px] p-[22px] text-absolute_black dark:bg-secondary mb-2 bg-secondary border border-neutral-200 dark:border-neutral-700"
          clickEvent={() => handleSave(photo, educationLevel)}
        />
      </AccordionItem>
    </Accordion>
  );
};

export default EditAccordion;
