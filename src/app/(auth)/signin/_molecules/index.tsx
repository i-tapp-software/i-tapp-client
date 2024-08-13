"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAction } from "next-safe-action/hooks";

import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { signinSchema } from "@/lib/validations/auth";
import { ButtonWithLoader } from "@/components/button-with-loader";
import { signin } from "@/api/actions/auth";

export function CompanySignIn() {
  const form = useForm({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { isDirty, isValid } = form.formState;

  const { execute, isExecuting, result, hasErrored } = useAction(signin);

  return (
    <div className="w-full max-w-[350px] m-auto flex flex-col">
      <div className="flex flex-col gap-4 items-center mb-4">
        <h1 className="text-2xl font-bold ">Login to your account</h1>
        <p className="text-sm text-center">
          Welcome back. <br /> Dont have an account yet?
          <Link href="/company/signup" className="text-primary mx-1">
            Sign up
          </Link>
        </p>
      </div>

      {hasErrored && (
        <span className="text-danger font-semi-bold ">
          {result.serverError?.message}
        </span>
      )}
      <Form {...form}>
        <form
          className="my-4 flex flex-col gap-2"
          onSubmit={(e) => {
            e.preventDefault();

            execute(form.getValues());
          }}
        >
          <div className="flex flex-col gap-3">
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
              name="password"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input isHiddenField {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          </div>

          <div className="m-auto my-2">
            <ButtonWithLoader
              type="submit"
              disabled={!isDirty || !isValid}
              isPending={isExecuting}
            >
              Sign up
            </ButtonWithLoader>
          </div>
        </form>
      </Form>
    </div>
  );
}
