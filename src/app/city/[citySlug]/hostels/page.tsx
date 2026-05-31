import { CityHostels } from "@/components/pages/CityHostels";

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
    title: `${cityName} Hostels & PG Accommodations | Livinzza`,
    description: `Browse verified student hostels, PGs and co-living spaces in ${cityName}. Compare prices, amenities, and book your stay seamlessly with Livinzza.`,
  };
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  return <CityHostels citySlug={resolvedParams.citySlug} />;
}
