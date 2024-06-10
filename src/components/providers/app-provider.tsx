"use client";

import { Next13ProgressBar } from "next13-progressbar";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Next13ProgressBar
        height="4px"
        color="#477DC0"
        options={{ showSpinner: false }}
        showOnShallow
      />
    </>
  );
}
