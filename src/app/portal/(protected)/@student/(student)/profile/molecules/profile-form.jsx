import React from "react";
import { Upload } from "lucide-react";
import { Wrapper } from "@/components/wrapper";

const ProfileForm = () => {
  return (
    <Wrapper className="touch:pr-[400px]">
      <div className="max-w-3xl mx-auto p-6 bg-white">
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-2">Your Profile Picture</h2>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
            <Upload className="mx-auto mb-2" size={48} />
            <p>Upload your photo</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
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
          <div>
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
          <div>
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
          <div>
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

        <div className="mb-6">
          <label
            htmlFor="bio"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Bio
          </label>
          <textarea
            id="bio"
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Tell us something about you, your goals e.t.c"
          ></textarea>
        </div>

        <div className="mb-6">
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
