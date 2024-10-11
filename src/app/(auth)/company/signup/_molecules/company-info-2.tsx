// "use client";

// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Input } from "@/components/ui/input";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import {
//   companySignupSchema,
//   fullCompanySignupSchema,
//   verifyCompanySchema,
// } from "@/lib/validations/auth";
// import { ButtonWithLoader } from "@/components/button-with-loader";
// import { useAction } from "next-safe-action/hooks";
// import { companySignup } from "@/api/actions/auth";
// import { z } from "zod";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import SignupSuccessModal from "./success";

// type FormDataProp = z.infer<typeof companySignupSchema>;

// type FormData = {
//   rc_number: string;
//   year_founded: string;
//   student_capacity: string;
//   it_duration: string;
//   companyId: string;
//   company_name: string;
//   email: string;
//   address: string;
//   password: string;
// };

// interface CompanyInfo2Props {
//   formData: Partial<FormData>; // Make sure to define this type
// }

// export function CompanyInfo2({ formData }: CompanyInfo2Props) {
//   const [isSignupSuccess, setSignupSuccess] = useState(false);
//   const form = useForm<FormDataProp>({
//     mode: "onChange",
//     resolver: zodResolver(companySignupSchema),
//     defaultValues: {
//       rc_number: "",
//       year_founded: "",
//       student_capacity: "",
//       it_duration: "",
//     },
//   });

//   const {
//     execute: signupAction,
//     hasErrored,
//     result,
//     isExecuting,
//   } = useAction(companySignup, {
//     onSuccess(data) {
//       console.log("Company signup successful:", data);
//       toast.success("Company signup successful!");
//       setSignupSuccess(true);
//     },
//     onError(error) {
//       toast.error(
//         " Error signing up, plesase check your credentials and try again."
//       );

//       console.log(error);
//     },
//   });

//   // const handleSignup = (data: FormData) => {
//   //   // const prev = formData;

//   //   // const payLoad = { ...prev, ...data };

//   //   // signupAction(payLoad);

//   //   const prev = {
//   //     ...formData,
//   //     company_name: formData.company_name,
//   //     address: formData.address,
//   //     password: formData.password,
//   //   };

//   //   const payLoad = { ...prev, ...data };

//   //   signupAction(payLoad);
//   // };

//   const handleSignup = (data: FormDataProp) => {
//     const prev = formData;
//     const payLoad = { ...prev, ...data };
//     signupAction(payLoad);
//   };

//   return (
//     <Form {...form}>
//       <form
//         className="flex flex-col gap-3"
//         onSubmit={(e) => {
//           e.preventDefault();

//           handleSignup(form.getValues());
//         }}
//       >
//         {hasErrored && (
//           <span className="text-danger font-semi-bold">
//             {result.serverError?.message}
//           </span>
//         )}
//         <FormField
//           control={form.control}
//           name="rc_number"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>RC number</FormLabel>
//               <FormControl>
//                 <Input {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="year_founded"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Year Founded</FormLabel>
//               <FormControl>
//                 <Input {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="student_capacity"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Student Capacity</FormLabel>
//               <FormControl>
//                 <Input {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="it_duration"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>IT Duration</FormLabel>
//               <FormControl>
//                 <Input {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <div className="m-auto my-2">
//           <ButtonWithLoader type="submit" isPending={isExecuting}>
//             Sign up
//           </ButtonWithLoader>
//         </div>
//       </form>
//       <ToastContainer />
//       {isSignupSuccess && <SignupSuccessModal />}
//     </Form>
//   );
// }

// CompanyInfo2 component
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  companySignupSchema,
  fullCompanySignupSchema,
} from "@/lib/validations/auth";
import { ButtonWithLoader } from "@/components/button-with-loader";
import { useAction } from "next-safe-action/hooks";
import { companySignup } from "@/api/actions/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignupSuccessModal from "./success";
import { z } from "zod";

type CompanySignupSchema = z.infer<typeof companySignupSchema>;
type FullFormData = z.infer<typeof fullCompanySignupSchema>;

interface CompanyInfo2Props {
  formData: Partial<FullFormData>;
}

export function CompanyInfo2({ formData }: CompanyInfo2Props) {
  const [isSignupSuccess, setSignupSuccess] = useState(false);
  const form = useForm<CompanySignupSchema>({
    mode: "onChange",
    resolver: zodResolver(companySignupSchema),
    defaultValues: {
      rc_number: "",
      year_founded: "",
      student_capacity: "",
      it_duration: "",
      companyId: "",
    },
  });

  const { execute: signupAction, isExecuting } = useAction(companySignup, {
    onSuccess(data) {
      console.log("Company signup successful:", data);
      toast.success("Company signup successful!");
      setSignupSuccess(true);
    },
    onError(error) {
      toast.error(
        "Error signing up, please check your credentials and try again."
      );
      console.log(error);
    },
  });

  const handleSignup = (data: CompanySignupSchema) => {
    const payload: FullFormData = {
      ...formData,
      ...data,
      company_name: formData.company_name || "",
      email: formData.email || "",
      address: formData.address || "",
      password: formData.password || "",
    };
    signupAction(payload);
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-3"
        onSubmit={form.handleSubmit(handleSignup)}
      >
        <FormField
          control={form.control}
          name="rc_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>RC number</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="year_founded"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Year Founded</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="student_capacity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Student Capacity</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="it_duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>IT Duration</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="companyId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company ID</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="m-auto my-2">
          <ButtonWithLoader type="submit" isPending={isExecuting}>
            Sign up
          </ButtonWithLoader>
        </div>
      </form>
      <ToastContainer />
      {isSignupSuccess && <SignupSuccessModal />}
    </Form>
  );
}
