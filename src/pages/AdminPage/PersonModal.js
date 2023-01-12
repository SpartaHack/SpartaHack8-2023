import React from 'react'
import PersonModalItem from './PersonModalItem';

function PersonModal(props) {
  let student = props.currentStudent.data();
  console.log(student.registered_at);

  var newDate = new Date(student.registered_at.seconds);
  newDate = newDate.toDateString();
  function closeModal(e) {
    if (["outsideModal", "closeModal"].includes(e.target.id)) {
      props.setShowModal(false);
    }
  }
  function approveStudent() {
    props.update_approval(props.currentStudent, true);
  }
  function denyStudent() {
    props.update_approval(props.currentStudent, false);
  }
  return (
    <div className="fixed w-screen h-screen top-0 left-0 z-10 flex justify-center items-center bg-black/10 backdrop-blur-sm" onClick={closeModal} id="outsideModal">
      {/* <!-- Main modal --> */}
      <div className="h-fit z-12 w-full m-4 sm:m-10 rounded" id="outsideModal">
        {/* <!-- Modal content --> */}
        <div className=" shadow dark:bg-zinc-800 bg-gray-700 border-gray-600 rounded-lg p-6 sm:p-8">
          {/* <!-- Modal header --> */}
          <div className="flex items-start justify-between mb-6">
            <h3 className="  rubik-font">
              <div className="text-white/60 font-normal text-xs sm:text-sm uppercase mb-1">Currently viewing:</div>
              <div className='dark:text-pink-500 font-medium text-xl sm:text-2xl'>{student.first_name + " " + student.last_name}
              </div>
            </h3>
            <button id="closeModal" onClick={closeModal} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-zinc-800 dark:hover:text-white" data-modal-toggle="defaultModal">
              <svg id="closeModal" aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path id="closeModal" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd">
                </path>
              </svg>
              <span id="closeModal" className="sr-only">Close modal</span>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <div className="space-y-6 text-xs lg:text-xl text-white overflow-scroll modal_body border-zinc-600 bg-zinc-800">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-2 mb-6 overscroll-auto">
              {/* First row */}
              <PersonModalItem dataTitle="Name" data={student.first_name + " " + student.last_name} className="col-span-2 " />
              <PersonModalItem dataTitle="Age" data={student.age} />
              <PersonModalItem dataTitle="Email" data={student.email} />
              <PersonModalItem dataTitle="School" data={student.school} />
              <PersonModalItem dataTitle="Major" data={student.major} />
              <PersonModalItem dataTitle="Education Level" data={student.education_level} />
              <PersonModalItem dataTitle="Graduation Date" data={student.graduation_date} />
              <PersonModalItem dataTitle="Gender" data={student.gender} />
              <PersonModalItem dataTitle="Race" data={student.race} />
              <PersonModalItem dataTitle="Country of origin" data={student.country_of_origin} />
              <PersonModalItem dataTitle="U.S. State from" data={student.state_from} />
              <PersonModalItem dataTitle="Phone" data={student.phone} />
              <PersonModalItem dataTitle="Resume" data={
                <a href={student.resume} className="  text-sky-400">
                  Go to Resume
                </a>} />
              <PersonModalItem className="col-span-2" dataTitle="Reason Attending" data={
                <div>
                  {student.reason_attending}
                </div>} />
              {/* <PersonModalItem dataTitle="Date Registered" data={
                <div>
                  {newDate}
                </div>} /> */}
              <div className='col-span-1 grid grid-cols-2 gap-4'>
                <PersonModalItem dataTitle="GitHub" data={student.githubURL ?
                  <a className=" text-sky-400" href={student.githubURL}>
                    Link
                  </a> :
                  <div>
                    Not Provided
                  </div>} />
                <PersonModalItem dataTitle="LinkedIn" data={student.linkedin ?
                  <a className=" text-sky-400" href={student.githubURL}>
                    Link
                  </a> :
                  <div>
                    Not Provided
                  </div>} />
              </div>
              <PersonModalItem dataTitle="Hackathons Attended" data={student.hackatons_attended} />
              {student.is_minor &&
                <PersonModalItem dataTitle="Minor" data={
                  <div className="flex flex-col justify-start align-center">
                    <a className=" text-sky-400" href={student.content_form[0]}> Link</a>
                    <a className=" text-sky-400" href={student.content_form[1]}> Link</a>
                    <a className=" text-sky-400" href={student.content_form[2]}> Link</a>
                  </div>} />
              }
            </div>

          </div>
          {/* <!-- Modal footer --> */}
          <div className="h-14 flex flex-row text-sm md:text-base justify-end items-center pt-2 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600 bg-zinc-800 rubik-font font-normal text-white">
            {
          student.reviewed ?
            student.approved ?
              <div className="h-full w-full min-w-[90px] flex flex-col justify-center items-center px-2 text-teal-500 bg-teal-500/10 rounded  "> Approved </div>
              :
              <div className="h-full w-full min-w-[90px] flex flex-col justify-center items-center px-2 text-rose-500 bg-rose-600/10 rounded  "> Denied </div>
            :
           <button onClick={approveStudent} data-modal-toggle="defaultModal" type="button" className="w-full sm:w-32 h-full bg-teal-500 hover:bg-teal-300 rounded uppercase transition duration-75">
              Approve
            </button>
        }
        {
          student.reviewed ?
            null :
            <button onClick={denyStudent} type="button" className="w-full sm:w-32 h-full ml-2 bg-rose-500 hover:bg-rose-300 rounded uppercase transition duration-75">
              Deny
            </button>
        }
            {/* <button onClick={denyStudent} type="button" className="w-full sm:w-32 h-full ml-2 bg-rose-500 hover:bg-rose-300 rounded uppercase transition duration-75">
              Deny
            </button>
            <button onClick={approveStudent} data-modal-toggle="defaultModal" type="button" className="w-full sm:w-32 h-full bg-teal-500 hover:bg-teal-300 rounded uppercase transition duration-75">
              Approve
            </button> */}

          </div>
        </div>
      </div>

    </div>
  )
}

export default PersonModal