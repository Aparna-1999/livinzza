import { notFound } from "next/navigation";
import { hostelResults } from "../../../data/hostels";
import { Booking } from "../../../components/pages/Booking";

// Static param generation for static exports if needed
export function generateStaticParams() {
  return hostelResults.map((hostel) => ({
    id: hostel.id,
  }));
}

export default async function BookPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const hostel = hostelResults.find((h) => h.id === params.id);

  if (!hostel) {
    notFound();
  }

  return <Booking hostel={hostel} />;
}
