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
    "Premier Cable Services provides fiber splicing, OTDR testing, fiber auditing, and FTTH support.",
  applicationName: "Premier Cable Services",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "PCS | Premier Cable Services",
    description:
      "Fiber splicing, OTDR testing, fiber auditing, and FTTH support from Premier Cable Services.",
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
