import {
  TruckParking,
  BusStop,
  SpeedLimit100,
  SpeedLimit80,
  SpeedLimit60,
  LILOIntersections,
  InfoIcon,
} from '../../components/Icons/Legends';
import { defaultFilters } from './default';

export const trafficAndTransportFiltersToShow = [
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
    orderLayout: 1,
  },
  {
    label: 'New bus stop',
    value: 'new-bus-stop',
    legendAlias: 'new-bus-stop',
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
    orderLayout: 2,
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
    orderLayout: 3,
  },
  {
    label: 'New truck parking area',
    value: 'new-truck-parking-area',
    legendAlias: 'new-truck-parking-area',
    color: '#0086C4',
    tickerColor: '#FFFFFF',
    geojson: [],
    markers: [
      {
        id: '1',
        coordinates: [150.57910751137211, -35.01967579768026],
        iconComponent: <TruckParking />,
        text: 'Northbound truck parking area',
        isTooltip: true,
      },
      {
        id: '2',
        coordinates: [150.57972791899448, -35.02999823619622],
        iconComponent: <TruckParking />,
        text: 'Southbound truck parking area',
        isTooltip: true,
      },
    ],
    orderLayout: 4,
  },
];

export const trafficAndTransportLegends = [
  {
    title: 'Traffic and transport',
    label: 'Traffic and transport',
    value: 'title-traffic-and-transport',
  },
  {
    label: 'Speed limit change',
    value: 'speed-limit-change',
    icon: <SpeedLimit100 />,
  },
  {
    label: 'New bus stop',
    value: 'new-bus-stop',
    icon: <BusStop />,
  },
  {
    label: 'New truck parking area',
    value: 'new-truck-parking-area',
    icon: <TruckParking />,
  },
  {
    label: 'Left-in, left-out intersection',
    value: 'lilo-intersections',
    icon: <LILOIntersections />,
  },
];

export const trafficAndTransportFilters = [
  ...defaultFilters,
  {
    label: 'Traffic and transport',
    value: 'traffic-and-transport',
    legendAlias: 'traffic-and-transport',
    color: '#146CFD',
    filtersToShow: [...trafficAndTransportFiltersToShow],
    legendsToShow: [...trafficAndTransportLegends],
    tickerColor: '#FFFFFF',
    geojson: [],
    markers: [],
    orderLayout: 3,
  },
];
