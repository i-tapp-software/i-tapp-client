"use server";

import { Schema, z } from "zod";
import { actionClient } from "@/services/action";
import {
  verifyStudentIdentitySchema,
  signinSchema,
  createSpaceSchema,
  signupSchema,
  acceptSchema,
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
    const response = await mutate("/company/login", {
      email,
      password,
    });

    console.log(response.data.data);

    const { accessToken, user, company, role } = response.data.data;

    // const { role} = response.data.data

    // Set the token in an HTTP-only cookie
    cookies().set("token", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    });

    return { user, accessToken, role, company };
  });

export const studentSignup = actionClient
  .metadata({ actionName: "studentSignup" })
  .schema(signupSchema)
  .action(
    async ({
      parsedInput: {
        email,
        firstName,
        lastName,
        password,
        matriculation,
        school,
      },
    }) => {
      console.log(email);
      try {
        const response = await mutate("/auth/student/signup", {
          firstName,
          lastName,
          email,
          password,
          matriculationNumber: matriculation,
          school,
        });

        console.log(response);
      } catch (error) {
        console.log(error);

        throw error;
      }
    }
  );

export const verifyStudentIdentity = actionClient
  .metadata({ actionName: "verifyStudentIdentity" })
  .schema(verifyStudentIdentitySchema)
  .action(async ({ parsedInput: { matNo } }) => {
    // return true;
    const response = await mutate("/student/check", {
      matriculation: matNo,
    });
    console.log(response.data);
    return response.data;
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
      return data.data;
    } catch (error) {
      console.log(error);
    }
  });

export const fetchAllCompanyApplications = actionClient
  .metadata({
    actionName: "fetchAllCompanyApplications",
  })
  .action(async () => {
    try {
      const response = await query("/company/all/category");
      const data = await response.json(); // Parse the body
      console.log(data.data); // Log the actual data
      return data.data;
    } catch (error) {
      console.log(error);
    }
  });

export const fetchCompanyJobs = actionClient
  .metadata({
    actionName: "fetchCompanyJobs",
  })
  .action(async () => {
    try {
      const response = await query("/company/jobs/all");
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
      return data.data;
    } catch (error) {
      console.log(error);
    }
  });

export const fetchSavedApplication = actionClient
  .metadata({
    actionName: "fetchSavedApplication",
  })
  .action(async () => {
    try {
      const response = await query("/student/saved/applications");
      const data = await response.json(); // Parse the body
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
      throw error; // Ensure the error is propagated back to the frontend
    }
  });

export const acceptApplication = actionClient
  .metadata({ actionName: "acceptApplication" })
  .schema(acceptSchema)
  .action(async ({ parsedInput: id }) => {
    try {
      const response = await mutate(`/company/applicants/accept/`, id);
      console.log("Application Response:", response.data);
      return response.data;
    } catch (error) {
      console.log(error);

      throw error; // Ensure the error is propagated back to the frontend
    }
  });

export const declineApplication = actionClient
  .metadata({ actionName: "declineApplication" })
  .schema(acceptSchema)
  .action(async ({ parsedInput: id }) => {
    try {
      const response = await mutate(`/company/applicants/accept/`, id);
      console.log("Application Response:", response.data);
      return response.data;
    } catch (error) {
      console.log(error);

      throw error; // Ensure the error is propagated back to the frontend
    }
  });

export const bookmarkApplication = actionClient
  .schema(acceptSchema)
  .metadata({ actionName: "bookmarkApplication" })
  .action(async ({ parsedInput: id }) => {
    try {
      const response = await mutate(`/company/applicants/accept/`, id);
      console.log("Application Response:", response.data);
      return response.data;
    } catch (error) {
      console.log(error);

      throw error; // Ensure the error is propagated back to the frontend
    }
  });

export const save = actionClient
  .metadata({ actionName: "save" })
  .action(async ({ parsedInput: jobId }) => {
    try {
      const response = await mutate("/student/saved/applications", jobId);
      console.log("Application Response:", response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error; // Ensure the error is propagated back to the frontend
    }
  });

export const createSpace = actionClient
  .metadata({ actionName: "createSpace" })
  .schema(createSpaceSchema)
  .action(
    async ({
      parsedInput: {
        title,
        level,
        duration,
        address,
        city,
        state,
        description,
        industry,
      },
    }) => {
      try {
        const response = await mutate("/company/job/new", {
          title,
          level,
          duration,
          address,
          city,
          state,
          description,
          industry,
        });
        console.log("Application Response:", response.data);
        return response.data;
      } catch (error) {
        console.log(error);
        throw error; // Ensure the error is propagated back to the frontend
      }
    }
  );

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

// Create the action
export const updateProfile = actionClient
  .metadata({ actionName: "updateProfile" })
  .schema(updateProfileSchema)
  .action(
    async ({
      parsedInput: { firstName, lastName, email, phoneNumber, bio, password },
    }) => {
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

// export const updateCompanyProfile = actionClient
//   .metadata({ actionName: "updateCompanyProfile" })
//   // .schema(companyProfileSchema)
//   .action(async ({  phone }) => {
//     console.log("Company Profile Response:", phone);
//     return {
//       success: true,
//       message: "Company profile updated successfully.",
//       // data: response.data,
//     };
//   });

// Define a schema for file uploads

// Update the company profile schema to include file fields

// async function parseFormData(req: NextApiRequest) {
//   const form = new formidable.IncomingForm();

//   return new Promise((resolve, reject) => {
//     form.parse(req, (err, fields, files) => {
//       if (err) reject(err);
//       resolve({ fields, files });
//     });
//   });
// }

export const updateCompanyProfile = actionClient
  .metadata({ actionName: "updateCompanyProfile" })
  .action(async () => {
    try {
      // Perform your update logic here
      console.log("Updating company profile with:", {});

      return {
        success: true,
        message: "Company profile updated successfully.",
      };
    } catch (error) {
      console.error("Error updating company profile:", error);
      return {
        success: false,
        message: "Failed to update company profile. Please try again.",
      };
    }
  });
