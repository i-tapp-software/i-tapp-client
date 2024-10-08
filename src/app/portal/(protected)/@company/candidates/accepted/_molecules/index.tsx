"use client";

import usePaginator from "@/lib/hooks/use-paginator";
import { SitePagination } from "@/components/ui/site-pagination";
import { ApplicantCard } from "@/components/applicant-card";

import { useGlobal } from "@/context/GlobalContext";

// export function AcceptedApplicants() {
//   const applicants: {}[] = Array.from({ length: 10 });

//   const { applications, setCurrentPage, postPerPage, currentPage, paginate } =
//     usePaginator(6, applicants);

//   return (
//     <div>
//       <p className="mb-4">Accepted Applicants</p>
//       {applications.map((applicant, index) => (
//         <ApplicantCard
//           key={index}
//           applicant={{
//             name: "Sam Jeremiah",
//             university: "University of FUPRE",
//             application_status: "Accepted",
//           }}
//         />
//       ))}
//       <SitePagination
//         totalPosts={applicants.length}
//         postsPerPage={postPerPage}
//         paginate={paginate}
//         currentPage={currentPage}
//         setCurrentPage={setCurrentPage}
//       />
//     </div>
//   );
// }

export function AcceptedApplicants() {
  const { selectedApplicant, setSelectedApplicant, AcceptedApplicants } =
    useGlobal();
  type Applicant = {
    name: string;
    id: string;
    accepted: boolean;

    student: {
      id: string;
      firstName: string;
      lastName: string;
      school: string;
    };
    university: string;
    application_status: string;
  };

  const applicants: Applicant[] = Array.from({ length: 10 });

  const { applications, setCurrentPage, postPerPage, currentPage, paginate } =
    usePaginator(6, applicants);

  return (
    <div>
      <p className="mb-4">Accepted Applicants</p>
      {AcceptedApplicants?.[0]
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
