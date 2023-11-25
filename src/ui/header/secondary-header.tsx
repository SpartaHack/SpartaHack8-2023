import YouLearnLogo from "@/icon/youlearn-logo";
import { Navbar } from "@nextui-org/react";
import React from "react";

const SecondaryHeader = () => {
  return (
    <Navbar
      maxWidth="full"
      className="left-0 absolute top-0 z-10 bg-neutral-100 dark:bg-neutral-900"
    >
      <YouLearnLogo size="lg" />
    </Navbar>
  );
};

export default SecondaryHeader;
