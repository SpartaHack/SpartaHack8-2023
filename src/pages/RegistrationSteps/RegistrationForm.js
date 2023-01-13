import React, { useState, useEffect} from 'react'
import FormButton from '../../components/ui/FormButton'
import SubmitModal from '../../components/ui/SubmitModal';
import useFormContext from '../../Hooks/useFormContext'
import FormFields from './FormFields'
//Firebase imports
import {storage, app} from "../../firebaseConfig";
import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import { getFirestore, collection, getDocs } from "firebase/firestore"

async function checkIfApplied(userData) {
  const email = userData.email;
  const db = getFirestore(app);
  const querySnap = await getDocs(collection(db, "registrations"));
  let applied = false;
  querySnap.forEach( (doc) => {
    const info = doc.data();
    if (email.toLowerCase() === info.email.toLowerCase()) {
      applied = true;
    }
  });

  return applied;
}


function RegistrationForm() {

  
  const [formStatus, setFormStatus] = useState("");
  const [showModal, setShowModal] = useState(false);
  
  useEffect( () => {
    // console.log("useEffect")
  }, [formStatus, showModal]);

  const {
    step,
    setStep,
    userData,
    stepTitle,
    canSubmit,
    disabledNext,
    disabledPrev,
    hideNext,
    hideSubmit,
    prevButtonText
  } = useFormContext()

  //Calling and uploading to database
  async function submit_form() {
    if (step !== 6) {
      return;
    }
    //Checking if the user already applied
    // console.log("About to print the users")
    let applied = await checkIfApplied(userData);
    if (applied) {
      setFormStatus("emailError");
      return;
    }

    //minor files
    const file_obj = userData.resume
    const minor_files = userData.minorForm
    const isMinor = userData.isMinor
    let minor_forms_links = []
    if (isMinor) {
      minor_forms_links = await  upload_minor_forms(minor_files, (userData.firstName + " " + userData.lastName));
    }
    //Resume uploading
    const fileURL = await upload_resume(file_obj, userData);

    let university = userData.universityName === "other"
      ? userData.otherUniversity
      : userData.universityName
    // const date = ((new Date (userData.dateOfBirth)).toLocaleDateString());
    // console.log(date);
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
      age: userData.age,
      minorForm: userData.minorForm,
      gender: userData.sex,
      race: userData.race,
      hackatons_attended: userData.hackathonsAttended,
      linkedin: userData.linkedinURL,
      githubURL: userData.githubURL,
      resume: fileURL,
      content_form: minor_forms_links,
      is_minor: isMinor,
      reason_attending: userData.whyAttend,
      state_from: userData.stateFrom
    }
    // const response_submission = await fetch('http://127.0.0.1:5001/spartahack8/us-central1/registeUser', {
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
    // console.log(message);
    // console.log(myJson);
    if (message === "success") {
      setFormStatus("success")
    } else if (message === "Email already registered") {
      setFormStatus("emailError")
    } else {
      setFormStatus("error");
    }
    return myJson.message
  }
  async function upload_resume(file_obj, userData) {
    const file = file_obj[0];
    const metadata = {
      contentType: file.type
    };
    const storageRef = ref(storage, 'resumes/' + userData.firstName + " " + userData.lastName + " "+file.name );
    // console.log(storageRef);
    const uploadTask = await  uploadBytesResumable(storageRef, file, metadata);
    // console.log(uploadTask.ref);
    const url = await getDownloadURL(uploadTask.ref)
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
    // console.log("Here in the minors part");
    let minor_forms_links = []
    var length = files.length
    for (var i = 0; i < length; i++) {
      var url = await upload_minor_form(files[i], name);
      minor_forms_links.push(url);
    }
    // console.log(minor_forms_links);
    return minor_forms_links
  }

  const handlePrev = () => setStep(prev => prev - 1)
  const handleNext = () => setStep(prev => prev + 1)


  function NavigateHome() {
    setTimeout(() => {
      window.location.href = "/";
    }, 500);
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (step === 6) {
      setShowModal(true)
      setFormStatus("loading")
    }
  }

  return (
    <div className='w-screen flex flex-row justify-center mt-32 sm:mt-24 mb-10'>
      <form
        className="w-full min-h-fit h-max mx-4 sm:w-[80vw] sm:mx-auto max-w-4xl sm:bg-shm-white/10 sm:p-12 rounded-2xl"
        onSubmit={handleSubmit}>

        <header
          className='text-3xl mb-4 sm:mb-6 font-semibold rubik-font text-sh-white w-fit'
          style={{background: "linear-gradient(135deg, #F70063 0%, #1E4FFF 150%)",
          WebkitTextFillColor: "transparent",
          WebkitBackgroundClip: "text",
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
            type='submit' disabled={!canSubmit} hidden={hideSubmit} buttonText="Submit" onClick={submit_form}/>
        </div>

        {showModal &&
        <SubmitModal NavigateHome={NavigateHome} formStatus={formStatus} />}
      </form>
    </div>
  )
}

export default RegistrationForm