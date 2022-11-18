import React from 'react'
import FormButton from '../../components/ui/FormButton'
import useFormContext from '../../Hooks/useFormContext'
import FormFields from './FormFields'
import storage from "../../firebaseConfig";
import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";




function RegistrationForm() {
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
      resume: fileURL
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
    console.log(myJson.message);
    // console.log(url)


  }
  async function upload_resume(file_obj) {
    console.log("Here in the resume part");
    const obj = file_obj;
    // console.log(obj);
    // let obj = document.getElementById("resume");
    const file = obj.files[0];
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

  const handlePrev = () => setStep(prev => prev - 1)
  const handleNext = () => setStep(prev => prev + 1)

  const handleSubmit = e => {
    e.preventDefault()
    console.log(JSON.stringify(userData))
  }

  return (
    <div className='w-screen flex flex-row justify-center'>
      <form
        className="w-screen mx-4 sm:w-[80vw] sm:mx-auto max-w-4xl bg-sh-white/20 p-12 rounded rounded-xl"
        onSubmit={handleSubmit}>

        <header
          className='text-3xl mb-6 font-bold rubik-font text-sh-white'>
          {stepTitle[step]}
        </header>

        <FormFields />


        <div className='flex w-full justify-end gap-x-4'>
          <FormButton buttonClass="text-slate-700 border border-slate-500 hover:border-transparent hover:bg-slate-200"
            type='button' onClick={handlePrev} disabled={disabledPrev} hidden={disabledPrev} buttonText={prevButtonText} />
          <FormButton buttonClass="bg-blue-600 text-white hover:bg-blue-500 disabled:bg-blue-300 disabled:cursor-not-allowed"
            type='button' onClick={handleNext} disabled={disabledNext} hidden={hideNext} buttonText="Next" />
          <FormButton buttonClass="bg-pink-600 text-white hover:bg-pink-500" id="register" onClick={submit_form}
            type='submit' disabled={canSubmit} hidden={hideSubmit} buttonText="Register" />
        </div>

      </form>
    </div>
  )
}

export default RegistrationForm