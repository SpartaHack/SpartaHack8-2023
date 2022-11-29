import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AboutSH from "../components/home-page-components/AboutSH";
import BasicInfoCards from "../components/home-page-components/BasicInfoCards";
import HeroText from "../components/home-page-components/HeroText";
import LargeButton from "../components/home-page-components/LargeButton";
import ScrollDownNudge from "../components/home-page-components/ScrollDownNudge";
import Background from "../components/layouts/Background";

function HomePage(props) {

  const [heightData, setHeightData] = useState([0, 0, 0])

  useEffect(() => {
    // var section1Height = document.getElementById("section1").offsetHeight
    // var section2Height = document.getElementById("section2").offsetHeight
    var pageHeight = document.querySelector("html").offsetHeight
    var navHeight = document.querySelector("nav").offsetHeight
    var pageWidth = document.querySelector("html").clientWidth
    setHeightData([pageHeight, navHeight, pageWidth])
  }, [])

  console.log(heightData)

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

  return (
    <div className='relative'>
      <div className="absolute top-0 w-full h-full -z-10">
        <Background pageHeight={heightData[0]} navHeight={heightData[1]} />
      </div>
      <main className="relative mx-4 md:mx-auto md:max-w-xl lg:max-w-4xl xl:max-w-5xl">
        <section id="section1" className="relative h-screen flex flex-col justify-center items-center">
          <HeroText />
          <Link to="/register" exact className=" w-full mt-8 sm:mt-12">
            <LargeButton buttonClass=" mx-auto border border-sh-pink"
              buttonText="Apply Now" />
          </Link>
          <ScrollDownNudge containerClass={((isVisible) ? " " : " opacity-0 ")} />
        </section>
        <section id="section2" className="h-fit flex flex-col gap-y-32 md:gap-y-52 pb-32">
          <BasicInfoCards />
          <AboutSH />
        </section>
      </main>
    </div>
  )
}

export default HomePage;