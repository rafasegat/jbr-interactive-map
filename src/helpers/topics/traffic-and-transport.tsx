import {
  TrafficCounterLocations,
  BusStops,
  ExistingCrashData,
  LocalRoads,
  RegionalRoads,
  StateRoads,
} from '../../components/Icons/Legends';
import { defaultFilters } from './default';
import BusStop from '../../components/Icons/BusStop';

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
        sourceUrl: '/data/geojson/traffic-and-transport/Traffic counters.json',
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
