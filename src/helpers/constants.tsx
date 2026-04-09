import ProposalOverview from '../components/ContentTopics/ProposalOverview';
import TrafficAndTransport from '../components/ContentTopics/TrafficAndTransport';
import NoiseAndVibration from '../components/ContentTopics/NoiseAndVibration';
import PropertyAndLandUse from '../components/ContentTopics/PropertyAndLandUse';
import Biodiversity from '../components/ContentTopics/Biodiversity';
import HydrologyAndFlooding from '../components/ContentTopics/HydrologyAndFlooding';
import AboriginalCulturalHeritage from '../components/ContentTopics/AboriginalCulturalHeritage';
import Cumulative from '../components/ContentTopics/Cumulative';
import MapLayerControl from '../components/MapLayerControl/MapLayerControl';
import {
  esriSatelliteStyle,
  listOfTopicsToOrderLayer,
} from './topics/constant.helpers';

// Mapbox configuration and other constants
import { generalFilters, keyFeaturesFilters } from './topics/proposal-overview';
import {
  trafficAndTransportFilters,
  trafficAndTransportFiltersToShow,
  trafficAndTransportLegends,
} from './topics/traffic-and-transport';
import {
  contoursFiltersToShow,
  noiseAndVibrationFilters,
  noiseAndVibrationFiltersToShow,
  noiseAndVibrationLegends,
  noiseCatchmentAreasFiltersToShow,
} from './topics/noise-and-vibration';

import {
  landscapeAndVisualFiltersToShow,
  landscapeAndVisualLegends,
  lcaFilters,
  propertyAndLandUseFilters,
} from './topics/property-and-land-use';

import {
  hydrologyAndFloodingFilters,
  hydrologyAndFloodingFiltersToShow,
  oneAEPAffluxFiltersToShow,
  hydrologyAndFloodingLegends,
} from './topics/hydrology-and-flood';

import { TabActive } from '../components/MapTopbar/MapTopbar';
import { defaultFilters } from './topics/default';
import {
  aboriginalCulturalHeritageFilters,
  aboriginalCulturalHeritageFiltersToShow,
  aboriginalCulturalHeritageLegends,
} from './topics/aboriginal-cultural-heritage';
import {
  biodiversityFilters,
  biodiversityFiltersToShow,
  biodiversityLegends,
  plantCommunityTypesFiltersToShow,
} from './topics/biodiversity';

import { cumulativeFilters } from './topics/cumulative';
import Construction from '../components/ContentTopics/Construction';
import {
  constructionFilters,
  constructionFiltersToShow,
  constructionLegends,
} from './topics/construction';

// Esri World Imagery basemap with Mapbox Streets v8 label overlay.
// Replaces Mapbox satellite-v9 to use more current Esri imagery.
// Esri attribution is injected automatically via the source `attribution` field.

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
    maxZoom: 17,
    minZoom: 11,
    showCompass: false,
    // SW corner, NE corner – restricts panning to the project area
    maxBounds: [
      [149.96688361706907, -35.434014544168996], // SW
      [151.0571187, -34.6477599], // NE
    ] as [[number, number], [number, number]],
  },
  topics: [
    {
      title: 'Proposal overview',
      slug: 'proposal-overview',
      content: <ProposalOverview />,
      filters: defaultFilters,
      legends: [],
      isOnMenu: true,
      color: '#002664',
      linkRef: '#proposal-overview',
    },
    {
      title: 'Construction',
      slug: 'construction',
      content: <Construction />,
      filters: constructionFilters,
      legends: constructionLegends,
      isOnMenu: true,
      color: '#941B00',
      linkRef: '#construction',
    },
    {
      title: 'Biodiversity',
      slug: 'biodiversity',
      content: <Biodiversity />,
      filters: biodiversityFilters,
      legends: biodiversityLegends,
      isOnMenu: true,
      color: '#00AA45',
      linkRef: '#biodiversity',
    },
    {
      title: 'Landscape character and visual impacts',
      slug: 'landscape-character-and-visual-impacts',
      content: <PropertyAndLandUse />,
      filters: propertyAndLandUseFilters,
      legends: landscapeAndVisualLegends,
      isOnMenu: true,
      color: '#D7153A',
      linkRef: '#landscape-character-and-visual-impacts',
    },
    {
      title: 'Traffic and transport',
      slug: 'traffic-and-transport',
      content: <TrafficAndTransport />,
      filters: trafficAndTransportFilters,
      legends: trafficAndTransportLegends,
      isOnMenu: true,
      color: '#146CFD',
      linkRef: '#traffic-and-transport',
    },
    {
      title: 'Noise and vibration ',
      slug: 'noise-and-vibration',
      content: <NoiseAndVibration />,
      filters: noiseAndVibrationFilters,
      legends: noiseAndVibrationLegends,
      isOnMenu: true,
      color: '#F3631B',
      footer: <MapLayerControl />,
      linkRef: '#noise-and-vibration',
    },
    {
      title: 'Hydrology and flooding',
      slug: 'hydrology-and-flooding',
      content: <HydrologyAndFlooding />,
      filters: hydrologyAndFloodingFilters,
      legends: hydrologyAndFloodingLegends,
      isOnMenu: true,
      color: '#2E808E',
      linkRef: '#hydrology-and-flooding',
    },
    {
      title: 'Aboriginal cultural heritage',
      slug: 'aboriginal-cultural-heritage',
      content: <AboriginalCulturalHeritage />,
      isOnMenu: true,
      filters: aboriginalCulturalHeritageFilters,
      legends: aboriginalCulturalHeritageLegends,
      color: '#694800',
      linkRef: '#aboriginal-cultural-heritage',
    },
    {
      title: 'Cumulative',
      slug: 'cumulative',
      content: <Cumulative />,
      filters: cumulativeFilters,
      // legends: cumulativeLegends,
      isOnMenu: true,
      color: '#FAAF05',
      linkRef: '#cumulative',
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

export const listOfTopicsToAddLayer = [
  ...noiseAndVibrationFiltersToShow,
  ...aboriginalCulturalHeritageFiltersToShow,
  ...noiseCatchmentAreasFiltersToShow,
  ...trafficAndTransportFiltersToShow,
  ...contoursFiltersToShow,
  ...hydrologyAndFloodingFiltersToShow,
  ...oneAEPAffluxFiltersToShow,
  ...keyFeaturesFilters,
  ...constructionFiltersToShow,
  ...generalFilters,
  ...biodiversityFiltersToShow,
  ...plantCommunityTypesFiltersToShow,
  ...landscapeAndVisualFiltersToShow,
  ...propertyAndLandUseFilters,
  ...hydrologyAndFloodingFilters,
  ...lcaFilters,
  ...cumulativeFilters,
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
