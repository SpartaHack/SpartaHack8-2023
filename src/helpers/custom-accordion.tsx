import React from 'react'
import { Accordion, AccordionItem, Link } from '@nextui-org/react';

export type CustomAccordionProps = {
    indicator?: JSX.Element,
    title: JSX.Element | string,
    style?: string,
    content: JSX.Element,
}

const CustomAccordion = ({indicator, title, style, content}: CustomAccordionProps) => {
  return (
    <Accordion>
    <AccordionItem indicator={indicator || <></>} title={title} className={style}>
        {content}
    </AccordionItem>
    </Accordion>
  )
}

export default CustomAccordion