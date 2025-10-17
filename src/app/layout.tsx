import type { Metadata } from "next";
import {Sniglet as FontSniglet } from "next/font/google";
import "./globals.css";
import Header from "./home/components/header/header";
import Footer from "./home/components/footer/footer";

const sniglet = FontSniglet({
  weight: '400',
  subsets: ["latin"],
  variable: "--font-sviglet",
});


export const metadata: Metadata = {
  title: "Ayvu Music",
  description: "Ayvu Music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${sniglet.variable} font-sans`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
