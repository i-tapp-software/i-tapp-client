"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import axiosInstance from "@/lib/axiosInstance";
// Create context
const CompanyContext = createContext();

// Context Provider
export const CompanyProvider = ({ children }) => {
  const [company, setCompany] = useState({
    name: "la la",
  });
  const [loading, setLoading] = useState(true);

  // Fetch company data
  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axiosInstance.get("/company/me", {
            headers: { Authorization: `Bearer ${token}` },
          });
          setCompany(response.data);
        }
      } catch {
        setCompany(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCompany();
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      const response = await axiosInstance.post("/company/login", {
        email,
        password,
      });
      const { token, ...companyData } = response.data;
      localStorage.setItem("token", token);
      setCompany({ ...companyData, token });
    } catch (error) {
      console.error(error);
    }
  };

  const register = async (companyData) => {
    setLoading(true);
    try {
      response = await axiosInstance.post("/company/register", companyData);
      console.log(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("token");
    setCompany(null);
  };

  // Refresh company data
  const refreshCompany = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await axiosInstance.get("/company/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCompany(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CompanyContext.Provider
      value={{ company, loading, login, logout, register, refreshCompany }}
    >
      {children}
    </CompanyContext.Provider>
  );
};

// Custom hook for using context
export const useCompany = () => {
  const context = useContext(CompanyContext);
  if (!context) {
    throw new Error("useCompany must be used within a CompanyProvider");
  }
  return context;
};
