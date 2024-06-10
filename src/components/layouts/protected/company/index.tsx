import { Wrapper } from "@/components/wrapper";
import { Header } from "../header";
import { Nav } from "../nav";

export function CompanyLayoutUi({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Wrapper className="flex items-start gap-8">
        <Nav />
        <div className="w-full">{children}</div>
      </Wrapper>
    </>
  );
}
