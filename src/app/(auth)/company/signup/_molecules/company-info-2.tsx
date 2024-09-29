"use client";

// import React from "react";
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
// import { companySignupSchema } from "@/lib/validations/auth";
// import { ButtonWithLoader } from "@/components/button-with-loader";
// import { useAction } from "next-safe-action/hooks";
// import { studentSignup } from "@/api/actions/auth";
// import { z } from "zod";

// type FormData = z.infer<typeof companySignupSchema>;

// interface CompanyInfo2Props {
//   formData: any; // Consider typing this more specifically
// }

// export function CompanyInfo2({ formData }: CompanyInfo2Props) {
//   const form = useForm<FormData>({
//     mode: "onChange",
//     resolver: zodResolver(companySignupSchema),
//     defaultValues: {
//       rc_number: "",
//       year_founded: "",
//       student_capacity: "",
//       it_duration: "",
//     },
//   });

//   const { execute, hasErrored, result, isExecuting } = useAction(studentSignup);

//   const onSubmit = form.handleSubmit((data) => {
//     const password = data.rc_number;
//     execute(password);
//   });

//   return (
//     <Form {...form}>
//       <form className="flex flex-col gap-3" onSubmit={onSubmit}>
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
//               <FormLabel>Year founded</FormLabel>
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
//               <FormLabel>Student capacity</FormLabel>
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
//               <FormLabel>IT duration</FormLabel>
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
//     </Form>
//   );
// }

// import React from "react";
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
// import { companySignupSchema } from "@/lib/validations/auth";
// import { ButtonWithLoader } from "@/components/button-with-loader";
// import { useAction } from "next-safe-action/hooks";
// import { studentSignup } from "@/api/actions/auth";
// import { z } from "zod";

// type FormData = z.infer<typeof companySignupSchema>;

// interface CompanyInfo2Props {
//   formData: {
//     email: string;
//     // Add other fields from the previous step if necessary
//   };
// }

// export function CompanyInfo2({ formData }: CompanyInfo2Props) {
//   const form = useForm<FormData>({
//     mode: "onChange",
//     resolver: zodResolver(companySignupSchema),
//     defaultValues: {
//       rc_number: "",
//       year_founded: "",
//       student_capacity: "",
//       it_duration: "",
//     },
//   });

//   const { execute, hasErrored, result, isExecuting } = useAction(studentSignup);

//   const onSubmit = form.handleSubmit((data) => {
//     execute({
//       email: formData.email,
//       password: data.rc_number,
//       confirmPassword: data.rc_number, // Assuming RC number is used as password
//       // Include other fields if required by the studentSignup action
//     });
//   });

import React from "react";
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
import { companySignupSchema } from "@/lib/validations/auth";
import { ButtonWithLoader } from "@/components/button-with-loader";
import { useAction } from "next-safe-action/hooks";
import { studentSignup } from "@/api/actions/auth";
import { z } from "zod";

type FormData = z.infer<typeof companySignupSchema>;

interface CompanyInfo2Props {
  formData: {
    email: string;
  };
}

export function CompanyInfo2({ formData }: CompanyInfo2Props) {
  const form = useForm<FormData>({
    mode: "onChange",
    resolver: zodResolver(companySignupSchema),
    defaultValues: {
      rc_number: "",
      year_founded: "",
      student_capacity: "",
      it_duration: "",
    },
  });

  const { execute, hasErrored, result, isExecuting } = useAction(studentSignup);

  const onSubmit = form.handleSubmit((data) => {
    execute({
      email: formData.email,
      password: data.rc_number,
      confirmPassword: data.rc_number,
      // Remove rc_number, year_founded, student_capacity, and it_duration from here
      // if they're not expected by the studentSignup action
    });
  });

  return (
    <Form {...form}>
      <form className="flex flex-col gap-3" onSubmit={onSubmit}>
        {hasErrored && (
          <span className="text-danger font-semi-bold">
            {result.serverError?.message}
          </span>
        )}
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
        <div className="m-auto my-2">
          <ButtonWithLoader type="submit" isPending={isExecuting}>
            Sign up
          </ButtonWithLoader>
        </div>
      </form>
    </Form>
  );
}
