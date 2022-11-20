import { createContext, useState, useEffect } from "react";
import UniversityOptions from "./UniversityOptions";

const FormContext = createContext({})

export const FormProvider = ({ children }) => {
  const stepTitle = {
    1: "Basic Info",
    2: "Education",
    3: "Personal Info",
    4: "Experience",
    5: "Forms & Agreements",
    6: "Review information"
  }

  const [step, setStep] = useState(1)

  const [isStudent, setIsStudent] = useState(false)
  const [isValidLinkedIn, setIsValidLinkedIn] = useState(false)
  const [isValidGithub, setIsValidGithub] = useState(false)
  const [isValidGradYear, setIsValidGradYear] = useState(false)

  const [showOtherUniversity, setShowOtherUniversity] = useState(false)

  const [userData, setUserData] = useState({
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    universityName: "",
    otherUniversity: null,
    major: "",
    yearOfUndergrad: "",
    graduationYear: "",
    countryOfOrigin: "",
    dateOfBirth: "",
    isMinor: false,
    minorForm: "",
    sex: "",
    race: "",
    hackathonsAttended: "",
    linkedinURL: "",
    githubURL: "",
    resume: "",
    mlhCoCAgree: false,
    mlhTCAgree: false,
    mlhEmailAgree: false,
  })

  const basicInfoData = ["firstName", "lastName", "email", "phone"]
  const educationInfoData = ["universityName", "major", "graduationYear", "yearOfUndergrad"]
  const personalInfoData = ["countryOfOrigin", "dateOfBirth", "sex", "race"]
  const experienceInfoData = [["hackathonsAttended", "resume"], ["linkedin", "github"]]
  const agreementsInfoData = [["mlhCoCAgree", "mlhTCAgree"], ["mlhEmailAgree"]]

  const optionsData = {
    yearOptions: [
      ["Select", ""], ["Freshman - First Year", "Freshman"], ["Sophomore - Second Year", "Sophomore"], ["Junior - Third Year", "Junior"], ["Senior - Fourth Year", "Senior"]
    ],
    sexOptions: [
      ["Select", ""], ["Male", "Male"], ["Female", "Female"], ["Non-binary", "Non-binary"], ["Prefer not to answer", "None"]
    ],
    raceOptions: [
      ["Select", ""], ["White", "White"], ["Black or African American", "Black or African American"], ["Native American (American Indian)", "Native American (American Indian)"], ["Asian", "Asian"], ["Latinx or Hispanic", "Latinx or Hispanic"], ["Native Hawaiian and Other Pacific Islander", "Native Hawaiian and Other Pacific Islander"], ["Other", "Other"]
    ],
    universityOptions: UniversityOptions()
  }

  // console.log(optionsData.yearOptions)

  useEffect(() => {
    const bool = userData.email.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.edu$/) ? true : false
    setIsStudent(bool);
  }, [userData.email, isStudent])

  useEffect(() => {
    const re = new RegExp(/(^http[s]?:\/{2})?(www\.)?(linkedin\.com\/in\/)(\S{2,64})/)
    const bool = userData.linkedinURL.match(re) ? true : false
    setIsValidLinkedIn(bool);
  }, [userData.linkedinURL, isValidLinkedIn])

  useEffect(() => {
    const re = new RegExp(/(^http[s]?:\/{2})?(www\.)?(github\.com\/)(\S{2,64})/)
    const bool = userData.githubURL.match(re) ? true : false
    setIsValidGithub(bool);
  }, [userData.githubURL, isValidGithub])

  useEffect(() => {
    var [birthYear, birthMonth, birthDay] = [...userData.dateOfBirth.split("-")]
    var [thisYear, thisMonth, thisDay] = [...(new Date).toISOString().slice(0, 10).split("-")]
    var yearsSinceBirth = (thisYear - birthYear) + (thisMonth - birthMonth) / 12 + (thisDay - birthDay) / 365
    var bool = ((yearsSinceBirth > 18) ? false : true)
    setUserData(prevUserData => ({
      ...prevUserData, isMinor: bool
    }))
  }, [userData.dateOfBirth])

  useEffect(() => {
    var GraduationYear = userData.graduationYear
    const bool = (GraduationYear.length === 4 && GraduationYear >= 2023 && typeof (GraduationYear) === "string") ? true : false
    setIsValidGradYear(bool);
  }, [userData.graduationYear, isValidGradYear])

  function formatPhoneNumber(value) {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
  }

  useEffect(() => {
    const number = userData.phone
    setUserData(prevUserData => ({
      ...prevUserData, phone: formatPhoneNumber(number)
    }))
  }, [userData.phone])

  useEffect(() => {
    if (userData.universityName === "other") {
      setShowOtherUniversity(true)
    } else {
      setShowOtherUniversity(false)
      setUserData(prevUserData => ({
        ...prevUserData, otherUniversity: ""
      }))
    }
  }, [userData.universityName, userData.otherUniversity])

  const handleChange = e => {
    const type = e.target.type
    const name = e.target.name

    var value = type === "checkbox"
      ? e.target.checked
      : e.target.value

    if (type === "file") {
      console.log(e.target.files.length)
      if (e.target.files.length) {
        value = e.target.files
      } else { value = "" }
    }

    setUserData(prevUserData => ({
      ...prevUserData, [name]: value
    }))
  }

  const {
    linkedinURL,
    githubURL,
    minor,
    minorForm,
    mlhEmailAgree,
    ...requiredFields
  } = userData

  const canProceedFromBasic = basicInfoData.map(key => userData[key]).every(Boolean) && (isStudent)
  const canProceedFromEducation = educationInfoData
    .map(key => userData[key]).every(Boolean)
    && isValidGradYear
    && (userData.universityName === "other" ? userData.otherUniversity : true)
  const canProceedFromPersonal = personalInfoData.map(key => userData[key]).every(Boolean) && !(userData["dateOfBirth"].slice(0, 4) >= 2010 && userData["dateOfBirth"].slice(0, 4) >= 1990)
  const canProceedFromExperience = experienceInfoData[0].map(key => userData[key]).every(Boolean)
  const canProceedFromAgreements = agreementsInfoData[0]
    .map(key => userData[key]).every(Boolean)
    && ((userData.isMinor) ? (userData.minorForm.length === 3 ? true : false) : true)

  const canSubmit = ([...Object.values(requiredFields)].every(Boolean))
    && (step === Object.keys(stepTitle).length)
  // && canProceedFromAgreements
  // console.log(canSubmit)
  const disabledPrev = step === 1
  const disabledNext =
    // false
    (step === Object.keys(stepTitle).length)
    || (step === 1 && !canProceedFromBasic)
    || (step === 2 && !canProceedFromEducation)
    || (step === 3 && !canProceedFromPersonal)
    || (step === 4 && !canProceedFromExperience)
    || (step === 5 && !canProceedFromAgreements)

  const hideNext = step === Object.keys(stepTitle).length
  const hideSubmit = step !== Object.keys(stepTitle).length

  const prevButtonText = (step === Object.keys(stepTitle).length ? "Back" : "Previous")

  console.log(userData)

  const commonStepFormContainerClasses = "flex flex-col w-full min-h-[470px] h-fit"
  const commonInputSetContainerClasses = "grid grid-cols-1 sm:grid-cols-2 w-full gap-x-8 items-end "

  const commonContainerClasses = "col-span-1 mb-4 w-full rounded-mdd "
  const commonLabelClasses = "block w-full uppercase pt-4 pb-1.5 text-xs rubik-font "
  const commonInputClasses = "block w-full h-[56px] p-4 outline-none ring-[1px] ring-transparent focus:ring-sh-white inter-font text-sh-white rounded-md bg-sh-white/10 backdrop-blur-[3px] "
  const commonAdInfoClasses = " "

  const commonButtonClasses = "w-full md:w-32 h-14 py-4 px-6 rounded-md uppercase transition-all duration-75 select-none backdrop-blur-[3px] rubik-font outline-none ring-2 ring-transparent focus:ring-sh-pink/50 "

  const commonDisplayInfoSetClasses = "grid grid-cols-1 md:grid-cols-2 flex-row gap-x-4 "
  const commonDisplayInfoContainerClasses = " col-span-1 w-full py-4 "
  const commonDisplayInfoLabelClasses = "uppercase text-xs text-slate-500 rubik-font text-sh-white/70 "
  const commonDisplayInfoClasses = "text-md mt-1 inter-font text-sh-white "

  return (
    <FormContext.Provider value={{
      stepTitle, step, setStep, userData, setUserData, canSubmit, handleChange,
      canProceedFromBasic, canProceedFromEducation, canProceedFromPersonal, canProceedFromExperience,
      disabledNext, disabledPrev, hideNext, hideSubmit, isStudent, isValidGithub, isValidLinkedIn, isValidGradYear, prevButtonText,
      commonContainerClasses, commonLabelClasses, commonInputClasses, commonAdInfoClasses, commonButtonClasses,
      commonInputSetContainerClasses, commonStepFormContainerClasses,
      commonDisplayInfoLabelClasses, commonDisplayInfoClasses, commonDisplayInfoContainerClasses, commonDisplayInfoSetClasses,
      optionsData, showOtherUniversity
    }}>
      {children}
    </FormContext.Provider>
  )
}

export default FormContext;