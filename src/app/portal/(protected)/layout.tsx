import { CompanyLayoutUi } from "@/components/layouts/protected/company";
import { StudentLayout } from "@/components/layouts/protected/student";

export default function PortalLayout({
  company,
  student,
}: {
  company: React.ReactNode;
  student: React.ReactNode;
}) {
  let role: string;

  role = "student";

  if (role === "company") {
    return <CompanyLayoutUi>{company}</CompanyLayoutUi>;
  } else {
    return <StudentLayout>{student}</StudentLayout>;
  }
}
