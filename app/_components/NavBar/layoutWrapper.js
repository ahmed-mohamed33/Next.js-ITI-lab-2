"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const hideLayout = pathname === "/login";

  return (
    <>
      {!hideLayout && <Navbar />}
      <div className="min-h-screen">{children}</div>
      {!hideLayout && <Footer />}
    </>
  );
}