"use client";

// import React, { useState } from "react";
// import { CompanyInfo1 } from "./company-info-1";
// import { CompanyInfo2 } from "./company-info-2";
// import { FormIndicator } from "@/components/ui/form-indicator";

// export function SignupForm() {
//   const [formStep, setFormStep] = useState<number>(0);
//   const [formData, setFormData] = useState<any>({});

//   const handleFormDataUpdate = (data: any) => {
//     setFormData((prevData) => ({ ...prevData, ...data }));
//   };

//   let currentForm: React.ReactNode;

//   switch (formStep) {
//     case 0:
//       currentForm = (
//         <CompanyInfo1
//           setFormStep={setFormStep}
//           onFormDataUpdate={handleFormDataUpdate}
//         />
//       );
//       break;
//     case 1:
//       currentForm = <CompanyInfo2 formData={formData} />;
//       break;
//     default:
//       break;
//   }

//   return (
//     <div>
//       <FormIndicator steps={2} setStep={setFormStep} step={formStep} />
//       <div className="my-4 flex flex-col gap-2">{currentForm}</div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { CompanyInfo1 } from "./company-info-1";
// import { CompanyInfo2 } from "./company-info-2";
// import { FormIndicator } from "@/components/ui/form-indicator";

// // Define the shape of your form data
// interface FormData {
//   email?: string;
//   rc_number?: string;
//   year_founded?: string;
//   student_capacity?: string;
//   it_duration?: string;
//   // Add any other fields that might be in your form data
// }

// export function SignupForm() {
//   const [formStep, setFormStep] = useState<number>(0);
//   const [formData, setFormData] = useState<FormData>({});

//   const handleFormDataUpdate = (data: Partial<FormData>) => {
//     setFormData((prevData: FormData) => ({ ...prevData, ...data }));
//   };

//   let currentForm: React.ReactNode;

//   switch (formStep) {
//     case 0:
//       currentForm = (
//         <CompanyInfo1
//           setFormStep={setFormStep}
//           onFormDataUpdate={handleFormDataUpdate}
//         />
//       );
//       break;
//     case 1:
//       currentForm = <CompanyInfo2 formData={formData} />;
//       break;
//     default:
//       break;
//   }

//   return (
//     <div>
//       <FormIndicator steps={2} setStep={setFormStep} step={formStep} />
//       <div className="my-4 flex flex-col gap-2">{currentForm}</div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { CompanyInfo1 } from "./company-info-1";
import { CompanyInfo2 } from "./company-info-2";
import { FormIndicator } from "@/components/ui/form-indicator";

// Define the shape of your form data
interface FormData {
  email: string; // Made email required
  rc_number?: string;
  year_founded?: string;
  student_capacity?: string;
  it_duration?: string;
  // Add any other fields that might be in your form data
}

export function SignupForm() {
  const [formStep, setFormStep] = useState<number>(0);
  const [formData, setFormData] = useState<Partial<FormData>>({});

  const handleFormDataUpdate = (data: Partial<FormData>) => {
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
      if (formData.email) {
        currentForm = <CompanyInfo2 formData={{ email: formData.email }} />;
      } else {
        // Handle the case where email is not present
        currentForm = <div>Error: Email is required to proceed</div>;
      }
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
