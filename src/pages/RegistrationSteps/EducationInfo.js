import React from 'react'
import NumberInput from '../../components/ui/NumberInput'
import SelectInput from '../../components/ui/SelectInput'
import TextInput from '../../components/ui/TextInput'
import useFormContext from '../../Hooks/useFormContext'

const EducationInfo = () => {
  const { userData, handleChange, commonInputSetContainerClasses, commonStepFormContainerClasses, optionsData, showOtherUniversity, isValidGradYear } = useFormContext()
  console.log(userData.universityName)
  return (
    <div className={commonStepFormContainerClasses}>
      <div className={commonInputSetContainerClasses}>
        <SelectInput containerClass=""
          labelClass={((userData.universityName) ? " text-green-300" : " text-sh-white ")}
          inputClass=""
          labelText="University/College"
          fieldName="universityName"
          fieldValue={userData.universityName}
          handleChange={handleChange}
          options={optionsData.universityOptions}
          autocomplete="on"
        />
        <TextInput containerClass=""
          labelClass={((userData.major) ? " text-green-300" : " text-sh-white ")}
          inputClass=""
          labelText="Major(s)"
          fieldName="major"
          placeholder="Computer Science"
          fieldValue={userData.major}
          handleChange={handleChange}
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
        />
        <NumberInput containerClass=""
          labelClass={((userData.graduationYear) ? ((isValidGradYear) ? " text-green-300" : " text-red-300") : " text-sh-white ")}
          inputClass=""
          labelText="Graduation Year"
          fieldName="graduationYear"
          min="2023"
          placeholder="2023"
          fieldValue={userData.graduationYear}
          handleChange={handleChange}
        />
      </div>
    </div>
  )
}

export default EducationInfo