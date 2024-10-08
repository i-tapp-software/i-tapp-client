import Link from "next/link";
import Boy from "@/assets/images/boy.webp";
import Girl from "@/assets/images/girl.webp";
import { Wrapper } from "@/components/wrapper";
import { buttonVariants } from "@/components/ui/button";
import { app } from "@/config/app";
import Image from "next/image";

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
      {/* <div className="flex-1 px-10 h-full w-full bg-gradient-to-t from-[#CEDCEE] via-white to-white">
        <div className="rounded-full bg-gray-400 w-[155px] h-[155px] overflow-hidden">
          <Image
            src={Boy}
            alt="Company Banner"
            width={155}
            height={155}
            layout="responsive"
            objectFit="cover"
            quality={100}
            priority
          />
        </div>
      </div> */}
      <div
        className="max-w-[600px] hidden lg:flex lg:flex-col items-center justify-center w-full h-full "
        style={{
          background:
            "radial-gradient(circle, rgba(204, 222, 238, 1) 0%, rgba(204, 222, 238, 0) 60%)",
        }}
      >
        <div className="flex-grow flex items-center justify-center py-10 px-20">
          <div className="relative w-[350px] h-[250px]">
            <div className="absolute top-0 left-0 right-5 rounded-full w-[120px] h-[120px] overflow-hidden bg-[#8CD9C0]">
              <Image
                src={Boy}
                alt="Profile 1"
                layout="responsive"
                width={150}
                height={150}
                objectFit="cover"
                quality={100}
                priority
              />
            </div>

            {/* Second profile image */}
            <div className="absolute bottom-0 right-0 rounded-full w-[120px] h-[120px] overflow-hidden bg-[#F4E681]">
              <Image
                src={Girl}
                alt="Profile 2"
                width={150}
                height={150}
                layout="responsive"
                objectFit="cover"
                quality={100}
                priority
              />
            </div>

            <div className="absolute top-1/2 left-1/2 w-[100px] h-[3px] bg-blue-400 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>

            {/* Connecting line */}
            <div className="absolute top-1/2 left-1/2 w-[100px] h-[3px] bg-blue-400 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
