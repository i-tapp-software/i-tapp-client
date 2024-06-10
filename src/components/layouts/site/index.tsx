import { Footer } from "./_molecules/footer";
import { Header } from "./_molecules/header";

export default function SiteLayoutUi({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="pt-16">{children}</main>
      <Footer />
    </>
  );
}
