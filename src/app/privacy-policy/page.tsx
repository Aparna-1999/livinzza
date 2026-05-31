import React from "react";
import { MarketingLayout } from "@/components/templates/MarketingLayout";
import { PolicyLayout } from "@/components/organisms/PolicyLayout";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      content: (
        <p>Livinnza, a product of Pleasant Biz Technologies Private Limited (“we,” “our,” “us”), is committed to safeguarding your privacy and protecting your personal information. This Privacy Policy explains how we collect, use, store, and share your data when you use our platform at www.livinnza.com or our mobile application.</p>
      )
    },
    {
      title: "1. Information We Collect",
      content: (
        <>
          <p>We may collect and process the following information from users and hostel partners:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><strong>Personal Information:</strong> Name, contact number, email address, and residential address.</li>
            <li><strong>Identification Details:</strong> Photo, government-issued ID proof, and student/course details.</li>
            <li><strong>Parent/Guardian Information:</strong> Contact details for verification and emergency purposes.</li>
            <li><strong>Accommodation Preferences:</strong> Room type, meal plans, and service selections.</li>
            <li><strong>Payment Information:</strong> Transaction details for processing fees and other charges.</li>
            <li><strong>Technical Data:</strong> IP address, device information, and browsing activity for security and analytics.</li>
          </ul>
        </>
      )
    },
    {
      title: "2. Purpose of Data Collection",
      content: (
        <>
          <p>We use your information for:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Admission processing and student–hostel coordination</li>
            <li>Communication and customer support</li>
            <li>Hostel operations and service management</li>
            <li>Billing, accounting, and payment processing</li>
            <li>Legal, compliance, and safety requirements</li>
          </ul>
        </>
      )
    },
    {
      title: "3. Data Security",
      content: (
        <p>We implement appropriate technical and organizational measures to protect your data against unauthorized access, alteration, disclosure, or destruction. Only authorized personnel of Pleasant Biz Technologies and its verified partners can access user data for operational purposes.</p>
      )
    },
    {
      title: "4. Data Sharing",
      content: (
        <>
          <p>Your data may be shared with:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2 mb-4">
            <li>Verified hostel partners for admission and accommodation management</li>
            <li>Payment gateway providers for secure financial transactions</li>
            <li>College authorities where coordination is required</li>
            <li>Legal or regulatory bodies when disclosure is mandated by law</li>
          </ul>
          <p>We do not sell, rent, or trade personal information to any third parties.</p>
        </>
      )
    },
    {
      title: "5. Data Retention",
      content: (
        <p>Your personal data is retained only for as long as necessary to fulfill the purposes stated above or as required by applicable law.</p>
      )
    },
    {
      title: "6. Cookies and Analytics",
      content: (
        <p>Livinnza uses cookies and analytics tools to improve user experience and analyze website performance. You can choose to disable cookies through your browser settings, but certain site functions may be affected.</p>
      )
    },
    {
      title: "7. User Rights",
      content: (
        <>
          <p>You have the right to:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2 mb-4">
            <li>Access, correct, or update your personal data</li>
            <li>Withdraw consent or request deletion, subject to legal obligations</li>
            <li>Contact us for queries or concerns related to your data</li>
          </ul>
          <p>Requests can be made through our contact details below.</p>
        </>
      )
    },
    {
      title: "8. Consent",
      content: (
        <p>By using Livinnza’s website, mobile app, or related services, you consent to the collection and processing of your information as described in this policy.</p>
      )
    },
    {
      title: "9. Contact Information",
      content: (
        <>
          <p><strong>Pleasant Biz Technologies Private Limited</strong><br/>Bagalur , New Airport Road, North Bengaluru, Karnataka, India</p>
          <p><strong>Email:</strong> info@pleasantbiz.com</p>
          <p><strong>Phone:</strong> +91 6364516897 / +91 8088631765</p>
        </>
      )
    }
  ];

  return (
    <MarketingLayout>
      <PolicyLayout 
        title="Privacy Policy" 
        sections={sections} 
      />
    </MarketingLayout>
  );
}
