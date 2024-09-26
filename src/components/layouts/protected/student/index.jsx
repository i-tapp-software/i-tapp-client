import React from "react";
import { Header } from "../header";
// import { student } from "@/config/student";

const StudentLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default StudentLayout;
