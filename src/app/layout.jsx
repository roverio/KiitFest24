import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "KIIT FEST 7.0",
  description:
    "KIIT University is back again with Odisha's biggest Techno- Cultural Fest, KIITFEST 7.0. 14-15-16 February 2024. A three day extravaganza, where we bring creativity and excitement together through events, competitions, games and much more. An event filled with techno cultural activities, celebrity interactions, music concerts and unforgettable memories in the heart of Bhubaneswar.",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar /> */}
        {children}
        <Toaster position="top-center" expand={true} richColors />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
