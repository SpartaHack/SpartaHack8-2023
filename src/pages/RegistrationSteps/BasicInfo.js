import React from 'react'
import EmailInput from '../../components/ui/EmailInput'
import TextInput from '../../components/ui/TextInput'
import useFormContext from '../../Hooks/useFormContext'

const BasicInfo = () => {
  const { userData, handleChange, isStudent, commonInputSetContainerClasses, commonStepFormContainerClasses } = useFormContext()
  return (
    <div className={commonStepFormContainerClasses}>
      <div className={commonInputSetContainerClasses}>
        <TextInput containerClass=""
          labelClass={((userData.firstName) ? " text-green-300" : " text-sh-white ")}
          labelText="First Name"
          fieldName="firstName"
          placeholder="Alan"
          fieldValue={userData.firstName}
          handleChange={handleChange}
          required
        />
        <TextInput containerClass=""
          labelClass={((userData.lastName) ? " text-green-300" : " text-sh-white ")}
          labelText="Last Name"
          fieldName="lastName"
          placeholder="Turing"
          fieldValue={userData.lastName}
          handleChange={handleChange}
          required
        />
      </div>
      <div className={commonInputSetContainerClasses}>
        <TextInput containerClass=""
          labelClass={((userData.phone.length === 14) ? " text-green-300" : " text-sh-white ")}
          labelText="Phone Number"
          infoText="Must be a U.S. phone number (+1)"
          fieldName="phone"
          placeholder="9805171234"
          fieldValue={userData.phone}
          handleChange={handleChange}
          required
        />
        <EmailInput containerClass=""
          labelClass={((userData.email) ? ((isStudent) ? " text-green-300" : " text-red-300") : " text-sh-white ")}
          labelText="Student email"
          infoText='Must end with ".edu", ".org" or ".ca"'
          fieldName="email"
          placeholder="turing.alan@mail.edu"
          pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.(edu)|(ca)|(org)|(k12\.mi\.us)$/"
          minLength="6"
          fieldValue={userData.email}
          handleChange={handleChange}
          required
        />
      </div>
    </div>
  )
}

export default BasicInfo