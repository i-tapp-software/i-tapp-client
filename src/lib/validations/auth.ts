import { z } from "zod";

export const signinSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  school: z.string().min(1),
  matriculation: z.string().min(1),
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
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  companyWebsite: z.string().url("Invalid URL format"),
  address: z.string().min(1, "Address is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  studentCapacity: z.number().min(1, "Student capacity must be at least 1"),
  profilePicture: z.any().optional(),
  bannerImage: z.any().optional(),
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
