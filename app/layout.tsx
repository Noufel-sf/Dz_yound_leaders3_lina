import type { Metadata } from "next";
import { Rakkas, Zain } from "next/font/google";
import "./globals.css";
import Layout from "./components/LayoutWrapper";
import BackToTopButton from "./components/ui/BackToTopButton";

const rakkas = Rakkas({
  weight: ["400"],
  variable: "--font-rakkas",
  subsets: ["arabic", "latin"],
});

const zain = Zain({
  weight: "400",
  variable: "--font-Zain",
  subsets: ["arabic", "latin"],
});

export const metadata: Metadata = {
  title: "إرث و اثر - منصة  اكتشاف التراث الثقافي والهوية الجزائرية",
  description:
    "استكشف كنو إلى التراث الثقافي والهوية الجزائرية من خلال منصة إرث. اكتشف القصص، الصور، والفيديوهات التي تسلط الضوء على تاريخ وثقافة الجزائر الغنية.",
  icons: {
    icon: "/logodesk2.png",
  },
  openGraph: {
    title: "إرث و اثر - منصة  اكتشاف التراث الثقافي والهوية الجزائرية",
    description:
      "استكشف كنو إلى التراث الثقافي والهوية الجزائرية من خلال منصة إرث. اكتشف القصص، الصور، والفيديوهات التي تسلط الضوء على تاريخ وثقافة الجزائر الغنية.",
    images: [
      {
        url: "/logodesk2.png",
        width: 1200,
        height: 630,
        alt: "إرث و اثر - منصة  اكتشاف التراث الثقافي والهوية الجزائرية",
        },
    ],
  },
  twitter: {
    title: "إرث و اثر - منصة  اكتشاف التراث الثقافي والهوية الجزائرية",
    description:
      "استكشف كنو إلى التراث الثقافي والهوية الجزائرية من خلال منصة إرث. اكتشف القصص، الصور، والفيديوهات التي تسلط الضوء على تاريخ وثقافة الجزائر الغنية.",
    images: [
      {
        url: "/logodesk2.png",
        width: 1200,
        height: 630,
        alt: "إرث - منصة  اكتشاف التراث الثقافي والهوية الجزائرية",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rakkas.variable} ${zain.variable} font-sans`}>
      <body
        className="min-h-full flex flex-col bg-[#0C0C0C]">
        <Layout>{children}</Layout>
        <BackToTopButton />
      </body>
    </html>
  );
}
