import {
  ReportingLocationsCulverts,
  ExistingFloodDepth1AEP,
  ExistingCulverts,
  WaterCatchment,
  FloodCatchments,
  OperationalFloodDepth1AEP,
  TUFLOWModelExtent,
  NewCulverts,
  rectangleIcon,
} from '../../components/Icons/Legends';
import { defaultFilters } from './default';

export const hydrologyAndFloodingFiltersToShow = [
  {
    label: 'TUFLOW model extent/study area',
    value: 'tuflow-model-extent-study-area',
    legendAlias: 'tuflow-model-extent-study-area',
    color: '#2E808E',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/Hydrology and flooding/JBR2HR_TUFLOW extent.geojson',
        type: 'line',
        paint: {
          'line-color': '#22272B',
          'line-width': 2,
        },
      },
    ],
    orderLayout: 1,
  },
  {
    label: 'New culverts',
    value: 'new-culverts',
    legendAlias: 'new-culverts',
    color: '#8055F1',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/Hydrology and flooding/JBR2HR_New culverts.geojson',
        type: 'line',
        paint: {
          'line-color': '#22272B',
          'line-width': 12,
        },
      },
      {
        sourceUrl:
          '/data/geojson/Hydrology and flooding/JBR2HR_New culverts.geojson',
        type: 'line',
        paint: {
          'line-color': '#A8EDB3',
          'line-width': 4,
        },
      },
    ],
    orderLayout: 2,
  },
  // {
  //   label: 'Water catchment',
  //   value: 'water-catchment',
  //   legendAlias: 'water-catchment',
  //   color: '#8CE0FF',
  //   tickerColor: '#FFFFFF',
  //   geojson: [
  //     {
  //       sourceUrl:
  //         '/data/geojson/Hydrology and flooding/JBR2HR_Water catchment.geojson',
  //       type: 'fill',
  //       paint: {
  //         'fill-color': '#8CE0FF',
  //         'fill-opacity': 0.2,
  //       },
  //     },
  //   ],
  //   orderLayout: 4,
  // },
  // {
  //   label: 'Flood catchments',
  //   value: 'flood-catchments',
  //   legendAlias: 'flood-catchments',
  //   color: '#8CDBE5',
  //   tickerColor: '#FFFFFF',
  //   geojson: [
  //     {
  //       sourceUrl:
  //         '/data/geojson/Hydrology and flooding/JBR2HR_Flood catchments.geojson',
  //       type: 'fill',
  //       paint: {
  //         'fill-color': '#8CDBE5',
  //         'fill-opacity': 0.4,
  //       },
  //     },
  //   ],
  //   orderLayout: 5,
  // },
];

export const hydrologyAndFloodingLegends = [
  {
    title: 'Hydrology and flooding',
    label: 'Hydrology and flooding',
    value: 'title-hydrology-and-flooding',
  },
  {
    label: 'TUFLOW model extent/study area',
    value: 'tuflow-model-extent-study-area',
    icon: <TUFLOWModelExtent />,
  },
  {
    label: 'New culverts',
    value: 'new-culverts',
    icon: <NewCulverts />,
  },
  // {
  //   label: 'Water catchment',
  //   value: 'water-catchment',
  //   icon: <WaterCatchment />,
  // },
  // {
  //   label: 'Flood catchments',
  //   value: 'flood-catchments',
  //   icon: <FloodCatchments />,
  // },
];

export const oneAEPAffluxFiltersToShow = [
  {
    label: '<= -0.2',
    value: 'one-aep-afflux-operational-vs-existing-0',
    legendAlias: 'one-aep-afflux-operational-vs-existing-0',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/Hydrology and flooding/1-aep-afflux/<= -0.2.GeoJSON',
        type: 'fill',
        paint: {
          'fill-color': '#1122FF',
          'fill-opacity': 0.6,
        },
      },
    ],
    orderLayout: 1,
  },
  {
    label: '-0.2 – -0.1',
    value: 'one-aep-afflux-operational-vs-existing-1',
    legendAlias: 'one-aep-afflux-operational-vs-existing-1',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/Hydrology and flooding/1-aep-afflux/-0.2 - -0.1.GeoJSON',
        type: 'fill',
        paint: {
          'fill-color': '#0081FF',
          'fill-opacity': 0.6,
        },
      },
    ],
    orderLayout: 2,
  },
  {
    label: '-1 - -0.01',
    value: 'one-aep-afflux-operational-vs-existing-2',
    legendAlias: 'one-aep-afflux-operational-vs-existing-2',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/Hydrology and flooding/1-aep-afflux/-1 - -0.01.GeoJSON',
        type: 'fill',
        paint: {
          'fill-color': '#00D5F1',
          'fill-opacity': 0.6,
        },
      },
    ],
    orderLayout: 3,
  },
  {
    label: '-0.01 - 0.01',
    value: 'one-aep-afflux-operational-vs-existing-3',
    legendAlias: 'one-aep-afflux-operational-vs-existing-3',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/Hydrology and flooding/1-aep-afflux/-0.01 - 0.01.GeoJSON',
        type: 'fill',
        paint: {
          'fill-color': '#C9FFE5',
          'fill-opacity': 0.6,
        },
      },
    ],
    orderLayout: 4,
  },
  {
    label: '0.01 - 0.02',
    value: 'one-aep-afflux-operational-vs-existing-4',
    legendAlias: 'one-aep-afflux-operational-vs-existing-4',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/Hydrology and flooding/1-aep-afflux/0.01 - 0.02.GeoJSON',
        type: 'fill',
        paint: {
          'fill-color': '#FFFF1A',
          'fill-opacity': 0.6,
        },
      },
    ],
    orderLayout: 5,
  },
  {
    label: '0.02 - 0.1',
    value: 'one-aep-afflux-operational-vs-existing-5',
    legendAlias: 'one-aep-afflux-operational-vs-existing-5',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/Hydrology and flooding/1-aep-afflux/0.02 - 0.05.GeoJSON',
        type: 'fill',
        paint: {
          'fill-color': '#FF9200',
          'fill-opacity': 0.5,
        },
      },
    ],
    orderLayout: 6,
  },
  {
    label: '0.05 - 0.1',
    value: 'one-aep-afflux-operational-vs-existing-6',
    legendAlias: 'one-aep-afflux-operational-vs-existing-6',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/Hydrology and flooding/1-aep-afflux/0.05 - 0.1.GeoJSON',
        type: 'fill',
        paint: {
          'fill-color': '#FF0000',
          'fill-opacity': 0.4,
        },
      },
    ],
    orderLayout: 7,
  },
  {
    label: '0.1 - 0.2',
    value: 'one-aep-afflux-operational-vs-existing-7',
    legendAlias: 'one-aep-afflux-operational-vs-existing-7',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/Hydrology and flooding/1-aep-afflux/0.1 - 0.2.GeoJSON',
        type: 'fill',
        paint: {
          'fill-color': '#FF0000',
          'fill-opacity': 0.55,
        },
      },
    ],
    orderLayout: 7,
  },
  {
    label: '> 0.2',
    value: 'one-aep-afflux-operational-vs-existing-8',
    legendAlias: 'one-aep-afflux-operational-vs-existing-8',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/Hydrology and flooding/1-aep-afflux/> 0.2.GeoJSON',
        type: 'fill',
        paint: {
          'fill-color': '#CD0000',
          'fill-opacity': 0.6,
        },
      },
    ],
    orderLayout: 8,
  },
];

const oneAEPAffluxLegends = [
  {
    title: '1% AEP afflux - operational vs existing',
    label: '1% AEP afflux - operational vs existing',
    value: 'title-1-percent-aep-afflux-operational-vs-existing',
    twoColumnLayout: true,
  },
  {
    label: '<= -0.2',
    value: 'one-aep-afflux-operational-vs-existing-0',
    icon: rectangleIcon('#1122FF'),
  },
  {
    label: '0.02 - 0.05',
    value: 'one-aep-afflux-operational-vs-existing-5',
    icon: rectangleIcon('#FF9200', 0.5),
  },
  {
    label: '-0.2 –  -0.1',
    value: 'one-aep-afflux-operational-vs-existing-1',
    icon: rectangleIcon('#0081FF'),
  },
  {
    label: '0.05 – 0.1',
    value: 'one-aep-afflux-operational-vs-existing-6',
    icon: rectangleIcon('#FF0000', 0.4),
  },
  {
    label: '-1 –  -0.01',
    value: 'one-aep-afflux-operational-vs-existing-2',
    icon: rectangleIcon('#00D5F1'),
  },
  {
    label: '0.1 – 0.2',
    value: 'one-aep-afflux-operational-vs-existing-7',
    icon: rectangleIcon('#FF0000', 0.55),
  },
  {
    label: '-0.01 – 0.01',
    value: 'one-aep-afflux-operational-vs-existing-3',
    icon: rectangleIcon('#C9FFE5'),
  },
  {
    label: '> 0.2',
    value: 'one-aep-afflux-operational-vs-existing-8',
    icon: rectangleIcon('#CD0000', 0.6),
  },
  {
    label: '0.01 – 0.02',
    value: 'one-aep-afflux-operational-vs-existing-4',
    icon: rectangleIcon('#FFFF1A'),
  },
];

export const hydrologyAndFloodingFilters = [
  ...defaultFilters,
  {
    label: 'Hydrology and flooding',
    value: 'hydrology-and-flooding',
    legendAlias: 'hydrology-and-flooding',
    color: '#2E808E',
    tickerColor: '#FFFFFF',
    filtersToShow: [...hydrologyAndFloodingFiltersToShow],
    legendsToShow: [...hydrologyAndFloodingLegends],
    orderLayout: 1,
  },
  {
    label: '1% AEP afflux – operational vs existing',
    value: '1-percent-aep-afflux-operational-vs-existing',
    legendAlias: '1-percent-aep-afflux-operational-vs-existing',
    color: '#2E808E',
    tickerColor: '#FFFFFF',
    filtersToShow: [...oneAEPAffluxFiltersToShow],
    legendsToShow: [...oneAEPAffluxLegends],
    orderLayout: 1,
  },
];
