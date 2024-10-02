import "../styles/globals.css";

import { type Metadata } from "next";

import { AppProvider } from "@/components/providers/app-provider";
import { inter, montserrat } from "@/lib/utils/fonts";
import { app } from "@/config/app";

import { CompanyProvider } from "@/context/CompanyContext";

export const metadata: Metadata = {
  title: app.title,
  description: app.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={(inter.className, inter.variable, montserrat.variable)}
    >
      <head>
        <link rel="icon" href={app.favicon_url} type="image/x-icon" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          type="image"
        />
      </head>
      <body>
        <CompanyProvider>
          <AppProvider>{children}</AppProvider>
        </CompanyProvider>
      </body>
    </html>
  );
}
