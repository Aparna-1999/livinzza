import React from "react";
import { MarketingLayout } from "../templates/MarketingLayout";
import { PartnerWithUsSection } from "../organisms/PartnerWithUsSection";
import { Footer } from "../organisms/Footer";

const PartnerWithUsPage = () => {
  return (
    <MarketingLayout>
      <PartnerWithUsSection />
      <Footer />
    </MarketingLayout>
  );
};

export { PartnerWithUsPage };
