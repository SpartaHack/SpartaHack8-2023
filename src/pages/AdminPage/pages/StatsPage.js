import { useEffect, useState } from "react";
import {storage, app} from "../../../firebaseConfig";
import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import { getFirestore, collection, getDocs } from "firebase/firestore"

async function get_aggregate_data() {
  const db = getFirestore(app);
}

function StatsPage() {
  const [countUsersApplied, setCountUsersApplied] = useState("");
  // const [showModal, setShowModal] = useState(false);

  return (
    <div className="">
      Something here
    </div>
  );

}

export default StatsPage;

