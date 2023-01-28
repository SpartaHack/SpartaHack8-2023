import { useEffect, useState, useRef } from "react";
import { storage, app } from "../../../firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, getDocs, setDoc, doc, updateDoc } from "firebase/firestore"
import "./styles/StatsPage.css"
import ButtonPrimary from "../../../components/ui/ButtonPrimary";
import { CSVLink } from "react-csv"
import StatCard from "../StatCard";
import PersonModal from "../PersonModal";
import ApplicationRow from "../ApplicationRow";
// var Barcode = require('react-barcode');


function CheckInModal(props) {
  const closeModal = () => {
    props.setCheckedIn(false);
  }
  return (
    <div className='fixed inset-0 z-10 overflow-y-auto' >
      <div
        className="fixed inset-0 w-full h-full bg-sh-black/30 backdrop-blur-md">
      </div>
      <div className="flex items-center justify-center min-h-screen px-4 py-8">
        <div className="relative max-w-lg min-h-fit sm:min-h-[250px] flex justify-center items-center px-6 sm:px-8 py-8 sm:py-10 mx-auto bg-slate-50 rounded-xl shadow-lg transition-all duration-1000">
          <div className="flex">
            <div className="text-center">
              <div className={" text-2xl rubik-font font-medium"}>
                Student succesfully Checked In!
              </div>
              <div className="mt-4 text-base inter-font leading-relaxed text-gray-500">
                {props.info}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

function CheckInPage(props) {
  const [totalMSU, setTotalMSU] = useState(0);
  const [totalCheckedIn, setTotalCheckedIn] = useState(0);
  const [totalParticpants, setTotalParticipants] = useState(0);
  const [userData, setUserData] = useState([]);
  const [applicantsData, setApplicantsData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [mockData, setMockData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentStudent, setCurrentStudent] = useState(null);
  const [checkedIn, setCheckedIn] = useState(false);

  const [status, setStatus] = useState("")
  const [university, setUniversity] = useState("")
  const [level, setLevel] = useState("")
  const [loaded, setLoaded] = useState(false)


  const statusHandler = (e) => {
    e.target.value === "approved"
      ? setStatus(true)
      : e.target.value === "denied"
        ? setStatus(false)
        : e.target.value === "pending"
          ? setStatus("pending")
          : setStatus("")
    // get_aggregate_data()
  }
  const universityHandler = (e) => {
    setUniversity(e.target.value)
    // get_aggregate_data()
  }
  const levelHandler = (e) => {
    setLevel(e.target.value)
    // get_aggregate_data()

  }

  useEffect(() => {
    var filteredList = applicantsData

    if (university !== "") {
      filteredList = filteredList.filter(applicant => (applicant[0].school === university))
    }
    if (level !== "") {
      filteredList = filteredList.filter(applicant => (applicant[0].education_level === level))
    }
    if (status !== "") {
      if (status === true) {
        filteredList = filteredList.filter(applicant => (applicant[0].approved === true))
      } else {
        if (status === false) {
          filteredList = filteredList.filter(applicant => (applicant[0].reviewed === true && applicant[0].approved === false))
        } else {
          filteredList = filteredList.filter(applicant => (applicant[0].reviewed === undefined))
        }
      }
    }
    setFilteredData(filteredList)
    console.log("Filtered data.")
  }, [university, level, status, applicantsData])


  async function get_aggregate_data() {
    console.log("GETTING DATA -- CALLING API")
    const db = getFirestore(app);
    const querySnap = await getDocs(collection(db, "registrations"));
    let final_count = 0;
    let final_msu_count = 0;
    let final_users_list = [];
    var count = 1;
    let total_checked_in = 0;
    querySnap.forEach((d) => {
      let student = d.data();
      student["id"] = d.id;
      if (student.approved === true) {
        final_users_list.push([student, count]);
        if (student.msu_student) {
          final_msu_count += 1;
        }
        count += 1;
        if (student.checkedIn) {
          total_checked_in += 1;
        }
      }
    })
    setTotalParticipants(count);
    setTotalMSU(final_msu_count);
    setUserData(final_users_list);
    setTotalCheckedIn(total_checked_in);
  }

  if (!loaded) {
    console.log("Called for data - due to changes")
    get_aggregate_data();
    // setApplicantsData(userData)
    setLoaded(true);
  }

  const csvLink = useRef();
  const user_csv_data = userData.map((obj) => { return obj[0] });
  let user_csv_data_checked_in = []
  user_csv_data.forEach((user) => {
    if (user.checkedIn) {
      user_csv_data_checked_in.push(user);
    }
  })

  useEffect(() => {
    setApplicantsData(userData);
    // const interval = setInterval(() => {      
    //   console.log("Called for data - 10 second update")
    //   get_aggregate_data();
    // }, 10000);
    // return () => clearInterval(interval);
  }, []);


  async function update_check_in(element, approving) {
    var specific_user = element[0]
    const db = getFirestore(app);
    await updateDoc(doc(db, "registrations", specific_user.id), { checkedIn: true });
    setCheckedIn(true);
    setTimeout(() => {
      setCheckedIn(false);
    }, 1000);
    var user_list = [...userData];
    let index = element[1];
    user_list[index-1][0].checkedIn = true;
    setUserData(user_list);
    setTotalCheckedIn(totalCheckedIn + 1);
  }

  useEffect(() => {
    setApplicantsData(userData)
    try {
      setCurrentStudent(applicantsData.find(applicant => (
        applicant[0].data().email === currentStudent.data().email
      ))[0])
    } catch {}

  }, [userData, applicantsData, currentStudent])

  const applicantUniversityList = new Array(...new Set(user_csv_data.map((applicant) => {
    return applicant.school
  })))
  const sortedUniversityList = applicantUniversityList.sort()

  const applicantLevelList = new Array(...new Set(user_csv_data.map((applicant) => {
    return applicant.education_level
  })))
  const sortedLevelList = applicantLevelList.sort()

  const fields = [
    { label: 'is_minor', key: 'is_minor' },
    { label: 'checkedIn', key: 'checkedIn' },
    { label: 'first_name', key: 'first_name' },
    { label: 'minorForm', key: 'minorForm' },
    { label: 'gender', key: 'gender' },
    { label: 'race', key: 'race' },
    { label: 'state_from', key: 'state_from' },
    { label: 'hackatons_attended', key: 'hackatons_attended' },
    { label: 'school', key: 'school' },
    { label: 'country_of_origin', key: 'country_of_origin' },
    { label: 'age', key: 'age' },
    { label: 'graduation_date', key: 'graduation_date' },
    { label: 'approved', key: 'approved' },
    { label: 'phone', key: 'phone' },
    { label: 'education_level', key: 'education_level' },
    { label: 'resume', key: 'resume' },
    { label: 'content_form', key: 'content_form' },
    { label: 'reason_attending', key: 'reason_attending' },
    { label: 'accepted_policy', key: 'accepted_policy' },
    { label: 'linkedin', key: 'linkedin' },
    { label: 'net_id', key: 'net_id' },
    { label: 'msu_student', key: 'msu_student' },
    { label: 'major', key: 'major' },
    { label: 'githubURL', key: 'githubURL' },
    { label: 'email', key: 'email' },
    { label: 'last_name', key: 'last_name' }

  ];

  const download_csv = () => {
    csvLink.current.link.click()
  }

  return (
    <div className="w-full max-w-6xl mt-24 px-4 md:px-8 flex flex-col scroll-smooth overflow-hidden">
      <div className="grid grid-cols-2 lg:w-fit lg:grid-cols-5 justify-center items-center gap-3 sm:gap-6 my-6 lg:mx-auto">
        {/* <StatCard statTitle="Total Applicants" data={countUsersApplied} className="col-span-2 md:col-span-1"/> */}
        <StatCard statTitle="Total Coming Participants" data={totalParticpants} className="border-teal-500" />
        {/* <StatCard statTitle="Total Pending Review" data={countUsersApplied - totalReviewed} className="border-blue-400"/> */}
        <StatCard statTitle="Total MSU Applicants" data={totalMSU} />
        <StatCard statTitle="Total Applicants Checked In" data={totalCheckedIn} className="border-blue-400"/>
        <StatCard statTitle="Total Remaining" data={totalParticpants -  totalCheckedIn} className="border-teal-500" />
      </div>

      <CSVLink
        data={user_csv_data_checked_in}
        filename='UsersReport.csv'
        headers={fields}
        className='hidden'
        ref={csvLink}
        target='_blank'
      />
      <div className="w-full flex flex-col sm:flex-row justify-between items-center mt-20 gap-y-6 gap-x-6 sm:gap-y-0">
        <div className="h-full py-2 gradient-text rubik-font text-[36px] sm:text-[48px] font-medium text-center sm:text-left leading-10">
          Check-In Participants
        </div>
        {/* <p>{sortedLevelList}</p> */}
        <div>
            <ButtonPrimary
              buttonText="Download CSV" onClick={download_csv} />
          </div>
      </div>
      <div className=" w-full max-w-6xl  mt-12 mb-28 mx-auto  flex flex-col">
        <div className="h-16 w-full flex flex-row items-center justify-center gap-x-2 text-white text-center rubik-font uppercase">
          <div className="w-full max-w-[256px]">
            <select id="admin_filter" className="w-full rounded text-sh-white border border-sh-white/50 p-1 bg-sh-black/50" name="university" onChange={universityHandler}>
              <option className="bg-white" value="" selected>Filter University/College</option>
              {sortedUniversityList.map((universityName) => {
                return (
                  <option className="bg-white" value={universityName}>{universityName}</option>
                )
              })}
            </select>
          </div>
          <div className="w-full max-w-[256px]">
            <select id="admin_filter" className="w-full rounded text-sh-white border border-sh-white/50 p-1 bg-sh-black/50" name="level" onChange={levelHandler}>
              <option className="bg-white" value="" selected>Filter Education Level</option>
              {sortedLevelList.map((level) => {
                return (
                  <option className="bg-white" value={level}>{level}</option>
                )
              })}
            </select>
          </div>
          {/* <div className="w-full max-w-[256px]">
            <select id="admin_filter" className="w-full min-w-[90px] rounded text-sh-white border border-sh-white/50 p-1 bg-sh-black/50" name="status" onChange={statusHandler}>
              <option className="bg-white" value="" selected>Filter Application Status</option>
              <option className="bg-white" value="pending">Pending</option>
              <option className="bg-white" value="approved">Approved</option>
              <option className="bg-white" value="denied">Rejected</option>
            </select>
          </div> */}
        </div>
        <div className="h-16 w-full flex flex-row items-center gap-x-2 text-white text-center rubik-font uppercase text-sm lg:text-base border-b border-sh-pink">
          <div className="w-10"></div>
          <div className="w-44">Name</div>
          <div className="w-36">School</div>
          <div className="w-16 min-w-[33px]">Age</div>
          <div className="w-24 min-w-[50px] break-all">Country</div>
          <div className="w-24 min-w-[56px]">Level</div>
          <div className="w-20 min-w-[63px]">Resume</div>
          <div className="w-20 min-w-[63px]">See more</div>
          <div className="grow min-w-[90px] ml-2">Status</div>
        </div>


        {
          checkedIn &&
          <CheckInModal setCheckedIn={setCheckedIn}
            info="Email sent successfully!" />
        }
        <div className="flex flex-col divide-y divide-white/20 h-[85vh] overflow-x-hidden">
          {
            filteredData.map( (tuple) => {
              // console.log(tuple[0])
              var curr_doc = tuple[0];
              var count = tuple[1];
              var student = curr_doc;
              // console.log(tuple)
              function open_modal() {
                setShowModal(true)
                setCurrentStudent(curr_doc);
              }
              function check_current_student() {
                update_check_in(tuple, true).then(() => {
                  console.log()
                }).catch((err) => {
                  console.log()
                });
              }
              return (
                <div>
                  <div className="h-20 shrink-0 flex flex-row items-center py-3 box-border text-white text-center inter-font font-normal md:font-light text-xs md:text-sm gap-x-2">
                    <div className="  w-10">{count}</div>
                    <div className="  w-44 ">{student.first_name} {student.last_name}</div>
                    <div className={(student.msu_student ? "bg-green-300/20" : "") + "  w-36 h-full flex justify-center items-center rounded"}>{student.school}</div>
                    <div className={(student.is_minor ? "bg-rose-400/20" : "") + "  w-16 min-w-[33px] h-full flex justify-center items-center rounded "}>{student.age}</div>
                    <div className="  w-24 min-w-[50px]">{student.country_of_origin}</div>
                    <div className="  w-24 min-w-[56px] break-all ">{student.education_level}</div>
                    <div className="  w-20 min-w-[63px] h-full flex justify-center items-center ">
                      <a className=" w-full  h-full flex justify-center items-center px-2 rounded bg-blue-500 hover:bg-blue-300 transition duration-75 uppercase rubik-font" href={student.resume} target="_blank" rel="noreferrer" >Resume</a>
                    </div>
                    <div className=" w-20 h-full ">
                      <button onClick={open_modal} className=" w-full min-w-[63px] h-full px-2 rounded bg-gray-700 hover:bg-gray-500 transition duration-75 uppercase rubik-font ">Expand</button>
                    </div>
                    <div className="h-full flex flex-col lg:flex-row grow ml-2 justify-center items-center uppercase rubik-font font-normal">
                      {
                        student.checkedIn
                        ?
                          <div className="h-full w-full min-w-[90px] flex flex-col justify-center items-center px-2 text-teal-500 bg-teal-500/10 rounded  "> Checked In </div>
                        :
                        <button  onClick={check_current_student} className="w-full min-w-[90px] m-1 p-1 lg:min-w-fit h-full px-2 bg-teal-600 hover:bg-teal-300 rounded uppercase transition duration-75">Check-In</button>
                      }
                    </div>
                  </div>
                </div>

              );
            })
          }
        </div>
      </div>
      {
        showModal ?
          <PersonModal
            currentStudent={currentStudent}
            update_approval={update_check_in}
            setShowModal={setShowModal}
          /> :
          null
      }
    </div >
  );

}

export default CheckInPage;

