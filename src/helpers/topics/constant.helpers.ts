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
