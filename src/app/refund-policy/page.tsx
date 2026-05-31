import React from "react";
import { MarketingLayout } from "@/components/templates/MarketingLayout";
import { PolicyLayout } from "@/components/organisms/PolicyLayout";

export default function RefundPolicyPage() {
  const sections = [
    {
      content: (
        <>
          <p>Once hostel admission is confirmed and payment is made, no refund will be provided under normal circumstances.</p>
          <p>Pleasant Biz Technologies Private Limited, operating www.livinnza.com, provides a platform for hostel listings but does not own or manage the properties. Refunds, if applicable, must be requested via a formal application submitted to the respective hostel management. The hostel management will coordinate with thes affiliated institution for final approval.</p>
          <p>The accommodations listed are associated with specific colleges or institutions where students are enrolled. As such, refund policies may align with the policies of these institutions. All refund applications will be subject to approval by both the hostel management and the institution.</p>
        </>
      )
    },
    {
      title: "Non-Refundable Charges",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Admission Fee</li>
          <li>Maintenance Charges</li>
          <li>Mess Fee (if availed)</li>
          <li>Student Portal or Platform Access Charges</li>
        </ul>
      )
    },
    {
      title: "Proration of Refunds",
      content: (
        <p>Proration of refunds will be calculated based on the specific policies outlined by the hostel management and associated institution at the time of cancellation.</p>
      )
    },
    {
      title: "Refund Processing Timeline",
      content: (
        <p>Eligible refunds will be processed within 60 days of receiving complete documentation.</p>
      )
    },
    {
      title: "Mode of Refund",
      content: (
        <p>Approved refunds will be processed via bank transfer to the student’s or parent’s registered bank account, as specified in the application.</p>
      )
    },
    {
      title: "Contact Information",
      content: (
        <p>For queries regarding refund applications, students should contact their hostel management directly. The hostel management will provide further guidance and coordinate with the relevant institution.</p>
      )
    }
  ];

  return (
    <MarketingLayout>
      <PolicyLayout 
        title="Refund and Cancellation Policy" 
        sections={sections} 
      />
    </MarketingLayout>
  );
}
