export async function GET() {
  const API_KEY = process.env.GOOGLE_MAPS_API_KEY;

  if (!API_KEY) {
    return new Response(JSON.stringify({ error: 'API key is missing' }), { status: 500 });
  }

  const query = 'architectural landmarks in Lviv';

  try {
    const searchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(
      query
    )}&key=${API_KEY}`;

    const searchRes = await fetch(searchUrl);
    const searchData = await searchRes.json();

    if (!searchData.results || searchData.results.length === 0) {
      return new Response(JSON.stringify([]), { status: 200 });
    }

    const detailedResults = await Promise.all(
      searchData.results.slice(0, 10).map(async (place) => {
        const detailUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place.place_id}&fields=name,formatted_address,formatted_phone_number,website,geometry,photos,editorial_summary&key=${API_KEY}`;

        const detailsRes = await fetch(detailUrl);
        const detailsData = await detailsRes.json();
        const details = detailsData.result;

        const photoRef = details.photos?.[0]?.photo_reference;

        const image = photoRef
          ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${photoRef}&key=${API_KEY}`
          : '/images/placeholder.svg';

        return {
          title: details.name,
          address: details.formatted_address || 'Lviv',
          phone: details.formatted_phone_number || '',
          website: details.website || '',
          description: details.editorial_summary?.overview || '',
          image,
          lat: details.geometry?.location?.lat,
          lon: details.geometry?.location?.lng,
        };
      })
    );

    return new Response(JSON.stringify(detailedResults), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Google Places API error:', err);
    return new Response(JSON.stringify({ error: 'Failed to fetch architecture data' }), {
      status: 500,
    });
  }
}
