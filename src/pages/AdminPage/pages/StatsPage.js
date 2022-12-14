import { useEffect, useState } from "react";
import {storage, app} from "../../../firebaseConfig";
import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import { getFirestore, collection, getDocs, setDoc, doc, updateDoc} from "firebase/firestore"
import "./styles/StatsPage.css"



function PersonModal(props) {
  let student = props.currentStudent.data();
  // console.log(student.registered_at);
  var newDate = new Date(student.registered_at.seconds);
  newDate = newDate.toString();
  function closeModal() {
    props.setShowModal(false);
  }
  function approveStudent() {
    props.update_approval(props.currentStudent, true);
  }
  function denyStudent() {
    props.update_approval(props.currentStudent, false);
  }
  return (
    <div className="">
      {/* <!-- Modal toggle --> */}
      {/* <button className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="defaultModal">
        Toggle modal
      </button> */}

      {/* <!-- Main modal --> */}
      <div  className="fixed top-0 left-0  z-50  w-full p-4 overflow-x-hidden " >
          <div className="relative w-full h-full  ">
              {/* <!-- Modal content --> */}
              <div className="relative  bg-white rounded-lg shadow dark:bg-gray-700">
                  {/* <!-- Modal header --> */}
                  <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          Currently viewing: {student.first_name + " " + student.last_name }
                      </h3>
                      <button onClick={closeModal} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                          <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          <span className="sr-only">Close modal</span>
                      </button>
                  </div>
                  {/* <!-- Modal body --> */}
                  <div className="p-6 space-y-6 text-white overscroll-auto">
                      <div className="flex flex-wrap overscroll-auto">
                        {/* First row */}
                        <div className="flex flex-col m-3 justify-center align-center w-1/6 h-32">
                          <div className="bg-slate-900 rounded my-2 border-2 border-sky-500 text-center">
                            Name:
                          </div>
                          <div className="text-center">
                            {student.first_name} {student.last_name}
                          </div>
                        </div>

                        <div className="flex flex-col m-3 justify-center align-center w-1/6 h-32">
                          <div className="bg-slate-900 rounded my-2 border-2 border-sky-500 text-center">
                            Age:
                          </div>
                          <div className="text-center">
                            {student.age}
                          </div>
                        </div>

                        <div className="flex flex-col m-3 justify-center align-center w-1/6 h-32">
                          <div className="bg-slate-900 rounded my-2 border-2 border-sky-500 text-center">
                            Country of origin
                          </div>
                          <div className="text-center">
                            {student.country_of_origin}
                          </div>
                        </div>

                        <div className="flex flex-col m-3 justify-center align-center w-1/6 h-32">
                          <div className="bg-slate-900 rounded my-2 border-2 border-sky-500 text-center">
                            Education Level
                          </div>
                          <div className="text-center">
                            {student.education_level}
                          </div>
                        </div>

                        <div className="flex flex-col m-3 justify-center align-center w-1/6 h-32">
                          <div className="bg-slate-900 rounded my-2 border-2 border-sky-500 text-center">
                            Email
                          </div>
                          <div className="text-center">
                            {student.email}
                          </div>
                        </div>

                        <div className="flex flex-col m-3 justify-center align-center w-1/6 h-32">
                          <div className="bg-slate-900 rounded my-2 border-2 border-sky-500 text-center">
                            Gender
                          </div>
                          <div className="text-center">
                            {student.gender}
                          </div>
                        </div>

                        <div className="flex flex-col m-3 justify-center align-center w-1/6 h-32">
                          <div className="bg-slate-900 rounded my-2 border-2 border-sky-500 text-center">
                            GitHub
                          </div>
                          {
                            student.githubURL ?
                            <a className="text-center text-sky-400" href={student.githubURL}>
                            Go to GitHub
                            </a> :
                            <div className="text-center">
                              Not Provided
                            </div>
                          }
                        </div>

                        <div className="flex flex-col m-3 justify-center align-center w-1/6 h-32">
                          <div className="bg-slate-900 rounded my-2 border-2 border-sky-500 text-center">
                            Minor
                          </div>
                          {
                            student.content_form ?
                            <div className="flex flex-col justify-center align-center">
                              <a className="text-center text-sky-400" href={student.content_form[0]}> Link</a>
                              <a className="text-center text-sky-400" href={student.content_form[1]}> Link</a>
                              <a className="text-center text-sky-400" href={student.content_form[2]}> Link</a>
                            </div>
                            :
                            <div className="text-center">
                              Not Provided
                            </div>
                          }
                        </div>

                        <div className="flex flex-col m-3 justify-center align-center w-1/6 h-32">
                          <div className="bg-slate-900 rounded my-2 border-2 border-sky-500 text-center">
                            LinkedIn
                          </div>
                          {
                            student.linkedin ?
                            <a className="text-center text-sky-400" href={student.githubURL}>
                            Go to LinkedIn
                            </a> :
                            <div className="text-center">
                              Not Provided
                            </div>
                          }
                        </div>

                        <div className="flex flex-col m-3 justify-center align-center w-1/6 h-32">
                          <div className="bg-slate-900 rounded my-2 border-2 border-sky-500 text-center">
                            Race
                          </div>
                          <div className="text-center">
                            {student.gender}
                          </div>
                        </div>

                        <div className="flex flex-col m-3 justify-center align-center w-1/6 h-32">
                          <div className="bg-slate-900 rounded my-2 border-2 border-sky-500 text-center">
                            Major
                          </div>
                          <div className="text-center">
                            {student.major}
                          </div>
                        </div>

                        <div className="flex flex-col m-3 justify-center align-center w-1/6 h-32">
                          <div className="bg-slate-900 rounded my-2 border-2 border-sky-500 text-center">
                            Phone
                          </div>
                          <div className="text-center">
                            {student.phone}
                          </div>
                        </div>

                        <div className="flex flex-col m-3 justify-center align-center w-1/6 h-32">
                          <div className="bg-slate-900 rounded my-2 border-2 border-sky-500 text-center">
                            School
                          </div>
                          <div className="text-center">
                            {student.school}
                          </div>
                        </div>

                        <div className="flex flex-col m-3 justify-center align-center w-1/6 h-32">
                          <div className="bg-slate-900 rounded my-2 border-2 border-sky-500 text-center">
                            Graduation Date
                          </div>
                          <div className="text-center">
                            {student.graduation_date}
                          </div>
                        </div>

                        <div className="flex flex-col m-3 justify-center align-center w-1/6 h-32">
                          <div className="bg-slate-900 rounded my-2 border-2 border-sky-500 text-center">
                            Hackathons Attended
                          </div>
                          <div className="text-center">
                            {student.hackathons_attended}
                          </div>
                        </div>

                        <div className="flex flex-col m-3 justify-center align-center w-1/6 h-32">
                          <div className="bg-slate-900 rounded my-2 border-2 border-sky-500 text-center">
                            State From
                          </div>
                          <div className="text-center">
                            {student.state_from}
                          </div>
                        </div>


                        <div className="flex flex-col m-3 justify-center align-center w-1/6 h-32">
                          <div className="bg-slate-900 rounded my-2 border-2 border-sky-500 text-center">
                            Resume
                          </div>
                          <a href={student.resume} className="text-center  text-sky-400">
                            Go to Resume
                          </a>
                        </div>

                        <div className="flex flex-col m-3 justify-center align-center w-1/6 h-32">
                          <div className="bg-slate-900 rounded my-2 border-2 border-sky-500 text-center">
                            Reason Attending
                          </div>
                          <div className="text-center">
                            {student.reason_attending}
                          </div>
                        </div>

                        <div className="flex flex-col m-3 justify-center align-center w-1/6 h-32">
                          <div className="bg-slate-900 rounded my-2 border-2 border-sky-500 text-center">
                            Date Registered
                          </div>
                          <div className="text-center">
                            {newDate}
                          </div>
                        </div>
                      </div>

                  </div>
                  {/* <!-- Modal footer --> */}
                  <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                      <button onClick={approveStudent} data-modal-toggle="defaultModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Approve </button>
                      <button onClick={closeModal} type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Close</button>
                  </div>
              </div>
          </div>
      </div>

    </div>
  )
}




function StatsPage() {
  const [countUsersApplied, setCountUsersApplied] = useState(0);
  const [totalMSU, setTotalMSU] = useState(0);
  const [userData, setUserData] = useState([]);
  const [mockData, setMockData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentStudent, setCurrentStudent] = useState(null);

  async function get_aggregate_data() {
    const db = getFirestore(app);
    const querySnap = await getDocs(collection(db, "registrations"));
    let final_count = 0;
    let final_msu_count = 0;
    let final_users_list = [];
    var count = 1;
    querySnap.forEach((doc) => {
      const data = doc.data();
      final_count = final_count + 1;
      // Building the list of students applying
      // if ( data.approved === false) {
      //   if (data.reviewed) {
      //   } else{
      //     final_users_list.push(doc);
      //   }
      // }
      final_users_list.push([doc, count]);
      count += 1;
      // if (data.email === "natarenm@msu.edu" && data.approved === false) {
      //   final_users_list.push(doc);
      // }
      if (data.msu_student === true) {
        final_msu_count += 1;
      }

    });
    setCountUsersApplied(final_count);
    setTotalMSU(final_msu_count);
    setUserData(final_users_list);
  }
  get_aggregate_data().then(() => {
    // console.log("Called correctly");
  }).catch((err) => {
    // console.log("Error!!");
    // console.log(err)
  });
  // setTimeout(() => {
  // }, 2000);

  async function update_approval(element, approving) {
    const db = getFirestore(app);
    await updateDoc(doc(db, "registrations", element.id), {approved: approving, reviewed: true});
    //Send email
    const email_sent = await fetch('https://us-central1-spartahack8.cloudfunctions.net/sendEmailsOfApproval', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(element.data())
      });

    console.log(email_sent);
    console.log(email_sent.message);
  }
  async function try_pushing_data() {
    const db = getFirestore(app);
    const docData = {
      something: "JAJAJA",
      else: "xdxd"
    }
    let md = [];
    const query = await getDocs(collection(db, "data"));
    query.forEach( (doc) => {
      md.push(doc);
      console.log(doc);
    })
    setMockData(md);
    // await setDoc(doc(db, "data", "three"), docData);
    // await updateDoc(doc(db, "data", "one"), {something: "HAHAHAH"});
  }
  return (
    <div className="container mt-5 flex flex-col h-4/5 scroll-smooth overflow-scroll">
      <div className="text-white">
        Total of people applying so far: {countUsersApplied}
      </div>
      <div className="text-white">
        Total people from MSU: {totalMSU}
      </div>
      {/* <button className="text-white rounded bg-sky-300" onClick={try_pushing_data}>Click here</button> */}
      <div className="container mt-4 md mx-auto  flex flex-col rounded border-2 border-amber-50">
        {/* {mockData.map((doc) => {
          let user = doc.data();
          return (
            <div className="flex  py-3 items-center justify-between">
              <div className="text-white rounded bg-sky-500 px-px">{doc.id}</div>
              <div className="text-white rounded bg-sky-500 px-px">{user.something}</div>
            </div>
          )
        })} */}
        <div className="flex  my-2 py-1  bg-sky-900/80">
              <div className="text-white text-center mx-3 w-1/5 ">Name</div>
              <div className="text-white text-center mx-3 w-1/5 ">School</div>
              <div className="text-white text-center mx-3 item_size ">Age</div>
              <div className="text-white text-center mx-3 item_size ">Country</div>
              <div className="text-white text-center mx-3 item_size ">Level</div>
              <div className="text-white text-center mx-3 item_size ">Resume</div>
              <div className="text-white text-center mx-3 see_more_w  "> See more</div>
              <div className="text-white text-center mx-3 w-64"> Approve / Deny</div>
              {/* <div className="text-white text-center mx-3 w-32  "> Deny</div> */}
          </div>
        {
          userData.map((tuple) => {
          var curr_doc = tuple[0];
          var count = tuple[1];
          var student = curr_doc.data();
          function open_modal() {
            setShowModal(true)
            setCurrentStudent(curr_doc);
          }
          function approve_current_student() {
            update_approval(curr_doc, true).then(() => {
              console.log("updated correctly");
            }).catch((err) => {
              console.log("Error on updating");
              console.log(err);
            });
          }
          function deny_current_student() {
            update_approval(curr_doc, false).then(() => {
              console.log("updated correctly");
            }).catch((err) => {
              console.log("Error on updating");
              console.log(err);
            });
          }
          console.log(doc.id);
          return (
            <div className="flex  my-2 py-1 justify-around rounded border-2 border-orange-400">
              <div className="text-white text-center mx-1 w-4">{count}</div>
              <div className="text-white text-center mx-3 w-1/5 ">{student.first_name} {student.last_name}</div>
              <div className="text-white text-center mx-3 w-1/5 ">{student.school}</div>
              <div className="text-white text-center mx-3 item_size ">{student.age}</div>
              <div className="text-white text-center mx-3 item_size ">{student.country_of_origin}</div>
              <div className="text-white text-center mx-3 item_size ">{student.education_level}</div>
              <a className="text-blue-400 text-center mx-3 item_size " href={student.resume} target="_blank" rel="noreferrer" > Resume</a>
              <button onClick={open_modal} className="text-white text-center mx-3 w-1/12  rounded border-2 border-emerald-700">Expand</button>
              {
                student.reviewed ?
                  student.approved ?
                  <div className="text-teal-500 text-center mx-3  w-64"> Approved </div>
                  :
                  <div className="text-rose-600 text-center mx-3  w-64"> Denied </div>
                :
                <button onClick={approve_current_student} className="text-white text-center mx-3 bg-lime-500 w-32  rounded border-2 border-emerald-700">Approve</button>
              }
              {
                student.reviewed ?
                  null :
                <button onClick={deny_current_student} className="text-white text-center mx-3 bg-red-600 w-32  rounded border-2 border-emerald-700">Denial</button>
              }
            </div>
          );
        })}
      </div>
      {showModal ?
        <PersonModal
          currentStudent={currentStudent}
          update_approval={update_approval}
          setShowModal = {setShowModal}

        /> :
        null
      }
    </div>
  );

}

export default StatsPage;

