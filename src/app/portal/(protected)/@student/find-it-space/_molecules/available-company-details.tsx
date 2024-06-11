import React from "react";
import archive from "@/assets/icons/archive-add.svg";
import share from "@/assets/icons/share.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight2 } from "iconsax-react";
import { CompanyListProps } from ".";

type companyDetails = {
  details: CompanyListProps 
  setCompanyId: React.Dispatch<React.SetStateAction<number | null>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function AvailableCompanyDetails({
  details,
  setCompanyId,
  setShowModal,
}: companyDetails) {
  const {
    companyLogo,
    companyName,
    description,
    duration,
    industry,
    datePosted,
    applicants,
    location,
  } = details;

  return (
    <div className=" w-full rounded-xl md:flex p-8 bg-white  flex-col md:relative md:basis-[20rem] md:rounded-l-xl h-full  ">
      <div className=" flex justify-between border-b">
        <div className="flex flex-col gap-4 pb-6 w-full ">
          <div className="flex justify-between gap-2">
            <Image
              src={companyLogo}
              alt="companylogo"
              width={75}
              height={75}
              className="bg-grey-5"
            />
            <div className="flex flex-nowrap items-start gap-1 cursor-pointer">
              <Image
                src={share}
                alt="share"
                className="inline-block cursor-pointer"
              />
              <Image
                src={archive}
                alt="archive"
                className="inline-block cursor-pointer"
              />
              <ArrowRight2 onClick={() => setCompanyId(null)} />
            </div>
          </div>

          <div>
            <h6 className="text-h6">{companyName}</h6>
            <p className="text-primary mt-2">{location}</p>
          </div>
          <p className="text-sm text-[#5374E7] bg-opacity-10 bg-[#5374E7] px-3.5 py-2 rounded-[50px] inline-block w-36">
            {applicants} Applicants
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-x-10 gap-y-6 py-8 ">
        <div>
          <h6 className=" text-h6">Duration</h6>
          <p className="text-[#6E6E9B]">{duration} Months</p>
        </div>
        <div>
          <h6 className=" text-h6">Industry</h6>
          <p className="text-[#6E6E9B]">{industry}</p>
        </div>
        <div>
          <h6 className=" text-h6">Date Posted</h6>
          <p className="text-[#6E6E9B]">{datePosted}</p>
        </div>
      </div>

      <div className="pb-6 mb-6 border-b">
        <h6 className="text-h6">Description</h6>
        <p className="text-[#6E6E9B] py-6 border-b">{description}</p>
      </div>
      <Button size="sm" className="w-full" onClick={() => setShowModal(true)}>
        Apply Now
      </Button>
    </div>
  );
}