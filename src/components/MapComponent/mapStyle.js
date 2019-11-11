export const countriesLayer = {
    id: 'countries',
    'type': 'vector',
    'source-layer': 'ne_10m_admin_0_countries-1stuw5',
    'type': 'fill',
    'layout': {'visibility':'visible'},
    paint: {
        'fill-opacity': 0,
    }
  };
  // Highlighted county polygons
  export const highlightedLayer = {
    id: 'countries-highlighted',
    'type': 'vector',
    'source-layer': 'ne_10m_admin_0_countries-1stuw5',
    'type': 'fill',
    paint: {
      'fill-outline-color': '#484226',
      'fill-color': '#1e599f',
      'fill-opacity': 0.75
    }
  };