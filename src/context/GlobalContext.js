"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
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

  return (
    <GlobalContext.Provider
      value={{
        user,
        company,
        loading,
        setTotalApplicants,
        setAcceptedApplicants,
        setShortlistedApplicants,
        setUser,
        setCompany,
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
