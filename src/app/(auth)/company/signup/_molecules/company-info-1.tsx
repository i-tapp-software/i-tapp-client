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
import { verifyCompanySchema } from "@/lib/validations/auth";

export function CompanyInfo1({
  setFormStep,
  onFormDataUpdate,
}: {
  setFormStep: React.Dispatch<React.SetStateAction<number>>;
  onFormDataUpdate: (data: any) => void;
}) {
  const {
    handleSubmit,
    formState: { isValid, errors },
    ...form
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(verifyCompanySchema),
    defaultValues: {
      company_name: "",
      email: "",
      address: "",
      password: "",
    },
  });

  const onSubmit = (data: any) => {
    if (isValid) {
      onFormDataUpdate(data); // Pass form data to parent
      setFormStep(1); // Navigate to the next form
    }
  };

  return (
    <Form {...form}>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
        <FormField
          name="company_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage>{errors.company_name?.message}</FormMessage>
            </FormItem>
          )}
        />
        <FormField
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage>{errors.email?.message}</FormMessage>
            </FormItem>
          )}
        />
        <FormField
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage>{errors.address?.message}</FormMessage>
            </FormItem>
          )}
        />
        <FormField
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage>{errors.password?.message}</FormMessage>
            </FormItem>
          )}
        />
        <div className="m-auto my-2">
          <Button type="submit" disabled={!isValid}>
            Continue...
          </Button>
        </div>
      </form>
    </Form>
  );
}
