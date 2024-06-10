import Link from "next/link";
import { ProfileAdd, ArrowRight } from "iconsax-react";

import { OverviewBox } from "@/components/overview-box";
import { ApplicantCard } from "../../../../../../../components/applicant-card";

export function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <h5 className="text-h6">Hello NNPC</h5>
      <p className=" text-grey-3">This is the overview of your activities</p>
      <div className="flex gap-4 flex-wrap">
        <OverviewBox title="Total" number={44} icon={<ProfileAdd />} />
        <OverviewBox title="Shortedlisted" number={44} icon={<ProfileAdd />} />
        <OverviewBox title="Accepted" number={44} icon={<ProfileAdd />} />
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
          {Array.from({ length: 10 })
            .slice(0, 5)
            .map((_, index) => (
              <ApplicantCard
                key={index}
                applicant={{
                  name: "Aye Memuduaghan",
                  university: "University of Port Harcout",
                }}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
