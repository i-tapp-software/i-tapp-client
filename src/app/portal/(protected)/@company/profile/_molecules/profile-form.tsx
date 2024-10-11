"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Upload } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { companyProfileSchema } from "@/lib/validations/auth";
import { useGlobal } from "@/context/GlobalContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type ProfileFormData = z.infer<typeof companyProfileSchema>;

export default function ProfileForm() {
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [bannerImage, setBannerImage] = useState<File | null>(null);

  const { updateCompanyProfile } = useGlobal();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ProfileFormData>({
    resolver: zodResolver(companyProfileSchema),
  });

  const { execute: updateProfileAction, status } = useAction(
    updateCompanyProfile,
    {
      onSuccess(data) {
        console.log("Profile updated successfully!", data);
        toast.success("Company profile updated successfully.");
      },
      onError(error) {
        console.error("Failed to update profile", error);
        toast.error("Failed to update company profile. Please try again.");
      },
    }
  );

  const onSubmit = (data: ProfileFormData) => {
    const prev = data;

    const payload = { ...prev, ...data, profileImage, setBannerImage };

    updateProfileAction(payload);
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
    <div className="max-w-5xl mx-auto p-8 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Banner Upload */}
        <div className="mb-8">
          <label className="block w-full h-40 bg-gray-200 my-5 rounded-md flex items-center justify-center cursor-pointer">
            {bannerImage ? (
              <img
                src={URL.createObjectURL(bannerImage)}
                alt="Banner"
                className="w-full h-full object-cover rounded-md"
              />
            ) : (
              <div className="text-center">
                <Upload className="mx-auto mb-2" size={48} />
                <p className="text-gray-600">Click to upload banner image</p>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e, setBannerImage)}
              className="hidden"
            />
          </label>
          {/* {errors.bannerImage && (
            <p className="text-red-500 text-sm mt-1">
              {errors.bannerImage.message}
            </p>
          )} */}
        </div>

        {/* Profile Picture Upload */}
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
          {/* {errors.profileImage && (
            <p className="text-red-500 text-sm mt-1 ml-4">
              {errors.profileImage.message}
            </p>
          )} */}
        </div>

        {/* Form Fields with Labels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number
            </label>
            <Input
              id="phone"
              {...register("phone")}
              placeholder="Enter your phone number"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Company Website */}
          <div>
            <label
              htmlFor="companyWebsite"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Company Website
            </label>
            <Input
              id="companyWebsite"
              {...register("companyWebsite")}
              placeholder="Enter your company website"
            />
            {errors.companyWebsite && (
              <p className="text-red-500 text-sm mt-1">
                {errors.companyWebsite.message}
              </p>
            )}
          </div>

          {/* Address */}
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Address
            </label>
            <Input
              id="address"
              {...register("address")}
              placeholder="Enter your address"
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">
                {errors.address.message}
              </p>
            )}
          </div>

          {/* Student Capacity */}
          <div>
            <label
              htmlFor="studentCapacity"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Student Capacity
            </label>
            <Input
              id="studentCapacity"
              type="number"
              {...register("studentCapacity", { valueAsNumber: true })}
              placeholder="Enter student capacity"
            />
            {errors.studentCapacity && (
              <p className="text-red-500 text-sm mt-1">
                {errors.studentCapacity.message}
              </p>
            )}
          </div>
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Description
          </label>
          <Textarea
            id="description"
            {...register("description")}
            placeholder="Enter a description of your company or services"
            rows={5}
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Form Buttons */}

        <div className="xxs:text-start space-x-2">
          <Button
            type="submit"
            size="sm"
            disabled={isSubmitting || status === "executing"}
            className="mx-auto"
          >
            {isSubmitting || status === "executing"
              ? "Updating..."
              : "Update Profile"}
          </Button>
          <button type="button" className="p-3" onClick={() => reset()}>
            Reset
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
