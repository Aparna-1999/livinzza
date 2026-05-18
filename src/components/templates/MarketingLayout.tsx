import React from "react";
import { Header } from "../organisms/Header";
import { Footer } from "../organisms/Footer";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

const MarketingLayout = ({ children }: MarketingLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col bg-[#f8fafc] text-slate-900 dark:bg-[#050b18] dark:text-slate-100">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export { MarketingLayout };
