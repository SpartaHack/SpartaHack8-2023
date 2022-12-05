import React from 'react'
import { useState } from 'react'
import FileInput from '../../components/ui/FileInput'
import NumberInput from '../../components/ui/NumberInput'
import TextFieldInput from '../../components/ui/TextFieldInput'
import URLInput from '../../components/ui/URLInput'
import useFormContext from '../../Hooks/useFormContext'

const ExperienceInfo = () => {
  const { userData, handleChange, commonInputSetContainerClasses, commonStepFormContainerClasses, isValidGithub, isValidLinkedIn, isValidEssay } = useFormContext()

  const [placeholderText, setPlaceholderText] = useState("github.com/bmbo.uvsjoh")

  const [hovering, setHovering] = useState(false)

  const hoverHandler = (e) => {
    setHovering(state => !state)
    if (hovering) {
      setPlaceholderText("github.com/bmbo.uvsjoh")
    } else {
      setPlaceholderText("github.com/alan.turing")
    }
  }

  return (
    <div className={commonStepFormContainerClasses}>
      <div className={commonInputSetContainerClasses + ""}>

        <URLInput containerClass=""
          labelClass={((userData.githubURL) ? ((isValidGithub) ? " text-green-300" : " text-red-300") : " text-sh-white ")}
          labelText="Github URL"
          infoText="Not required"
          fieldName="githubURL"
          fieldValue={userData.githubURL}
          placeholder={placeholderText}
          onHover={hoverHandler}
          handleChange={handleChange}
        />
        <URLInput containerClass=""
          labelClass={((userData.linkedinURL) ? ((isValidLinkedIn) ? " text-green-300" : " text-red-300") : " text-sh-white ")}
          labelText="LinkedIn URL"
          infoText="Not required"
          fieldName="linkedinURL"
          fieldValue={userData.linkedinURL}
          placeholder="linkedin.com/in/alan.turing"
          handleChange={handleChange}
        />
      </div>

      <div className={commonInputSetContainerClasses}>

        <NumberInput containerClass=" col-span-1 "
          labelClass={((userData.hackathonsAttended) ? " text-green-300" : " text-sh-white ")}
          labelText="How Many Hackathons Have You Attended?"
          fieldName="hackathonsAttended"
          min="0"
          fieldValue={userData.hackathonsAttended}
          handleChange={handleChange}
          required
        />

        <FileInput containerClass="col-span-1"
          labelClass={((userData.resume) ? " text-green-300" : " text-sh-white ")}
          fileName={((userData.resume) ? userData.resume[0].name : "No file uploaded")}
          labelText="Upload resume"
          fieldName="resume"
          handleChange={handleChange}
          required
        />
      </div>
      <div className={commonInputSetContainerClasses + "grid-cols-1"}>
        <TextFieldInput containerClass="col-span-2"
          labelClass={(userData.whyAttend ? (isValidEssay ? " text-green-300" : " text-red-300") : " text-sh-white ")}
          labelText="Why do you want to attend SpartaHack?"
          infoText="Max. 50 words"
          fieldName="whyAttend"
          fieldValue={userData.whyAttend}
          rows="10"
          handleChange={handleChange}
          required
        />
      </div>
    </div>
  )
}

export default ExperienceInfo