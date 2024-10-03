"use client";

import { ApplicantCard } from "../../../../../../../components/applicant-card";
import { SitePagination } from "@/components/ui/site-pagination";
import usePaginator from "@/lib/hooks/use-paginator";

import { useGlobal } from "@/context/GlobalContext";
import { useEffect } from "react";
import { fetchAllCompanyApplications } from "@/api/actions/auth";
import { useFetch } from "@/lib/hooks/use-fetch";

export function Applicants() {
  const { company, totalApplicants } = useGlobal();
  const applicants: {}[] = Array.from({ length: 20 });

  // Define the type for Applicant
  type Applicant = {
    id: string;
    name: string;
    university: string;
    student: { firstName: string; lastName: string; school: string };
  };

  const { applications, setCurrentPage, postPerPage, currentPage, paginate } =
    usePaginator(6, applicants);

  return (
    <div>
      <p className="my-2">All Applicants</p>
      <div>
        {/* {totalApplicants.map((applicant: Applicant, index: number) => (
          <ApplicantCard
            key={index}
            applicant={{
              name: `${applicant.student.firstName} ${applicant.student.lastName}`,
              university: applicant.student.school || "Not specified",
            }}
          />
        ))} */}
        {totalApplicants?.[0]
          ?.slice(0, 5)
          .map((applicant: Applicant, index: number) => (
            <ApplicantCard key={index} applicant={applicant} />
          ))}
      </div>
      <SitePagination
        totalPosts={applicants.length}
        postsPerPage={postPerPage}
        paginate={paginate}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
