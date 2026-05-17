import { HostelsPage } from "@/components/pages/Hostels";

export default function Page({
  searchParams,
}: {
  searchParams?: { city?: string };
}) {
  return <HostelsPage citySlug={searchParams?.city} />;
}
