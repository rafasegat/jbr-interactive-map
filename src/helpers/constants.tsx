// Left menu items
import type { Style as MapboxStyle } from 'mapbox-gl';
import ConceptDesign from '../components/ContentTopics/ConceptDesign';
import TrafficAndTransport from '../components/ContentTopics/TrafficAndTransport';
import NoiseAndVibration from '../components/ContentTopics/NoiseAndVibration';
import PropertyAndLandUse from '../components/ContentTopics/PropertyAndLandUse';
import Biodiversity from '../components/ContentTopics/Biodiversity';
import HydrologyAndFlooding from '../components/ContentTopics/HydrologyAndFlooding';
import AboriginalCulturalHeritage from '../components/ContentTopics/AboriginalCulturalHeritage';
import Cumulative from '../components/ContentTopics/Cumulative';
import MapLayerControl from '../components/MapLayerControl/MapLayerControl';

// Mapbox configuration and other constants
import {
  conceptDesignFilters,
  conceptDesignLegends,
} from './topics/concept-design';
import {
  trafficAndTransportFilters,
  trafficAndTransportLegends,
} from './topics/traffic-and-transport';
import {
  noiseAndVibrationFilters,
  noiseAndVibrationLegends,
} from './topics/noise-and-vibration';

import {
  propertyAndLandUseFilters,
  propertyAndLandUseLegends,
} from './topics/property-and-land-use';

import {
  hydrologyAndFloodingFilters,
  hydrologyAndFloodingLegends,
} from './topics/hydrology-and-flood';

import { TabActive } from '../components/MapTopbar/MapTopbar';
import { defaultFilters } from './topics/default';
import {
  aboriginalCulturalHeritageFilters,
  aboriginalCulturalHeritageLegends,
} from './topics/aboriginal-cultural-heritage';

// Esri World Imagery basemap with Mapbox Streets v8 label overlay.
// Replaces Mapbox satellite-v9 to use more current Esri imagery.
// Esri attribution is injected automatically via the source `attribution` field.
const esriSatelliteStyle: MapboxStyle = {
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
      attribution:
        'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
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

export const appMetadata = {
  map: {
    accessToken: import.meta.env.VITE_MAPBOX_ACCESS_TOKEN || '',
    // satelliteStyle previously used 'mapbox://styles/mapbox/satellite-v9'
    // Switched to Esri World Imagery for more current imagery in the project area
    satelliteStyle: esriSatelliteStyle,
    defaultStyle: 'mapbox://styles/mapbox/streets-v11',
    // defaultStyle: 'mapbox://styles/creative-rps/cmlg2tqwu002101srckxfaww9',
    defaultCenter: [150.58287373803307, -35.01339575760793],
    defaultZoom: 12.8,
    maxZoom: 18,
    minZoom: 10,
    showCompass: false,
  },
  topics: [
    {
      title: 'Concept design',
      slug: 'concept-design',
      content: <ConceptDesign />,
      filters: conceptDesignFilters,
      legends: conceptDesignLegends,
      isOnMenu: true,
      color: '#002664',
    },
    {
      title: 'Traffic and transport',
      slug: 'traffic-and-transport',
      content: <TrafficAndTransport />,
      filters: trafficAndTransportFilters,
      legends: trafficAndTransportLegends,
      isOnMenu: true,
      color: '#146CFD',
    },
    {
      title: 'Noise and vibration',
      slug: 'noise-and-vibration',
      content: <NoiseAndVibration />,
      filters: noiseAndVibrationFilters,
      legends: noiseAndVibrationLegends,
      isOnMenu: true,
      color: '#F3631B',
      footer: <MapLayerControl />,
    },
    {
      title: 'Property and land use',
      slug: 'property-and-land-use',
      content: <PropertyAndLandUse />,
      filters: propertyAndLandUseFilters,
      legends: propertyAndLandUseLegends,
      isOnMenu: true,
      color: '#D7153A',
    },
    {
      title: 'Biodiversity',
      slug: 'biodiversity',
      content: <Biodiversity />,
      isOnMenu: true,
      color: '#00AA45',
    },
    {
      title: 'Hydrology and flooding',
      slug: 'hydrology-and-flooding',
      content: <HydrologyAndFlooding />,
      filters: hydrologyAndFloodingFilters,
      legends: hydrologyAndFloodingLegends,
      isOnMenu: true,
      color: '#2E808E',
    },
    {
      title: 'Aboriginal cultural heritage',
      slug: 'aboriginal-cultural-heritage',
      content: <AboriginalCulturalHeritage />,
      isOnMenu: true,
      filters: aboriginalCulturalHeritageFilters,
      legends: aboriginalCulturalHeritageLegends,
      color: '#694800',
    },
    {
      title: 'Cumulative',
      slug: 'cumulative',
      content: <Cumulative />,
      isOnMenu: true,
      color: '#FAAF05',
    },
    {
      title: 'Default',
      slug: 'default',
      content: null,
      filters: defaultFilters,
      legends: [],
      isOnMenu: false,
    },
  ],
};

const listOfTopicsToOrderLayer = [
  // Base layers - bottom (added first, rendered on bottom)
  'local-government-area',
  'land-use-zoning',
  'state-forests',
  'national-parks',
  'landscape-character-areas',
  'landscape-viewpoints',

  // Study areas and flooding
  'operational-noise-study-area',
  'construction-study-area',
  'tuflow-model-extent',
  'water-catchment',
  'hydro-area',
  'flood-catchments',
  'existing-flood-depth-1-aep',

  // Operational noise contours
  'operational-noise-contours-2040-night',
  'operational-noise-contours-2040-day',
  'operational-noise-contours-2030-night',
  'operational-noise-contours-2030-day',

  // Contours
  'contours-vibration-buffers',
  'contours-utility',
  'contours-site',
  'contours-road-furniture',
  'contours-resurfacing',
  'contours-paving',
  'contours-earthworks',
  'contours-drainage',
  'contours-corridor',
  'contours-compound',
  'contours-bridge',

  // Infrastructure and roads
  'state-roads',
  'regional-roads',
  'local-roads',
  'cut-and-fill',
  'pavement',
  'proposed-ancillary-facility',
  'concept-design',

  // Drainage and boundaries
  'drainage-basins',
  'drainage-basins-22-9',
  'drainage-basins-15-9',
  'operational-boundary',
  'proposal-boundary',
  'watercourses',
  'riverlines',
  'existing-culverts',
  'design-culverts',
  'drainage',

  // Point/marker layers - top (added last, rendered on top)
  'noise-receivers',
  'noise-catchment-areas',
  'reporting-locations-existing-culverts',
  'existing-crash-data',
  'ahims-sites',
  'noise-logger-locations',
  'bus-stops',
  'traffic-counter-locations',
  'chainages',
];

export const listOfTopicsToAddLayer = [
  ...noiseAndVibrationFilters,
  ...trafficAndTransportFilters,
  ...conceptDesignFilters,
  ...propertyAndLandUseFilters,
  ...hydrologyAndFloodingFilters,
  ...aboriginalCulturalHeritageFilters,
].sort((a, b) => {
  const orderA = listOfTopicsToOrderLayer.indexOf(a.value);
  const orderB = listOfTopicsToOrderLayer.indexOf(b.value);

  // Items not in the ordering list go to the end
  if (orderA === -1) return 1;
  if (orderB === -1) return -1;

  // Sort in ascending order to match listOfTopicsToOrderLayer
  return orderA - orderB;
});

// Enums

export const enumTabs: Record<TabActive, TabActive> = {
  satellite: 'satellite',
  default: 'default',
};
