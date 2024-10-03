import { CompanyLayoutUi } from "@/components/layouts/protected/company";
import StudentLayout from "@/components/layouts/protected/student";
import { headers } from "next/headers";

type UserRole = "company" | "student";

interface PortalLayoutProps {
  company: React.ReactNode;
  student: React.ReactNode;
  userRole: UserRole;
}

export default function PortalLayout({
  company,
  student,
  userRole = "student",
}: PortalLayoutProps) {
  const headerList = headers();

  // const userRole =
  //   (headerList.get("x-user-role")?.toLowerCase() as UserRole) || "company";

  return (
    <>
      {userRole === "student" ? (
        <StudentLayout>{student}</StudentLayout>
      ) : (
        <CompanyLayoutUi>{company}</CompanyLayoutUi>
      )}
    </>
  );
}
