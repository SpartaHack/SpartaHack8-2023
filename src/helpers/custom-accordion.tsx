"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { CustomAccordionProps } from "../../types";

const CustomAccordion = ({
  accordionData,
  indicator,
  styling,
}: CustomAccordionProps) => {
  return (
    <Accordion
      defaultExpandedKeys="all"
      selectionMode="multiple"
      itemClasses={styling}
    >
      {accordionData.map((data, index) => (
        <AccordionItem
          key={index}
          textValue={index.toString()}
          title={data.title}
          subtitle={data.subtitle}
          indicator={indicator}
        >
          {data.content}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CustomAccordion;
