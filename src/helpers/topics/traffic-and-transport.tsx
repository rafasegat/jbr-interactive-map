import { conceptDesignFilters, conceptDesignLegends } from './concept-design';
import {
  TrafficCounterLocations,
  BusStops,
  ExistingCrashData,
  LocalRoads,
  RegionalRoads,
  StateRoads,
} from '../../components/Icons/Legends';

export const trafficAndTransportFilters = [
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
    label: 'Traffic counter locations',
    value: 'traffic-counter-locations',
    legendAlias: 'traffic-counter-locations',
    color: '#002664',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl: '/data/geojson/traffic-and-transport/Traffic counters.json',
        type: 'circle',
        paint: {
          'circle-radius': 4,
          'circle-color': '#ffffff',
          'circle-stroke-color': '#faaf05',
          'circle-stroke-width': 2,
        },
      },
    ],
    hasLineDivider: true,
    orderLayout: 3,
  },
  {
    label: 'Bus stops',
    value: 'bus-stops',
    legendAlias: 'bus-stops',
    color: '#50B0EA',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl: '/data/geojson/traffic-and-transport/Bus stops.json',
        type: 'circle',
        paint: {
          'circle-radius': 4,
          'circle-color': '#ffffff',
          'circle-stroke-color': 'blue',
          'circle-stroke-width': 2,
        },
      },
    ],
    orderLayout: 4,
  },
  {
    label: 'Existing crash data',
    value: 'existing-crash-data',
    legendAlias: 'existing-crash-data',
    color: '#D7153A',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/traffic-and-transport/Existing crash data.json',
        type: 'circle',
        paint: {
          'circle-radius': 4,
          'circle-color': '#ffffff',
          'circle-stroke-color': '#d7153a',
          'circle-stroke-width': 2,
        },
      },
    ],
    orderLayout: 5,
  },
  {
    label: 'Local roads',
    value: 'local-roads',
    legendAlias: 'local-roads',
    color: '#CDD3D6',
    tickerColor: '#000000',
    geojson: [
      {
        sourceUrl: '/data/geojson/traffic-and-transport/Local roads.json',
        type: 'line',
        paint: {
          'line-color': '#cdd3d6',
          'line-opacity': 1,
          'line-width': 1,
        },
      },
    ],
    orderLayout: 6,
  },
  {
    label: 'Regional roads',
    value: 'regional-roads',
    legendAlias: 'regional-roads',
    color: '#CDD3D6',
    tickerColor: '#000000',
    geojson: [
      {
        sourceUrl: '/data/geojson/traffic-and-transport/Regional roads.json',
        type: 'line',
        paint: {
          'line-color': '#cdd3d6',
          'line-opacity': 1,
          'line-width': 2,
        },
      },
    ],
    orderLayout: 7,
  },
  {
    label: 'State roads',
    value: 'state-roads',
    legendAlias: 'state-roads',
    color: '#CDD3D6',
    tickerColor: '#000000',
    geojson: [
      {
        sourceUrl: '/data/geojson/traffic-and-transport/State roads.json',
        type: 'line',
        paint: {
          'line-color': '#cdd3d6',
          'line-opacity': 1,
          'line-width': 3,
        },
      },
    ],
    orderLayout: 8,
  },
];

export const trafficAndTransportLegends = [
  {
    title: 'Traffic and transport',
    label: 'title',
    value: 'title',
  },
  {
    label: 'Traffic counter locations',
    value: 'traffic-counter-locations',
    icon: <TrafficCounterLocations />,
  },
  {
    label: 'Bus stops',
    value: 'bus-stops',
    icon: <BusStops />,
  },
  {
    label: 'Existing crash data',
    value: 'existing-crash-data',
    icon: <ExistingCrashData />,
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
];
