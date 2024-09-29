import React from "react";
import Image from "next/image";

export default function AvailableCompany({ details, setCompanyId }) {
  const { id, title, companyLogo, address, duration } = details;
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
          <h6 className="text-h6 capitalize">{title}</h6>
          <p className="text-primary capitalize">{address}</p>
        </div>
      </div>
      <p className=" bg-[#F0F0F5] rounded-[40px] px-3.5 py-1 my-4 inline-block">
        {duration} Months IT
      </p>
      <p className="text-primary">{duration} mins ago</p>
    </div>
  );
}
