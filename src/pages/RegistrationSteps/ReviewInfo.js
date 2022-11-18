import React from 'react'
import useFormContext from '../../Hooks/useFormContext'
import DisplayInfo from './DisplayInfo'

function ReviewInfo() {
  const { userData, commonStepFormContainerClasses, commonDisplayInfoSetClasses, optionsData } = useFormContext()

  const DateOfBirth = new Date(userData.dateOfBirth + "T06:00:00.000Z").toDateString()
  const DateOfBirthReadable = `${DateOfBirth.slice(4, -5)}, ${DateOfBirth.slice(-4)}`
  const UniversityName = optionsData.universityOptions.find(a => a.includes(userData.universityName))[0]

  return (
    <div className={commonStepFormContainerClasses + "h-auto mb-12"}>
      <h2 className=" text-2xl mt-12 rubik-font font-semibold">Basic Info</h2>
      <div className=" mt-4">
        <div className={commonDisplayInfoSetClasses + " border-t"}>
          <DisplayInfo
            labelText="First Name"
            infoText={userData.firstName}
          />
          <DisplayInfo
            labelText="Last Name"
            infoText={userData.lastName}
          />
        </div>
        <div className={commonDisplayInfoSetClasses + " border-t"}>
          <DisplayInfo
            labelText="Phone number"
            infoText={userData.phone}
          />
          <DisplayInfo
            labelText="Student Email"
            infoText={userData.email}
          />
        </div>
      </div>
      <h2 className=" text-2xl mt-12 rubik-font font-semibold">Education</h2>
      <div className=" mt-4">

        <div className={commonDisplayInfoSetClasses + " border-t"}>
          <DisplayInfo
            labelText="University/College"
            infoText={(UniversityName === "Other") ? userData.otherUniversity : UniversityName}
          />
          <DisplayInfo
            labelText="Major(s)"
            infoText={userData.major}
          />
        </div>
        <div className={commonDisplayInfoSetClasses + " border-t"}>
          <DisplayInfo
            labelText="Year of Undergraduate Education"
            infoText={userData.yearOfUndergrad}
          />
          <DisplayInfo
            labelText="Graduation Year"
            infoText={userData.graduationYear}
          />
        </div>
      </div>
      <h2 className=" text-2xl mt-12 rubik-font font-semibold">Personal Info</h2>
      <div className=" mt-4">
        <div className={commonDisplayInfoSetClasses + " border-t"}>
          <DisplayInfo
            labelText="Country of Origin"
            infoText={userData.countryOfOrigin}
          />
          <DisplayInfo
            labelText="Date of Birth"
            infoText={DateOfBirthReadable}
          />
        </div>
        <div className={commonDisplayInfoSetClasses + " border-t"}>
          <DisplayInfo
            labelText="Sex"
            infoText={optionsData.sexOptions.find(a => a.includes(userData.sex))[0]}
          />
          <DisplayInfo
            labelText="Race"
            infoText={optionsData.raceOptions.find(a => a.includes(userData.race))[0]}
          />
        </div>
      </div>
      <h2 className=" text-2xl mt-12 rubik-font font-semibold">Experience</h2>
      <div className=" mt-4">

        <div className={commonDisplayInfoSetClasses + " border-t"}>
          <DisplayInfo
            labelText="Number of Hackathons Attended"
            infoText={userData.hackathonsAttended}
          />
          <DisplayInfo
            labelText="Resume"
            infoText={(userData.resume) ? "Uploaded" : "Not uploaded"}
          />
        </div>
        <div className={commonDisplayInfoSetClasses + " border-t"}>
          <DisplayInfo
            labelText="Github Link"
            infoText={(userData.githubURL) ? userData.githubURL : "No link provided"}
          />
          <DisplayInfo
            labelText="LinkedIn Link"
            infoText={(userData.linkedinURL) ? userData.linkedinURL : "No link provided"}
          />
        </div>
      </div>
      <h2 className=" text-2xl mt-12 rubik-font font-semibold">Terms, Policies & Agreements</h2>
      <div className=" mt-4">

        <div className={commonDisplayInfoSetClasses + " border-t"}>
          <DisplayInfo
            labelText="MLH Code of Conduct"
            infoText={(userData.mlhCoCAgree) ? "Read & agreed" : "Not read & agreed"}
          />
          <DisplayInfo
            labelText="MLH Terms & Conditions and Privacy Policy"
            infoText={(userData.mlhTCAgree) ? "Read & agreed to both" : "Not read & agreed"}
          />
        </div>
        <div className={commonDisplayInfoSetClasses + " border-t"}>
          <DisplayInfo
            labelText="Minor-Parent Consent Form"
            infoText={(userData.minorForm) ? "Uploaded, verification pending." : "Not uploaded"}
            hidden={!userData.isMinor}
          />
          <DisplayInfo
            labelText="MLH Informational Emails"
            infoText={(userData.mlhEmailAgree) ? "Opted in" : "Not opted in"}
          />
        </div>
      </div>
    </div >
  )
}

export default ReviewInfo