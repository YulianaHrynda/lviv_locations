export async function GET() {
  const API_KEY = process.env.GOOGLE_MAPS_API_KEY;

  if (!API_KEY) {
    return new Response(JSON.stringify({ error: 'API key is missing' }), { status: 500 });
  }

  // Search for architectural landmarks
  const query = 'architectural landmarks in Lviv';

  try {
    const searchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(
      query
    )}&key=${API_KEY}`;

    const searchRes = await fetch(searchUrl, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });

    const searchData = await searchRes.json();

    if (!searchData.results || searchData.results.length === 0) {
      return new Response(JSON.stringify([]), { status: 200 });
    }

    const results = searchData.results.map((place) => {
      const photoRef = place.photos?.[0]?.photo_reference;

      const image = photoRef
        ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${photoRef}&key=${API_KEY}`
        : '/images/placeholder.svg';

      return {
        title: place.name,
        address: place.formatted_address || 'Lviv',
        image,
        lat: place.geometry?.location?.lat,
        lon: place.geometry?.location?.lng,
      };
    });

    return new Response(JSON.stringify(results), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Google Places API error:', err);
    return new Response(JSON.stringify({ error: 'Failed to fetch architecture data' }), {
      status: 500,
    });
  }
}
