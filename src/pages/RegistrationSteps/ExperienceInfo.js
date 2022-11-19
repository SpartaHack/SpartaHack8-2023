import React from 'react'
import { useState } from 'react'
import FileInput from '../../components/ui/FileInput'
import NumberInput from '../../components/ui/NumberInput'
import URLInput from '../../components/ui/URLInput'
import useFormContext from '../../Hooks/useFormContext'

const ExperienceInfo = () => {
  const { userData, handleChange, commonInputSetContainerClasses, commonStepFormContainerClasses, isValidGithub, isValidLinkedIn } = useFormContext()

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
        <NumberInput containerClass=" col-span-2 "
          labelClass={((userData.hackathonsAttended) ? " text-green-300" : " text-sh-white ")}
          labelText="How Many Hackathons Have You Attended?"
          fieldName="hackathonsAttended"
          min="0"
          fieldValue={userData.hackathonsAttended}
          handleChange={handleChange}
          required
        />
      </div>
      <div className={commonInputSetContainerClasses}>
        <URLInput containerClass=""
          labelClass={((userData.githubURL) ? ((isValidGithub) ? " text-green-300" : " text-red-300") : " text-sh-white ")}
          labelText="Github URL"
          fieldName="githubURL"
          fieldValue={userData.githubURL}
          placeholder={placeholderText}
          onHover={hoverHandler}
          handleChange={handleChange}
        />
        <URLInput containerClass=""
          labelClass={((userData.linkedinURL) ? ((isValidLinkedIn) ? " text-green-300" : " text-red-300") : " text-sh-white ")}
          labelText="LinkedIn URL"
          fieldName="linkedinURL"
          fieldValue={userData.linkedinURL}
          placeholder="linkedin.com/in/alan.turing"
          handleChange={handleChange}
        />
      </div>
      <div className={commonInputSetContainerClasses + "grid-cols-1"}>
        <FileInput containerClass="col-span-2"
          labelClass={((userData.resume) ? " text-green-300" : " text-sh-white ")}
          fileName={((userData.resume) ? userData.resume[0].name : "No file uploaded")}
          labelText="Upload resume"
          fieldName="resume"
          handleChange={handleChange}
          required
        />
      </div>
    </div>
  )
}

export default ExperienceInfo