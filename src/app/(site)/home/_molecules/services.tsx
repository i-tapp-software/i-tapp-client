"use client";

import Image from "next/image";

import { data } from "./data";
import { Wrapper } from "@/components/wrapper";

export function Services() {
  return (
    <div className="bg-gradient-to-t from-[#CEDCEE] via-white to-white ">
      <Wrapper className="flex flex-col gap-[102px]">
        <div className="w-full flex flex-col gap-6">
          <h2 className="text-h4 sm:text-h3 md:text-h2 text-[#242E4C] max-w-[610px]">
            Services that empower your Journey{" "}
          </h2>
          <p className="text-grey-2 text-base sm:text-lg leading-7 max-w-[900px]">
            A centralized hub for students to discover and apply for
            internships, and for companies to display or indicate internship
            opportunities and manage applications.
          </p>
        </div>

        {/* Services */}
        <div className="flex gap-6 flex-wrap">
          {data.services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </Wrapper>
    </div>
  );
}

function ServiceCard({
  service,
}: {
  service: { icon: any; title: string; description: string };
}) {
  return (
    <div className="w-full lg:max-w-[calc(50%-16px)] p-6 flex flex-col xs:flex-row items-center gap-8 rounded-md bg-white">
      <div>
        <Image
          src={service.icon}
          alt=""
          width={84}
          height={92}
          className="min-w-[84px] min-h-[92px]"
        />
      </div>
      <div className="flex flex-col gap-6">
        <h3 className="text-h5 sm:text-h4 text-[#242E4C]">{service.title}</h3>
        <span className="text-grey-2 text-sm sm:text-md">
          {service.description}
        </span>
      </div>
    </div>
  );
}
