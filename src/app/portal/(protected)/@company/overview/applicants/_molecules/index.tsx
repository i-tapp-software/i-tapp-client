"use client";

import { ApplicantCard } from "../../../../../../../components/applicant-card";
import { SitePagination } from "@/components/ui/site-pagination";
import usePaginator from "@/lib/hooks/use-paginator";

export function Applicants() {
  const applicants: {}[] = Array.from({ length: 20 });

  const { applications, setCurrentPage, postPerPage, currentPage, paginate } =
    usePaginator(6, applicants);

  return (
    <div>
      <p className="my-2">All Applicants</p>
      <div>
        {applications.map((applicant, index) => (
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
