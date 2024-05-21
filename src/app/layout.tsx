import Head from 'next/head';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Navbarvertical from "@/components/navbarvertical";

const inter = Inter({ subsets: ["latin"] });


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
        {/* <Navbar/> */}
        <Navbarvertical/>
        <div className='ml-[256px]'>
        {children}
        </div>
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      </body>
    </html>
  );
}