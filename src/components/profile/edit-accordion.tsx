'use client'
import React, { useState } from 'react'
import { Accordion, AccordionItem, Link } from '@nextui-org/react';
import CustomAutocomplete from '../../helpers/custom-autocomplete';
import { educationOptions } from '../../../utils/constants';
import { EditAccordionProps } from '../../../types';
import { CustomButton } from '@/helpers/custom-btn';
import { useUserStore } from '@/context/user-context';
import { updateUser } from '@/app/api/endpoints';

const EditAccordion = ({indicator, title, style, photo}: EditAccordionProps) => {
  const [educationLevel, setEducationLevel] = useState("");
  const { userData, userId, updateUserData } = useUserStore();

  const handleSave = async (photo: string, education: string) => {
    const response = await updateUser(userId!, education, photo)
    if (response) {
      updateUserData({ education_level: education, photo_url: photo });
    }
  }

  return (
    <Accordion>
        <AccordionItem indicator={indicator || <></>} title={title} className={style}>
          <CustomAutocomplete
            size='lg'
            datas={educationOptions}
            isInvalid={ educationLevel === '' } 
            label='Select education Level' 
            onValueChange={setEducationLevel}
            initValue={userData?.user_profile.education_level}
          />
          <CustomButton title='Save Changes' btnType='submit' btnStyling='w-full mt-5 text-[15px] p-[22px] text-absolute_black dark:bg-secondary mb-2 bg-secondary border border-neutral-200 dark:border-neutral-700' clickEvent={() => handleSave(photo, educationLevel)}/>
        </AccordionItem>
    </Accordion>
  )
}

export default EditAccordion