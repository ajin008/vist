"use client";

import dynamic from "next/dynamic";
import { ReactNode } from "react";

// Now we can safely use ssr: false because this is a Client Component
const Header = dynamic(() => import("./Header"), { ssr: false });
const SmoothScroll = dynamic(() => import("./SmoothScroll"), { ssr: false });

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <SmoothScroll>
      <Header />
      <main className="page-container">{children}</main>
    </SmoothScroll>
  );
}
