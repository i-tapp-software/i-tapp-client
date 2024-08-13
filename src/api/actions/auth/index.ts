"use server";

import { actionClient } from "@/services/action";
import { onboardStudentSchema, signinSchema } from '@/lib/validations/auth';
import { mutate } from '@/services/query';

export const signin = actionClient
  .metadata({ actionName: 'signin' })
  .schema(signinSchema)
  .action(async ({ parsedInput: { email, password } }) => {
    return await mutate("/auth/login", {
      email,
      password,
    });
  });


export const onboardStudent = actionClient
  .metadata({ actionName: 'onboardStudent' })
  .schema(onboardStudentSchema)
  .action(async ({ parsedInput: { matNo, school }, }) => {
    return await mutate("/student/onboard", { matNo, school });
  });
