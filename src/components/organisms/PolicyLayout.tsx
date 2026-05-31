import React from "react";
import { Typography } from "../atoms/Typography";

interface PolicySection {
  title?: string;
  content: React.ReactNode;
}

interface PolicyLayoutProps {
  title: string;
  effectiveDate?: string;
  sections: PolicySection[];
}

const PolicyLayout = ({ title, effectiveDate, sections }: PolicyLayoutProps) => {
  return (
    <section className="bg-white pt-32 pb-24 dark:bg-slate-950">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Typography variant="h1" className="mb-4">
            {title}
          </Typography>
          {effectiveDate && (
            <Typography variant="p" className="text-slate-500 dark:text-slate-400">
              Effective Date: {effectiveDate}
            </Typography>
          )}
        </div>

        <div className="space-y-10">
          {sections.map((section, index) => (
            <div key={index} className="prose prose-slate max-w-none dark:prose-invert prose-headings:font-semibold prose-a:text-primary hover:prose-a:text-primary/80">
              {section.title && (
                <Typography variant="h2" className="mb-4 text-2xl">
                  {section.title}
                </Typography>
              )}
              <div className="text-slate-600 dark:text-slate-400 space-y-4">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { PolicyLayout };
