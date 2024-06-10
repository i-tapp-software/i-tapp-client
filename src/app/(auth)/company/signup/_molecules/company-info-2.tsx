"use client";

import React from "react";
import { useForm } from "react-hook-form";

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

export function CompanyInfo2() {
  const form = useForm({
    defaultValues: {
      rc_number: "",
      year_founded: "",
      student_capacity: "",
      it_duration: "",
    },
  });

  return (
    <Form {...form}>
      <form className="flex flex-col gap-3">
        <FormField
          name="rc_number"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>RC number</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          name="year_founded"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Year founded</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          name="student_capacity"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Student capacity</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          name="it_duration"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>IT duration </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <div className="m-auto my-2">
          <Button type="submit">Sign up</Button>
        </div>
      </form>
    </Form>
  );
}
