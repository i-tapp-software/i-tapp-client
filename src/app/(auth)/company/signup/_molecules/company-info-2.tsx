"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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
import { companySignup, studentSignup } from "@/api/actions/auth";

export function CompanyInfo2({ formData }: { formData: any }) {
  const {
    handleSubmit,
    formState: { isDirty, isValid, errors },
    getValues,
    ...form
  } = useForm({
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

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          const password = getValues().rc_number;
          const response = execute(password);
          console.log(response);
        }}
      >
        {hasErrored && (
          <span className="text-danger font-semi-bold">
            {result.serverError?.message}
          </span>
        )}
        <FormField
          name="rc_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>RC number</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage>{errors.rc_number?.message}</FormMessage>
            </FormItem>
          )}
        />
        <FormField
          name="year_founded"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Year founded</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage>{errors.year_founded?.message}</FormMessage>
            </FormItem>
          )}
        />
        <FormField
          name="student_capacity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Student capacity</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage>{errors.student_capacity?.message}</FormMessage>
            </FormItem>
          )}
        />
        <FormField
          name="it_duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>IT duration</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage>{errors.it_duration?.message}</FormMessage>
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
