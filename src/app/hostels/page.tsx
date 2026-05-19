import { HostelsPage } from "@/components/pages/Hostels";

interface PageProps {
  searchParams: Promise<{ city?: string; college?: string; hostel?: string; search?: string }>;
}

export default async function Page({ searchParams }: PageProps) {
  const resolvedParams = await searchParams;
  return (
    <HostelsPage
      citySlug={resolvedParams.city}
      collegeQuery={resolvedParams.college}
      hostelQuery={resolvedParams.hostel || resolvedParams.search}
    />
  );
}
