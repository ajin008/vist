import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientProviders from "../components/layout/ClientProviders";
import { GridBackground } from "../components/layout/GridBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Vist",
  description: "Where your vision finds its voice",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <GridBackground />
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
