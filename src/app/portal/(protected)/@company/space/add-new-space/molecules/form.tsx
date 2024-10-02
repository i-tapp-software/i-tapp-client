"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export function AddSpaceForm() {
  const form = useForm({
    defaultValues: {
      title: "",
      industry: "",
      state: "",
      city: "",
      address: "",
      description: "",
      duration: "",
      bio: "",
    },
  });

  return (
    <div>
      <div className="mb-10 flex items-center justify-between">
        <h1 className="text-h6">Create IT Space</h1>

        <span>Show/Hide availability</span>
      </div>

      <div>
        <Form {...form}>
          <form>
            <div className="flex gap-4 flex-wrap max-w border-t-2 border-[#E0E4EC] pt-4">
              <div className="flex flex-col gap-4 w-80">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
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
                <FormField
                  control={form.control}
                  name="industry"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Industry</FormLabel>
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
                  name="city"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>City</FormLabel>
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
                        <FormLabel>State </FormLabel>
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
                            className="h-[120px] min-h-[120px]"
                            placeholder="Describe this internship oppurtunity"
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
            <div className="xxs:text-start space-x-2">
              <Button type="submit" size="sm" className="mx-auto">
                Create Space
              </Button>
              <button type="button" className="p-3">
                Clear
              </button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
