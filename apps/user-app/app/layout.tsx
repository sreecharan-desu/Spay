/* eslint-disable @next/next/no-page-custom-font */

import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./Providers";
import { Appbar } from "@repo/ui/common/Appbar";
export const metadata: Metadata = {
  title: "Spay - Secure Payment Gateway",
  description: "Spay is a secure and seamless payment gateway powered by a custom-built dummy bank server, simulating real-world banking for modern app integration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400..700;1,400..700&family=Playwrite+HU:wght@100..400&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <Providers>
          <Appbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
