"use client";

import { useState } from "react";

import { CompanyInfo1 } from "./company-info-1";
import { CompanyInfo2 } from "./company-info-2";
import { FormIndicator } from "@/components/ui/form-indicator";

export function SignupForm() {
  const [form, setForm] = useState<number>(0);

  let currentForm: React.ReactNode;

  switch (form) {
    case 0:
      currentForm = <CompanyInfo1 />;
      break;
    case 1:
      currentForm = <CompanyInfo2 />;
      break;
    default:
      break;
  }

  return (
    <div>
      <FormIndicator steps={2} setStep={setForm} step={form} />
      <div className="my-4 flex flex-col gap-2">{currentForm}</div>
    </div>
  );
}
