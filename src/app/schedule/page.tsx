import { ScheduleContent } from "@/components/pages/ScheduleContent";
import { MainLayout } from "@/components/templates/MainLayout";

export const metadata = {
  title: "Book an Appointment | Livinzza",
  description: "Schedule an appointment with a Livinzza campus advisor to find the perfect student hostel for your academic journey.",
};

export default function SchedulePage() {
  return (
    <MainLayout>
      <ScheduleContent />
    </MainLayout>
  );
}
