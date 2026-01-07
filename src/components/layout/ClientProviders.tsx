"use client";
import dynamic from "next/dynamic";
import { ReactNode, useEffect, useState } from "react";

const Header = dynamic(() => import("./Header"), { ssr: false });
const SmoothScroll = dynamic(() => import("./SmoothScroll"), { ssr: false });

export default function ClientProviders({ children }: { children: ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // delay the mount by one tick to prevent the ESLint 'cascading renders'
    // and stop the 'removeChild' hydration crash.
    const timer = setTimeout(() => {
      setIsClient(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  // During the first render (Server + initial Client), we render a simple wrapper.
  // This ensures the DOM structure is 100% identical for React's hydration.
  if (!isClient) {
    return (
      <div className="min-h-screen bg-transparent">
        <main className="page-container relative">{children}</main>
      </div>
    );
  }

  return (
    <SmoothScroll>
      <Header />
      <main className="page-container relative min-h-screen">{children}</main>
    </SmoothScroll>
  );
}
