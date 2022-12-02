import React from 'react'
import ErrorIcon from '../icons/ErrorIcon'
import LoadingAnimation from '../icons/LoadingAnimation'
import SuccessIcon from '../icons/SuccessIcon'
import FormButton from './FormButton'

function SubmitModal(props) {

  const statusData = {
    "loading": {
      title: "Your application is being submitted...",
      info: "Shouldn't take longer than a few seconds. Please don't refresh or go back.",
      titleClass: "text-sh-black",
      icon: <LoadingAnimation svgClasses="h-full " />
    },
    "error": {
      title: "An error occurred while submitting your application.",
      info: "We're sorry for the inconvenience. Please try again after some time.",
      titleClass: "text-sh-black",
      icon: <ErrorIcon svgClasses="h-full" strokeColor="rgba(239, 68, 68, 0.8)" />
    },
    "emailError": {
      title: "Your email is already registered.",
      info: <span>
        The email you used to apply is already in our database. If you would like to change any details, please contact us at<span className='select-all cursor-pointer text-sky-500'> hello@spartahack.com</span>.
      </span>,
      titleClass: "text-sh-black",
      icon: <ErrorIcon svgClasses="h-full" strokeColor="rgba(245, 158, 11, 0.8)" />
    },
    "success": {
      title: "Your application was submitted successfully!",
      info: "You'll receive a confirmation email soon with more information (check your inbox and spam). You may now close this tab or return to our home page.",
      titleClass: "text-sh-black",
      icon: <SuccessIcon svgClasses="h-full" strokeColor="rgba(34, 197, 94, 0.8)" />
    },
  }

  return (
    <div className='fixed inset-0 z-10 overflow-y-auto'>
      <div
        className="fixed inset-0 w-full h-full bg-sh-black/30 backdrop-blur-md">
      </div>
      <div className="flex items-center justify-center min-h-screen px-4 py-8">
        <div className="relative max-w-lg min-h-fit sm:min-h-[250px] flex justify-center items-center px-6 sm:px-8 py-8 sm:py-10 mx-auto bg-slate-50 rounded-xl shadow-lg transition-all duration-1000">
          <div className="flex">
            <div className="text-center">
              <div className="flex justify-center items-center mb-4 h-14">
                {statusData[props.formStatus].icon}
              </div>
              <div className={statusData[props.formStatus].titleClass + " text-2xl rubik-font font-medium"}>
                {statusData[props.formStatus].title}
              </div>
              <div className="mt-4 text-base inter-font leading-relaxed text-gray-500">
                {statusData[props.formStatus].info}
              </div>
              {(props.formStatus === "success") &&
                <div className="flex justify-center items-center mt-6">
                  <FormButton buttonClass="bg-pink-600 text-white hover:bg-pink-500 min-w-fit"
                    type='button' onClick={props.NavigateHome} buttonText="Back to Home" />
                </div>
              }
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SubmitModal