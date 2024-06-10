import Link from "next/link";

import { Wrapper } from "@/components/wrapper";
import { buttonVariants } from "@/components/ui/button";
import { app } from "@/config/app";

export function Hero() {
  return (
    <Wrapper className="flex items-start">
      <div className="flex-1 flex flex-col gap-8 max-w-[600px]">
        <h1 className="text-black text-h3 leading-[60px] font-[500] sm:font-[500] sm:leading-[60px] sm:text-h2 md:text-h1 md:leading-[90px] md:font-[500]">
          Bridging the gap between companies and students.
        </h1>
        <p className="text-black text-sm sm:text-md leading-7 max-w-[511px]">
          A centralized hub for students to discover and apply for internships,
          and for companies to display or indicate internship opportunities and
          manage applications.
        </p>
        <div>
          <Link href={app.links.signup} className={buttonVariants()}>
            Get Started
          </Link>
        </div>
      </div>
      <div className="flex-1"></div>
    </Wrapper>
  );
}
