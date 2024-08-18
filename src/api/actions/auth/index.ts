"use server";

import { actionClient } from "@/services/action";
import {
  verifyStudentIdentitySchema,
  signinSchema,
  studentSignupSchema,
} from "@/lib/validations/auth";
import { mutate } from "@/services/query";

export const signin = actionClient
  .metadata({ actionName: "signin" })
  .schema(signinSchema)
  .action(async ({ parsedInput: { email, password } }) => {
    return await mutate("/auth/login", {
      email,
      password,
    });
  });

export const verifyStudentIdentity = actionClient
  .metadata({ actionName: "verifyStudentIdentity" })
  .schema(verifyStudentIdentitySchema)
  .action(async ({ parsedInput: { matNo, school } }) => {
    return true;
  });

export const studentSignup = actionClient
  .metadata({ actionName: "studentSignup" })
  .schema(studentSignupSchema)
  .action(async ({ parsedInput: { email, password } }) => {
    await mutate("/auth/signup", { email, password });
  });
