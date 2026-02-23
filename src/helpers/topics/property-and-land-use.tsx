import { conceptDesignFilters, conceptDesignLegends } from './concept-design';
import {
  BusStops,
  ExistingCrashData,
  LocalRoads,
} from '../../components/Icons/Legends';

export const propertyAndLandUseFilters = [
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
    label: 'Land use zoning',
    value: 'land-use-zoning',
    legendAlias: 'land-use-zoning',
    color: '#d7153a',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/property-and-land-use/Land Use Zoning.geojson',
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
    label: 'Landscape character areas',
    value: 'landscape-character-areas',
    legendAlias: 'landscape-character-areas',
    color: '#f4b5e6',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/property-and-land-use/Landscape Character Areas.geojson',
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
    label: 'Landscape viewpoints',
    value: 'landscape-viewpoints',
    legendAlias: 'landscape-viewpoints',
    color: '#d912ae',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/property-and-land-use/Landscape Viewpoints.geojson',
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
    label: 'State forests',
    value: 'state-forests',
    legendAlias: 'state-forests',
    color: '#00aa45',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl: '/data/geojson/property-and-land-use/State Forests.geojson',
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

export const propertyAndLandUseLegends = [
  {
    title: 'Property and land use',
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
