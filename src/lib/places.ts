import type { Place } from './types';

const PLACES_API =
  process.env.NEXT_PUBLIC_PLACES_API ??
  'https://truck-guru-api.testdevurl.com/api/v1/public/place/all';

const PLACES_HEADERS = {
  accept: 'application/json',
  'x-custom-lang': 'en',
};

export async function searchPlaces(query: string): Promise<Place[]> {
  const url = `${PLACES_API}?search=${encodeURIComponent(query)}&perPage=10&page=1`;
  const res = await fetch(url, { headers: PLACES_HEADERS });
  const json = await res.json();
  const places: Place[] = json.data ?? [];

  // Frontend filtering to ensure results match the query
  const lower = query.toLowerCase().trim();
  return places.filter((p: Place) =>
    p.city?.name?.toLowerCase().includes(lower) ||
    p.name?.toLowerCase().includes(lower)
  );
}
