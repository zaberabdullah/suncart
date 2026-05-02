import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "SunCart – Summer Essentials Store",
  description: "Your one-stop shop for summer essentials",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className={`${poppins.className} container mx-auto px-4`}>
        <Navbar />
        <main className="min-h-screen ">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
