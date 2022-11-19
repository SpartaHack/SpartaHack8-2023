import React from 'react'
import { useState } from 'react'
import LinkIcon from '../../components/icons/LinkIcon'
import CheckboxInput from '../../components/ui/CheckboxInput'
import Downloader from '../../components/ui/Downloader'
import FileInput from '../../components/ui/FileInput'
import useFormContext from '../../Hooks/useFormContext'

const AgreementsInfo = () => {
  const { userData, handleChange, commonInputSetContainerClasses, commonStepFormContainerClasses, isMinor } = useFormContext()

  const mlhCoCAddInfo = <span className='whitespace-pre-wrap'>
    I have read and agree to the MLH Code of Conduct, which can be found at<a
      href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank" rel="noopener noreferrer"
      className='text-sky-400'><span> MLH Code of Conduct</span><LinkIcon width="14" height="14" strokeColor="#38bdf8" className="inline align-middle ml-1" /></a >.
  </span>
  const mlhTCAddInfo = <span className='whitespace-pre-wrap'>
    <span>I authorize you to share my application/registration information with Major League Hacking for event administration, ranking, and MLH administration in-line with the MLH Privacy Policy. I further agree to the terms of both the </span>
    <a href="https://github.com/MLH/mlh-policies/blob/main/contest-terms.md" target="_blank" rel="noopener noreferrer"
      className='text-sky-400'>MLH Contest Terms and Conditions<LinkIcon width="14" height="14" strokeColor="#38bdf8" className="inline align-middle ml-1" /></a ><span> and the </span>
    <a href="https://mlh.io/privacy" target="_blank" rel="noopener noreferrer"
      className='text-sky-400'>MLH Privacy Policy<LinkIcon width="14" height="14" strokeColor="#38bdf8" className="inline align-middle ml-1" /></a >.
  </span>
  const mlhEmailAddInfo = <span className='whitespace-pre-wrap'>I authorize MLH to send me pre- and post-event informational emails, which contain free credit and opportunities from their partners.
  </span>

  const [isHovering, setIsHovering] = useState(false)
  var [filesDisplay, setFilesDisplay] = useState("")

  const hoverHandler = () => {
    setIsHovering(state => !state)
    const filesList = Array.from(userData.minorForm)

    var filesDisplayText = filesList.map(file => file.name).join(", ")
    setFilesDisplay(filesDisplayText)
  }

  var minorFormsSection = null

  if (userData.isMinor) {
    minorFormsSection = (
      <div className={commonInputSetContainerClasses + "items-end "}>
        <span className=" col-span-2 text-sh-white mb-4">Since you're a minor, your parent/guardian must fill and sign three forms. Your application cannot be accepted without these forms.</span>

        <Downloader containerClass=" col-span-2 md:col-span-1 "
          labelClass=" text-sh-white "
          labelText="Download Consent Forms"
          link='https://drive.google.com/drive/folders/1RvlCLQvjv8pvfuRAhclAR78Qfue99dQ1?usp=share_link' />
        <FileInput containerClass=" col-span-2 md:col-span-1 "
          labelClass={((userData.minorForm) ? " text-green-300" : " text-sh-white ")}
          labelText="Upload Consent Forms"
          fieldName="minorForm"
          fileName={((userData.minorForm) ? (userData.minorForm.length + " Files uploaded") : "No files uploaded")}
          handleChange={handleChange}
          multiple
          required
          hoverFunction={hoverHandler}
        />
        <span className=' inter-font text-xs tracking-wide col-span-2 text-sh-white -mt-2 -mb-4'
          hidden={((userData.minorForm) ? (isHovering ? false : true) : true)}
        >Files uploaded: {filesDisplay}</span>
      </div>)
  }


  return (
    <div className={commonStepFormContainerClasses}>
      <div className={" grid-cols-1" + commonInputSetContainerClasses}>
        <CheckboxInput containerClass=" "
          labelClass={((userData.mlhCoCAgree) ? " text-green-300" : " text-red-300") + " cursor-pointer"}
          inputClass=" cursor-pointer "
          labelText="MLH Code of Conduct"
          addInfo={mlhCoCAddInfo}
          fieldName="mlhCoCAgree"
          fieldValue={userData.mlhCoCAgree}
          handleChange={handleChange}
          required
        />
        <CheckboxInput containerClass=" "
          labelClass={((userData.mlhTCAgree) ? " text-green-300" : " text-red-300") + " cursor-pointer"}
          inputClass=" cursor-pointer"
          labelText="MLH Terms & Conditions and Privacy Policy"
          addInfo={mlhTCAddInfo}
          fieldName="mlhTCAgree"
          fieldValue={userData.mlhTCAgree}
          handleChange={handleChange}
          required
        />
        <CheckboxInput containerClass=" "
          labelClass={((userData.mlhEmailAgree) ? " text-green-300" : " text-sh-white ") + " cursor-pointer"}
          inputClass=" cursor-pointer"
          labelText="MLH Informational Emails"
          addInfo={mlhEmailAddInfo}
          fieldName="mlhEmailAgree"
          fieldValue={userData.mlhEmailAgree}
          handleChange={handleChange}
        />
      </div>
      {minorFormsSection}
    </div>
  )
}

export default AgreementsInfo