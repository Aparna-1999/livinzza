import React from "react";
import { MarketingLayout } from "@/components/templates/MarketingLayout";
import { PolicyLayout } from "@/components/organisms/PolicyLayout";

export default function TermsConditionsPage() {
  const sections = [
    {
      title: "Platform Information",
      content: (
        <>
          <p><strong>Platform:</strong> www.livinnza.com</p>
          <p><strong>Owner:</strong> Pleasant Biz Technologies Private Limited</p>
          <p><strong>Registered Office:</strong> Bagalur , New Airport Road, North Bengaluru, Karnataka, India</p>
        </>
      )
    },
    {
      title: "1. Introduction",
      content: (
        <>
          <p>Welcome to Livinnza, a platform owned and operated by Pleasant Biz Technologies Private Limited (“Company,” “we,” “us,” or “our”). By accessing or using this website and its associated mobile application (collectively referred to as the “Platform”), you agree to comply with and be bound by these Terms and Conditions (“Terms”).</p>
          <p>If you do not agree to these Terms, please do not access or use the Platform.</p>
        </>
      )
    },
    {
      title: "2. Nature of Service",
      content: (
        <>
          <p>Livinnza is an online platform connecting hostel owners with students seeking accommodation. The Platform enables hostel owners to list their properties, and students to browse, compare, and apply for hostels.</p>
          <p>Livinnza does not own, operate, or manage any hostel listed on the Platform. The Company’s role is limited to providing a digital interface that facilitates communication and transactions between hostel owners and students.</p>
        </>
      )
    },
    {
      title: "3. Eligibility",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>The Platform is intended for students enrolled in full-time educational programs and authorized hostel vendors.</li>
          <li>Users must be at least 18 years of age or have obtained consent from a parent/guardian to use the Platform.</li>
          <li>Hostel owners must have valid property ownership or authorized operational rights.</li>
        </ul>
      )
    },
    {
      title: "4. Registration and User Account",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>To access certain features, users must create an account with accurate and complete information.</li>
          <li>You are responsible for maintaining the confidentiality of your login credentials and for all activities under your account.</li>
          <li>The Company reserves the right to suspend or terminate any account for misuse, inaccuracy, or violation of these Terms.</li>
        </ul>
      )
    },
    {
      title: "5. Hostel Listings and Information",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Hostel owners are solely responsible for the accuracy, completeness, and legality of the information provided in their listings.</li>
          <li>Livinnza does not verify or guarantee the authenticity, safety, pricing, or availability of any hostel listed.</li>
          <li>Any disputes or discrepancies arising between hostel owners and students must be resolved directly between the concerned parties.</li>
        </ul>
      )
    },
    {
      title: "6. Fees and Payments",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Fees charged by the hostel (including accommodation, maintenance, admission, and portal charges) are determined solely by the hostel owner.</li>
          <li>Pleasant Biz Technologies may charge service or platform usage fees as per prevailing policies.</li>
          <li>All payments made through the Platform are subject to applicable payment gateway terms and charges.</li>
          <li>Fees collected for maintenance, admission, or portal access are non-refundable.</li>
        </ul>
      )
    },
    {
      title: "7. Use of ERP and Mobile Application",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>When a hostel subscribes to Pleasant Biz’s ERP system, Livinnza functions as an integrated Customer Relationship Management (CRM) tool.</li>
          <li>Students may manage attendance, leave applications, and payments via the mobile app.</li>
          <li>The Company is not responsible for any data inaccuracies resulting from user input or third-party integrations.</li>
        </ul>
      )
    },
    {
      title: "8. Code of Conduct",
      content: (
        <>
          <p>All users must:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Refrain from posting false, offensive, or illegal content.</li>
            <li>Avoid misuse of the Platform for non-academic or unrelated purposes.</li>
            <li>Not engage in activities that disrupt or compromise the integrity of the Platform.</li>
          </ul>
          <p className="mt-4">Violation of this policy may result in suspension or permanent removal from the Platform.</p>
        </>
      )
    },
    {
      title: "9. Limitation of Liability",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Pleasant Biz Technologies acts only as an intermediary and shall not be liable for any loss, damage, or dispute arising between hostel owners and students.</li>
          <li>The Company is not responsible for theft, damage, or injury occurring within hostel premises or outside.</li>
          <li>Users agree to indemnify the Company against any claims resulting from their use or misuse of the Platform.</li>
        </ul>
      )
    },
    {
      title: "10. Privacy and Data Protection",
      content: (
        <p>All personal data collected is processed in accordance with our Privacy Policy. By using the Platform, you consent to the collection and use of information as described therein.</p>
      )
    },
    {
      title: "11. Modifications and Updates",
      content: (
        <p>Pleasant Biz Technologies reserves the right to modify, update, or amend these Terms and the Platform features at any time without prior notice. Users are advised to review the Terms periodically.</p>
      )
    },
    {
      title: "12. Termination of Access",
      content: (
        <p>The Company may suspend or terminate access to the Platform at its discretion if a user violates any of these Terms or engages in activities detrimental to the Company or other users.</p>
      )
    },
    {
      title: "13. Governing Law and Jurisdiction",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>These Terms shall be governed by and construed in accordance with the laws of India.</li>
          <li>Any disputes shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka.</li>
        </ul>
      )
    },
    {
      title: "14. Contact Information",
      content: (
        <>
          <p>For any queries or grievances, please contact:</p>
          <p className="mt-2"><strong>Pleasant Biz Technologies Private Limited</strong><br/>Bagalur , New Airport Road, North Bengaluru, Karnataka, India</p>
          <p><strong>Email:</strong> info@pleasantbiz.com</p>
          <p><strong>Phone:</strong> +91 6364516897 / +91 8088631765</p>
        </>
      )
    }
  ];

  return (
    <MarketingLayout>
      <PolicyLayout 
        title="Terms and Conditions" 
        effectiveDate="01 August 2025" 
        sections={sections} 
      />
    </MarketingLayout>
  );
}
