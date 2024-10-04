// "use client";

// import React, { useState } from "react";
// import { useForm } from "react-hook-form";

// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { useAction } from "next-safe-action/hooks";
// import { createSpace } from "@/api/actions/auth";

// export function AddSpaceForm() {
//   const form = useForm({
//     defaultValues: {
//       title: "",
//       industry: "",
//       state: "",
//       city: "",
//       address: "",
//       description: "",
//       duration: "",
//       bio: "",
//     },
//   });

//   const { execute, isExecuting, result, hasErrored } = useAction(createSpace, {
//     onSuccess(data) {
//       console.log("Logged in successfully", data);
//     },
//   });

//   return (
//     <div>
//       <div className="mb-10 flex items-center justify-between">
//         <h1 className="text-h6">Create IT Space</h1>

//         <span>Show/Hide availability</span>
//       </div>

//       <div>
//         <Form {...form}>
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();

//               execute(form.getValues());
//             }}
//           >
//             <div className="flex gap-4 flex-wrap max-w border-t-2 border-[#E0E4EC] pt-4">
//               <div className="flex flex-col gap-4 w-80">
//                 <FormField
//                   control={form.control}
//                   name="title"
//                   render={({ field }) => {
//                     return (
//                       <FormItem>
//                         <FormLabel>Title</FormLabel>
//                         <FormControl>
//                           <Input {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     );
//                   }}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="duration"
//                   render={({ field }) => {
//                     return (
//                       <FormItem>
//                         <FormLabel>IT duration</FormLabel>
//                         <Select
//                           onValueChange={field.onChange}
//                           defaultValue={field.value}
//                         >
//                           <FormControl>
//                             <SelectTrigger>
//                               <SelectValue placeholder="IT Duration" />
//                             </SelectTrigger>
//                           </FormControl>
//                           <SelectContent>
//                             <SelectItem value="1-3 months">
//                               1 - 3 months
//                             </SelectItem>
//                             <SelectItem value="3-6 months">
//                               3 - 6 months
//                             </SelectItem>
//                             <SelectItem value="6-12 months">
//                               6 - 12 months
//                             </SelectItem>
//                           </SelectContent>
//                         </Select>

//                         <FormMessage />
//                       </FormItem>
//                     );
//                   }}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="industry"
//                   render={({ field }) => {
//                     return (
//                       <FormItem>
//                         <FormLabel>Industry</FormLabel>
//                         <FormControl>
//                           <Input {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     );
//                   }}
//                 />
//               </div>
//               <div className="flex flex-col gap-4 w-80">
//                 <FormField
//                   control={form.control}
//                   name="city"
//                   render={({ field }) => {
//                     return (
//                       <FormItem>
//                         <FormLabel>City</FormLabel>
//                         <FormControl>
//                           <Input {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     );
//                   }}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="state"
//                   render={({ field }) => {
//                     return (
//                       <FormItem>
//                         <FormLabel>State </FormLabel>
//                         <FormControl>
//                           <Input {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     );
//                   }}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="address"
//                   render={({ field }) => {
//                     return (
//                       <FormItem>
//                         <FormLabel>Address</FormLabel>
//                         <FormControl>
//                           <Input {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     );
//                   }}
//                 />
//               </div>
//             </div>
//             <div className="flex my-4">
//               <div className="flex flex-col w-[444px]">
//                 <FormField
//                   control={form.control}
//                   name="bio"
//                   render={({ field }) => {
//                     return (
//                       <FormItem>
//                         <FormLabel>Bio</FormLabel>
//                         <FormControl>
//                           <Textarea
//                             className="h-[120px] min-h-[120px]"
//                             placeholder="Describe this internship oppurtunity"
//                             {...field}
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     );
//                   }}
//                 />
//               </div>
//             </div>
//             <div className="xxs:text-start space-x-2">
//               <Button
//                 disabled={isExecuting}
//                 type="submit"
//                 size="sm"
//                 className="mx-auto"
//               >
//                 {isExecuting ? "Creating space.." : "Create Space"}
//               </Button>
//               <button type="button" className="p-3">
//                 Clear
//               </button>
//             </div>
//           </form>
//         </Form>
//       </div>
//     </div>
//   );
// }

"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useAction } from "next-safe-action/hooks";

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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { createSpace } from "@/api/actions/auth";
import { createSpaceSchema } from "@/lib/validations/auth";

export function AddSpaceForm() {
  const form = useForm<z.infer<typeof createSpaceSchema>>({
    resolver: zodResolver(createSpaceSchema),
    defaultValues: {
      title: "",
      industry: "",
      level: "",
      state: "",
      city: "",
      address: "",
      description: "",
      duration: 3,
      // showAvailability: false,
    },
  });

  const { execute, isExecuting, result, hasErrored } = useAction(createSpace, {
    onSuccess(data) {
      console.log("Space created successfully", data);
      form.reset();
    },
    onError(error) {
      console.error("Error creating space", error);
    },
  });

  // function onSubmit(values: z.infer<typeof formSchema>) {
  //   execute(values);
  // }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-10 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Create IT Space</h1>
        {hasErrored && (
          <span className="text-danger font-semi-bold ">
            {result.serverError?.message}
          </span>
        )}
        {/* <FormField
          control={form.control}
          name="showAvailability"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
              <div className="space-y-0.5">
                <FormLabel>Show Availability</FormLabel>
                <FormDescription>
                  Display your availability on your space profile
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        /> */}
      </div>

      <Form {...form}>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            execute(form.getValues());
          }}
          className="space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="level"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Level</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>IT Duration</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    // defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="3">3 months</SelectItem>
                      <SelectItem value="6">3 - 6 months</SelectItem>
                      <SelectItem value="12">6 - 12 months</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="industry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Industry</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>State</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe this internship opportunity"
                    className="h-20 resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => form.reset()}
              disabled={isExecuting}
            >
              Clear
            </Button>
            <Button type="submit" disabled={isExecuting}>
              {isExecuting ? "Creating space..." : "Create Space"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
