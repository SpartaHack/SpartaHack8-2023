import { useEffect, useState } from "react";
import Background from "../../components/layouts/Background";
import { FormProvider } from "../../context/FormContext";
import LoginWidget from "./LoginComponent";
import StatsPage from "./pages/StatsPage"


function AdminPage(props) {
  const [logged_in, setLoggedState] = useState({ logged: false, role: "" });

  const pages = {
    true: {
      "admin": <StatsPage />,
      "sponsor": "SPONSOR"
    },
    false: {
      "": <LoginWidget setLoggedState={setLoggedState} />
    }

  }

  return (
    <div className='relative'>
      <div className="absolute top-0 w-full h-full -z-10">
        <Background />
      </div>
      <FormProvider>
        <main className="relative mt-3">
          <section id="section1" className="relative h-screen flex flex-col justify-center items-center">
            {pages[logged_in.logged][logged_in.role]}
          </section>
        </main>
      </FormProvider>
    </div>
  )
}

export default AdminPage;