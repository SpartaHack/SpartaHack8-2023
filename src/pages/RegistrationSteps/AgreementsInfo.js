import React from 'react'
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
      className='text-sky-600'><span> MLH Code of Conduct</span><LinkIcon width="14" height="14" strokeColor="rgb(2 132 199)" className="inline align-middle ml-2" /></a >.
  </span>
  const mlhTCAddInfo = <span className='whitespace-pre-wrap'>
    <span>I authorize you to share my application/registration information with Major League Hacking for event administration, ranking, and MLH administration in-line with the MLH Privacy Policy. I further agree to the terms of both the </span>
    <a href="https://github.com/MLH/mlh-policies/blob/main/contest-terms.md" target="_blank" rel="noopener noreferrer"
      className='text-sky-600'>MLH Contest Terms and Conditions<LinkIcon width="14" height="14" strokeColor="rgb(2 132 199)" className="inline align-middle ml-2" /></a ><span> and the </span>
    <a href="https://mlh.io/privacy" target="_blank" rel="noopener noreferrer"
      className='text-sky-600'>MLH Privacy Policy<LinkIcon width="14" height="14" strokeColor="rgb(2 132 199)" className="inline align-middle ml-2" /></a >.
  </span>
  const mlhEmailAddInfo = <span className='whitespace-pre-wrap'>I authorize MLH to send me pre- and post-event informational emails, which contain free credit and opportunities from their partners.
  </span>

  return (
    <div className={commonStepFormContainerClasses}>
      <div className={commonInputSetContainerClasses + "grid-cols-1"}>
        <CheckboxInput containerClass=""
          labelClass={((userData.mlhCoCAgree) ? " text-green-300" : " text-red-300") + " cursor-pointer"}
          inputClass="inline w-min cursor-pointer"
          labelText="MLH Code of Conduct"
          addInfo={mlhCoCAddInfo}
          fieldName="mlhCoCAgree"
          fieldValue={userData.mlhCoCAgree}
          handleChange={handleChange}
          required
        />
        <CheckboxInput containerClass=""
          labelClass={((userData.mlhTCAgree) ? " text-green-300" : " text-red-300") + " cursor-pointer"}
          inputClass="inline w-min cursor-pointer"
          labelText="MLH Terms & Conditions and Privacy Policy"
          addInfo={mlhTCAddInfo}
          fieldName="mlhTCAgree"
          fieldValue={userData.mlhTCAgree}
          handleChange={handleChange}
          required
        />
        <CheckboxInput containerClass=""
          labelClass={((userData.mlhEmailAgree) ? " text-green-300" : "") + " cursor-pointer"}
          inputClass="inline w-min cursor-pointer"
          labelText="MLH Informational Emails"
          addInfo={mlhEmailAddInfo}
          fieldName="mlhEmailAgree"
          fieldValue={userData.mlhEmailAgree}
          handleChange={handleChange}
        />
      </div>
      <div className={commonInputSetContainerClasses}>
        <Downloader link='../../../../public/robots.txt'/>
        <FileInput containerClass="col-span-1"
          inputClass=""
          labelText="Upload Minor-Parent Consent Form"
          fieldName="minorForm"
          handleChange={handleChange}
          hidden={!userData.isMinor}
          
          required
        />
      </div>
    </div>
  )
}

export default AgreementsInfo