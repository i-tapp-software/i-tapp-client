"use client";

import React, { useState } from "react";
import { CompanyInfo1 } from "./company-info-1";
import { CompanyInfo2 } from "./company-info-2";
import { FormIndicator } from "@/components/ui/form-indicator";

export function SignupForm() {
  const [formStep, setFormStep] = useState<number>(0);
  const [formData, setFormData] = useState<any>({});

  const handleFormDataUpdate = (data: any) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
  };

  let currentForm: React.ReactNode;

  switch (formStep) {
    case 0:
      currentForm = (
        <CompanyInfo1
          setFormStep={setFormStep}
          onFormDataUpdate={handleFormDataUpdate}
        />
      );
      break;
    case 1:
      currentForm = <CompanyInfo2 formData={formData} />;
      break;
    default:
      break;
  }

  return (
    <div>
      <FormIndicator steps={2} setStep={setFormStep} step={formStep} />
      <div className="my-4 flex flex-col gap-2">{currentForm}</div>
    </div>
  );
}
