import { createContext, useState, useEffect } from "react";
import UniversityOptions from "./UniversityOptions.json";

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
  const [isValidUniversityName, setIsValidUniversityName] = useState(false)
  const [isValidLinkedIn, setIsValidLinkedIn] = useState(false)
  const [isValidGithub, setIsValidGithub] = useState(false)
  const [isValidEssay, setIsValidEssay] = useState(false)
  const [isValidAge, setIsValidAge] = useState(false)

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
    age: "",
    isMinor: false,
    minorForm: "",
    sex: "",
    race: "",
    stateFrom: "",
    whyAttend: "",
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
  const personalInfoData = ["countryOfOrigin", "age", "sex", "race", "stateFrom"]
  const experienceInfoData = [["hackathonsAttended", "resume", "whyAttend"], ["linkedin", "github"]]
  const agreementsInfoData = [["mlhCoCAgree", "mlhTCAgree"], ["mlhEmailAgree"]]

  const optionsData = {
    yearOptions: [
      ["Select", ""], ["Freshman - First Year", "Freshman"], ["Sophomore - Second Year", "Sophomore"], ["Junior - Third Year", "Junior"], ["Senior - Fourth Year", "Senior"], ["Fifth Year or Higher", "Fifth Year or Higher"], ["Not an undergraduate", "Not an undergraduate"]
    ],
    sexOptions: [
      ["Select", ""], ["Man", "Man"], ["Woman", "Woman"], ["Non-binary", "Non-binary"], ["Other", "other"], ["Prefer not to answer", "None"]
    ],
    raceOptions: [
      ["Select", ""], ["White", "White"], ["Black or African American", "Black or African American"], ["Native American (American Indian)", "Native American (American Indian)"], ["Asian", "Asian"], ["Latinx or Hispanic", "Latinx or Hispanic"], ["Native Hawaiian and Other Pacific Islander", "Native Hawaiian and Other Pacific Islander"], ["Other", "Other"], ["Prefer not to answer", "None"]
    ],
    studyLevelOptions: [
      ["Select", ""], ["Less than Secondary or High School", "Less than Secondary or High School"], ["Secondary or High School", "Secondary or High School"], ["Undergraduate University (2-Year Community College or similar)", "Undergraduate University (2-Year Community College or similar)"], ["Undergraduate University (3+ Year)", "Undergraduate University (3+ Year)"], ["Graduate University (Masters, Doctoral, Professional, etc.)", "Graduate University (Masters, Doctoral, Professional, etc.)"], ["Code School or Bootcamp", "Code School or Bootcamp"], ["Other Vocational or Trade Program or Apprenticeship", "Other Vocational or Trade Program or Apprenticeship"], ["Post Doctorate", "Post Doctorate"], ["Other", "Other"], ["I'm not currently a student", "I'm not currently a student"], ["Prefer not to answer", "None"]
    ],
    universityOptions: UniversityOptions,
    universityNamesList: UniversityOptions.map(array => array.name),
    stateOptions: [["Select", ""], ["Alabama", "Alabama"], ["Alaska", "Alaska"], ["Arizona", "Arizona"], ["Arkansas", "Arkansas"], ["California", "California"], ["Colorado", "Colorado"], ["Connecticut", "Connecticut"], ["Delaware", "Delaware"], ["Florida", "Florida"], ["Georgia", "Georgia"], ["Hawaii", "Hawaii"], ["Idaho", "Idaho"], ["Illinois", "Illinois"], ["Indiana",
"Indiana"], ["Iowa", "Iowa"], ["Kansas", "Kansas"], ["Kentucky", "Kentucky"], ["Louisiana", "Louisiana"], ["Maine", "Maine"], ["Maryland", "Maryland"], ["Massachusetts", "Massachusetts"], ["Michigan", "Michigan"], ["Minnesota", "Minnesota"], ["Mississippi", "Mississippi"], ["Missouri", "Missouri"], ["Montana", "Montana"], ["Nebraska", "Nebraska"],["Nevada", "Nevada"], ["New Hampshire", "New Hampshire"], ["New Jersey", "New Jersey"], ["New Mexico", "New Mexico"], ["New York", "New York"], ["North Carolina", "North Carolina"], ["North Dakota", "North Dakota"], ["Ohio", "Ohio"], ["Oklahoma", "Oklahoma"], ["Oregon", "Oregon"], ["Pennsylvania", "Pennsylvania"], ["Rhode Island", "Rhode Island"], ["South Carolina", "South Carolina"], ["South Dakota", "South Dakota"], ["Tennessee", "Tennessee"], ["Texas", "Texas"], ["Utah", "Utah"], ["Vermont", "Vermont"], ["Virginia", "Virginia"], ["Washington", "Washington"], ["West Virginia", "West Virginia"], ["Wisconsin", "Wisconsin"], ["Wyoming", "Wyoming"],]

  }

  // console.log(UniversityOptions)
  useEffect(() => {
    const bool = userData.email.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.(edu)|(ca)|(org)|(k12.mi.us)$/) ? true : false
    setIsStudent(bool);
  }, [userData.email, isStudent])

  const lowerCaseUniNameList = optionsData.universityNamesList.map(value => value.toLowerCase())
  useEffect(() => {
    const UniversityName = userData.universityName

    const bool = UniversityName ? (lowerCaseUniNameList.includes(UniversityName.toLowerCase()) ? true : false) : false
    setIsValidUniversityName(bool)
  }, [lowerCaseUniNameList, userData.universityName])

  useEffect(() => {
    var wordsList = userData.whyAttend.split(" ")
    if (wordsList.includes("")) {
      wordsList = wordsList.filter(word => word !== "")
    }
    // console.log(wordsList)
    const wordCount = wordsList.length
    const bool = (((wordCount > 3) && (wordCount <= 50)) ? true : false)

    setIsValidEssay(bool)
  }, [userData.whyAttend])

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
    var bool = ((userData.age >= 18) ? false : true)
    setIsValidAge(userData.age > 12 ? true : false)
    setUserData(prevUserData => ({
      ...prevUserData, isMinor: bool
    }))
  }, [userData.age])
  // console.log(userData.isMinor)

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
    if (userData.universityName.toLowerCase() === "other") {
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
    var name = e.target.name

    var value = (type === "checkbox")
      ? e.target.checked
      : e.target.value

    if (type === "file") {
      if (e.target.files.length) {
        value = e.target.files
      } else { value = "" }
    }

    setUserData(prevUserData => ({
      ...prevUserData, [name]: value
    }))
  }

  // console.log(userData.whyAttend)

  const handleSmartInputChange = (e, name, value) => {

    const perfectName = optionsData.universityNamesList.filter(data => (data.toLowerCase() === value.toLowerCase()))[0]

    value = (perfectName ? perfectName : value)

    value = (e.target.innerText
      ? e.target.innerText
      : value)

    setUserData(prevUserData => ({
      ...prevUserData, [name]: value
    }))
  }

  // console.log(userData.universityName)

  const {
      otherUniversity,
      linkedinURL,
      githubURL,
      isMinor,
      minorForm,
      mlhEmailAgree,
      ...requiredFields
    } = userData

  const canProceedFromBasic = basicInfoData.map(key => userData[key]).every(Boolean) && (isStudent)
  const canProceedFromEducation = educationInfoData
    .map(key => userData[key]).every(Boolean)
    && isValidUniversityName
    && (userData.universityName === "other" ? userData.otherUniversity : true)
  const canProceedFromPersonal = personalInfoData.map(key => userData[key]).every(Boolean) && isValidAge
  const canProceedFromExperience = experienceInfoData[0]
    .map(key => userData[key]).every(Boolean)
    && isValidEssay
  const canProceedFromAgreements = agreementsInfoData[0]
    .map(key => userData[key]).every(Boolean)
    && ((userData.isMinor) ? (userData.minorForm.length === 3 ? true : false) : true)

  const canSubmit =
    ([...Object.values(requiredFields)].every(Boolean))
    && (step === Object.keys(stepTitle).length)
  
  // useEffect(() => console.log(([...Object.values(requiredFields)].every(Boolean))
  //   && (step === Object.keys(stepTitle).length)))
  
  // console.log([...Object.values(requiredFields)])
  
  const disabledPrev = step === 1
  const disabledNext =
    // false
    (step === Object.keys(stepTitle).length)
    || (step === 1 && !canProceedFromBasic)
    || (step === 2 && !canProceedFromEducation)
    || (step === 3 && !canProceedFromPersonal)
    || (step === 4 && !canProceedFromExperience)
    || (step === 5 && !canProceedFromAgreements)

  // console.log(canProceedFromEducation)

  const hideNext = step === Object.keys(stepTitle).length
  const hideSubmit = step !== Object.keys(stepTitle).length

  const prevButtonText = (step === Object.keys(stepTitle).length ? "Back" : "Previous")

  // console.log(userData)

  const commonStepFormContainerClasses = "flex flex-col w-full min-h-[470px] h-fit"
  const commonInputSetContainerClasses = "grid grid-cols-1 md:grid-cols-2 w-full gap-x-8 items-start "

  const commonContainerClasses = "col-span-1 mb-4 w-full rounded-mdd "
  const commonLabelClasses = "block w-full uppercase pt-4 pb-1.5 text-xs rubik-font "
  const commonInputClasses = "block w-full h-[56px] p-4 outline-none ring-[1px] ring-transparent focus:ring-sh-white inter-font text-sh-white rounded-md bg-sh-white/10 backdrop-blur-[3px] "
  const commonAdInfoClasses = " ml-auto w-fit text-sh-white/70 text-[10px] mt-1 -mb-[19px] uppercase rubik-font"

  const commonButtonClasses = "w-full md:w-32 h-14 py-4 px-6 rounded-md uppercase transition-all duration-75 select-none backdrop-blur-[3px] rubik-font outline-none ring-2 ring-transparent focus:ring-sh-pink/50 "

  const commonDisplayInfoSetClasses = "grid grid-cols-1 md:grid-cols-2 flex-row gap-x-4 "
  const commonDisplayInfoContainerClasses = " col-span-1 w-full py-4 "
  const commonDisplayInfoLabelClasses = "uppercase text-xs text-slate-500 rubik-font text-sh-white/70 "
  const commonDisplayInfoClasses = "text-md mt-1 inter-font text-sh-white "

  // console.log(userData)

  return (
    <FormContext.Provider value={{
      stepTitle, step, setStep, userData, setUserData, canSubmit, handleChange, handleSmartInputChange,
      canProceedFromBasic, canProceedFromEducation, canProceedFromPersonal, canProceedFromExperience,
      disabledNext, disabledPrev, hideNext, hideSubmit, isStudent, isValidGithub, isValidLinkedIn, isValidUniversityName, isValidEssay, isValidAge,
      prevButtonText, commonContainerClasses, commonLabelClasses, commonInputClasses, commonAdInfoClasses, commonButtonClasses,
      commonInputSetContainerClasses, commonStepFormContainerClasses,
      commonDisplayInfoLabelClasses, commonDisplayInfoClasses, commonDisplayInfoContainerClasses, commonDisplayInfoSetClasses,
      optionsData, showOtherUniversity
    }}>
      {children}
    </FormContext.Provider>
  )
}

export default FormContext;