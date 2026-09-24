import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/core/Header";
import Footer from "@/components/core/Footer";
import { SiteSettingsProvider } from "@/components/core/SiteSettings";

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
    <div>
      <SiteSettingsProvider>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </SiteSettingsProvider>
    </div>
  );
}
