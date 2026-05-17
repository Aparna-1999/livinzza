import React from "react";
import { MarketingLayout } from "../templates/MarketingLayout";
import { HostelsHero } from "../organisms/HostelsHero";
import { HostelResults } from "../organisms/HostelResults";
import { FloatingBookButton } from "../organisms/FloatingBookButton";

interface HostelsPageProps {
  citySlug?: string;
}

const HostelsPage = ({ citySlug }: HostelsPageProps) => {
  return (
    <MarketingLayout>
      <HostelsHero citySlug={citySlug} />
      <HostelResults citySlug={citySlug} />
      <FloatingBookButton />
    </MarketingLayout>
  );
};

export { HostelsPage };
