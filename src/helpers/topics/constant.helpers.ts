import type { Style as MapboxStyle } from 'mapbox-gl';

export const esriSatelliteStyle: MapboxStyle = {
  version: 8 as const,
  // Mapbox-hosted glyphs and sprite are still used for rendering the label layers
  glyphs: 'mapbox://fonts/mapbox/{fontstack}/{range}',
  sprite: 'mapbox://sprites/mapbox/satellite-v9',
  sources: {
    'esri-imagery': {
      type: 'raster' as const,
      tiles: [
        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      ],
      tileSize: 256,
      maxzoom: 19,
      attribution: '&copy; <a href="https://www.esri.com/">Esri</a>',
    },
    'mapbox-streets': {
      type: 'vector' as const,
      url: 'mapbox://mapbox.mapbox-streets-v8',
    },
    // Esri World Transportation overlay – provides road labels sourced from Esri,
    // designed to sit on top of Esri World Imagery.
    'esri-transportation': {
      type: 'raster' as const,
      tiles: [
        'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}',
      ],
      tileSize: 256,
      maxzoom: 19,
      attribution: '&copy; <a href="https://www.esri.com/">Esri</a>',
    },
  },
  layers: [
    // Dark fill for areas outside tile coverage
    {
      id: 'background',
      type: 'background' as const,
      paint: { 'background-color': '#1a1a1a' },
    },
    // Esri World Imagery raster
    {
      id: 'esri-satellite',
      type: 'raster' as const,
      source: 'esri-imagery',
    },
    // Esri World Transportation overlay – ESRI-provided road labels (single layer)
    {
      id: 'esri-road-labels',
      type: 'raster' as const,
      source: 'esri-transportation',
    },
    // Waterway name labels (rivers, creeks)
    {
      id: 'waterway-label',
      type: 'symbol' as const,
      source: 'mapbox-streets',
      'source-layer': 'waterway',
      filter: ['has', 'name'],
      layout: {
        'text-field': ['get', 'name'],
        'text-font': ['DIN Pro Italic', 'Arial Unicode MS Regular'],
        'text-max-width': 6.25,
        'text-size': [
          'interpolate',
          ['linear'],
          ['zoom'],
          10,
          10,
          16,
          13,
        ] as any,
      },
      paint: {
        'text-color': '#74c0fc',
        'text-halo-color': 'rgba(0,0,0,0.6)',
        'text-halo-width': 1.5,
      },
    },
    // Natural feature labels (parks, reserves, water bodies)
    {
      id: 'natural-label',
      type: 'symbol' as const,
      source: 'mapbox-streets',
      'source-layer': 'natural_label',
      filter: ['has', 'name'],
      layout: {
        'text-field': ['get', 'name'],
        'text-font': ['DIN Pro Italic', 'Arial Unicode MS Regular'],
        'text-max-width': 8,
        'text-size': [
          'interpolate',
          ['linear'],
          ['zoom'],
          10,
          11,
          16,
          14,
        ] as any,
      },
      paint: {
        'text-color': '#a8e0a8',
        'text-halo-color': 'rgba(0,0,0,0.6)',
        'text-halo-width': 1.5,
      },
    },
    // Suburb / locality labels (zoom 12+)
    {
      id: 'settlement-subdivision-label',
      type: 'symbol' as const,
      source: 'mapbox-streets',
      'source-layer': 'place_label',
      minzoom: 12,
      filter: [
        'match',
        ['get', 'class'],
        ['settlement_subdivision'],
        true,
        false,
      ],
      layout: {
        'text-field': ['get', 'name'],
        'text-font': ['DIN Pro Regular', 'Arial Unicode MS Regular'],
        'text-max-width': 8,
        'text-size': [
          'interpolate',
          ['linear'],
          ['zoom'],
          12,
          11,
          16,
          15,
        ] as any,
      },
      paint: {
        'text-color': '#eeeeee',
        'text-halo-color': 'rgba(0,0,0,0.7)',
        'text-halo-width': 1.5,
      },
    },
    // City / town labels
    {
      id: 'settlement-label',
      type: 'symbol' as const,
      source: 'mapbox-streets',
      'source-layer': 'place_label',
      filter: ['match', ['get', 'class'], ['settlement'], true, false],
      layout: {
        'text-field': ['get', 'name'],
        'text-font': ['DIN Pro Bold', 'Arial Unicode MS Bold'],
        'text-max-width': 8,
        'text-size': [
          'interpolate',
          ['linear'],
          ['zoom'],
          8,
          12,
          14,
          20,
        ] as any,
      },
      paint: {
        'text-color': '#ffffff',
        'text-halo-color': 'rgba(0,0,0,0.75)',
        'text-halo-width': 2,
      },
    },
  ],
};

export const listOfTopicsToOrderLayer = [
  // Basemap area (lowest z-index, added first, rendered on bottom)
  'suburbs-and-localities',
  'hydro-area',
  'flood-catchments',
  'water-catchment',

  // Worst-case construction scenario
  'nca1',
  'nca2',
  'nca3',
  'nca4',
  'potential-worst-case-construction-scenario',
  'night-2040',
  'night-2030',
  'day-2040',
  'day-2030',

  // Roads
  'state-roads',
  'regional-roads',
  'local-roads',

  // Land use zoning
  'C1 - National parks and nature reserves',
  'C2 - Environmental conservation',
  'C3 - Environmental management',
  'C4 - Environmental living',
  'MU1 - Mixed use',
  'E1 - Local centre',
  'E3 - Productivity support',
  'E4 - General industrial',
  'R1 - General residential',
  'R2 - Low density residential',
  'R3 - Medium density residential',
  'R5 - Large lot residential',
  'RE1 - Public recreation',
  'RE2 - Private recreation',
  'RU1 - Primary production',
  'RU2 - Rural landscape',
  'RU3 - Forestry',
  'RU4 - Primary production small lots',
  'RU5 - Village',
  'SP1 - Special activities',
  'SP2 - Infrastructure',
  'SP3 - Tourist',
  'W1 - Natural waterways',
  'W2 - Recreational waterways',

  // Biodiversity – study areas
  'study-area',
  'plant-community-types',

  // Plant community types (PCTs)
  'pct-3267',
  'pct-3271',
  'pct-3273',
  'pct-3330-ce',
  'pct-3654',
  'pct-3588',
  'critically-endangered',

  // Proposal and construction elements
  'visual-envelope-map',
  'construction-zones',
  'noise-receivers',
  'cut',
  'fill', //fill
  'pavement',
  'concept-design',
  'drainage-basins',
  'drainage-basins-22-9',
  'drainage-basins-15-9',
  'proposed-ancillary-facility',
  'state-forests',
  'national-parks',
  'Forested land',
  'Road infrastructure',
  'Rural residential',

  // Hydrology
  'water-courses',
  'existing-culverts',
  '1-percent-peak-afflux',
  '1-percent-aep-afflux-operational-vs-existing',
  'existing-flood-depth-1-aep',
  'design-culverts',
  'drainage',
  'new-culverts',
  'tuflow-model-extent-study-area',

  // Noise and study areas

  'proposed-fauna-underpass',
  'assessment-area',
  'construction-study-area',
  'human-comfort-working-distance',
  'operational-noise-study-area',
  'subject-land',
  'connectivity-zones',
  'lilo-intersections',

  // Boundaries and linear features
  'operational-boundary',
  'proposal-boundary',
  'reporting-locations',

  // Aboriginal cultural heritage
  'aboriginal-heritage-study-boundary',
  'ahip-boundary',

  // Biodiversity – species
  'threatened-species',
  'great-glider',
  'scattered-trees',
  'hollow-bearing-trees',

  // General / key features
  'base-layers',
  'key-features',

  // Point / marker layers (highest z-index, added last, rendered on top)
  'site-access-gates',
  'noise-logger-locations',
  'new-bus-stops',
  'property-access',
  'truck-parking',
  'speed-limit-change',
  'traffic-counter-locations',
  'ahims-sites',
];
