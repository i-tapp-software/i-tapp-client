"use client";

import Link from "next/link";
import { ProfileAdd, ArrowRight } from "iconsax-react";
import { OverviewBox } from "@/components/overview-box";
import { ApplicantCard } from "../../../../../../../components/applicant-card";
import { useGlobal } from "@/context/GlobalContext";
import { useEffect, useState } from "react";

export function Dashboard() {
  const { totalApplicants, acceptedApplicants, shortlistedApplicants } =
    useGlobal();

  type Applicant = {
    id: string;
    name: string;
    university: string;
    student: {
      id: string;
      firstName: string;
      lastName: string;
      school: string;
    };
    accepted: boolean;
    createdAt: string;
  };

  const [company, setCompany] = useState({ name: "" });

  useEffect(() => {
    const storedCompany = JSON.parse(localStorage.getItem("company") || "{}");
    setCompany(storedCompany);
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <h5 className="text-h6">
        Hello <span className="uppercase">{company.name}</span>
      </h5>
      <p className=" text-grey-3">This is the overview of your activities</p>
      <div className="flex gap-4 flex-wrap">
        <OverviewBox
          title="Total"
          number={totalApplicants[1] || 0}
          icon={<ProfileAdd />}
        />
        <OverviewBox
          title="Shortedlisted"
          number={shortlistedApplicants[1] || 0}
          icon={<ProfileAdd />}
        />
        <OverviewBox
          title="Accepted"
          number={acceptedApplicants[1] || 0}
          icon={<ProfileAdd />}
        />
      </div>
      <div>
        <div className="flex justify-between my-5">
          <span>Recent Applicants</span>
          <Link href="/portal/overview/applicants" className="flex mr-14 gap-2">
            <span>See all</span>
            <ArrowRight size={24} color="#292D32" />
          </Link>
        </div>
        <div>
          {totalApplicants?.[0]
            ?.slice(0, 5)
            .map((applicant: Applicant, index: number) => (
              <ApplicantCard key={index} applicant={applicant} />
            ))}
        </div>
      </div>
    </div>
  );
}
