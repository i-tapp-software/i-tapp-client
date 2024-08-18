import { z } from "zod";

export const signinSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export const verifyStudentIdentitySchema = z.object({
  matNo: z.string().min(1),
  school: z.string().min(1),
});

export const studentSignupSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(1),
    confirmPassword: z.string().min(1),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
