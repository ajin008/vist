import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import SmoothScroll from "../components/layout/SmoothScroll";
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
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        {/* Header stays outside of page-container to allow full-bleed background */}

        <GridBackground />
        <SmoothScroll>
          <Header />
          <main className="page-container">{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
