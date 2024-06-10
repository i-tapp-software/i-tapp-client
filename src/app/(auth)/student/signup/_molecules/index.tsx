"use client";

import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { SchoolInfo } from "./school-info";
import { StudentInfo } from "./student-info";
import { SignupInfo } from "./signup-info";
import { FormIndicator } from "@/components/ui/form-indicator";

export function StudentOnboardingForm() {
  const [form, setForm] = useState<number>(0);

  let currentForm: React.ReactNode;

  switch (form) {
    case 0:
      currentForm = <SchoolInfo />;
      break;
    case 1:
      currentForm = <StudentInfo />;
      break;
    case 2:
      currentForm = <SignupInfo />;
      break;
    default:
      break;
  }

  return (
    <form className="w-full flex flex-col gap-10 max-w-[350px] m-auto">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-2xl font-bold">Sign up as a student</h1>
        <p className="text-sm">
          Already have an account?{" "}
          <Link href="/signin" className="text-primary">
            Log in
          </Link>
        </p>
        <span className="font-bold">OR</span>
        <p className="text-sm">
          Signing up as a company?{" "}
          <Link href="/company/signup" className="text-primary">
            Click here
          </Link>
        </p>
      </div>

      {/* Indicator */}

      <FormIndicator steps={3} setStep={setForm} step={form} />

      <fieldset>{currentForm} </fieldset>

      <div className="m-auto">
        <Button
          type="button"
          onClick={() => {
            setForm((prev) => prev + 1);
          }}
        >
          Continue...
        </Button>
      </div>
    </form>
  );
}
