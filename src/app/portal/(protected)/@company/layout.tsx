import { CompanyLayoutUi } from "@/components/layouts/protected/company";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <CompanyLayoutUi>{children}</CompanyLayoutUi>;
}
