import React from 'react'
import NumberInput from '../../components/ui/NumberInput'
import SelectInput from '../../components/ui/SelectInput'
import SmartTextInput from '../../components/ui/SmartTextInput'
import TextInput from '../../components/ui/TextInput'
import useFormContext from '../../Hooks/useFormContext'

const EducationInfo = () => {
  const { userData, handleChange, handleSmartInputChange, commonInputSetContainerClasses, commonStepFormContainerClasses, optionsData, showOtherUniversity, isValidGradYear, isValidUniversityName } = useFormContext()

  return (
    <div className={commonStepFormContainerClasses}>
      <div className={commonInputSetContainerClasses}>
        <SmartTextInput containerClass=""
          labelClass={((isValidUniversityName) ? " text-green-300" : " text-sh-white ")}
          labelText="University/College"
          infoText='Type or select "Other" only if you cannot find your institution'
          fieldName="universityName"
          fieldValue={userData.universityName}
          handleChange={handleSmartInputChange}
          options={optionsData.universityOptions}
          validator={isValidUniversityName}
          required />
        <TextInput containerClass=""
          labelClass={((userData.major) ? " text-green-300" : " text-sh-white ")}
          labelText="Major(s)"
          fieldName="major"
          placeholder="Computer Science"
          fieldValue={userData.major}
          handleChange={handleChange}
          required
        />
      </div>
      <div className={commonInputSetContainerClasses}>
        <TextInput containerClass=" col-span-2"
          labelClass={((userData.otherUniversity) ? " text-green-300" : " text-sh-white ")}
          inputClass=""
          labelText="Name of other University/College"
          fieldName="otherUniversity"
          fieldValue={userData.otherUniversity}
          handleChange={handleChange}
          hidden={!showOtherUniversity}
          required
        />
      </div>
      <div className={commonInputSetContainerClasses}>
        <SelectInput containerClass=""
          labelClass={((userData.yearOfUndergrad) ? " text-green-300" : " text-sh-white ")}
          inputClass=""
          labelText="Year of Undergraduate Education"
          fieldName="yearOfUndergrad"
          fieldValue={userData.yearOfUndergrad}
          handleChange={handleChange}
          options={optionsData.yearOptions}
          required
        />
        <SelectInput containerClass=""
          labelClass={((userData.graduationYear) ? " text-green-300" : " text-sh-white ")}
          inputClass=""
          labelText="Current Level of Study"
          fieldName="graduationYear"
          fieldValue={userData.graduationYear}
          handleChange={handleChange}
          options={optionsData.studyLevelOptions}
          required
        />

      </div>
    </div>
  )
}

export default EducationInfo