import React from "react";
import { Header } from "../header";
// import student from "@/config/student";

export  function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
