import React from 'react'
// import LinearGradient from 'react-native-linear-gradient';
import FormButton from '../../components/ui/FormButton'
import useFormContext from '../../Hooks/useFormContext'
import FormFields from './FormFields';
import storage from "../../firebaseConfig";
import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import {useState, useEffect } from "react";

function RegistrationForm() {
  const [succesful, setSuccesful] = useState(false);
  useEffect( () => {
    console.log("was succesful?", succesful)
  }, [succesful])
  const {
    step,
    setStep,
    userData,
    stepTitle,
    canSubmit,
    disabledNext, disabledPrev, hideNext, hideSubmit, prevButtonText
  } = useFormContext()

  async function submit_form() {
    console.log("about to print userdata");
    console.log(userData)
    const file_obj = userData.resume
    const minor_files = userData.minorForm
    console.log(minor_files);
    const isMinor = userData.isMinor
    let minor_forms_links = []
    if (isMinor) {
      console.log("this person is a minor");
      minor_forms_links = await  upload_minor_forms(minor_files, (userData.firstName + " " + userData.lastName));
    }
    console.log(isMinor);
    const fileURL = await upload_resume(file_obj);
    let university = userData.universityName === "other"
      ? userData.otherUniversity
      : userData.universityName
    const date = ((new Date (userData.dateOfBirth)).toLocaleDateString());
    console.log(date);
    const obj = {
      first_name: userData.firstName,
      last_name: userData.lastName,
      email: userData.email,
      phone: userData.phone,
      school: university,
      major: userData.major,
      education_level: userData.yearOfUndergrad,
      graduation_date: userData.graduationYear,
      country_of_origin: userData.countryOfOrigin,
      date_of_birth: date,
      minorForm: userData.minorForm,
      gender: userData.sex,
      race: userData.race,
      hackatons_attended: userData.hackathonsAttended,
      linkedin: userData.linkedinURL,
      githubURL: userData.githubURL,
      resume: fileURL,
      content_form: minor_forms_links
    }
    const response_submission = await fetch('https://us-central1-spartahack8.cloudfunctions.net/registeUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
    });
    // console.log(response_submission.json());
    const myJson = await response_submission.json();
    const message = myJson.message
    if (message === "sucess") {
      setSuccesful(true);
    }
    console.log(myJson.message);
    // console.log(url)
    return myJson.message
  }
  async function upload_resume(file_obj) {
    console.log("Here in the resume part");
    // const obj = file_obj;
    // console.log(obj);
    // let obj = document.getElementById("resume");
    const file = file_obj[0];
    console.log("Here with the file");
    console.log(file);
  
    const metadata = {
      contentType: file.type
    };
  
    const storageRef: any = ref(storage, 'resumes/' + file.name);
    console.log(storageRef);
    const uploadTask: any = await  uploadBytesResumable(storageRef, file, metadata);
    console.log(uploadTask.ref);
    const url: any = await getDownloadURL(uploadTask.ref)
    // console.log(url);
    return url;
  }

  async function upload_minor_form(file, name) {
    const metadata = {
      contentType: file.type
    };

    const storageRef = ref(storage, 'minorForms/' + file.name + name);
    // console.log(storageRef);
    const uploadTask =  await  uploadBytesResumable(storageRef, file, metadata);
    // console.log(uploadTask.ref);
    const url = await getDownloadURL(uploadTask.ref)
    return url;
  }

  async function upload_minor_forms(files, name) {
    console.log("Here in the minors part");
    let minor_forms_links = []
    var length = files.length
    for (var i = 0; i < length; i++) {
      var url = await upload_minor_form(files[i], name);
      minor_forms_links.push(url);
    }
    console.log(minor_forms_links);
    return minor_forms_links
  }

  const handlePrev = () => setStep(prev => prev - 1)
  const handleNext = () => setStep(prev => prev + 1)

  const handleSubmit = e => {
    e.preventDefault()
    console.log(JSON.stringify(userData))
  }

  return (
    <div className='w-screen flex flex-row justify-center mt-32 sm:mt-24 mb-10'>
      <form
        className="w-full min-h-fit h-max mx-4 sm:w-[80vw] sm:mx-auto max-w-4xl sm:bg-shm-white/10 sm:p-12 rounded-2xl"
        onSubmit={handleSubmit}>

        <header
          className='text-3xl mb-4 sm:mb-6 font-semibold rubik-font text-sh-white w-fit'
          style={{background: "linear-gradient(135deg, #F70063 0%, #1E4FFF 150%)",
          webkitTextFillColor: "transparent",
          webkitBackgroundClip: "text",
          backgroundClip: "text",
          TextFillColor: "transparent"}}>
          {stepTitle[step]}
        </header>

        <FormFields />

        <div className='flex w-full justify-end mt-12 gap-x-4'>
          <FormButton buttonClass="text-pink-500 border border-pink-500 hover:border-transparent hover:bg-pink-100"
            type='button' onClick={handlePrev} disabled={disabledPrev} hidden={disabledPrev} buttonText={prevButtonText} />
          <FormButton buttonClass="bg-blue-600 text-white hover:bg-blue-500 disabled:bg-blue-300 disabled:cursor-not-allowed"
            type='button' onClick={handleNext} disabled={disabledNext} hidden={hideNext} buttonText="Next" />
          <FormButton buttonClass="bg-pink-600 text-white hover:bg-pink-500"
            type='submit' disabled={canSubmit} hidden={hideSubmit} buttonText="Register" onClick={submit_form} />
        </div>
        {succesful ? <div className="text-white text-center"> Succesfully registered</div> : <div> </div>}

      </form>
    </div>
  )
}

export default RegistrationForm