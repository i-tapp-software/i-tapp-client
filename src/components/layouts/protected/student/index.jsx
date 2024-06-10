import React from "react";
import Header from "../header";
import student from "@/config/student";

export default function StudentLayout({children}) {
  return (
    <>
      <Header app={student}/>
      {children}
    </>
  );
}
