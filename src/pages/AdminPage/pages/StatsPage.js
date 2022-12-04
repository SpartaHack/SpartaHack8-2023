import { useEffect, useState } from "react";
import {storage, app} from "../../../firebaseConfig";
import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import { getFirestore, collection, getDocs } from "firebase/firestore"


function StatsPage() {
  const [countUsersApplied, setCountUsersApplied] = useState(0);
  const [totalMSU, setTotalMSU] = useState(0);
  const [userData, setUserData] = useState([]);

  async function get_aggregate_data() {
    const db = getFirestore(app);
    const querySnap = await getDocs(collection(db, "registrations"));
    let final_count = 0;
    let final_msu_count = 0;
    let final_users_list = [];
    querySnap.forEach((doc) => {
      const data = doc.data();
      final_count = final_count + 1;
      // final_users_list.push(data);
      if (data.msu_student === true) {
        final_msu_count += 1;
      }

    });
    setCountUsersApplied(final_count);
    setTotalMSU(final_msu_count);
    // setUserData(final_users_list);
  }
  get_aggregate_data().then(() => {
    console.log("Called correctly");
  }).catch(() => {
    console.log("Error!!");
  })

  return (
    <div className="">
      <div className="text-white">
        Total of people applying so far: {countUsersApplied}
      </div>
      <div className="text-white">
        Total people from MSU: {totalMSU}
      </div>
      <div className="flex flex-col">
        {userData.map((student) => {
          return (
            <div className="flex flex-row">
              <div className="text-white">{student.first_name}</div>
              <div className="text-white">{student.last_name}</div>
              <div className="text-white"></div>
            </div>
          );
        })}
      </div>
    </div>
  );

}

export default StatsPage;

