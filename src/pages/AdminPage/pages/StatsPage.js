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






function EmailModal(props) {
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
                {/* {statusData[props.formStatus].icon} */}
              </div>
              <div className={" text-2xl rubik-font font-medium"}>
                Email Sent!
              </div>
              <div className="mt-4 text-base inter-font leading-relaxed text-gray-500">
                {props.info}
              </div>
              {/* {(props.formStatus !== "loading") &'
                <div className="flex justify-center items-center mt-6">
                  <FormButton buttonClass="bg-pink-600 text-white hover:bg-pink-500 min-w-fit"
                    type='button' onClick={props.NavigateHome} buttonText="Back to Home" />
                </div>
              } */}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

function StatsPage() {
  const [countUsersApplied, setCountUsersApplied] = useState(0);
  const [totalMSU, setTotalMSU] = useState(0);
  const [userData, setUserData] = useState([]);
  const [applicantsData, setApplicantsData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [mockData, setMockData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentStudent, setCurrentStudent] = useState(null);
  const [emailSent, setEmailSent] = useState(false);
  const [filtersList, setFiltersList] = useState({
    universityFilter: "",
    levelFilter: "",
    statusFilter: ""
  })

  const [status, setStatus] = useState("")
  const [university, setUniversity] = useState("")
  const [level, setLevel] = useState("")


  const statusHandler = (e) => {
    e.target.value === "approved"
      ? setStatus(true)
      : e.target.value === "denied"
        ? setStatus(false)
        : e.target.value === "pending"
          ? setStatus("pending")
          : setStatus("")
  }
  const universityHandler = (e) => {
    setUniversity(e.target.value)
  }
  const levelHandler = (e) => {
    setLevel(e.target.value)
  }

  useEffect(() => {
    setFiltersList((prev) => ({
      ...prev, "statusFilter": status
    }))
    setFiltersList((prev) => ({
      ...prev, "universityFilter": university
    }))
    setFiltersList((prev) => ({
      ...prev, "levelFilter": level
    }))
  }, [status, level, university])

  useEffect(() => {
    var filteredList = applicantsData

    if (university !== "") {
      filteredList = filteredList.filter(applicant => (applicant[0].data().school === university))
    }
    if (level !== "") {
      filteredList = filteredList.filter(applicant => (applicant[0].data().education_level === level))
    }
    console.log(status)
    if (status !== "") {
      if (status === true) {
        filteredList = filteredList.filter(applicant => (applicant[0].data().approved === true))
      } else {
        if (status === false) {
          filteredList = filteredList.filter(applicant => (applicant[0].data().reviewed === true && applicant[0].data().approved === false))
        } else {
          filteredList = filteredList.filter(applicant => (applicant[0].data().reviewed === undefined))
        }
      }
    }

    console.log(filteredList.map(obj => obj[0].data()))
    setFilteredData(filteredList)
  }, [university, level, status, applicantsData])


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
  };

  useEffect(() => {
    get_aggregate_data();
  }, []);


  async function update_approval(element, approving) {
    const db = getFirestore(app);
    await updateDoc(doc(db, "registrations", element.id), { approved: approving, reviewed: true });
    //Send email
    console.log(approving);
    console.log("Here is the approval thing above");
    if (approving) {
      let data = element.data();
      data["action"] = "approve";
      console.log(data);
      const email_sent = await fetch('https://us-central1-spartahack8.cloudfunctions.net/sendEmailsOfApproval', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      console.log("We finished calling and sending emails")
      console.log(email_sent);
      console.log(email_sent.message);
    } else {
      let data = element.data();
      data["action"] = "deny"
      const email_sent = await fetch('https://us-central1-spartahack8.cloudfunctions.net/sendEmailsOfApproval', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      console.log("We finished calling and sending emails")
      console.log(email_sent);
      console.log(email_sent.message);
    }
    setEmailSent(true);
  }
  async function try_pushing_data() {
    const db = getFirestore(app);
    const docData = {
      something: "JAJAJA",
      else: "xdxd"
    }
    let md = [];
    const query = await getDocs(collection(db, "data"));
    query.forEach((doc) => {
      md.push(doc);
      // console.log(doc);
    })
    setMockData(md);
    // await setDoc(doc(db, "data", "three"), docData);
    // await updateDoc(doc(db, "data", "one"), {something: "HAHAHAH"});
  }

  const csvLink = useRef();
  const user_csv_data = userData.map((obj) => { return obj[0].data() });

  useEffect(() => {
    setApplicantsData(userData)
  }, [userData])

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
    <div className="w-full max-w-6xl mt-24 px-4 flex flex-col scroll-smooth overflow-hidden">
      <div className="flex flex-row justify-end items-center gap-3 sm:gap-6 my-6">
        <StatCard statTitle="Total Applicants" data={countUsersApplied} />
        <StatCard statTitle="Total MSU Applicants" data={totalMSU} />
        <StatCard statTitle="Total Non-MSU Applicants" data={countUsersApplied - totalMSU} />
      </div>

      <CSVLink
        data={user_csv_data}
        filename='UsersReport.csv'
        headers={fields}
        className='hidden'
        ref={csvLink}
        target='_blank'
      />
      <div className="w-full flex flex-col sm:flex-row justify-between items-center mt-12 gap-y-6 sm:gap-y-0">
        <div className="gradient-text rubik-font text-[36px] sm:text-[48px] font-medium text-center sm:text-left leading-10">
          Review Applications
        </div>
        {/* <p>{sortedLevelList}</p> */}
        <div>
          <ButtonPrimary
            buttonText="Download CSV" onClick={download_csv} />
        </div>
      </div>
      {/* <button className="text-white rounded bg-sky-300" onClick={try_pushing_data}>Click here</button> */}
      <div className=" w-full max-w-6xl  mt-12 mb-28 mx-auto  flex flex-col">
        <div className="h-12 w-full flex flex-row items-center gap-x-2 text-white text-center rubik-font uppercase text-sm lg:text-base">
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
        <div className="h-16 w-full flex flex-row items-center justify-start gap-x-2 text-white text-center rubik-font uppercase border-b border-sh-pink">
          <div className="w-full max-w-[256px]">
            <select id="admin_filter" className="w-full rounded text-sh-white border border-sh-white/50 p-1 bg-sh-black/50" name="status" onChange={universityHandler}>
              <option className="bg-white" value="" selected>Filter University/College</option>
              {sortedUniversityList.map((universityName) => {
                return (
                  <option className="bg-white" value={universityName}>{universityName}</option>
                )
              })}
            </select>
          </div>
          <div className="w-full max-w-[256px]">
            <select id="admin_filter" className="w-full rounded text-sh-white border border-sh-white/50 p-1 bg-sh-black/50" name="status" onChange={levelHandler}>
              <option className="bg-white" value="" selected>Filter Education Level</option>
              {sortedLevelList.map((level) => {
                return (
                  <option className="bg-white" value={level}>{level}</option>
                )
              })}
            </select>
          </div>
          <div className="w-full max-w-[256px]">
            <select id="admin_filter" className="w-full min-w-[90px] rounded text-sh-white border border-sh-white/50 p-1 bg-sh-black/50" name="status" onChange={statusHandler}>
              <option className="bg-white" value="" selected>Filter Application Status</option>
              <option className="bg-white" value="pending">Pending</option>
              <option className="bg-white" value="approved">Approved</option>
              <option className="bg-white" value="denied">Denied</option>
            </select>
          </div>
        </div>

        {
          emailSent &&
          <EmailModal
            info="Email sent successfully!" />
        }
        <div className="flex flex-col divide-y divide-white/20 h-[85vh] overflow-x-hidden overflow-x-hidden">
          {
            filteredData.map((tuple) => {
              // console.log(tuple[0])
              var curr_doc = tuple[0];
              var count = tuple[1];
              var student = curr_doc.data();
              // console.log(tuple)
              function open_modal() {
                setShowModal(true)
                setCurrentStudent(curr_doc);
              }
              function approve_current_student() {
                update_approval(curr_doc, true).then(() => {
                  {/* console.log("updated correctly"); */ }
                  setTimeout(() => {
                    setEmailSent(false);
                  }, 2000);
                }).catch((err) => {
                  {/* console.log("Error on updating"); */ }
                  {/* console.log(err); */ }
                });
              }
              function deny_current_student() {
                update_approval(curr_doc, false).then(() => {
                  console.log("updated correctly");
                  setTimeout(() => {
                    setEmailSent(false);
                  }, 2000);
                }).catch((err) => {
                  console.log("Error on updating");
                  console.log(err);
                });
              }

              return (
                <div>
                  <ApplicationRow count={count} student={student} open_modal={open_modal} approve_current_student={approve_current_student} deny_current_student={deny_current_student} />
                </div>

              );
            })}
        </div>
      </div>
      {
        showModal ?
          <PersonModal
            currentStudent={currentStudent}
            update_approval={update_approval}
            setShowModal={setShowModal}
          /> :
          null
      }
    </div >
  );

}

export default StatsPage;

