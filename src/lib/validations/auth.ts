import { z } from "zod";

export const signinSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1),
});

export const onboardStudentSchema = z.object({
    matNo: z.string().min(1),
    school: z.string().min(1),
});
