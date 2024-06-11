import React from "react";
import Image from "next/image";

type CompanyDetailsProps = {
  id: number;
  companyName: string;
  companyLogo: string;
  location: string;
  duration: number;
};

export default function AvailableCompany({
  details,
  setCompanyId,
}: {
  details: CompanyDetailsProps;
  setCompanyId: React.Dispatch<React.SetStateAction<number | null>>;
}) {

  const { id, companyName, companyLogo, location, duration } = details;
  return (
    <div
      className="bg-white rounded-xl p-5 basis-[15rem] flex-grow  "
      onClick={() => {
        setCompanyId(id);
      }}
    >
      <div className="flex gap-3">
        <Image
          src={companyLogo}
          alt="companylogo"
          width={50}
          height={50}
          className="bg-grey-5 rounded-md self-start"
        />
        <div>
          <h6 className="text-h6">{companyName}</h6>
          <p className="text-primary">{location}</p>
        </div>
      </div>
      <p className=" bg-[#F0F0F5] rounded-[40px] px-3.5 py-1 my-4 inline-block">
        {duration} Months IT
      </p>
      <p className="text-primary">{duration} mins ago</p>
    </div>
  );
}