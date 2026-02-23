import { conceptDesignFilters, conceptDesignLegends } from './concept-design';
import {
  BusStops,
  ExistingCrashData,
  LocalRoads,
} from '../../components/Icons/Legends';

export const hidrologyAndFloodingFilters = [
  {
    label: 'Concept design',
    value: 'concept-design',
    legendAlias: 'concept-design',
    geojson: [],
    filtersToShow: [...conceptDesignFilters],
    legendsToShow: [...conceptDesignLegends],
    orderLayout: 1,
    color: '#002664',
    tickerColor: '#FFFFFF',
  },
  {
    label: 'Local government area',
    value: 'local-government-area',
    legendAlias: 'local-government-area',
    geojson: [],
    orderLayout: 2,
    color: '#F4B5E6',
    tickerColor: '#000000',
  },
  {
    label: 'Existing culverts',
    value: 'existing-culverts',
    legendAlias: 'existing-culverts',
    color: '#d7153a',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/hidrology-and-flooding/Existing Culverts.geojson',
        type: 'line',
        paint: {
          'line-color': '#ffffff',
          'line-width': 2,
        },
      },
    ],
    hasLineDivider: true,
    orderLayout: 3,
  },
  {
    label: 'Existing flood depth 1% AEP',
    value: 'existing-flood-depth-1-aep',
    legendAlias: 'existing-flood-depth-1-aep',
    color: '#f4b5e6',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/hidrology-and-flooding/Existing Flood Depth 1% AEP.geojson',
        type: 'line',
        paint: {
          'line-color': '#ffffff',
          'line-width': 2,
        },
      },
    ],
    orderLayout: 4,
  },
  {
    label: 'Flood catchments',
    value: 'flood-catchments',
    legendAlias: 'flood-catchments',
    color: '#d912ae',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/hidrology-and-flooding/Flood Catchments.geojson',
        type: 'circle',
        paint: {
          'circle-radius': 4,
          'circle-color': '#ffffff',
          'circle-stroke-color': '#22272b',
          'circle-stroke-width': 2,
        },
      },
    ],
    orderLayout: 5,
  },
  {
    label: 'Hydro area',
    value: 'hydro-area',
    legendAlias: 'hydro-area',
    color: '#00aa45',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl: '/data/geojson/hidrology-and-flooding/Hydro Area.geojson',
        type: 'line',
        paint: {
          'line-color': '#ffffff',
          'line-width': 2,
        },
      },
    ],
    orderLayout: 6,
  },
  {
    label: 'National parks',
    value: 'national-parks',
    legendAlias: 'national-parks',
    color: '#0b3f47',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl: '/data/geojson/property-and-land-use/National Parks.geojson',
        type: 'line',
        paint: {
          'line-color': '#ffffff',
          'line-width': 2,
        },
      },
    ],
    orderLayout: 7,
  },
];

export const hidrologyAndFloodingLegends = [
  {
    title: 'Hydrology and flooding',
    label: 'title',
    value: 'title',
  },
  {
    label: 'Land use zoning',
    value: 'land-use-zoning',
    icon: <LocalRoads />,
  },
  {
    label: 'Character areas',
    value: 'character-areas',
    icon: <LocalRoads />,
  },
  {
    label: 'Landscape viewpoints',
    value: 'landscape-viewpoints',
    icon: <BusStops />,
  },
  {
    label: 'State forests',
    value: 'state-forests',
    icon: <ExistingCrashData />,
  },
  {
    label: 'National parks',
    value: 'national-parks',
    icon: <ExistingCrashData />,
  },
];
