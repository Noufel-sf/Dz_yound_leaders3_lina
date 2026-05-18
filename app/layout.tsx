import type { Metadata } from "next";
import { Amiri_Quran, Zain } from "next/font/google";
import Navbar from "./components/ui/NavBar";
import "./globals.css";
  
const amiriQuran = Amiri_Quran({
  weight: "400",
  variable: "--font-amiri-quran",
  subsets: ["arabic", "latin"],
});

const zain = Zain({
  weight: ["400", "700"],
  variable: "--font-zain",
  subsets: ["arabic", "latin"],
});


export const metadata: Metadata = {
  title: "إرث - منصة السفر والسياحة",
  description: "استكشف كنوز بلادك من المحيط إلى الخليج",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      className={`${amiriQuran.variable} ${zain.variable} h-full antialiased`}
      dir="rtl"
    >
      <body className="min-h-full flex flex-col bg-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
