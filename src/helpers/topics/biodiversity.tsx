import {
  ProposedFaunaUnderpass,
  ConnectivityZones,
  BiodiversityStudyArea,
  rectangleIcon,
} from '../../components/Icons/Legends';
import { defaultFilters } from './default';

export const biodiversityFiltersToShow = [
  {
    label: 'Proposed fauna underpass',
    value: 'proposed-fauna-underpass',
    legendAlias: 'proposed-fauna-underpass',
    color: '#004000',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/Biodiversity/JBR2HR_Proposed fauna underpass.geojson',
        type: 'line',
        paint: {
          'line-color': '#004000',
          'line-width': 3,
        },
      },
    ],
    orderLayout: 1,
  },
  {
    label: 'Connectivity zones',
    value: 'connectivity-zones',
    legendAlias: 'connectivity-zones',
    color: '#00AA45',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/Biodiversity/JBR2HR_Connectivity zones.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#00AA45',
          'fill-opacity': 0.2,
        },
      },
      {
        sourceUrl:
          '/data/geojson/Biodiversity/JBR2HR_Connectivity zones.geojson',
        type: 'line',
        paint: {
          'line-color': '#00AA45',
          'line-width': 2,
        },
      },
    ],
    orderLayout: 9,
  },
  {
    label: 'Study area',
    value: 'study-area',
    legendAlias: 'study-area',
    color: '#E8D0B5',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl: '/data/geojson/Biodiversity/JBR2HR_Bio_Study area.geojson',
        type: 'line',
        paint: {
          'line-color': '#22272B',
          'line-width': 2,
        },
      },
    ],
    orderLayout: 11,
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
    label: 'Proposed fauna underpass',
    value: 'proposed-fauna-underpass',
    icon: <ProposedFaunaUnderpass />,
  },
  {
    label: 'Connectivity zones',
    value: 'connectivity-zones',
    icon: <ConnectivityZones />,
  },
  {
    label: 'Study area',
    value: 'study-area',
    icon: <BiodiversityStudyArea />,
  },
];

export const plantCommunityTypesFiltersToShow = [
  {
    label: 'PCT 3267',
    value: 'pct-3267',
    legendAlias: 'pct-3267',
    color: '#004000',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/Biodiversity/PCTs/JBR2HR_EasternPCT_3267.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#004000',
          'fill-opacity': 0.5,
        },
      },
    ],
    orderLayout: 1,
  },
  {
    label: 'PCT 3271',
    value: 'pct-3271',
    legendAlias: 'pct-3271',
    color: '#00AA45',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/Biodiversity/PCTs/JBR2HR_EasternPCT_3271.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#2E808E',
          'fill-opacity': 0.5,
        },
      },
    ],
    orderLayout: 2,
  },
  {
    label: 'PCT 3273',
    value: 'pct-3273',
    legendAlias: 'pct-3273',
    color: '#8055F1',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/Biodiversity/PCTs/JBR2HR_EasternPCT_3273.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#8055F1',
          'fill-opacity': 0.5,
        },
      },
    ],
    orderLayout: 3,
  },
  {
    label: 'PCT 3330 (CE)',
    value: 'pct-3330-ce',
    legendAlias: 'pct-3330-ce',
    color: '#D7153A',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/Biodiversity/PCTs/JBR2HR_EasternPCT_3330.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#D7153A',
          'fill-opacity': 0.5,
        },
      },
    ],
    orderLayout: 4,
  },
  {
    label: 'PCT 3654',
    value: 'pct-3654',
    legendAlias: 'pct-3654',
    color: '#F3631B',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/Biodiversity/PCTs/JBR2HR_EasternPCT_3654.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#F3631B',
          'fill-opacity': 0.5,
        },
      },
    ],
    orderLayout: 5,
  },
  {
    label: 'PCT 3588',
    value: 'pct-3588',
    legendAlias: 'pct-3588',
    color: '#146CFD',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/Biodiversity/PCTs/JBR2HR_EasternPCT_3588.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#146CFD',
          'fill-opacity': 0.5,
        },
      },
    ],
    orderLayout: 6,
  },
  {
    label: '(CE) – Critically endangered',
    value: 'critically-endangered',
    legendAlias: 'critically-endangered',
    color: '#D7153A',
  },
];

export const plantCommunityTypesLegends = [
  {
    title: 'Plant community types (PCTs)',
    label: 'Plant community types',
    value: 'title-plant-community-types',
    icon: '',
    twoColumnLayout: true,
  },
  {
    label: 'PCT 3267',
    value: 'pct-3267',
    icon: rectangleIcon('#004000'),
  },
  {
    label: 'PCT 3271',
    value: 'pct-3271',
    icon: rectangleIcon('#2E808E'),
  },
  {
    label: 'PCT 3273',
    value: 'pct-3273',
    icon: rectangleIcon('#8055F1'),
  },
  {
    label: 'PCT 3330 (CE)',
    value: 'pct-3330-ce',
    icon: rectangleIcon('#D7153A'),
  },
  {
    label: 'PCT 3654',
    value: 'pct-3654',
    icon: rectangleIcon('#F3631B'),
  },
  {
    label: 'PCT 3588',
    value: 'pct-3588',
    icon: rectangleIcon('#146CFD'),
  },
  {
    label: '(CE) – Critically endangered',
    value: 'critically-endangered',
    icon: '',
  },
];

export const biodiversityFilters = [
  ...defaultFilters,
  {
    label: 'Biodiversity',
    value: 'biodiversity',
    legendAlias: 'biodiversity',
    color: '#00AA45',
    tickerColor: '#FFFFFF',
    filtersToShow: [...biodiversityFiltersToShow],
    legendsToShow: [...biodiversityLegends],
    geojson: [],
    orderLayout: 2,
  },
  {
    label: 'Plant community types',
    value: 'plant-community-types',
    legendAlias: 'plant-community-types',
    filtersToShow: [...plantCommunityTypesFiltersToShow],
    legendsToShow: [...plantCommunityTypesLegends],
    color: '#00AA45',
    tickerColor: '#FFFFFF',
    orderLayout: 3,
  },
];
