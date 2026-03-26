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
      attribution: '&copy; <a href="https://www.esri.com/">Esri</a>, ',
    },
    'mapbox-streets': {
      type: 'vector' as const,
      url: 'mapbox://mapbox.mapbox-streets-v8',
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
    // Road name labels (visible from zoom 12+)
    {
      id: 'road-label',
      type: 'symbol' as const,
      source: 'mapbox-streets',
      'source-layer': 'road',
      minzoom: 12,
      filter: ['has', 'name'],
      layout: {
        'symbol-placement': 'line' as const,
        'text-field': ['get', 'name'],
        'text-font': ['DIN Pro Regular', 'Arial Unicode MS Regular'],
        'text-max-width': 6,
        'text-size': [
          'interpolate',
          ['linear'],
          ['zoom'],
          12,
          10,
          18,
          13,
        ] as any,
        'text-padding': 1,
        'text-rotation-alignment': 'map' as const,
      },
      paint: {
        'text-color': '#ffffff',
        'text-halo-color': 'rgba(0,0,0,0.7)',
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
  'tuflow-model-extent',
  'water-catchment',

  // Operational noise contours – night
  'night-2040',
  'night-2030',

  // Operational noise contours – day
  'day-2040',
  'day-2030',

  // Worst-case construction scenario
  'potential-worst-case-construction-scenario',

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

  // Proposal and construction elements
  'visual-envelope-map',
  'construction-zones',
  'noise-receivers',
  'cut-and-fill',
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
  'riverlines',
  'new-culverts',
  'existing-culverts',
  'operational-flood-depth-1-aep',
  'existing-flood-depth-1-aep',
  'design-culverts',
  'drainage',

  // Noise and study areas
  'noise-catchment-areas',
  'proposed-fauna-underpass',
  'assessment-area',
  'construction-study-area',
  'operational-noise-study-area',
  'subject-land',
  'connectivity-zones',
  'lilo-intersections',

  // Boundaries and linear features
  'operational-boundary',
  'proposal-boundary',
  'reporting-locations',

  // Biodiversity – species
  'threatened-species',
  'great-glider',
  'scattered-trees',
  'hollow-bearing-trees',

  // Point / marker layers (highest z-index, added last, rendered on top)
  'site-access-gates',
  'noise-logger-locations',
  'bus-stops',
  'truck-parking',
  'speed-limit-change',
  'ahims-sites',
  'traffic-counter-locations',
];
