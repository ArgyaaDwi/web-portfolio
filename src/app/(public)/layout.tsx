import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/core/Header";
import Footer from "@/components/core/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ArgyaDwi | My Portfolio",
  description: "Portfolio website by Argya",
  icons: {
    icon: "/images/a.jpg",
    shortcut: "/images/a.jpg",
    apple: "/images/a.jpg",
  },
};

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
