export const countriesLayer = {
    id: 'countries',
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
    'source-layer': 'ne_10m_admin_0_countries-1stuw5',
    'type': 'fill',
    paint: {
      'fill-outline-color': '#827f72',
      'fill-color': '#83b0e6',
      'fill-opacity': 0.75
    }
  };