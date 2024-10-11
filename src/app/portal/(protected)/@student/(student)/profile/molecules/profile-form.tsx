"use client";

import React, { useEffect, useState } from "react";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

// Form schema
const profileSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string().optional(),
  phoneNumber: z.string().optional(),
  bio: z.string().optional().optional(),
  profileImage: z.instanceof(File).optional(),
  documents: z.instanceof(File).optional(),
});

type ProfileFormData = z.infer<typeof profileSchema>;

export default function ProfileForm() {
  const { updateStudentProfile, students } = useGlobal();

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
        toast.success("Profile updated successfully!");
      },
      onError(error) {
        console.error("Failed to update profile", error);
        toast.error("Failed to update profile: ");
      },
    }
  );

  const onSubmit = (data: ProfileFormData) => {
    const prev = data;

    const payload = { ...prev, ...data, profileImage, documents };

    updateProfileAction(payload);
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<File | null>>
  ) => {
    if (event.target.files && event.target.files[0]) {
      setter(event.target.files[0]);
    }
  };

  useEffect(() => {
    if (students) {
      reset({
        firstName: students.firstName || "",
        lastName: students.lastName || "",
        email: students.email || "",
        phoneNumber: students.phoneNumber || "",
        bio: students.bio || "",
      });
    }
  }, [students, reset]);

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
        <ToastContainer />
      </div>
    </>
  );
}
