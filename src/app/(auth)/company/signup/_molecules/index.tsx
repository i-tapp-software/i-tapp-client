import Link from "next/link";

import { SignupForm } from "./form";

export function CompanyOnboardingForm() {
  return (
    <div className="w-full max-w-[350px] m-auto flex flex-col">
      <div className="flex flex-col gap-4 items-center mb-4">
        <h1 className="text-2xl font-bold">Tell us about your company</h1>
        <p className="text-sm">
          Already have a company account?{" "}
          <Link href="" className="text-primary">
            Log in
          </Link>
        </p>
      </div>
      <SignupForm />
    </div>
  );
}