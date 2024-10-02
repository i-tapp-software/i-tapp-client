import { Wrapper } from "@/components/wrapper";
import { CompanyHeader } from "../company-header";
import { Nav } from "../nav";

export function CompanyLayoutUi({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CompanyHeader />
      <Wrapper className="flex items-start gap-8">
        <Nav />
        <div className="w-full">{children}</div>
      </Wrapper>
    </>
  );
}
