"use client";

import usePaginator from "@/lib/hooks/use-paginator";
import { SitePagination } from "@/components/ui/site-pagination";
import { ApplicantCard } from "@/components/applicant-card";

import { useGlobal } from "@/context/GlobalContext";

// Define the type for Applicant
type Applicant = {
  name: string;
  university: string;
};

export function ShortlistedApplicants() {
  const { shortlistedApplicants } = useGlobal();
  const applicants: {}[] = Array.from({ length: 10 });

  const { setCurrentPage, postPerPage, currentPage, paginate } = usePaginator(
    6,
    applicants
  );

  return (
    <div>
      <p className="mb-4">Accepted Applicants</p>
      {shortlistedApplicants?.[0]
        ?.slice(0, 5)
        .map((applicant: Applicant, index: number) => (
          <ApplicantCard key={index} applicant={applicant} />
        ))}
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
