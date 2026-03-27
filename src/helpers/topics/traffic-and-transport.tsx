import {
  TrafficCounterLocations,
  BusStops,
  LocalRoads,
  RegionalRoads,
  StateRoads,
  TruckParking,
  BusStop,
  SpeedLimit100,
  SpeedLimit80,
  SpeedLimit60,
  LILOIntersections,
} from '../../components/Icons/Legends';
import { defaultFilters } from './default';

export const trafficAndTransportFilters = [
  ...defaultFilters,
  {
    label: 'Traffic counter locations',
    value: 'traffic-counter-locations',
    legendAlias: 'traffic-counter-locations',
    color: '#002664',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/traffic-and-transport/Traffic counters.geojson',
        type: 'circle',
        paint: {
          'circle-radius': 4,
          'circle-color': '#ffffff',
          'circle-stroke-color': '#002664',
          'circle-stroke-width': 2,
        },
      },
    ],
    hasLineDivider: true,
    orderLayout: 3,
  },
  {
    label: 'Speed limit change',
    value: 'speed-limit-change',
    legendAlias: 'speed-limit-change',
    color: '#D7153A',
    tickerColor: '#FFFFFF',
    geojson: [],
    markers: [
      {
        id: '1',
        coordinates: [150.58671981484127, -34.98626138754421],
        iconComponent: <SpeedLimit100 />,
      },
      {
        id: '2',
        coordinates: [150.584594215511, -34.993788663581554],
        iconComponent: <SpeedLimit100 />,
      },
      {
        id: '3',
        coordinates: [150.58111885977118, -35.01231059852982],
        iconComponent: <SpeedLimit100 />,
      },
      {
        id: '4',
        coordinates: [150.57797297255797, -35.02497119522187],
        iconComponent: <SpeedLimit100 />,
      },
      {
        id: '5',
        coordinates: [150.58245266909677, -35.039244590585355],
        iconComponent: <SpeedLimit100 />,
      },
      {
        id: '6',
        coordinates: [150.57922707513515, -35.02817819230388],
        iconComponent: <SpeedLimit80 />,
      },
      {
        id: '7',
        coordinates: [150.58595991304597, -34.98921065560642],
        iconComponent: <SpeedLimit60 />,
      },
      {
        id: '8',
        coordinates: [150.57623529597524, -35.02464969826758],
        iconComponent: <SpeedLimit60 />,
      },
      {
        id: '9',
        coordinates: [150.57907562631323, -35.02774377306538],
        iconComponent: <SpeedLimit60 />,
      },
    ],
    orderLayout: 3,
  },
  {
    label: 'Truck parking',
    value: 'truck-parking',
    legendAlias: 'truck-parking',
    color: '#0086C4',
    tickerColor: '#FFFFFF',
    geojson: [],
    markers: [
      {
        id: '1',
        coordinates: [150.584166030409648, -35.037257919696373],
        iconComponent: <TruckParking />,
      },
      {
        id: '2',
        coordinates: [150.57910751137211, -35.01967579768026],
        iconComponent: <TruckParking />,
      },
    ],
    orderLayout: 4,
  },
  {
    label: 'Bus stops',
    value: 'bus-stops',
    legendAlias: 'bus-stops',
    color: '#50B0EA',
    tickerColor: '#FFFFFF',
    geojson: [],
    markers: [
      {
        id: '1',
        coordinates: [150.57849356178897, -35.02662729594235],
        iconComponent: <BusStop />,
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
        sourceUrl: '/data/geojson/traffic-and-transport/Local roads.geojson',
        type: 'line',
        paint: {
          'line-color': '#cdd3d6',
          'line-opacity': 1,
          'line-width': 1,
        },
      },
    ],
    orderLayout: 7,
  },
  {
    label: 'Regional roads',
    value: 'regional-roads',
    legendAlias: 'regional-roads',
    color: '#CDD3D6',
    tickerColor: '#000000',
    geojson: [
      {
        sourceUrl: '/data/geojson/traffic-and-transport/Regional roads.geojson',
        type: 'line',
        paint: {
          'line-color': '#cdd3d6',
          'line-opacity': 1,
          'line-width': 2,
        },
      },
    ],
    orderLayout: 8,
  },
  {
    label: 'State roads',
    value: 'state-roads',
    legendAlias: 'state-roads',
    color: '#CDD3D6',
    tickerColor: '#000000',
    geojson: [
      {
        sourceUrl: '/data/geojson/traffic-and-transport/State roads.geojson',
        type: 'line',
        paint: {
          'line-color': '#cdd3d6',
          'line-opacity': 1,
          'line-width': 3,
        },
      },
    ],
    orderLayout: 9,
  },
  {
    label: 'LILO intersections',
    value: 'lilo-intersections',
    legendAlias: 'lilo-intersections',
    color: '#00AA45',
    tickerColor: '#FFFFFF',
    geojson: [],
    markers: [
      {
        id: '1',
        coordinates: [150.5832266, -35.0012936],
        iconComponent: <LILOIntersections />,
      },
      {
        id: '2',
        coordinates: [150.583398, -35.0017733],
        iconComponent: <LILOIntersections />,
      },
      {
        id: '3',
        coordinates: [150.580353, -35.0150112],
        iconComponent: <LILOIntersections />,
      },
      {
        id: '4',
        coordinates: [150.5806353, -35.0148864],
        iconComponent: <LILOIntersections />,
      },
    ],
    orderLayout: 10,
  },
];

export const trafficAndTransportLegends = [
  {
    title: 'Traffic and transport',
    label: 'Traffic and transport',
    value: 'title-traffic-and-transport',
  },
  {
    label: 'Traffic counter locations',
    value: 'traffic-counter-locations',
    icon: <TrafficCounterLocations />,
  },
  {
    label: 'Speed limit change',
    value: 'speed-limit-change',
    icon: <SpeedLimit100 />,
  },
  {
    label: 'Truck parking',
    value: 'truck-parking',
    icon: <TruckParking />,
  },
  {
    label: 'Bus stops',
    value: 'bus-stops',
    icon: <BusStops />,
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
    label: 'LILO intersections',
    value: 'lilo-intersections',
    icon: <LILOIntersections />,
  },
];
