import React from "react";
import { MarketingLayout } from "../templates/MarketingLayout";
import { KnowMoreHero } from "../organisms/KnowMoreHero";
import { KnowMoreSections } from "../organisms/KnowMoreSections";
import { FloatingBookButton } from "../organisms/FloatingBookButton";

const KnowMorePage = () => {
  return (
    <MarketingLayout>
      <KnowMoreHero />
      <KnowMoreSections />
      <FloatingBookButton />
    </MarketingLayout>
  );
};

export { KnowMorePage };
