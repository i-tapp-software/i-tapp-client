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

export const verifyCompanySchema = z.object({
  company_name: z.string().min(1),
  email: z.string().email(),
  address: z.string().min(1),
  password: z.string().min(1),
});

export const companySignupSchema = z.object({
  rc_number: z.string().min(1),
  year_founded: z.string().min(1),
  student_capacity: z.string().min(1),
  it_duration: z.string().min(1),
  companyId: z.string().min(1),
});

export const fullCompanySignupSchema =
  verifyCompanySchema.merge(companySignupSchema);
