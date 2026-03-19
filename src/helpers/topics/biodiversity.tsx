import {
  HollowBearingTrees,
  ScatteredTrees,
  GreatGlider,
  ThreatenedSpecies,
  ProposedFaunaUnderpass,
  SubjectLand,
  ConnectivityZones,
  PlantCommunityTypes,
  StudyArea,
  AssessmentArea,
} from '../../components/Icons/Legends';
import { defaultFilters } from './default';

export const biodiversityFilters = [
  ...defaultFilters,
  {
    label: 'Hollow bearing trees',
    value: 'hollow-bearing-trees',
    legendAlias: 'hollow-bearing-trees',
    color: '#00AA45',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl: '/data/geojson/biodiversity/Hollow Bearing Trees.geojson',
        type: 'line',
        paint: {
          'line-color': '#00AA45',
          'line-width': 2,
        },
      },
    ],
    hasLineDivider: true,
    orderLayout: 3,
  },
  {
    label: 'Scattered trees',
    value: 'scattered-trees',
    legendAlias: 'scattered-trees',
    color: '#00AA45',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl: '/data/geojson/biodiversity/Scattered Trees.geojson',
        type: 'line',
        paint: {
          'line-color': '#00AA45',
          'line-width': 3,
          'line-dasharray': [1, 2],
        },
      },
    ],
    orderLayout: 4,
  },
  {
    label: 'Great Glider',
    value: 'great-glider',
    legendAlias: 'great-glider',
    color: '#00AA45',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl: '/data/geojson/biodiversity/Great Glider.geojson',
        type: 'line',
        paint: {
          'line-color': '#00AA45',
          'line-width': 3,
        },
      },
    ],
    orderLayout: 5,
  },
  {
    label: 'Threatened species',
    value: 'threatened-species',
    legendAlias: 'threatened-species',
    color: '#004000',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl: '/data/geojson/biodiversity/Threatened Species.geojson',
        type: 'line',
        paint: {
          'line-color': '#004000',
          'line-width': 2,
        },
      },
    ],
    orderLayout: 6,
  },
  {
    label: 'Proposed fauna underpass',
    value: 'proposed-fauna-underpass',
    legendAlias: 'proposed-fauna-underpass',
    color: '#004000',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/biodiversity/Proposed Fauna Underpass.geojson',
        type: 'line',
        paint: {
          'line-color': '#004000',
          'line-width': 3,
          'line-dasharray': [1, 2],
        },
      },
    ],
    orderLayout: 7,
  },
  {
    label: 'Subject land',
    value: 'subject-land',
    legendAlias: 'subject-land',
    color: '#F3631B',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl: '/data/geojson/biodiversity/Subject Land.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#F3631B',
          'fill-opacity': 0.8,
        },
      },
    ],
    orderLayout: 8,
  },
  {
    label: 'Connectivity zones',
    value: 'connectivity-zones',
    legendAlias: 'connectivity-zones',
    color: '#00AA45',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl: '/data/geojson/biodiversity/Connectivity Zones.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#00AA45',
          'fill-opacity': 0.75,
        },
      },
    ],
    orderLayout: 9,
  },
  {
    label: 'Plant community types',
    value: 'plant-community-types',
    legendAlias: 'plant-community-types',
    color: '#B68D5D',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl: '/data/geojson/biodiversity/Plant Community Types.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#B68D5D',
          'fill-opacity': 0.8,
        },
      },
    ],
    orderLayout: 10,
  },
  {
    label: 'Study area',
    value: 'study-area',
    legendAlias: 'study-area',
    color: '#E8D0B5',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl: '/data/geojson/biodiversity/Study Area.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#E8D0B5',
          'fill-opacity': 0.5,
        },
      },
    ],
    orderLayout: 11,
  },
  {
    label: 'Assessment area',
    value: 'assessment-area',
    legendAlias: 'assessment-area',
    color: '#495054',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl: '/data/geojson/biodiversity/Assessment Area.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#495054',
          'fill-opacity': 0.8,
        },
      },
    ],
    orderLayout: 12,
  },
];

export const biodiversityLegends = [
  {
    title: 'Biodiversity',
    label: 'Biodiversity',
    value: 'title-biodiversity',
    icon: '',
  },
  {
    label: 'Hollow bearing trees',
    value: 'hollow-bearing-trees',
    icon: <HollowBearingTrees />,
  },
  {
    label: 'Scattered trees',
    value: 'scattered-trees',
    icon: <ScatteredTrees />,
  },
  {
    label: 'Great Glider',
    value: 'great-glider',
    icon: <GreatGlider />,
  },
  {
    label: 'Threatened species',
    value: 'threatened-species',
    icon: <ThreatenedSpecies />,
  },
  {
    label: 'Proposed fauna underpass',
    value: 'proposed-fauna-underpass',
    icon: <ProposedFaunaUnderpass />,
  },
  {
    label: 'Subject land',
    value: 'subject-land',
    icon: <SubjectLand />,
  },
  {
    label: 'Connectivity zones',
    value: 'connectivity-zones',
    icon: <ConnectivityZones />,
  },
  {
    label: 'Plant community types',
    value: 'plant-community-types',
    icon: <PlantCommunityTypes />,
  },
  {
    label: 'Study area',
    value: 'study-area',
    icon: <StudyArea />,
  },
  {
    label: 'Assessment area',
    value: 'assessment-area',
    icon: <AssessmentArea />,
  },
];
