import { CityDetail } from "@/components/pages/CityDetail";

interface PageProps {
  params: Promise<{ citySlug: string }>;
}

const CITY_NAME_MAP: Record<string, string> = {
  bangalore: "Bangalore",
  kochi: "Kochi",
  kottayam: "Kottayam",
  trivandrum: "Trivandrum",
  calicut: "Calicut",
  pune: "Pune",
  vellore: "Vellore",
  "delhi-ncr": "Delhi NCR"
};

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const citySlug = resolvedParams.citySlug;
  const cityName = CITY_NAME_MAP[citySlug.toLowerCase()] || citySlug.charAt(0).toUpperCase() + citySlug.slice(1);
  return {
    title: `${cityName} Student Hostels | Cozy, Comfortable Stays | Livinzza`,
    description: `Discover premium student hostels and co-living spaces in ${cityName}. Clean, secure, and affordable rooms near top universities with verified amenities.`,
  };
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  return <CityDetail citySlug={resolvedParams.citySlug} />;
}
