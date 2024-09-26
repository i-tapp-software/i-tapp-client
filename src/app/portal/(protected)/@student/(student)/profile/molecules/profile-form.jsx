"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Wrapper } from "@/components/wrapper";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  firstname: z.string().min(1, { message: "required" }),
  lastname: z.string().min(1, { message: "required" }),
  address: z.string().min(1, { message: "required" }),
  universityName: z.string().min(1, { message: "required" }),
  matricNumber: z.string().min(1, { message: "required" }),
  email: z.string().email(),
  phoneNumber: z.string().min(11, { message: "required" }),
  state: z.string().min(1, { message: "required" }),
  course: z.string().min(1, { message: "required" }),
  duration: z.string({
    required_error: "select IT duration",
  }),
  bio: z.string(),
});

export default function ProfileForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "ffff",
      lastname: "ffff",
      address: "fff",
      universityName: "fff",
      matricNumber: "fff",
      email: "jutin2@gamil.com",
      phoneNumber: "dd444444444444d",
      state: "ddd",
      course: "dddd",
      bio: "",
    },
  });

  const onSubmit = (data) => {
    form.reset(data);
  };

  return (
    <Wrapper className="touch:pr-[400px]">
      <div>
        <p>your profile picture</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex justify-between gap-4 flex-wrap max-w  ">
            <div className="flex flex-col gap-4 w-80">
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>First name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>last name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="universityName"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Name of University</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="matricNumber"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Matric number</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            </div>
            <div className="flex flex-col gap-4 w-80">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>State of residence</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="course"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Course of study</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="duration"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>IT duration</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="IT Duration" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="1-3 months">
                            1 - 3 months
                          </SelectItem>
                          <SelectItem value="3-6 months">
                            3 - 6 months
                          </SelectItem>
                          <SelectItem value="6-12 months">
                            6 - 12 months
                          </SelectItem>
                        </SelectContent>
                      </Select>

                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            </div>
          </div>
          <div className="flex my-4">
            <div className="flex flex-col w-[444px]">
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Bio</FormLabel>
                      <FormControl>
                        <Textarea
                          name="bio"
                          placeholder="Tell us something about you"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            </div>
          </div>
          <div className="text-center xxs:text-start">
            <Button type="submit" size="sm" className="mx-auto">
              Update Profile
            </Button>
          </div>
        </form>
      </Form>
    </Wrapper>
  );
}
