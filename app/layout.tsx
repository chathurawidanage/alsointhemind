import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import 'nextra-theme-docs/style.css';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "This is also in the mind",
  description: "In The Presence of Venerable Ñāṇavimala Mahāthera - A Disciple's Account, Kept Private for 25 Years",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
      dir="ltr"
      suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
