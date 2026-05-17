import React from "react";
import { MarketingLayout } from "../templates/MarketingLayout";
import { ContactSection } from "../organisms/ContactSection";
import { Footer } from "../organisms/Footer";

const ContactPage = () => {
  return (
    <MarketingLayout>
      <ContactSection />
      <Footer />
    </MarketingLayout>
  );
};

export { ContactPage };
