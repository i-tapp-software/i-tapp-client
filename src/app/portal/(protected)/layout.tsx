import { CompanyLayoutUi } from "@/components/layouts/protected/company";
import StudentLayout from "@/components/layouts/protected/student"

export default function PortalLayout({
  company,
  student,
}: {
  company: React.ReactNode;
  student: React.ReactNode;
}) {
  return <StudentLayout>{student}</StudentLayout>;
}

// return <CompanyLayoutUi>{company}</CompanyLayoutUi>;

// import { CompanyLayoutUi } from "@/components/layouts/protected/company";
// import StudentLayout from "@/components/layouts/protected/student";

// export default function PortalLayout({
//   company,
//   student,
//   children, // Add children to allow rendering page content inside layouts
// }: {
//   company?: React.ReactNode;  // Make these optional if they can vary
//   student?: React.ReactNode;
//   children: React.ReactNode;  // Always add this to render nested pages
// }) {
//   return (
//     <>
//       {company && <CompanyLayoutUi>{children}</CompanyLayoutUi>}
//       {student && <StudentLayout>{children}</StudentLayout>}
//     </>
//   );
// }
