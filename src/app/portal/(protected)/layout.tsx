import { CompanyLayoutUi } from "@/components/layouts/protected/company";

export default function PortalLayout({
  company,
}: {
  company: React.ReactNode;
}) {
  return <CompanyLayoutUi>{company}</CompanyLayoutUi>;
}
