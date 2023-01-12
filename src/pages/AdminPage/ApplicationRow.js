import React from 'react'

function ApplicationRow(props) {
  return (
    <div className="h-20 shrink-0 flex flex-row items-center py-3 box-border text-white text-center inter-font font-normal md:font-light text-xs md:text-sm gap-x-2">
      <div className="  w-10">{props.count}</div>
      <div className="  w-44 ">{props.student.first_name} {props.student.last_name}</div>
      <div className={(props.student.msu_student ? "bg-green-300/20" : "") + "  w-36 h-full flex justify-center items-center rounded"}>{props.student.school}</div>
      <div className={(props.student.is_minor ? "bg-rose-400/20" : "") + "  w-16 min-w-[33px] h-full flex justify-center items-center rounded "}>{props.student.age}</div>
      <div className="  w-24 min-w-[50px]">{props.student.country_of_origin}</div>
      <div className="  w-24 min-w-[56px] break-all ">{props.student.education_level}</div>
      <div className="  w-20 min-w-[63px] h-full flex justify-center items-center ">
        <a className=" w-full  h-full flex justify-center items-center px-2 rounded bg-blue-500 hover:bg-blue-300 transition duration-75 uppercase rubik-font" href={props.student.resume} target="_blank" rel="noreferrer" >Resume</a>
      </div>
      <div className=" w-20 h-full ">
        <button onClick={props.open_modal} className=" w-full min-w-[63px] h-full px-2 rounded bg-gray-700 hover:bg-gray-500 transition duration-75 uppercase rubik-font ">Expand</button>
      </div>
      <div className="h-full flex flex-col lg:flex-row grow ml-2 justify-center items-center uppercase rubik-font font-normal">
        {
          props.student.reviewed ?
            props.student.approved ?
              <div className="h-full w-full min-w-[90px] flex flex-col justify-center items-center px-2 text-teal-500 bg-teal-500/10 rounded  "> Approved </div>
              :
              <div className="h-full w-full min-w-[90px] flex flex-col justify-center items-center px-2 text-rose-500 bg-rose-600/10 rounded  "> Denied </div>
            :
            <button onClick={props.approve_current_student} className="w-full min-w-[90px] lg:min-w-fit h-full px-2 bg-teal-600 hover:bg-teal-300 rounded uppercase transition duration-75">Approve</button>
        }
        {
          props.student.reviewed ?
            null :
            <button onClick={props.deny_current_student} className="w-full min-w-[90px] lg:min-w-fit h-full px-2 lg:ml-2 mt-1 lg:mt-0 bg-rose-500 hover:bg-rose-300 rounded uppercase transition duration-75">Deny</button>
        }
      </div>
    </div>
  )
}

export default ApplicationRow