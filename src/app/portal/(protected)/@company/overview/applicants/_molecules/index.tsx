"use client";

import { ApplicantCard } from "../../../../../../../components/applicant-card";
import { SitePagination } from "@/components/ui/site-pagination";
import usePaginator from "@/lib/hooks/use-paginator";
import { useCompany } from "@/context/CompanyContext";

export function Applicants() {
  const { company } = useCompany();
  const applicants: {}[] = Array.from({ length: 20 });

  // Define the type for Applicant
  type Applicant = {
    name: string;
    university: string;
  };

  const { applications, setCurrentPage, postPerPage, currentPage, paginate } =
    usePaginator(6, applicants);

  console.log(company);

  return (
    <div>
      <p className="my-2">All Applicants</p>
      <div>
        {applications.map((applicant: Applicant, index: number) => (
          <ApplicantCard
            key={index}
            applicant={{ name: "Louis", university: "University of Benin" }}
          />
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
