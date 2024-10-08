"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const RoleOption = ({ role, icon, label, isSelected, onSelect }) => (
  <div
    className={`p-6 border rounded-lg cursor-pointer transition-all flex flex-col items-center text-center
      ${
        isSelected
          ? "border-[#477DC0] bg-[#cedcee]"
          : "border-gray-300 hover:bg-gray-50"
      }`}
    onClick={() => onSelect(role)}
  >
    <div className="text-4xl mb-4">{icon}</div>
    <p className="text-lg font-semibold">{label}</p>
  </div>
);

const RoleSelection = () => {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState("company");

  const handleRoleChange = (role) => {
    setSelectedRole(role);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedRole === "student") {
      // Redirect to student registration page
      router.push("/student/signup");
    } else if (selectedRole === "company") {
      // Redirect to company registration page
      router.push("/company/signup");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-6">Join as a student or company</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <RoleOption
            role="student"
            icon="👤"
            label="Find IT Spaces"
            isSelected={selectedRole === "student"}
            onSelect={handleRoleChange}
          />
          <RoleOption
            role="company"
            icon="👨‍💻"
            label="Hire Inters"
            isSelected={selectedRole === "company"}
            onSelect={handleRoleChange}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#477DC0] text-white py-2 px-6 rounded-lg hover:bg-[#4f4f4f] transition-colors"
        >
          Apply as a{" "}
          {selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}
        </button>
      </form>
      <p className="mt-6 text-gray-600">
        Already have an account?{" "}
        <a href="/login" className="text-green-600 hover:underline">
          Log In
        </a>
      </p>
    </div>
  );
};

export default RoleSelection;
