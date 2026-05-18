import React from "react";
import { MainLayout } from "../templates/MainLayout";
import { UniversitySlider } from "../organisms/UniversitySlider";
import { FeaturedHostels } from "../organisms/FeaturedHostels";
import { CityGrid } from "../organisms/CityGrid";
import { CollegeGrid } from "../organisms/CollegeGrid";
import { LifestyleGallerySection } from "../organisms/LifestyleGallerySection";
import { FAQ } from "../organisms/FAQ";
import { EnquiryFlexSection } from "../organisms/EnquiryFlexSection";

const HomePage = () => {
  return (
    <MainLayout>
      <UniversitySlider />
      <FeaturedHostels />
      <CityGrid />
      <CollegeGrid />
      <LifestyleGallerySection />
      <FAQ />
      <EnquiryFlexSection />
    </MainLayout>
  );
};

export { HomePage };
