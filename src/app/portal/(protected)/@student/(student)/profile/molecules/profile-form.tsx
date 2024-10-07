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
//   profileImage: z
//     .instanceof(File)
//     .refine((file) => file.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
//     .optional(),
//   documents: z
//     .instanceof(File)
//     .refine((file) => file.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
//     .optional(),
// });

// type ProfileFormData = z.infer<typeof profileSchema>;

// export default function ProfileForm() {
//   const [profileImage, setProfileImage] = (useState < File) | (null > null);
//   const [documents, setDocuments] =
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
//               {profileImage ? (
//                 <img
//                   src={URL.createObjectURL(profileImage)}
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
//               onChange={(e) => handleFileChange(e, setProfileImage)}
//               className="mt-2"
//             />
//             {errors.profileImage && (
//               <p className="text-red-500 text-sm mt-1">
//                 {errors.profileImage.message}
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
//                 {documents ? (
//                   <p>{documents.name}</p>
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
//                 onChange={(e) => handleFileChange(e, setDocuments)}
//                 className="mt-2"
//               />
//               {errors.documents && (
//                 <p className="text-red-500 text-sm mt-1">
//                   {errors.documents.message}
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
//   profileImage: z
//     .instanceof(File)
//     .refine((file) => file.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
//     .optional(),
//   documents: z
//     .instanceof(File)
//     .refine((file) => file.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
//     .optional(),
// });

// type ProfileFormData = z.infer<typeof profileSchema>;

// export default function ProfileForm() {
//   const [profileImage, setProfileImage] = useState<File | null>(null);
//   const [documents, setDocuments] = useState<File | null>(null);

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
//               {profileImage ? (
//                 <img
//                   src={URL.createObjectURL(profileImage)}
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
//               onChange={(e) => handleFileChange(e, setProfileImage)}
//               className="mt-2"
//             />
//             {errors.profileImage && (
//               <p className="text-red-500 text-sm mt-1">
//                 {errors.profileImage.message}
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
//                 {documents ? (
//                   <p>{documents.name}</p>
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
//                 onChange={(e) => handleFileChange(e, setDocuments)}
//                 className="mt-2"
//               />
//               {errors.documents && (
//                 <p className="text-red-500 text-sm mt-1">
//                   {errors.documents.message}
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
// Other imports
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
import { useGlobal } from "@/context/GlobalContext";
// import { toast } from "@/components/ui/use-toast";

// Rest of your code

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

// Form schema
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
  profileImage: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .optional(),
  documents: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .optional(),
});

type ProfileFormData = z.infer<typeof profileSchema>;

export default function ProfileForm() {
  const { updateStudentProfile } = useGlobal();

  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [documents, setDocuments] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
  });

  const { execute: updateProfileAction, status } = useAction(
    updateStudentProfile,
    {
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
    }
  );

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
    <>
      <div className="mb-8"></div>
      <div className="max-w-5xl mx-auto mt-8 p-8 bg-white rounded-lg shadow-md">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex items-center mb-8">
            <label className="flex flex-col items-center cursor-pointer">
              <div className="w-[80px] h-[70px] border-2 border-dashed border-gray-300 rounded-lg p-2 text-center flex flex-col justify-center">
                {profileImage ? (
                  <img
                    src={URL.createObjectURL(profileImage)}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-full">
                    <Upload className="mx-auto mb-1" size={16} />
                    <p className="text-xs">Photo</p>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, setProfileImage)}
                  className="hidden"
                />
              </div>
            </label>
            {errors.profileImage && (
              <p className="text-red-500 text-sm mt-1 ml-4">
                {errors.profileImage.message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <Input
                id="firstName"
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
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <Input
                id="lastName"
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
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <Input
                id="email"
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
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <Input
                id="phoneNumber"
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
              <label
                htmlFor="bio"
                className="block text-sm font-medium text-gray-700"
              >
                Bio
              </label>
              <Textarea
                id="bio"
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
              <div className="border-2 border-gray-300 rounded-lg p-4">
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  Upload IT request letter
                </h3>
                <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 my-5 border-dashed rounded-md cursor-pointer p-4">
                  {documents ? (
                    <p>{documents.name}</p>
                  ) : (
                    <>
                      <Upload className="mx-auto mb-2" size={24} />
                      <p className="text-sm text-gray-500 mb-2">Upload</p>
                    </>
                  )}
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf"
                    onChange={(e) => handleFileChange(e, setDocuments)}
                    className="hidden"
                  />
                </label>

                {errors.documents && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.documents.message}
                  </p>
                )}
              </div>
            </div>
          </div>


           <div className="xxs:text-start space-x-2">
          <Button
            type="submit"
            size="sm"
            disabled={status === "executing"}
            className="mx-auto"
          >
            {status === "executing" ? "Updating..." : "Update Profile"}
          </Button>
          <button type="button" className="p-3" onClick={() => reset()}>
            Reset
          </button>
        </div>

        </form>
      </div>
    </>
  );
}
