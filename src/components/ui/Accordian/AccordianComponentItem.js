import React from 'react'
import { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

function AccordianComponentItem(props) {

  return (
    <AccordionItem className="box-border select-none transition-all duration-150 border-t border-sh-white/30">
      <AccordionItemHeading className="">
        <AccordionItemButton className="py-4 rubik-font text-sh-white/80 hover:text-pink-600 focus:text-sh-pink text-lg transition-all duration-150">
          {props.headingText}
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel className="pb-4 inter-font text-sh-white/70 tracking-wide font-light">
        <p>
          {props.bodyText}
        </p>
      </AccordionItemPanel>
    </AccordionItem>
  )
}

export default AccordianComponentItem