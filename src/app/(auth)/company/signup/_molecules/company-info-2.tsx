"use client";

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
import { companySignup } from "@/api/actions/auth";
import { z } from "zod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignupSuccessModal from "./success";

type FormData = z.infer<typeof companySignupSchema>;

interface CompanyInfo2Props {
  formData: {
    email: string;
  };
}

export function CompanyInfo2({ formData }) {
  const [isSignupSuccess, setSignupSuccess] = useState(false);
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

  const {
    execute: signupAction,
    hasErrored,
    result,
    isExecuting,
  } = useAction(companySignup, {
    onSuccess(data) {
      console.log("Company signup successful:", data);
      toast.success("Company signup successful!");
      setSignupSuccess(true);
    },
    onError(error) {
      toast.error(
        " Error signing up, plesase check your credentials and try again."
      );

      console.log(error);
    },
  });

  const handleSignup = (data) => {
    const prev = formData;

    const payLoad = { ...prev, ...data };

    signupAction(payLoad);
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-3"
        onSubmit={(e) => {
          e.preventDefault();

          handleSignup(form.getValues());
        }}
      >
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
      <ToastContainer />
      {isSignupSuccess && <SignupSuccessModal />}
    </Form>
  );
}
