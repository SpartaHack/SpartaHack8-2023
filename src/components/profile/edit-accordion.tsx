'use client'
import React, { useState } from 'react'
import { Accordion, AccordionItem, Link } from '@nextui-org/react';
import CustomAutocomplete from '../../helpers/custom-autocomplete';
import { educationOptions } from '../../../utils/constants';
import { EditAccordionProps } from '../../../types';
import { CustomButton } from '@/helpers/custom-btn';

const EditAccordion = ({indicator, title, style}: EditAccordionProps) => {
  const [educationLevel, setEducationLevel] = useState("");
  return (
    <Accordion>
        <AccordionItem indicator={indicator || <></>} title={title} className={style}>
          <CustomAutocomplete
            size='lg'
            datas={educationOptions}
            isInvalid={ educationLevel === '' } 
            label='Select education Level' 
            onValueChange={setEducationLevel}
          />
          <CustomButton title='Save Changes' btnType='submit' btnStyling='w-full mt-5 bg-white text-[15px] p-[22px] text-black mb-2 bg-secondary'/>
        </AccordionItem>
    </Accordion>
  )
}

export default EditAccordion