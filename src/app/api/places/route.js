export async function GET() {
  const endpoint = 'https://query.wikidata.org/sparql';

  const query = `
    SELECT DISTINCT ?item ?itemLabel ?locationLabel ?address ?image ?coord WHERE {
      ?item wdt:P31/wdt:P279* ?type .

      VALUES ?type {
        wd:Q30022    # café
        wd:Q11707    # restaurant
        wd:Q194251   # bar
        wd:Q570116   # pub
        wd:Q213441   # coffeehouse
        wd:Q1107168  # pizzeria
        wd:Q18536342 # wine bar
        wd:Q18559913 # cocktail bar
        wd:Q1208345  # beer garden
        wd:Q1309717  # bistro
      }

      {
        { ?item wdt:P276 ?location }
        UNION
        { ?item wdt:P131 ?location }
        UNION
        { ?item wdt:P740 ?location }
        UNION
        { ?item wdt:P159 ?location }
      }

      VALUES ?location {
        wd:Q360
        wd:Q36036
        wd:Q36033
      }

      OPTIONAL { ?item wdt:P18 ?image }
      OPTIONAL { ?item wdt:P625 ?coord }
      OPTIONAL { ?item wdt:P6375 ?address }

      SERVICE wikibase:label {
        bd:serviceParam wikibase:language "uk,en" .
      }
    }
    LIMIT 100
  `;

  const url = `${endpoint}?format=json&query=${encodeURIComponent(query)}`;

  try {
    const res = await fetch(url, {
      headers: {
        'Accept': 'application/sparql-results+json',
        'User-Agent': 'LvivSightseeingApp/1.0 (lviv@openai.com)',
      },
    });

    const json = await res.json();

    const results = json.results.bindings
      .filter((entry) => entry.image?.value)
      .map((entry) => {
        let lat = null;
        let lon = null;

        const coord = entry.coord?.value;
        if (coord?.startsWith('Point(')) {
          const [lonStr, latStr] = coord.replace('Point(', '').replace(')', '').split(' ');
          lat = parseFloat(latStr);
          lon = parseFloat(lonStr);
        }

        return {
          title: entry.itemLabel?.value || 'Untitled',
          address: entry.address?.value || entry.locationLabel?.value || 'Lviv',
          image: entry.image?.value,
          lat,
          lon,
        };
      });

    return new Response(JSON.stringify(results), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Places API Error:', err);
    return new Response(JSON.stringify({ error: 'Failed to load places' }), {
      status: 500,
    });
  }
}
