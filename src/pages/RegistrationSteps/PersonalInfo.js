import React from 'react'
import DateInput from '../../components/ui/DateInput'
import SelectInput from '../../components/ui/SelectInput'
import TextInput from '../../components/ui/TextInput'
import useFormContext from '../../Hooks/useFormContext'

const PersonalInfo = () => {
  const { userData, handleChange, commonInputSetContainerClasses, commonStepFormContainerClasses, optionsData } = useFormContext()

  return (
    <div className={commonStepFormContainerClasses}>
      <div className={commonInputSetContainerClasses}>
        <TextInput containerClass=""
        labelClass={((userData.countryOfOrigin) ? " text-green-300" : " text-sh-white ")} 
          labelText="Country of Origin"
          fieldName="countryOfOrigin"
          fieldValue={userData.countryOfOrigin}
          handleChange={handleChange}
          required
        />
        <DateInput containerClass=""
        labelClass={((userData.dateOfBirth) ? " text-green-300" : " text-sh-white ")} 
          labelText="Date of Birth (MM/DD/YYYY)"
          fieldName="dateOfBirth"
          max="2009-12-31"
          fieldValue={userData.dateOfBirth}
          handleChange={handleChange}
          required
        />
      </div>
      <div className={commonInputSetContainerClasses}>
        <SelectInput containerClass={" x-4"}
          labelClass={((userData.sex) ? " text-green-300" : " text-sh-white ") + " p-0"}
          labelText="Sex"
          fieldName="sex"
          fieldValue={userData.sex}
          handleChange={handleChange}
          options={optionsData.sexOptions}
          required
        />
        <SelectInput containerClass=""
          labelClass={((userData.race) ? " text-green-300" : " text-sh-white ")} 
          labelText="Race"
          fieldName="race"
          fieldValue={userData.race}
          handleChange={handleChange}
          options={optionsData.raceOptions}
          required
        />
      </div>
    </div>
  )
}

export default PersonalInfo