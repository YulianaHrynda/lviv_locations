export async function GET() {
  const endpoint = 'https://query.wikidata.org/sparql';

  const query = `
    SELECT DISTINCT ?item ?itemLabel ?locationLabel ?image ?coord WHERE {
      ?item wdt:P31/wdt:P279* wd:Q570116 .
      {
        { ?item wdt:P276 ?location }
        UNION
        { ?item wdt:P131 ?location }
        UNION
        { ?item wdt:P137 ?location }
      }
      VALUES ?location {
        wd:Q360       # Lviv city
        wd:Q36033     # Lviv Oblast
        wd:Q36036     # Lviv Raion
      }

      OPTIONAL { ?item wdt:P18 ?image }
      OPTIONAL { ?item wdt:P625 ?coord }

      SERVICE wikibase:label { bd:serviceParam wikibase:language "uk,en" }
    }
    LIMIT 50
  `;

  const url = `${endpoint}?format=json&query=${encodeURIComponent(query)}`;

  try {
    const res = await fetch(url, {
      headers: {
        'Accept': 'application/sparql-results+json',
        'User-Agent': 'LvivSightseeingApp/1.0 (lviv@openai.com)',
      },
    });

    const data = await res.json();

    const attractions = data.results.bindings
      .filter((entry) => entry.image?.value)
      .map((entry) => {
        const coord = entry.coord?.value;
        let lat = null;
        let lon = null;

        if (coord?.startsWith('Point(')) {
          const [lonStr, latStr] = coord.replace('Point(', '').replace(')', '').split(' ');
          lat = parseFloat(latStr);
          lon = parseFloat(lonStr);
        }

        return {
          title: entry.itemLabel?.value || 'Untitled',
          address: entry.locationLabel?.value || 'Lviv',
          image: entry.image?.value,
          lat,
          lon,
        };
      });

    return new Response(JSON.stringify(attractions), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Attractions API error:', err);
    return new Response(JSON.stringify({ error: 'Failed to load attraction data' }), {
      status: 500,
    });
  }
}
