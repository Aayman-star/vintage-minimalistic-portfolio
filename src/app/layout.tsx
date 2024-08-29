import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ weight: ["300", "400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Vintage Minimalistic Portfolio",
    template: "%s",
  },
  description: "Software Developer",
  openGraph: {
    title: "Vintage-Minimalistic-Portfolio",
    description: "Vintage-Minimalistic-Portfolio",
    url: "https://vintage-minimalistic-portfolio.vercel.app/",
    siteName: "Vintage-Minimalistic-Portfolio",
    locale: "en_US",
    type: "website",
    images: "/opengraph-image.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vintage-Minimalistic-Portfolio",
    description: "Vintage-Minimalistic-Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-full flex flex-col items-center`}>
        {/* <Header /> */}
        <div className="flex-1 w-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
