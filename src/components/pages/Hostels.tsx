import React from "react";
import { MarketingLayout } from "../templates/MarketingLayout";
import { HostelsHero } from "../organisms/HostelsHero";
import { HostelResults } from "../organisms/HostelResults";
import { FloatingBookButton } from "../organisms/FloatingBookButton";

interface HostelsPageProps {
  citySlug?: string;
  searchQuery?: string;
}

const HostelsPage = ({ citySlug, searchQuery }: HostelsPageProps) => {
  return (
    <MarketingLayout>
      <HostelsHero citySlug={citySlug} searchQuery={searchQuery} />
      <HostelResults citySlug={citySlug} searchQuery={searchQuery} />
      <FloatingBookButton />
    </MarketingLayout>
  );
};

export { HostelsPage };
