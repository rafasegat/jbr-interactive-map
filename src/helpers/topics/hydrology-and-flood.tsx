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
          'line-color': '#8055F1',
          'line-width': 3,
        },
      },
    ],
    orderLayout: 1,
  },
  {
    label: 'Water catchment',
    value: 'water-catchment',
    legendAlias: 'water-catchment',
    color: '#8CE0FF',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/Hydrology and flooding/JBR2HR_Water catchment.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#8CE0FF',
          'fill-opacity': 0.2,
        },
      },
    ],
    orderLayout: 2,
  },
  {
    label: 'Flood catchments',
    value: 'flood-catchments',
    legendAlias: 'flood-catchments',
    color: '#8CDBE5',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/Hydrology and flooding/JBR2HR_Flood catchments.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#8CDBE5',
          'fill-opacity': 0.4,
        },
      },
    ],
    orderLayout: 3,
  },
  {
    label: 'TUFLOW model extent',
    value: 'tuflow-model-extent',
    legendAlias: 'tuflow-model-extent',
    color: '#2E808E',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/Hydrology and flooding/JBR2HR_TUFLOW extent.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#2E808E',
          'fill-opacity': 0.4,
        },
      },
    ],
    orderLayout: 4,
  },
];

export const hydrologyAndFloodingLegends = [
  {
    title: 'Hydrology and flooding',
    label: 'Hydrology and flooding',
    value: 'title-hydrology-and-flooding',
  },
  {
    label: 'New culverts',
    value: 'new-culverts',
    icon: <NewCulverts />,
  },
  {
    label: 'Water catchment',
    value: 'water-catchment',
    icon: <WaterCatchment />,
  },
  {
    label: 'Flood catchments',
    value: 'flood-catchments',
    icon: <FloodCatchments />,
  },
  {
    label: 'TUFLOW model extent',
    value: 'tuflow-model-extent',
    icon: <TUFLOWModelExtent />,
  },
];

export const oneAEPAffluxFiltersToShow = [
  // {
  //   label: '1% AEP afflux – operational vs existing',
  //   value: '1-percent-aep-afflux-operational-vs-existing',
  //   legendAlias: '1-percent-aep-afflux-operational-vs-existing',
  //   color: '#2E808E',
  //   tickerColor: '#FFFFFF',
  //   geojson: [
  //     {
  //       sourceUrl:
  //         '/data/geojson/Hydrology and flooding/JBR2HR_DesignPeakAfflux.tif',
  //       type: 'raster',
  //       source: {
  //         type: 'image',
  //         // [top-left, top-right, bottom-right, bottom-left] as [lng, lat]
  //         coordinates: [
  //           [150.55, -34.96], // top-left
  //           [150.61, -34.96], // top-right
  //           [150.61, -35.06], // bottom-right
  //           [150.55, -35.06], // bottom-left
  //         ],
  //       },
  //       paint: { 'raster-opacity': 0.85 },
  //     },
  //   ],
  //   orderLayout: 1,
  // },
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
    label: '0.02 – 0.1',
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
