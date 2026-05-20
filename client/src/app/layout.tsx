import type { Metadata } from "next";
import { Urbanist, Inter } from "next/font/google";
import "./globals.css";
import MainLayout from "./(main)/MainLayout";
const headingFont = Urbanist({
  subsets: ["latin"],
  variable: "--font-heading",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});
export const metadata: Metadata = {
  title: "Experience Australia’s Next-Level Cryotherapy and Wellness Centre | Cryo SubZero",
  description: "Australia’s next-level cryotherapy and wellness centre combining innovation, science, and holistic care under one roof.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
