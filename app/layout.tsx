import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    default: "PCS | Premier Cable Services",
    template: "%s | PCS",
  },
  description:
    "Premier Cable Services provides Fiber Splicing, Fiber Testing, Fiber Auditing, FTTH Support, and Underground and Aerial Fiber Infrastructure support.",
  applicationName: "Premier Cable Services",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Premier Cable Services | Fiber Optic Splicing Contractor",
    description:
      "Premier Cable Services provides Fiber Optic Services including fiber Splicing, Testing, Repair and Maintenance, and FTTH support with clean, reliable workmanship.",
    siteName: "Premier Cable Services",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
