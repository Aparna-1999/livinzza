import React from "react";
import { MarketingLayout } from "@/components/templates/MarketingLayout";
import { PolicyLayout } from "@/components/organisms/PolicyLayout";

export default function AboutUsPage() {
  const sections = [
    {
      content: (
        <>
          <p className="text-xl">
            Livinnza, a flagship platform by Pleasant Biz Technologies Private Limited, reimagines how students and hostel owners connect. Headquartered in Bangalore and available at <a href="https://www.livinnza.com">www.livinnza.com</a>, Livinnza was built with a clear vision — to make student accommodation simpler, smarter, and more transparent for everyone involved.
          </p>
          <p>
            In India’s dynamic education landscape, finding reliable, well-managed accommodation often feels overwhelming. Livinnza bridges that gap, offering a digital platform that connects students directly with verified hostel partners, enabling discovery, booking, and management — all in one place.
          </p>
          <p>
            We don’t just list hostels; we build a connected ecosystem that brings together students, parents, and hostel operators in a single, trusted network.
          </p>
        </>
      )
    },
    {
      title: "Our Vision",
      content: (
        <p>To build India’s most trusted and connected student living ecosystem, powered by innovation, transparency, and community.</p>
      )
    },
    {
      title: "Our Mission",
      content: (
        <p>To empower students and hostel partners through technology-driven solutions that simplify living and management, enhance communication, and foster a sense of belonging.</p>
      )
    },
    {
      title: "For Students",
      content: (
        <>
          <p>Livinnza gives students the confidence to find and manage their accommodation with complete ease and transparency.</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><strong>Discover & Compare:</strong> Explore verified hostels across cities, compare amenities, and choose the one that best fits your lifestyle.</li>
            <li><strong>Apply Seamlessly:</strong> Submit applications and track responses directly through the platform.</li>
            <li><strong>Stay Connected:</strong> Once onboarded, use the Livinnza mobile app to manage attendance, payments, and leave requests — all in one place.</li>
            <li><strong>Experience Community:</strong> Engage in activities, connect with peers, and make your stay both productive and memorable.</li>
          </ul>
        </>
      )
    },
    {
      title: "For Hostel Partners",
      content: (
        <>
          <p>Livinnza is more than a listing platform — it’s a growth and management partner for hostel owners. We enable you to digitize your operations, expand your visibility, and deliver a premium experience to your residents.</p>
          <ul className="list-disc pl-5 space-y-2 mt-2 mb-4">
            <li><strong>List & Showcase:</strong> Easily register your properties, list amenities, upload images, and attract verified student leads.</li>
            <li><strong>Simplify Management:</strong> Manage bookings, student records, payments, and invoicing from a single, intuitive dashboard.</li>
            <li><strong>Integrate with ERP:</strong> When integrated with Pleasant Biz ERP, all data — from student applications to payments — flows seamlessly into your management system.</li>
            <li><strong>Stay Informed:</strong> Access real-time insights on occupancy, revenue, and student engagement, helping you make better business decisions.</li>
            <li><strong>Build Trust:</strong> Every partnership is backed by an official agreement with Pleasant Biz Technologies, ensuring compliance, service quality, and operational consistency.</li>
          </ul>
          <p>Livinnza is designed to help hostel partners focus on what matters most — providing a great living experience — while we handle the technology that powers it.</p>
        </>
      )
    },
    {
      title: "Seamless ERP Integration",
      content: (
        <>
          <p>Hostels that integrate Livinnza with the Pleasant Biz ERP unlock a truly unified experience:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2 mb-4">
            <li>Students can manage attendance, payment history, and requests directly through the app.</li>
            <li>Hostel Owners gain complete visibility into bookings, payments, and occupancy analytics — all in real time.</li>
          </ul>
          <p>This integration turns operational complexity into efficiency — creating a digital ecosystem that works for everyone.</p>
        </>
      )
    },
    {
      title: "Why Choose Livinnza",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Trusted & Verified Hostels:</strong> Every property undergoes compliance and quality checks.</li>
          <li><strong>Technology-Driven Efficiency:</strong> Digital dashboards, ERP sync, and instant notifications.</li>
          <li><strong>Transparent Operations:</strong> Secure payments, clear terms, and verified transactions.</li>
          <li><strong>Community Focus:</strong> Encouraging social engagement and cultural inclusivity.</li>
          <li><strong>Scalable Solutions:</strong> Whether you manage one property or an entire chain, Livinnza grows with you.</li>
        </ul>
      )
    },
    {
      title: "Our Commitment",
      content: (
        <p>We’re committed to creating a safe, transparent, and connected living experience. Every interaction on Livinnza — from listing a hostel to applying for a room — is governed by trust, data integrity, and continuous innovation.</p>
      )
    },
    {
      title: "Join the Livinnza Network",
      content: (
        <>
          <p>Whether you’re a student looking for a space that supports your learning journey or a hostel partner aiming to grow your business through technology — Livinnza is your trusted digital bridge.</p>
          <p className="mt-2">Join us today and be part of the future of student living — where comfort meets innovation, and every stay becomes a story worth sharing.</p>
        </>
      )
    },
    {
      title: "Contact Us",
      content: (
        <>
          <p><strong>Pleasant Biz Technologies Private Limited</strong><br/>Registered Office: Bagalur, New Airport Road, North Bengaluru</p>
        </>
      )
    }
  ];

  return (
    <MarketingLayout>
      <PolicyLayout 
        title="About Livinnza" 
        sections={sections} 
      />
    </MarketingLayout>
  );
}
