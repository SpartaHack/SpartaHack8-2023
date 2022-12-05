import React from 'react'
import DateInput from '../../components/ui/DateInput'
import SelectInput from '../../components/ui/SelectInput'
import TextInput from '../../components/ui/TextInput'
import useFormContext from '../../Hooks/useFormContext'

const PersonalInfo = () => {
  const { userData, handleChange, commonInputSetContainerClasses, commonStepFormContainerClasses, optionsData, isValidAge } = useFormContext()

  return (
    <div className={commonStepFormContainerClasses}>
      <div className={commonInputSetContainerClasses}>
        <TextInput containerClass=""
        labelClass={((userData.countryOfOrigin) ? " text-green-300" : " text-sh-white ")} 
          labelText="Country of Residence"
          infoText="Your country of origin (primary residence)"
          fieldName="countryOfOrigin"
          fieldValue={userData.countryOfOrigin}
          handleChange={handleChange}
          required
        />
        <TextInput containerClass=""
        labelClass={(userData.age ? (isValidAge ? " text-green-300" : " text-red-300") : " text-sh-white ")} 
          labelText="Age"
          fieldName="age"
          fieldValue={userData.age}
          handleChange={handleChange}
          required
        />
      </div>
      <div className={commonInputSetContainerClasses}>
        <SelectInput containerClass={" x-4"}
          labelClass={((userData.sex) ? " text-green-300" : " text-sh-white ") + " p-0"}
          labelText="Gender"
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
      <div className={commonInputSetContainerClasses}>
        <SelectInput containerClass=" col-span-2"
          labelClass={((userData.stateFrom) ? " text-green-300" : " text-sh-white ")} 
          labelText="Which U.S. state are you attending university/college in?"
          fieldName="stateFrom"
          fieldValue={userData.stateFrom}
          handleChange={handleChange}
          options={optionsData.stateOptions}
          required
        />
      </div>
      
    </div>
  )
}

export default PersonalInfo