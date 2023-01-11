import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
import SpartaHackLogoHeader from "../icons/SpartaHackLogoHeader";
import ButtonPrimary from "../ui/ButtonPrimary";

function MainNavbar() {

  const { pathname }= useLocation();

  return (
    <header className="w-full h-24 absolute top-0 z-10">
      <a id="mlh-trust-badge"
        style={{ display: "block", maxWidth: "100px", minWidth: "60px", position: "absolute", top: "0", left: "24px", width: "10%", zIndex: "10000" }}
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=blue"
        target="_blank" rel="noreferrer">
        <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-blue.svg"
          alt="Major League Hacking 2023 Hackathon Season" style={{ width: "100%" }} />
      </a>
      <nav className="flex flex-row justify-between items-center py-6 px-6 sm:px-8 absolute h-24 w-full top-0 left-0">
        <div className="flex flex-row justify-center items-start">
          <div className="block min-w-[60px] max-w-[100px] w-[10vw] mr-4 bg-pink"></div>
          <Link className="h-full flex flex-row justify-between items-center gap-x-2"
            to="/" exact>
            <div className="flex-none cursor-pointer duration-1000">
              <SpartaHackLogoHeader />
            </div>
            <span className="hidden sm:block rubik-font text-sh-white font-medium text-2xl flex-none cursor-pointer mt-1">
              SpartaHack 8
            </span>
          </Link>
        </div>
        <div className="flex flex-row justify-center items-center gap-x-4">
          {!["/register", "/admin"].includes(pathname) && 
          <div>
            <ul className="flex flex-row justify-center items-center gap-x-1 lg:gap-x-2 rubik-font uppercase font-light text-sm text-sh-white/80 transition-all duration-100
            ">
                <li className="hidden md:block">
                  <a className="p-3 bg-sh-white/0 hover:bg-sh-white/5 hover:backdrop-blur-lg rounded transition-all duration-75" href="#Home">Home</a></li>
                <li className="hidden md:block">
                  <a className="p-3 bg-sh-white/0 hover:bg-sh-white/5 hover:backdrop-blur-lg rounded transition-all duration-75" href="#About">About</a></li>
                <li className="hidden md:block">
                  <a className="p-3 bg-sh-white/0 hover:bg-sh-white/5 hover:backdrop-blur-lg rounded transition-all duration-75" href="#Schedule">Schedule</a></li>
                <li className="hidden md:block">
                  <a className="p-3 bg-sh-white/0 hover:bg-sh-white/5 hover:backdrop-blur-lg rounded transition-all duration-75" href="#FAQ">FAQs</a></li>
                <li className="hidden lg:block">
                  <a className="p-3 bg-sh-white/0 hover:bg-sh-white/5 hover:backdrop-blur-lg rounded transition-all duration-75" href="#Sponsors">Sponsors</a></li>
            </ul>
          </div>
          }
          <div>
          <Link to="/register" exact>
            <ButtonPrimary buttonText="Apply" />
          </Link>
          </div>
        </div>
      </nav>
    </header >

  )
}

export default MainNavbar;