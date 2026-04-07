import {
  OperationalBoundary,
  ConceptDesign,
  SuburbsAndLocalities,
  Drainage,
  Pavement,
  DrainageBasins,
  LocalRoads,
  RegionalRoads,
  StateRoads,
  Riverlines,
  Watercourses,
  rectangleIcon,
  HydroArea,
} from '../../components/Icons/Legends';

export const keyFeaturesFilters = [
  {
    label: 'Concept design',
    value: 'concept-design',
    legendAlias: 'concept-design',
    orderLayout: 6,
    color: '#A4A7A9',
    tickerColor: '#000000',
    geojson: [
      {
        sourceUrl: '/data/geojson/Key features/JBR2HR_Concept design.geojson',
        type: 'line',
        paint: {
          'line-color': '#A4A7A9',
          'line-width': 2,
        },
      },
    ],
  },
  {
    label: 'Drainage',
    value: 'drainage',
    legendAlias: 'drainage',
    orderLayout: 3,
    color: '#146CFD',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl: '/data/geojson/Key features/JBR2HR_Drainage.geojson',
        type: 'line',
        paint: {
          'line-color': '#146CFD',
          'line-width': 3,
        },
      },
    ],
  },
  {
    label: 'Operational boundary',
    value: 'operational-boundary',
    legendAlias: 'operational-boundary',
    orderLayout: 4,
    color: '#FAAF05',
    tickerColor: '#000000',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/Key features/JBR2HR_Operational boundary.geojson',
        type: 'line',
        paint: {
          'line-color': '#FAAF05',
          'line-width': 3,
        },
      },
    ],
  },
  {
    label: 'Drainage basins 15/9',
    value: 'drainage-basins-15-9',
    legendAlias: 'drainage-basins',
    orderLayout: 10,
    color: '#0B3F47',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/Key features/JBR2HR_Drainage basins_20250915.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#0B3F47',
          'fill-opacity': 1,
        },
      },
    ],
  },
  {
    label: 'Drainage basins 22/9',
    value: 'drainage-basins-22-9',
    legendAlias: 'drainage-basins',
    orderLayout: 11,
    color: '#0B3F47',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/Key features/JBR2HR_Drainage basins_20250922.geojson',
        type: 'line',
        paint: {
          'line-color': '#0B3F47',
          'line-width': 2,
        },
      },
    ],
  },
  {
    label: 'Pavement',
    value: 'pavement',
    legendAlias: 'pavement',
    orderLayout: 7,
    color: '#767C7F',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl: '/data/geojson/Key features/JBR2HR_Pavement.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#767C7F',
          'fill-opacity': 1,
        },
      },
    ],
  },
];

export const generalFilters = [
  {
    label: 'Local roads',
    value: 'local-roads',
    legendAlias: 'local-roads',
    color: '#CDD3D6',
    tickerColor: '#000000',
    geojson: [
      {
        sourceUrl: '/data/geojson/General/JBR2HR_Local roads.geojson',
        type: 'line',
        paint: {
          'line-color': '#cdd3d6',
          'line-opacity': 1,
          'line-width': 1,
        },
      },
    ],
    orderLayout: 1,
  },
  {
    label: 'Regional roads',
    value: 'regional-roads',
    legendAlias: 'regional-roads',
    color: '#CDD3D6',
    tickerColor: '#000000',
    geojson: [
      {
        sourceUrl: '/data/geojson/General/JBR2HR_Regional roads.geojson',
        type: 'line',
        paint: {
          'line-color': '#cdd3d6',
          'line-opacity': 1,
          'line-width': 2,
        },
      },
    ],
    orderLayout: 2,
  },
  {
    label: 'State roads',
    value: 'state-roads',
    legendAlias: 'state-roads',
    color: '#CDD3D6',
    tickerColor: '#000000',
    geojson: [
      {
        sourceUrl: '/data/geojson/General/JBR2HR_State roads.geojson',
        type: 'line',
        paint: {
          'line-color': '#cdd3d6',
          'line-opacity': 1,
          'line-width': 3,
        },
      },
    ],
    orderLayout: 3,
  },
  {
    label: 'Suburbs and localities',
    value: 'suburbs-and-localities',
    legendAlias: 'suburbs-and-localities',
    orderLayout: 4,
    color: '#486F75',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/General/JBR2HR_Suburbs and localities.geojson',
        type: 'line',
        paint: {
          'line-color': '#486f75',
          'line-opacity': 1,
        },
      },
    ],
  },
  {
    label: 'Riverlines',
    value: 'riverlines',
    legendAlias: 'riverlines',
    color: '#2E808E',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl: '/data/geojson/General/JBR2HR_River lines.geojson',
        type: 'line',
        paint: {
          'line-color': '#2E808E',
          'line-width': 2,
        },
      },
    ],
    orderLayout: 5,
  },
  {
    label: 'Watercourses',
    value: 'water-courses',
    legendAlias: 'water-courses',
    color: '#0B3F47',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl: '/data/geojson/General/JBR2HR_Watercourses.geojson',
        type: 'line',
        paint: {
          'line-color': '#0B3F47',
          'line-width': 3,
          'line-dasharray': [0.9, 0.75],
        },
      },
    ],
    orderLayout: 6,
  },
  {
    label: 'National parks',
    value: 'national-parks',
    legendAlias: 'national-parks',
    color: '#00AA45',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl: '/data/geojson/General/JBR2HR_National parks.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#00AA45',
          'fill-opacity': 0.3,
        },
      },
    ],
    orderLayout: 7,
  },
  {
    label: 'State forests',
    value: 'state-forests',
    legendAlias: 'state-forests',
    color: '#004000',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl: '/data/geojson/General/JBR2HR_State forests.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#004000',
          'fill-opacity': 0.3,
        },
      },
    ],
    orderLayout: 8,
    dontShowInFilters: false,
  },
  {
    label: 'Hydro area',
    value: 'hydro-area',
    legendAlias: 'hydro-area',
    color: '#146CFD',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl: '/data/geojson/General/JBR2HR_Hydro area.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#146CFD',
          'fill-opacity': 0.4,
        },
      },
    ],
    orderLayout: 9,
  },
];

export const keyFeaturesLegends = [
  {
    title: 'Key features',
    label: 'Key features',
    value: 'title-key-features',
    icon: '',
  },
  {
    label: 'Concept design',
    value: 'concept-design',
    icon: <ConceptDesign />,
  },
  {
    label: 'Drainage',
    value: 'drainage',
    icon: <Drainage />,
  },
  {
    label: 'Operational boundary',
    value: 'operational-boundary',
    icon: <OperationalBoundary />,
  },
  {
    label: 'Drainage basins',
    value: 'drainage-basins',
    icon: <DrainageBasins />,
  },
  {
    label: 'Pavement',
    value: 'pavement',
    icon: <Pavement />,
  },
  {
    label: 'Suburbs and localities',
    value: 'suburbs-and-localities',
    icon: <SuburbsAndLocalities />,
  },
];

export const generalLegends = [
  {
    title: 'General',
    label: 'General',
    value: 'title-general',
    icon: '',
  },
  {
    label: 'Local roads',
    value: 'local-roads',
    icon: <LocalRoads />,
  },
  {
    label: 'Regional roads',
    value: 'regional-roads',
    icon: <RegionalRoads />,
  },
  {
    label: 'State roads',
    value: 'state-roads',
    icon: <StateRoads />,
  },
  {
    label: 'Suburbs and localities',
    value: 'suburbs-and-localities',
    icon: <SuburbsAndLocalities />,
  },
  {
    label: 'Riverlines',
    value: 'riverlines',
    icon: <Riverlines />,
  },
  {
    label: 'Watercourses',
    value: 'water-courses',
    icon: <Watercourses />,
  },
  {
    label: 'National parks',
    value: 'national-parks',
    icon: rectangleIcon('#00AA454D'),
  },
  {
    label: 'State forests',
    value: 'state-forests',
    icon: rectangleIcon('#0040004D'),
  },
  {
    label: 'Hydro area',
    value: 'hydro-area',
    icon: <HydroArea />,
  },
];
