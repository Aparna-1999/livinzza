export const CITY_FILTERS = [
  { label: "Bangalore", slug: "bangalore" },
  { label: "Kochi", slug: "kochi" },
  { label: "Kottayam", slug: "kottayam" },
  { label: "Trivandrum", slug: "trivandrum" },
  { label: "Calicut", slug: "calicut" },
] as const;

export const CITY_LABEL_BY_SLUG = CITY_FILTERS.reduce<Record<string, string>>((acc, city) => {
  acc[city.slug] = city.label;
  return acc;
}, {});
