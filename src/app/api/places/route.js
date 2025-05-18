export async function GET() {
  const API_KEY = process.env.GOOGLE_MAPS_API_KEY;
  if (!API_KEY) {
    return new Response(JSON.stringify({ error: 'API key is missing' }), { status: 500 });
  }

  const query = 'cafes, restaurants, bars in Lviv';

  try {
    const searchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(query)}&key=${API_KEY}`;

    const searchRes = await fetch(searchUrl, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

    const searchData = await searchRes.json();
    console.log('Google Places Response:', JSON.stringify(searchData, null, 2));

    if (!searchData.results || searchData.results.length === 0) {
      return new Response(JSON.stringify([]), { status: 200 });
    }

    const enriched = searchData.results.map((place) => {
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

    return new Response(JSON.stringify(enriched), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Google Places API error:', err);
    return new Response(JSON.stringify({ error: 'Failed to fetch Google Places' }), {
      status: 500,
    });
  }
}
