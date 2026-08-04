import type { Place } from './types';

const PLACES_API =
  process.env.NEXT_PUBLIC_PLACES_API ??
  'https://truck-guru-api.testdevurl.com/api/v1/admin/place/all';

const PLACES_TOKEN = process.env.NEXT_PUBLIC_PLACES_TOKEN ?? '';

const PLACES_HEADERS = {
  accept: 'application/json',
  'x-custom-lang': 'en',
  Authorization: `Bearer ${PLACES_TOKEN}`,
};

export async function searchPlaces(query: string): Promise<Place[]> {
  const url = `${PLACES_API}?search=${encodeURIComponent(query)}&perPage=10`;
  const res = await fetch(url, { headers: PLACES_HEADERS });
  const json = await res.json();
  return json.data ?? [];
}
