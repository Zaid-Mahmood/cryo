"use client";

import { usePathname } from "next/navigation";

import Navbar from "../(pages)/(CommonPages)/Navbar/Navbar";
import Location from "../(pages)/(CommonPages)/Location/Location";
import Footer from "../(pages)/(CommonPages)/Footer/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const pathname = usePathname();

  const hideLocation =
    pathname.startsWith("/blog");

  return (
    <>
      <Navbar />

      {children}

      {!hideLocation && <Location />}

      <Footer />
    </>
  );
}