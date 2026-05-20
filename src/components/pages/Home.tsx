import React from "react";
import { MainLayout } from "../templates/MainLayout";
import { UniversitySlider } from "../organisms/UniversitySlider";
import { FeaturedHostels } from "../organisms/FeaturedHostels";
import { CollegeGrid } from "../organisms/CollegeGrid";
import { AppFeaturesSection } from "../organisms/AppFeaturesSection";
import { FAQ } from "../organisms/FAQ";
import { EnquiryFlexSection } from "../organisms/EnquiryFlexSection";
import { TrustedHousingStandard } from "../organisms/TrustedHousingStandard";
import { PopularCities } from "../organisms/PopularCities";

const HomePage = () => {
  return (
    <MainLayout>
      <UniversitySlider />
      <TrustedHousingStandard />
      <PopularCities />
      <FeaturedHostels />
      <CollegeGrid />
      <AppFeaturesSection />
      <FAQ />
      <EnquiryFlexSection />
    </MainLayout>
  );
};

export { HomePage };
