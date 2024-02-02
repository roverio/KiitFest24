import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import Navbar from "@/components/navbar";
const inter = Inter({ subsets: ["latin"] });
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "KIIT FEST 7.0",
  description: "KIIT FEST 24 7.0",
};

export default async function RootLayout({ children }) {
  const session = getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar /> */}
        {children}
        <Toaster position="top-center" expand={true} richColors />
        <Analytics />
      </body>
    </html>
  );
}
