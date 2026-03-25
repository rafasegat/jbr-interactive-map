import ProposalOverview from '../components/ContentTopics/ProposalOverview';
import TrafficAndTransport from '../components/ContentTopics/TrafficAndTransport';
import NoiseAndVibration from '../components/ContentTopics/NoiseAndVibration';
import PropertyAndLandUse from '../components/ContentTopics/PropertyAndLandUse';
import Biodiversity from '../components/ContentTopics/Biodiversity';
import HydrologyAndFlooding from '../components/ContentTopics/HydrologyAndFlooding';
import AboriginalCulturalHeritage from '../components/ContentTopics/AboriginalCulturalHeritage';
import Cumulative from '../components/ContentTopics/Cumulative';
import MapLayerControl from '../components/MapLayerControl/MapLayerControl';
import { esriSatelliteStyle } from './topics/constant.helpers';

// Mapbox configuration and other constants
import {
  constructionActivitiesFilters,
  constructionActivitiesLegends,
  proposalOverviewFilters,
  proposalOverviewLegends,
} from './topics/proposal-overview';
import {
  trafficAndTransportFilters,
  trafficAndTransportLegends,
} from './topics/traffic-and-transport';
import {
  noiseAndVibrationFilters,
  noiseAndVibrationLegends,
} from './topics/noise-and-vibration';

import {
  landUseZoningFilters,
  lcaFilters,
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
import {
  biodiversityFilters,
  biodiversityLegends,
} from './topics/biodiversity';

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
    maxZoom: 18,
    minZoom: 10,
    showCompass: false,
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
    },
    {
      title: 'Biodiversity',
      slug: 'biodiversity',
      content: <Biodiversity />,
      filters: biodiversityFilters,
      legends: biodiversityLegends,
      isOnMenu: true,
      color: '#00AA45',
    },
    {
      title: 'Landscape character and visual impacts',
      slug: 'landscape-character-and-visual-impacts',
      content: <PropertyAndLandUse />,
      filters: propertyAndLandUseFilters,
      legends: propertyAndLandUseLegends,
      isOnMenu: true,
      color: '#D7153A',
    },
    {
      title: 'Traffic and transport impact assessment',
      slug: 'traffic-and-transport-impact-assessment',
      content: <TrafficAndTransport />,
      filters: trafficAndTransportFilters,
      legends: trafficAndTransportLegends,
      isOnMenu: true,
      color: '#146CFD',
    },
    {
      title: 'Noise and vibration impact assessment ',
      slug: 'noise-and-vibration-impact-assessment',
      content: <NoiseAndVibration />,
      filters: noiseAndVibrationFilters,
      legends: noiseAndVibrationLegends,
      isOnMenu: true,
      color: '#F3631B',
      footer: <MapLayerControl />,
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

export const listOfTopicsToAddLayer = [
  ...noiseAndVibrationFilters,
  ...trafficAndTransportFilters,
  ...proposalOverviewFilters,
  ...constructionActivitiesFilters,
  ...biodiversityFilters,
  ...propertyAndLandUseFilters,
  ...hydrologyAndFloodingFilters,
  ...aboriginalCulturalHeritageFilters,
  ...lcaFilters,
  ...landUseZoningFilters,
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
