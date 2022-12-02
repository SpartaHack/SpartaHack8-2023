import { useEffect, useState } from "react";
import Background from "../../components/layouts/Background";
import LoginWidget from "./LoginComponent";

function AdminPage(props) {
    useEffect(() => {
        var pageHeight = document.querySelector("html").offsetHeight
        var navHeight = document.querySelector("nav").offsetHeight
        var pageWidth = document.querySelector("html").clientWidth
        setHeightData([pageHeight, navHeight, pageWidth])
      }, [])
    
    const [isVisible, setIsVisible] = useState(true);
    
    useEffect(() => {
    const listenToScroll = () => {
        let heightToHideFrom = 100;
        const winScroll = document.body.scrollTop ||
        document.documentElement.scrollTop;

        if (winScroll > heightToHideFrom) {
        setIsVisible(false);
        } else {
        setIsVisible(true);
        }
    };
    window.addEventListener("scroll", listenToScroll);
    return () =>
        window.removeEventListener("scroll", listenToScroll);
    }, [])

    const [heightData, setHeightData] = useState([0, 0, 0])

    const [logged_in, setLoggedState] = useState({logged: false, role: ""});

    const pages = {
        true:{
            "admin": "ADMIN",
            "sponsor": "SPONSOR"
        },
        false:{
            "": <LoginWidget setLoggedState = {setLoggedState}/>
        }
        
    }

  return (
    <div className='relative'>
      <div className="absolute top-0 w-full h-full -z-10">
        <Background pageHeight={heightData[0]} navHeight={heightData[1]} />
      </div>
      <main className="relative mx-4 md:mx-auto md:max-w-xl lg:max-w-4xl xl:max-w-5xl">
      <section id="section1" className="relative h-screen flex flex-col justify-center items-center">
        {pages[logged_in.logged][logged_in.role]}
      </section>
      
      </main>
    </div>
  )
}

export default AdminPage;