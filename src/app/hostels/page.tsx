import { HostelsPage } from "@/components/pages/Hostels";

interface PageProps {
  searchParams: Promise<{ city?: string; search?: string }>;
}

export default async function Page({ searchParams }: PageProps) {
  const resolvedParams = await searchParams;
  return (
    <HostelsPage
      citySlug={resolvedParams.city}
      searchQuery={resolvedParams.search}
    />
  );
}
