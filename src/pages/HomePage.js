import { React, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import AboutSH from "../components/home-page-components/AboutSH";
import BasicInfoCards from "../components/home-page-components/BasicInfoCards";
import FaqSection from "../components/home-page-components/FaqSection";
import HeroText from "../components/home-page-components/HeroText";
import LargeButton from "../components/home-page-components/LargeButton";
import PartnersSection from "../components/home-page-components/PartnersSection";
import ScheduleSection from "../components/home-page-components/ScheduleSection";
import ScrollDownNudge from "../components/home-page-components/ScrollDownNudge";
import SponsorsSection from "../components/home-page-components/SponsorsSection";
import Background from "../components/layouts/Background";

function HomePage(props) {

  const [isVisible, setIsVisible] = useState(true);

  // useEffect(() => {
  //   const listenToScroll = () => {
  //     let heightToHideFrom = 100;
  //     const winScroll = document.body.scrollTop ||
  //       document.documentElement.scrollTop;

  //     if (winScroll > heightToHideFrom) {
  //       setIsVisible(false);
  //     } else {
  //       setIsVisible(true);
  //     }
  //   };
  //   window.addEventListener("scroll", listenToScroll);
  //   return () =>
  //     window.removeEventListener("scroll", listenToScroll);
  // }, [])

  const hi = useParams();
  useEffect(() => {
    console.log(hi)
  })
  

  return (
    <div className='relative'>
      <div className="absolute top-0 w-full h-full -z-10">
        <Background />
      </div>
      <main className="relative mx-4 md:mx-auto md:max-w-xl lg:max-w-4xl xl:max-w-5xl last:pb-24">
        <section id="Home" className="relative h-screen flex flex-col justify-center items-center">
          <HeroText />
          <Link to="/register" exact className="w-full sm:w-fit mt-8 sm:mt-12">
            <LargeButton buttonClass=" mx-auto border border-sh-pink hover:bg-sh-white/10"
              buttonText="Apply Now" />
          </Link>
          <ScrollDownNudge containerClass={((isVisible) ? " " : " opacity-0 ")} />
        </section>
        <section id="About" className="min-h-screen flex flex-col justify-center gap-y-32 md:gap-y-52 py-16">
          <BasicInfoCards />
          <AboutSH />
        </section>
        <section id="Schedule" className="min-h-screen flex flex-col justify-center py-12 mb-16">
          <ScheduleSection />
        </section>
        <section id="FAQ" className="min-h-screen flex flex-col justify-center py-8 mb-16">
          <FaqSection />
        </section>
        <section id="Sponsors" className="min-h-screen flex flex-col justify-center py-8">
          <SponsorsSection />
        </section>
        <section id="Partners" className="min-h-fit py-12">
          <PartnersSection />
        </section>
      </main>
    </div>
  )
}

export default HomePage;