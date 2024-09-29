"use server";

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

    const { accessToken } = response.data.data;

    // Set the token in an HTTP-only cookie
    cookies().set("token", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    });

    return response.data;
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
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error("Server Error:", error.response.data);
      } else if (error.request) {
        // No response received
        console.error("No response received:", error.request);
      } else {
        // Other errors
        console.error("Error:", error.message);
      }
      throw error; // Ensure the error is propagated back to the frontend
    }
  });
