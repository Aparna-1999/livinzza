import React from "react";
import { MainLayout } from "../templates/MainLayout";
import { Hero } from "../organisms/Hero";
import { VideoSection } from "../organisms/VideoSection";
import { MissionVisionSection } from "../organisms/MissionVisionSection";
import { LifestyleGallerySection } from "../organisms/LifestyleGallerySection";
import { UniversitySlider } from "../organisms/UniversitySlider";
import { CityGrid } from "../organisms/CityGrid";
import { FeaturesSection } from "../organisms/FeaturesSection";
import { FeaturedHostels } from "../organisms/FeaturedHostels";
import { FAQ } from "../organisms/FAQ";
import { CollegeGrid } from "../organisms/CollegeGrid";
import { ProcessSection } from "../organisms/ProcessSection";
import { BlogSection } from "../organisms/BlogSection";
import { ContactSection } from "../organisms/ContactSection";

const HomePage = () => {
  return (
    <MainLayout>
      <UniversitySlider />
      <Hero />
      <FeaturedHostels />
      <CityGrid />
      <MissionVisionSection />
      <CollegeGrid />
      <ProcessSection />
      <FeaturesSection />
      <LifestyleGallerySection />
      <BlogSection />
      <VideoSection />
      <FAQ />
      <ContactSection />
    </MainLayout>
  );
};

export { HomePage };
