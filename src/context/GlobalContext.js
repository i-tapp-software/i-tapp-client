"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
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

  const accept = useCallback(async (id) => {
    try {
      const response = await axiosInstance("/student/saved/applications", id);
      console.log("Application Response:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error accepting application:", error.message);
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
        accept,
        totalApplicants,
        acceptedApplicants,
        shortlistedApplicants,
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
