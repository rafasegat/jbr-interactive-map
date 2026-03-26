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
        coordinates: [150.584166030409648, -35.037257919696373],
        iconComponent: <BusStop />,
      },
      {
        id: '2',
        coordinates: [150.578774490355016, -35.02292700036989],
        iconComponent: <BusStop />,
      },
      {
        id: '3',
        coordinates: [150.58191485990173, -35.007541960071755],
        iconComponent: <BusStop />,
      },
      {
        id: '4',
        coordinates: [150.584658829823184, -34.994385359921267],
        iconComponent: <BusStop />,
      },
      {
        id: '5',
        coordinates: [150.587570149768737, -34.983071089589203],
        iconComponent: <BusStop />,
      },
      {
        id: '6',
        coordinates: [150.584867409798989, -34.994397210432915],
        iconComponent: <BusStop />,
      },
      {
        id: '7',
        coordinates: [150.578888660182685, -35.023284090182067],
        iconComponent: <BusStop />,
      },
      {
        id: '8',
        coordinates: [150.584419980121822, -35.03705215957276],
        iconComponent: <BusStop />,
      },
      {
        id: '9',
        coordinates: [150.58027895994806, -35.015231920043547],
        iconComponent: <BusStop />,
      },
      {
        id: '10',
        coordinates: [150.587632440537163, -34.983745099985825],
        iconComponent: <BusStop />,
      },
      {
        id: '11',
        coordinates: [150.578987349530365, -35.026047659810445],
        iconComponent: <BusStop />,
      },
      {
        id: '12',
        coordinates: [150.585453700014511, -34.991523269602929],
        iconComponent: <BusStop />,
      },
      {
        id: '13',
        coordinates: [150.583246740455451, -35.00192455962064],
        iconComponent: <BusStop />,
      },
      {
        id: '14',
        coordinates: [150.586211179798596, -34.987806209689552],
        iconComponent: <BusStop />,
      },
      {
        id: '15',
        coordinates: [150.585583740292464, -34.989987489959873],
        iconComponent: <BusStop />,
      },
      {
        id: '16',
        coordinates: [150.584287049798519, -34.996153570046737],
        iconComponent: <BusStop />,
      },
      {
        id: '17',
        coordinates: [150.583352059876944, -35.001326700312482],
        iconComponent: <BusStop />,
      },
      {
        id: '18',
        coordinates: [150.579090310523242, -35.026900700137155],
        iconComponent: <BusStop />,
      },
      {
        id: '19',
        coordinates: [150.582074770358048, -35.032525719683228],
        iconComponent: <BusStop />,
      },
      {
        id: '20',
        coordinates: [150.588356430234313, -34.983525419902151],
        iconComponent: <BusStop />,
      },
      {
        id: '21',
        coordinates: [150.580421960062012, -35.015245719935272],
        iconComponent: <BusStop />,
      },
      {
        id: '22',
        coordinates: [150.584166030409648, -35.037257919696373],
        iconComponent: <BusStop />,
      },
      {
        id: '23',
        coordinates: [150.578825720428767, -35.023096710357756],
        iconComponent: <BusStop />,
      },
      {
        id: '24',
        coordinates: [150.58191485990173, -35.007541960071755],
        iconComponent: <BusStop />,
      },
      {
        id: '25',
        coordinates: [150.584658829823184, -34.994385359921267],
        iconComponent: <BusStop />,
      },
      {
        id: '26',
        coordinates: [150.587548279538936, -34.983071730264129],
        iconComponent: <BusStop />,
      },
      {
        id: '27',
        coordinates: [150.584867409798989, -34.994397210432915],
        iconComponent: <BusStop />,
      },
      {
        id: '28',
        coordinates: [150.584419190525722, -35.037034159649934],
        iconComponent: <BusStop />,
      },
      {
        id: '29',
        coordinates: [150.58027895994806, -35.015231920043547],
        iconComponent: <BusStop />,
      },
      {
        id: '30',
        coordinates: [150.587632440537163, -34.983745099985825],
        iconComponent: <BusStop />,
      },
      {
        id: '31',
        coordinates: [150.580421960062012, -35.015245719935272],
        iconComponent: <BusStop />,
      },
      {
        id: '32',
        coordinates: [150.585453700014511, -34.991523269602929],
        iconComponent: <BusStop />,
      },
      {
        id: '33',
        coordinates: [150.583246740455451, -35.00192455962064],
        iconComponent: <BusStop />,
      },
      {
        id: '34',
        coordinates: [150.586156759865617, -34.987312189910284],
        iconComponent: <BusStop />,
      },
      {
        id: '35',
        coordinates: [150.585583740292464, -34.989987489959873],
        iconComponent: <BusStop />,
      },
      {
        id: '36',
        coordinates: [150.578987349530365, -35.026047659810445],
        iconComponent: <BusStop />,
      },
      {
        id: '37',
        coordinates: [150.583216099865837, -35.001222579624098],
        iconComponent: <BusStop />,
      },
      {
        id: '38',
        coordinates: [150.579090310523242, -35.026900700137155],
        iconComponent: <BusStop />,
      },
      {
        id: '39',
        coordinates: [150.582074770358048, -35.032525719683228],
        iconComponent: <BusStop />,
      },
      {
        id: '40',
        coordinates: [150.588356829938505, -34.983534420017257],
        iconComponent: <BusStop />,
      },
      {
        id: '41',
        coordinates: [150.584287049798519, -34.996153570046737],
        iconComponent: <BusStop />,
      },
      {
        id: '42',
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
    color: '#146CFD',
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
