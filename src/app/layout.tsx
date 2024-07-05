import Head from 'next/head';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Josefin_Sans } from 'next/font/google';
import "./globals.css";
import Footer from "@/components/footer";
import Navbarvertical from "@/components/navbarvertical";
import Banner from "@/components/banner";

const inter = Josefin_Sans({
  weight: '400',
  subsets: ['latin'],
})


export const metadata: Metadata = {
  title: "ChulinFolio",
  description: "Portfolio by an-an",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  
  return (
    <html>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />

      </Head>
      <body className={inter.className}>
        {children}
  
      </body>
    </html>
  );
}