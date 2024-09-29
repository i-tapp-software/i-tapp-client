"use client";

import React from "react";
import { Wrapper } from "@/components/wrapper";
import EmptySpace from "./empty-space";
import AboutSpace from "./about-space";

const MyItSpace = () => {
  const [isSpaceSecured, setIsSpaceSecured] = React.useState(false);
  return (
    <div>
      <Wrapper className="sm:pb-10">
        {isSpaceSecured ? <AboutSpace /> : <EmptySpace />}
      </Wrapper>
    </div>
  );
};

export default MyItSpace;
