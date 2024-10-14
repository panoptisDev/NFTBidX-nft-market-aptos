import "./globals.css";
import "swiper/css"
import 'swiper/css/bundle';
import "aos/dist/aos.css"

import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import AppProvider from "@/app/components/AppProvider";
import Header from "@/app/components/Header";
import Footer from "@/app/nfts/Footer";
import WalletProvider from "./components/prove";

const roboto = Roboto({ subsets: ["latin"],weight:'400' });

export const metadata: Metadata = {
  title: "NFT Marketplace - Denovin",
  description: "Generated by next.js & react.js & tailwindcss",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en">
      <body className={roboto.className + ' bg-[#110229] text-white overflow-x-hidden'}>
        <AppProvider>
          <WalletProvider>
          <Header/>
          {children}
          <Footer/>
          </WalletProvider>
        </AppProvider>
      </body>
    </html>
  );
}