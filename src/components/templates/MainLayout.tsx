import React from "react";
import { Header } from "../organisms/Header";
import { Footer } from "../organisms/Footer";
import { BackToTopButton } from "../organisms/BackToTopButton";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col bg-[#f8fafc] text-slate-900 dark:bg-[#050b18] dark:text-slate-100">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export { MainLayout };
