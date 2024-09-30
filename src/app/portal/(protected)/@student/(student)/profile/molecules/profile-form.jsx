import React from "react";
import { Upload } from "lucide-react";
import { Wrapper } from "@/components/wrapper";

const ProfileForm = () => {
  return (
    <Wrapper className="touch:pr-[400px]">
      <div className="max-w-5xl mx-auto p-8 bg-white">
        <div className="mb-8">
          <h2 className="text-base mb-2">Your Profile Picture</h2>
          <div className="w-30 h-30 border-2 border-dashed border-gray-300 rounded-xl p-4 text-center ">
            <Upload className="mx-auto mb-2" size={40} />
            <p>Upload your photo</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="lg:col-span-1">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              First name
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Enter your first name"
            />
          </div>

          <div className="lg:col-span-1">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Enter your email address"
            />
          </div>

          <div className="lg:col-span-1">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Enter your last name"
            />
          </div>

          <div className="lg:col-span-1">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Enter your phone number"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="lg:col-span-1">
            <label
              htmlFor="bio"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Bio
            </label>
            <textarea
              id="bio"
              rows={5}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Tell us something about you, your goals e.t.c"
            ></textarea>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Upload IT request letter
            </h3>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
              <Upload className="mx-auto mb-2" size={24} />
              <p className="text-sm text-gray-500 mb-2">Drag 'n Drop here</p>
              <p className="text-sm text-gray-500 mb-2">Or</p>
              <button className="text-blue-500 underline">Browse</button>
            </div>
            <button className="w-full mt-2 bg-gray-300 text-gray-700 py-2 rounded-md">
              Upload Now
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md">
            Update Profile
          </button>
          <button className="text-gray-600">Reset</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProfileForm;
