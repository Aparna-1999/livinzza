import { notFound } from "next/navigation";
import { hostelResults } from "../../../data/hostels";
import { HostelDetail } from "../../../components/pages/HostelDetail";

export default async function HostelPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const hostel = hostelResults.find((h) => h.id === resolvedParams.id);

  if (!hostel) {
    notFound();
  }

  return <HostelDetail hostel={hostel} />;
}
