import React from "react";
import { MainLayout } from "../templates/MainLayout";
import { UniversitySlider } from "../organisms/UniversitySlider";
import { FeaturedHostels } from "../organisms/FeaturedHostels";
import { CollegeGrid } from "../organisms/CollegeGrid";
import { LifestyleGallerySection } from "../organisms/LifestyleGallerySection";
import { FAQ } from "../organisms/FAQ";
import { EnquiryFlexSection } from "../organisms/EnquiryFlexSection";
import { TrustedHousingStandard } from "../organisms/TrustedHousingStandard";

const HomePage = () => {
  return (
    <MainLayout>
      <UniversitySlider />
      <TrustedHousingStandard />
      <FeaturedHostels />
      <CollegeGrid />
      <LifestyleGallerySection />
      <FAQ />
      <EnquiryFlexSection />
    </MainLayout>
  );
};

export { HomePage };
