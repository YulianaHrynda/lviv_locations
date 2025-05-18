export async function GET() {
  const endpoint = 'https://query.wikidata.org/sparql';

  const query = `
    SELECT DISTINCT ?item ?itemLabel ?address ?locationLabel ?image ?coord WHERE {
      ?item wdt:P31/wdt:P279* wd:Q33506 .
      {
        { ?item wdt:P276 ?location }
        UNION
        { ?item wdt:P131 ?location }
        UNION
        { ?item wdt:P137 ?location }
      }
      VALUES ?location {
        wd:Q360
        wd:Q36036
        wd:Q36033
      }
      OPTIONAL { ?item wdt:P18 ?image }
      OPTIONAL { ?item wdt:P625 ?coord }
      OPTIONAL { ?item wdt:P6375 ?addr1 }
      OPTIONAL { ?item wdt:P969 ?addr2 }
      BIND(COALESCE(?addr1, ?addr2) AS ?address)
      SERVICE wikibase:label {
        bd:serviceParam wikibase:language "uk,en" .
      }
    }
  `;

  const url = `${endpoint}?format=json&query=${encodeURIComponent(query)}`;

  try {
    const res = await fetch(url, {
      headers: {
        'Accept': 'application/sparql-results+json',
        'User-Agent': 'LvivSightseeingApp/1.0 (lviv@openai.com)',
      },
    });

    if (!res.ok) {
      console.error('Wikidata fetch failed:', res.statusText);
      return new Response(JSON.stringify({ error: 'Failed to fetch data from Wikidata' }), {
        status: 500,
      });
    }

    const data = await res.json();

    const museums = data.results.bindings.map((entry) => {
      const name = entry.itemLabel?.value || 'Unknown';
      const rawAddress = entry.address?.value;
      const location = entry.locationLabel?.value;
      const address = rawAddress || location || 'Lviv';
      const image = entry.image?.value || '/images/placeholder.svg';
      const coord = entry.coord?.value || '';
      let lat = null;
      let lon = null;

      if (coord && coord.startsWith('Point(')) {
        const parts = coord.replace('Point(', '').replace(')', '').split(' ');
        lon = parseFloat(parts[0]);
        lat = parseFloat(parts[1]);
      }

      return {
        title: name,
        address,
        image,
        lat,
        lon,
      };
    });

    return new Response(JSON.stringify(museums), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Landmark API error:', err);
    return new Response(JSON.stringify({ error: 'Failed to load landmark data.' }), {
      status: 500,
    });
  }
}
