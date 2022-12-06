import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import Chevron from '../../icons/Chevron';

function AccordianComponentItem(props) {

  const generatedId = Math.floor(Math.random() * 10000)
  const [itemOpen, setItemOpen] = useState("false")

  // document.getElementById(generatedId).children[0].addEventListener("onvisibilitychange", console.log("hi"))

  // useEffect(() => {
  //   document.getElementById(generatedId).children[0].addEventListener("onclick", () => { console.log("hi") })
  //   console.log(document.getElementById(generatedId).children[0])
  // }, [generatedId])

  return (
    <AccordionItem className="box-border select-none transition-all duration-150 border-t border-sh-white/30">
      <AccordionItemHeading>
        <AccordionItemButton className={" flex flex-row justify-between items-start py-4 rubik-font text-sh-white/80 hover:text-pink-600 text-lg transition-all duration-150"}
        >
          <div>
            {props.headingText}
          </div>
          <Chevron className={" my-auto scale-[0.5]"} height="16" strokeColor="currentColor" strokeWidth="5" />
        </AccordionItemButton>
      </AccordionItemHeading>
      <div id={generatedId}>
        <AccordionItemPanel className="pb-4 inter-font text-sh-white/70 tracking-wide font-light">
          <p>
            {props.bodyText}
          </p>
        </AccordionItemPanel>
      </div>
    </AccordionItem >
  )
}

export default AccordianComponentItem