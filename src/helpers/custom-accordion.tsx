"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { CustomAccordionProps } from "../../types";

const CustomAccordion = ({ accordionData }: CustomAccordionProps) => {
  return (
    <Accordion selectionMode="multiple">
      {accordionData.map((data, index) => (
        <AccordionItem key={index} title={data.title} subtitle={data.subtitle}>
          {data.content}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CustomAccordion;
