"use client";

import React, { useEffect } from "react";
import { Header } from "../header";
import { fetchSavedApplication } from "@/api/actions/auth";
import { useGlobal } from "@/context/GlobalContext";
// import { student } from "@/config/student";

const StudentLayout = ({ children }) => {
  const { savedApplications, setSavedApplications, loading, setLoading } =
    useGlobal();
  const [student, setStudent] = React.useState("");
  useEffect(() => {
    const getApplications = async () => {
      try {
        const response = await fetchSavedApplication(); // Replace with your actual fetch function
        const fetchedData = response?.data;

        const fetchedStudents = fetchedData || [];
        setSavedApplications(fetchedStudents);
        // setCompanies(uniqueCompanies);
      } catch (err) {
        console.error("Error fetching applications:", err);
      }
    };

    getApplications(); // Call the async function
  }, []);

  useEffect(() => {
    const storedStudent = JSON.parse(localStorage.getItem("company") || "{}");
    setStudent(storedStudent);
  }, []);

  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default StudentLayout;
