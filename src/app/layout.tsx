import type { Metadata } from "next";
import {Sniglet as FontSniglet } from "next/font/google";
import "./globals.css";
import Header from "./home/components/header/header";
import { Analytics } from "@vercel/analytics/next";

const sniglet = FontSniglet({
  weight: '400',
  subsets: ["latin"],
  variable: "--font-sviglet",
});


export const metadata: Metadata = {
  title: "Ayvu Music",
  description: "Ayvu Music",
  icons: {
    icon: "./logoMenor.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${sniglet.variable} font-sans`}>
        <div className="mainContainer">
        <Header/>
        {children}
        <Analytics />
        </div>
      </body>
    </html>
  );
}
