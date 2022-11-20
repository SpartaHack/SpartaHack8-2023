import BasicInfo from "./BasicInfo";
import EducationInfo from "./EducationInfo";
import PersonalInfo from "./PersonalInfo";
import ExperienceInfo from "./ExperienceInfo";

import React from 'react'
import useFormContext from "../../Hooks/useFormContext";
import AgreementsInfo from "./AgreementsInfo";
import ReviewInfo from "./ReviewInfo";

function FormFields() {
  const { step } = useFormContext();

  const display = {
    1: <BasicInfo />,
    2: <EducationInfo />,
    3: <PersonalInfo />,
    4: <ExperienceInfo />,
    5: <AgreementsInfo />,
    6: <ReviewInfo />
  }

  return (
    <div>
      {display[step]}
    </div>
  )
}

export default FormFields