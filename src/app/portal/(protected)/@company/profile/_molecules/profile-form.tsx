// "use client";

// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { Upload } from "lucide-react";
// import { useAction } from "next-safe-action/hooks";
// import { updateProfile } from "@/api/actions/auth";
// import { Wrapper } from "@/components/wrapper";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";

// const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

// const profileSchema = z.object({
//   firstName: z.string().min(1, "First name is required"),
//   lastName: z.string().min(1, "Last name is required"),
//   email: z.string().email("Invalid email address"),
//   phone: z.string().min(1, "Phone number is required"),
//   bio: z.string(),
//   profilePicture: z
//     .instanceof(File)
//     .refine((file) => file.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
//     .optional(),
//   itRequestLetter: z
//     .instanceof(File)
//     .refine((file) => file.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
//     .optional(),
// });

// type ProfileFormData = z.infer<typeof profileSchema>;

// export default function ProfileForm() {
//   const [profilePicture, setProfilePicture] = (useState < File) | (null > null);
//   const [itRequestLetter, setItRequestLetter] =
//     (useState < File) | (null > null);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm <
//   ProfileFormData >
//   {
//     resolver: zodResolver(profileSchema)
//   };

//   const { execute: updateProfileAction, isExecuting } = useAction(
//     updateProfile,
//     {
//       onSuccess(data) {
//         console.log("Profile updated successfully!", data);
//         toast({
//           title: "Success",
//           description: "Profile updated successfully!",
//         });
//       },
//       onError(error) {
//         console.error("Failed to update profile", error);
//         toast({
//           title: "Error",
//           description: "Failed to update profile. Please try again.",
//           variant: "destructive",
//         });
//       },
//     }
//   );

//   const onSubmit = (data: ProfileFormData) => {
//     const formData = new FormData();
//     Object.entries(data).forEach(([key, value]) => {
//       if (value instanceof File) {
//         formData.append(key, value);
//       } else if (value !== undefined && value !== null) {
//         formData.append(key, String(value));
//       }
//     });
//     updateProfileAction(formData);
//   };

//   const handleFileChange = (
//     event: React.ChangeEvent<HTMLInputElement>,
//     setter: React.Dispatch<React.SetStateAction<File | null>>
//   ) => {
//     if (event.target.files && event.target.files[0]) {
//       setter(event.target.files[0]);
//     }
//   };

//   return (
//     <Wrapper className="touch:pr-[400px]">
//       <div className="max-w-5xl mx-auto p-8 bg-white rounded-lg shadow-md">
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
//           <div className="mb-8">
//             <h2 className="text-lg font-semibold mb-2">Your Profile Picture</h2>
//             <div className="w-40 h-40 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center mx-auto">
//               {profilePicture ? (
//                 <img
//                   src={URL.createObjectURL(profilePicture)}
//                   alt="Profile"
//                   className="w-full h-full object-cover"
//                 />
//               ) : (
//                 <>
//                   <Upload className="mx-auto mb-2" size={48} />
//                   <p>Upload your photo</p>
//                 </>
//               )}
//             </div>
//             <Input
//               type="file"
//               accept="image/*"
//               onChange={(e) => handleFileChange(e, setProfilePicture)}
//               className="mt-2"
//             />
//             {errors.profilePicture && (
//               <p className="text-red-500 text-sm mt-1">
//                 {errors.profilePicture.message}
//               </p>
//             )}
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             <Input
//               {...register("firstName")}
//               label="First name"
//               placeholder="Enter your first name"
//               error={errors.firstName?.message}
//             />
//             <Input
//               {...register("lastName")}
//               label="Last name"
//               placeholder="Enter your last name"
//               error={errors.lastName?.message}
//             />
//             <Input
//               {...register("email")}
//               type="email"
//               label="Email address"
//               placeholder="Enter your email address"
//               error={errors.email?.message}
//             />
//             <Input
//               {...register("phone")}
//               type="tel"
//               label="Phone number"
//               placeholder="Enter your phone number"
//               error={errors.phone?.message}
//             />
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             <Textarea
//               {...register("bio")}
//               label="Bio"
//               placeholder="Tell us something about you, your goals etc."
//               error={errors.bio?.message}
//               rows={5}
//             />
//             <div>
//               <h3 className="text-sm font-medium text-gray-700 mb-2">
//                 Upload IT request letter
//               </h3>
//               <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
//                 {itRequestLetter ? (
//                   <p>{itRequestLetter.name}</p>
//                 ) : (
//                   <>
//                     <Upload className="mx-auto mb-2" size={24} />
//                     <p className="text-sm text-gray-500 mb-2">
//                       Drag 'n Drop here
//                     </p>
//                     <p className="text-sm text-gray-500 mb-2">Or</p>
//                     <Button variant="link" className="text-blue-500 underline">
//                       Browse
//                     </Button>
//                   </>
//                 )}
//               </div>
//               <Input
//                 type="file"
//                 accept=".pdf,.doc,.docx"
//                 onChange={(e) => handleFileChange(e, setItRequestLetter)}
//                 className="mt-2"
//               />
//               {errors.itRequestLetter && (
//                 <p className="text-red-500 text-sm mt-1">
//                   {errors.itRequestLetter.message}
//                 </p>
//               )}
//             </div>
//           </div>

//           <div className="flex items-center justify-between">
//             <Button type="submit" disabled={isExecuting}>
//               {isExecuting ? "Updating..." : "Update Profile"}
//             </Button>
//             <Button type="button" variant="ghost" onClick={() => reset()}>
//               Reset
//             </Button>
//           </div>
//         </form>
//       </div>
//     </Wrapper>
//   );
// }

// "use client";

// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { Upload } from "lucide-react";
// import { useAction } from "next-safe-action/hooks";
// import { updateProfile } from "@/api/actions/auth";
// import { Wrapper } from "@/components/wrapper";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// // import { toast } from "@/components/ui/use-toast";

// const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

// const profileSchema = z.object({
//   firstName: z.string().min(1, "First name is required"),
//   lastName: z.string().min(1, "Last name is required"),
//   email: z.string().email("Invalid email address"),
//   phone: z.string().min(1, "Phone number is required"),
//   bio: z.string(),
//   profilePicture: z
//     .instanceof(File)
//     .refine((file) => file.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
//     .optional(),
//   itRequestLetter: z
//     .instanceof(File)
//     .refine((file) => file.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
//     .optional(),
// });

// type ProfileFormData = z.infer<typeof profileSchema>;

// export default function ProfileForm() {
//   const [profilePicture, setProfilePicture] = useState<File | null>(null);
//   const [itRequestLetter, setItRequestLetter] = useState<File | null>(null);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm<ProfileFormData>({
//     resolver: zodResolver(profileSchema),
//   });

//   const { execute: updateProfileAction, isExecuting } = useAction(
//     updateProfile,
//     {
//       onSuccess(data) {
//         console.log("Profile updated successfully!", data);
//         // toast({
//         //   title: "Success",
//         //   description: "Profile updated successfully!",
//         // });
//       },
//       onError(error) {
//         console.error("Failed to update profile", error);
//         // toast({
//         //   title: "Error",
//         //   description: "Failed to update profile. Please try again.",
//         //   variant: "destructive",
//         // });
//       },
//     }
//   );

//   const onSubmit = (data: ProfileFormData) => {
//     console.log("Submitting profile form:", data);
//     const formData = new FormData();
//     Object.entries(data).forEach(([key, value]) => {
//       if (value instanceof File) {
//         formData.append(key, value);
//       } else if (value !== undefined && value !== null) {
//         formData.append(key, String(value));
//       }
//     });
//     updateProfileAction(formData);
//   };

//   const handleFileChange = (
//     event: React.ChangeEvent<HTMLInputElement>,
//     setter: React.Dispatch<React.SetStateAction<File | null>>
//   ) => {
//     if (event.target.files && event.target.files[0]) {
//       setter(event.target.files[0]);
//     }
//   };

//   return (
//     <Wrapper className="touch:pr-[400px]">
//       <div className="max-w-5xl mx-auto p-8 bg-white rounded-lg shadow-md">
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
//           <div className="mb-8">
//             <h2 className="text-lg font-semibold mb-2">Your Profile Picture</h2>
//             <div className="w-40 h-40 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center mx-auto">
//               {profilePicture ? (
//                 <img
//                   src={URL.createObjectURL(profilePicture)}
//                   alt="Profile"
//                   className="w-full h-full object-cover"
//                 />
//               ) : (
//                 <>
//                   <Upload className="mx-auto mb-2" size={48} />
//                   <p>Upload your photo</p>
//                 </>
//               )}
//             </div>
//             <Input
//               type="file"
//               accept="image/*"
//               onChange={(e) => handleFileChange(e, setProfilePicture)}
//               className="mt-2"
//             />
//             {errors.profilePicture && (
//               <p className="text-red-500 text-sm mt-1">
//                 {errors.profilePicture.message}
//               </p>
//             )}
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             <div>
//               <Input
//                 {...register("firstName")}
//                 placeholder="Enter your first name"
//               />
//               {errors.firstName && (
//                 <p className="text-red-500 text-sm mt-1">
//                   {errors.firstName.message}
//                 </p>
//               )}
//             </div>
//             <div>
//               <Input
//                 {...register("lastName")}
//                 placeholder="Enter your last name"
//               />
//               {errors.lastName && (
//                 <p className="text-red-500 text-sm mt-1">
//                   {errors.lastName.message}
//                 </p>
//               )}
//             </div>
//             <div>
//               <Input
//                 {...register("email")}
//                 type="email"
//                 placeholder="Enter your email address"
//               />
//               {errors.email && (
//                 <p className="text-red-500 text-sm mt-1">
//                   {errors.email.message}
//                 </p>
//               )}
//             </div>
//             <div>
//               <Input
//                 {...register("phone")}
//                 type="tel"
//                 placeholder="Enter your phone number"
//               />
//               {errors.phone && (
//                 <p className="text-red-500 text-sm mt-1">
//                   {errors.phone.message}
//                 </p>
//               )}
//             </div>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             <div>
//               <Textarea
//                 {...register("bio")}
//                 placeholder="Tell us something about you, your goals etc."
//                 rows={5}
//               />
//               {errors.bio && (
//                 <p className="text-red-500 text-sm mt-1">
//                   {errors.bio.message}
//                 </p>
//               )}
//             </div>
//             <div>
//               <h3 className="text-sm font-medium text-gray-700 mb-2">
//                 Upload IT request letter
//               </h3>
//               <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
//                 {itRequestLetter ? (
//                   <p>{itRequestLetter.name}</p>
//                 ) : (
//                   <>
//                     <Upload className="mx-auto mb-2" size={24} />
//                     <p className="text-sm text-gray-500 mb-2">
//                       Drag 'n Drop here
//                     </p>
//                     <p className="text-sm text-gray-500 mb-2">Or</p>
//                     <Button variant="link" className="text-blue-500 underline">
//                       Browse
//                     </Button>
//                   </>
//                 )}
//               </div>
//               <Input
//                 type="file"
//                 accept=".pdf,.doc,.docx"
//                 onChange={(e) => handleFileChange(e, setItRequestLetter)}
//                 className="mt-2"
//               />
//               {errors.itRequestLetter && (
//                 <p className="text-red-500 text-sm mt-1">
//                   {errors.itRequestLetter.message}
//                 </p>
//               )}
//             </div>
//           </div>

//           <div className="flex items-center justify-between">
//             <Button type="submit" disabled={isExecuting}>
//               {isExecuting ? "Updating..." : "Update Profile"}
//             </Button>
//             <Button type="button" variant="ghost" onClick={() => reset()}>
//               Reset
//             </Button>
//           </div>
//         </form>
//       </div>
//     </Wrapper>
//   );
// }

"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Upload } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { updateProfile } from "@/api/actions/auth";
import { Wrapper } from "@/components/wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// import { toast } from "@/components/ui/use-toast";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

const profileSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  bio: z.string().optional(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .optional(),
  profilePicture: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .optional(),
  itRequestLetter: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .optional(),
});

type ProfileFormData = z.infer<typeof profileSchema>;

export default function ProfileForm() {
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [itRequestLetter, setItRequestLetter] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
  });

  const { execute: updateProfileAction, status } = useAction(updateProfile, {
    onSuccess(data) {
      console.log("Profile updated successfully!", data);
      // toast({
      //   title: "Success",
      //   description: data.message,
      // });
    },
    onError(error) {
      console.error("Failed to update profile", error);
      // toast({
      //   title: "Error",
      //   description: "Failed to update profile. Please try again.",
      //   variant: "destructive",
      // });
    },
  });

  const onSubmit = (data: ProfileFormData) => {
    updateProfileAction(data);
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<File | null>>
  ) => {
    if (event.target.files && event.target.files[0]) {
      setter(event.target.files[0]);
    }
  };

  return (
    <Wrapper className="touch:pr-[400px]">
      <div className="max-w-5xl mx-auto p-8 bg-white rounded-lg shadow-md">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-2">Your Profile Picture</h2>
            <div className="w-40 h-40 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center mx-auto">
              {profilePicture ? (
                <img
                  src={URL.createObjectURL(profilePicture)}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <>
                  <Upload className="mx-auto mb-2" size={48} />
                  <p>Upload your photo</p>
                </>
              )}
            </div>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e, setProfilePicture)}
              className="mt-2"
            />
            {errors.profilePicture && (
              <p className="text-red-500 text-sm mt-1">
                {errors.profilePicture.message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <Input
                {...register("firstName")}
                placeholder="Enter your first name"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div>
              <Input
                {...register("lastName")}
                placeholder="Enter your last name"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>
            <div>
              <Input
                {...register("email")}
                type="email"
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <Input
                {...register("phoneNumber")}
                type="tel"
                placeholder="Enter your phone number"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <Textarea
                {...register("bio")}
                placeholder="Tell us something about you, your goals etc."
                rows={5}
              />
              {errors.bio && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.bio.message}
                </p>
              )}
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                Upload IT request letter
              </h3>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                {itRequestLetter ? (
                  <p>{itRequestLetter.name}</p>
                ) : (
                  <>
                    <Upload className="mx-auto mb-2" size={24} />
                    <p className="text-sm text-gray-500 mb-2">
                      Drag 'n Drop here
                    </p>
                    <p className="text-sm text-gray-500 mb-2">Or</p>
                    <Button variant="link" className="text-blue-500 underline">
                      Browse
                    </Button>
                  </>
                )}
              </div>
              <Input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => handleFileChange(e, setItRequestLetter)}
                className="mt-2"
              />
              {errors.itRequestLetter && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.itRequestLetter.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <Button type="submit" disabled={status === "executing"}>
              {status === "executing" ? "Updating..." : "Update Profile"}
            </Button>
            <Button type="button" variant="ghost" onClick={() => reset()}>
              Reset
            </Button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
}
