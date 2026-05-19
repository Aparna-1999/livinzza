import React from "react";
import { MarketingLayout } from "../templates/MarketingLayout";
import { HostelsHero } from "../organisms/HostelsHero";
import { HostelResults } from "../organisms/HostelResults";
import { FloatingBookButton } from "../organisms/FloatingBookButton";

interface HostelsPageProps {
  citySlug?: string;
  collegeQuery?: string;
  hostelQuery?: string;
}

const HostelsPage = ({ citySlug, collegeQuery, hostelQuery }: HostelsPageProps) => {
  return (
    <MarketingLayout>
      <HostelsHero citySlug={citySlug} collegeQuery={collegeQuery} hostelQuery={hostelQuery} />
      <HostelResults citySlug={citySlug} collegeQuery={collegeQuery} hostelQuery={hostelQuery} />
      <FloatingBookButton />
    </MarketingLayout>
  );
};

export { HostelsPage };
