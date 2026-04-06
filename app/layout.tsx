// src/app/layout.tsx
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Adods - Your Digital Growth Partner in Kerala",
  description: "Welcome to Addods - Your creative digital partner",
  icons: {
    icon: "/Images/adods logo finel_.png", // Attempting the primary adods logo name
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        <main className="min-h-screen bg-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}