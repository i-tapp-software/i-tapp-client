"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import axiosInstance from "@/lib/axiosInstance";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [company, setCompany] = useState({
    id: 1,
    name: "Company 1",
    logo: "logo1.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  });

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [totalApplicants, setTotalApplicants] = useState([]);
  const [acceptedApplicants, setAcceptedApplicants] = useState([]);
  const [shortlistedApplicants, setShortlistedApplicants] = useState([]);
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [companyJobs, setCompanyJobs] = useState([]);
  const [savedApplications, setSavedApplications] = useState([]);

  const updateCompanyProfile = useCallback(async (data) => {
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          formData.append(key, value.toString());
        }
      });

      if (data.profilePicture) {
        formData.append("profilePicture", data.profilePicture);
      }

      if (data.bannerImage) {
        formData.append("bannerImage", data.bannerImage);
      }

      const response = await axiosInstance.post(`/company/profile`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Company profile updated successfully:", response);
    } catch (error) {
      console.log("Error updating company profile:", error);
    }
  }, []);

  const updateStudentProfile = useCallback(async (data) => {
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          formData.append(key, value.toString());
        }
      });

      if (data.profilePicture) {
        formData.append("profileImage", data.profileImage);
      }

      if (data.bannerImage) {
        formData.append("documents", data.documents);
      }

      const response = await axiosInstance.post(`/student/profile`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Company profile updated successfully:", response);
    } catch (error) {
      console.log("Error updating company profile:", error);
    }
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        user,
        company,
        loading,
        setTotalApplicants,
        setAcceptedApplicants,
        setShortlistedApplicants,
        setSelectedApplicant,
        selectedApplicant,
        setUser,
        setCompany,
        companyJobs,
        setCompanyJobs,
        totalApplicants,
        acceptedApplicants,
        shortlistedApplicants,
        updateCompanyProfile,
        updateStudentProfile,
        savedApplications,
        setSavedApplications,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobal must be used within a GlobalProvider");
  }
  return context;
};
