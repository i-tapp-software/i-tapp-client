import Link from "next/link";

import { Logo } from "@/components/logo";

export default function AuthLayoutUi({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="w-full">
        <div className="flex items-start justify-center container py-16">
          <div className="lg:flex-1 flex flex-col gap-3 items-center">
            <Link href="/">
              <Logo />
            </Link>
            {children}
          </div>
          <div className="lg:flex-1 hidden lg:block bg-grey-1 rounded-md h-16 min-h-[400px] sticky top-10"></div>
        </div>
      </main>
    </>
  );
}
