import { useEffect, useState } from "react";
import Background from "../../components/layouts/Background";
import { FormProvider } from "../../context/FormContext";
import LoginWidget from "./LoginComponent";
import StatsPage from "./pages/StatsPage";
import SponsorsPage from "./pages/SponsorsPage";

function AdminPage(props) {
  const [logged_in, setLoggedState] = useState({ logged: false, role: "" });

  const pages = {
    true: {
      "admin": <StatsPage user_data={logged_in}/>,
      "sponsor": <SponsorsPage user_data={logged_in}/>
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
          <section id="login" className="relative mx-4 min-h-screen flex flex-col justify-center items-center">
            {pages[logged_in.logged][logged_in.role]}
          </section>
        </main>
      </FormProvider>
    </div>
  )
}

export default AdminPage;