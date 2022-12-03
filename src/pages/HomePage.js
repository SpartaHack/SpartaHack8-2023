import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import AboutSH from "../components/home-page-components/AboutSH";
import BasicInfoCards from "../components/home-page-components/BasicInfoCards";
import FaqSection from "../components/home-page-components/FaqSection";
import HeroText from "../components/home-page-components/HeroText";
import LargeButton from "../components/home-page-components/LargeButton";
import ScrollDownNudge from "../components/home-page-components/ScrollDownNudge";
import Background from "../components/layouts/Background";

function HomePage(props) {

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
        <Background />
      </div>
      <main className="relative mx-4 md:mx-auto md:max-w-xl lg:max-w-4xl xl:max-w-5xl last:pb-24">
        <section id="section1" className="relative h-screen flex flex-col justify-center items-center">
          <HeroText />
          <Link to="/register" exact className=" w-full mt-8 sm:mt-12">
            <LargeButton buttonClass=" mx-auto border border-sh-pink hover:bg-sh-white/10"
              buttonText="Apply Now" />
          </Link>
          <ScrollDownNudge containerClass={((isVisible) ? " " : " opacity-0 ")} />
        </section>
        <section id="section2" className="h-fit flex flex-col gap-y-32 md:gap-y-52 pb-32">
          <BasicInfoCards />
          <AboutSH />
        </section>
        <section id="section3" className="min-h-screen py-12">
          <FaqSection />
        </section>
      </main>
    </div>
  )
}

export default HomePage;