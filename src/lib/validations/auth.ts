import { z } from "zod";

export const signinSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export const acceptSchema = z.object({
  id: z.string(),
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

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export const companyProfileSchema = z.object({
  phone: z.string().min(1, "Phone number is required"),
  companyWebsite: z.string().url("Invalid URL").optional().or(z.literal("")),
  address: z.string().min(1, "Address is required"),
  description: z.string().min(1, "Description is required"),
  studentCapacity: z
    .number()
    .int()
    .positive("Capacity must be a positive integer"),
  profilePicture: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .optional(),
  bannerImage: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .optional(),
});

export const createSpaceSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters"),
  industry: z.string().min(2, "Industry must be at least 2 characters"),
  level: z.string().min(2, "Industry must be at least 2 characters"),
  state: z.string().min(2, "State must be at least 2 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  duration: z.enum(["3", "6", "12"]).transform(Number),
  // showAvailability: z.boolean().default(false),
});

export const fullCompanySignupSchema =
  verifyCompanySchema.merge(companySignupSchema);
