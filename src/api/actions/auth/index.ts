"use server";

import { z } from "zod";
import { actionClient } from "@/services/action";
import {
  verifyStudentIdentitySchema,
  signinSchema,
  studentSignupSchema,
  companySignupSchema,
  fullCompanySignupSchema,
} from "@/lib/validations/auth";
import { mutate, query } from "@/services/query";
import { cookies } from "next/headers";

// export const signin = actionClient
//   .metadata({ actionName: "signin" })
//   .schema(signinSchema)
//   .action(async ({ parsedInput: { email, password } }) => {
//     try {
//       const response = await mutate("/auth/login", {
//         email,
//         password,
//       });

//       const { accessToken } = response.data.data;

//       // Set the token in an HTTP-only cookie
//       cookies().set("token", accessToken, {
//         httpOnly: true,
//         secure: process.env.NODE_ENV === "production",
//         sameSite: "strict",
//         maxAge: 60 * 60 * 24 * 7, // 1 week
//         path: "/",
//       });

//       return { success: true };
//     } catch (error) {
//       console.error("Login error:", error);
//       return error
//       return { success: false, error: "Invalid credentials" };
//     }
//   });

export const signin = actionClient
  .metadata({ actionName: "signin" })
  .schema(signinSchema)
  .action(async ({ parsedInput: { email, password } }) => {
    const response = await mutate("/auth/login", {
      email,
      password,
    });

    const { accessToken, user, role } = response.data.data;

    // const { role} = response.data.data

    // Set the token in an HTTP-only cookie
    cookies().set("token", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    });

    return { user, accessToken, role };
  });

// export const signin = actionClient
//   .metadata({ actionName: "signin" })
//   .schema(signinSchema)
//   .action(async ({ parsedInput: { email, password } }) => {
//     const response = await mutate("/auth/login", {
//       email,
//       password,
//     });
//     console.log(response.data);

//     return response.data;
//   });

export const verifyStudentIdentity = actionClient
  .metadata({ actionName: "verifyStudentIdentity" })
  .schema(verifyStudentIdentitySchema)
  .action(async ({ parsedInput: { matNo, school } }) => {
    // return true;
    const response = await mutate("/student/check", {
      matriculation: matNo,
    });
    console.log(response.data);
    return response.data;
  });

export const studentSignup = actionClient
  .metadata({ actionName: "studentSignup" })
  .schema(studentSignupSchema)
  .action(async ({ parsedInput: { email, password } }) => {
    // await mutate("/auth/signup", { email, password });
    await mutate("/auth/signup", { email, password });
  });

// export const companySignup = actionClient
//   .metadata({ actionName: "companySignup" })
//   .action(async ({ parsedInput: { email, password } }) => {
//     await mutate("/company/create", { email, password });
//   });

export const fetchJobs = actionClient
  .metadata({
    actionName: "fetctJobs",
  })
  .action(async () => {
    try {
      const response = await query("/student/jobs");
      const data = await response.json(); // Parse the body
      console.log(data.data); // Log the actual data
      return data.data;
    } catch (error) {
      console.log(error);
    }
  });

export const fetchApplication = actionClient
  .metadata({
    actionName: "fetchApplication",
  })
  .action(async () => {
    try {
      const response = await query("/student/applications");
      const data = await response.json(); // Parse the body
      console.log(data.data); // Log the actual data
      return data.data;
    } catch (error) {
      console.log(error);
    }
  });

export const apply = actionClient
  .metadata({ actionName: "apply" })
  .action(async ({ parsedInput: id }) => {
    try {
      const response = await mutate("/student/job/apply", id);
      console.log("Application Response:", response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      // if (error.response) {
      //   // Server responded with a status other than 2xx
      //   console.error("Server Error:", error.response.data);
      // } else if (error.request) {
      //   // No response received
      //   console.error("No response received:", error.request);
      // } else {
      //   // Other errors
      //   console.error("Error:", error.message);
      // }
      throw error; // Ensure the error is propagated back to the frontend
    }
  });

export const save = actionClient
  .metadata({ actionName: "save" })
  .action(async ({ parsedInput: id }) => {
    try {
      const response = await mutate("/student/saved/applications", id);
      console.log("Application Response:", response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      // if (error.response) {
      //   // Server responded with a status other than 2xx
      //   console.error("Server Error:", error.response.data);
      // } else if (error.request) {
      //   // No response received
      //   console.error("No response received:", error.request);
      // } else {
      //   // Other errors
      //   console.error("Error:", error.message);
      // }
      throw error; // Ensure the error is propagated back to the frontend
    }
  });

// export const updateProfile = actionClient
//   .metadata({
//     actionName: "updateProfile",
//   })
//   .action(
//     async ({
//       parsedInput: { firstName, lastName, email, phoneNumber, bio, password },
//     }) => {
//       try {
//         const response = await mutate('/student/profile', {
//           firstName,
//           lastName,
//           email,
//           phoneNumber,
//           bio,
//           password,
//         });
//         console.log("Profile Response:", response.data);
//         return response.data;
//       } catch (error) {
//         console.log(error);
//         throw error; // Ensure the error is propagated back to the frontend
//       }
//     }
//   );

// Define the input schema
const updateProfileSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  bio: z.string().optional(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .optional(),
});

// Define the output schema
const updateProfileOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  user: z
    .object({
      firstName: z.string(),
      lastName: z.string(),
      email: z.string(),
      phoneNumber: z.string(),
      bio: z.string().optional(),
    })
    .optional(),
});

// Create the action
export const updateProfile = actionClient
  .metadata({ actionName: "updateProfile" })
  .schema(updateProfileSchema)
  .action(
    async ({ firstName, lastName, email, phoneNumber, bio, password }) => {
      try {
        const response = await mutate("/student/profile", {
          firstName,
          lastName,
          email,
          phoneNumber,
          bio,
          password,
        });

        console.log("Profile Response:", response.data);
        return response.data;
      } catch (error) {
        console.error("Profile update error:", error);
        return {
          success: false,
          message: "Failed to update profile. Please try again.",
        };
      }
    }
  );
