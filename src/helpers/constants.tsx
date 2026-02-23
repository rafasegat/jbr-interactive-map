// Left menu items
import ConceptDesign from '../components/ContentTopics/ConceptDesign';
import TrafficAndTransport from '../components/ContentTopics/TrafficAndTransport';
import NoiseAndVibration from '../components/ContentTopics/NoiseAndVibration';
import PropertyAndLandUse from '../components/ContentTopics/PropertyAndLandUse';
import Biodiversity from '../components/ContentTopics/Biodiversity';
import HydrologyAndFlooding from '../components/ContentTopics/HydrologyAndFlooding';
import AboriginalCulturalHeritage from '../components/ContentTopics/AboriginalCulturalHeritage';
import Cumulative from '../components/ContentTopics/Cumulative';

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

import { TabActive } from '../components/MapTopbar/MapTopbar';
import { defaultFilters } from './topics/default';

export const appMetadata = {
  map: {
    accessToken: import.meta.env.VITE_MAPBOX_ACCESS_TOKEN || '',
    satelliteStyle: 'mapbox://styles/mapbox/satellite-v9',
    defaultStyle: 'mapbox://styles/mapbox/streets-v11',
    // satelliteStyle: 'mapbox://styles/creative-rps/cmigmjvll004201sthupn0b4n',
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
      isOnMenu: true,
      color: '#2E808E',
    },
    {
      title: 'Aboriginal cultural heritage',
      slug: 'aboriginal-cultural-heritage',
      content: <AboriginalCulturalHeritage />,
      isOnMenu: true,
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

export const listOfTopicsToAddLayer = [
  ...noiseAndVibrationFilters,
  ...trafficAndTransportFilters,
  ...conceptDesignFilters,
  ...propertyAndLandUseFilters,
];

// Enums

export const enumTabs: Record<TabActive, TabActive> = {
  satellite: 'satellite',
  default: 'default',
};
