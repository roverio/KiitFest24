import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
const inter = Inter({ subsets: ["latin"] });
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import BgAudio from "@/components/BgAudio";

export const metadata = {
  title: "KIIT FEST 7.0",
  description: `KIIT University is back again with Odisha's biggest Techno- Cultural Fest, KIITFEST 7.0. 14-15-16 February 2024.
  A three day extravaganza, where we bring creativity and excitement together through events, competitions, games and much more. An event filled with techno cultural activities, celebrity interactions, music concerts and unforgettable memories in the heart of Bhubaneswar`,
};

export default async function RootLayout({ children }) {
  const session = getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <BgAudio /> */}
        {children}
        <Toaster position="top-center" expand={true} richColors />
        <Analytics />
      </body>
    </html>
  );
}
