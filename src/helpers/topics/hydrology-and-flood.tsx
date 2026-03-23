import {
  ReportingLocationsCulverts,
  Riverlines,
  ExistingFloodDepth1AEP,
  ExistingCulverts,
  WaterCatchment,
  FloodCatchments,
  Watercourses,
  OperationalFloodDepth1AEP,
  HydroArea,
  TUFLOWModelExtent,
  NewCulverts,
} from '../../components/Icons/Legends';
import { defaultFilters } from './default';

export const hydrologyAndFloodingFilters = [
  ...defaultFilters,
  {
    label: 'Reporting locations',
    value: 'reporting-locations',
    legendAlias: 'reporting-locations',
    color: '#002664',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/hydrology-and-flooding/Reporting Locations Existing Culverts.geojson',
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
    label: 'Existing flood depth (1% AEP)',
    value: 'existing-flood-depth-1-aep',
    legendAlias: 'existing-flood-depth-1-aep',
    color: '#002664',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/hydrology-and-flooding/Existing Flood Depth 1 Percent AEP.geojson',
        type: 'line',
        paint: {
          'line-color': '#002664',
          'line-width': 3,
        },
      },
    ],
    orderLayout: 4,
  },
  {
    label: 'Operational flood depth (1% AEP)',
    value: 'operational-flood-depth-1-aep',
    legendAlias: 'operational-flood-depth-1-aep',
    color: '#D912AE',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/hydrology-and-flooding/Operational Flood Depth 1 Percent AEP.geojson',
        type: 'line',
        paint: {
          'line-color': '#D912AE',
          'line-width': 3,
        },
      },
    ],
    orderLayout: 4,
  },
  {
    label: 'Existing culverts',
    value: 'existing-culverts',
    legendAlias: 'existing-culverts',
    color: '',
    tickerColor: '#F3631B',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/hydrology-and-flooding/Existing Culverts.geojson',
        type: 'line',
        paint: {
          'line-color': '#F3631B',
          'line-width': 3,
        },
      },
    ],
    orderLayout: 5,
  },
  {
    label: 'New culverts',
    value: 'new-culverts',
    legendAlias: 'new-culverts',
    color: '',
    tickerColor: '#8055F1',
    geojson: [
      {
        sourceUrl: '/data/geojson/hydrology-and-flooding/New Culverts.geojson',
        type: 'line',
        paint: {
          'line-color': '#8055F1',
          'line-width': 3,
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
    tickerColor: '#000000',
    geojson: [
      {
        sourceUrl: '/data/geojson/hydrology-and-flooding/Water Courses.geojson',
        type: 'line',
        paint: {
          'line-color': '#0B3F47',
          'line-width': 3,
          'line-dasharray': [1, 2],
        },
      },
    ],
    orderLayout: 6,
  },
  {
    label: 'Riverlines',
    value: 'riverlines',
    legendAlias: 'riverlines',
    color: '#2E808E',
    tickerColor: '#000000',
    geojson: [
      {
        sourceUrl: '/data/geojson/hydrology-and-flooding/River Lines.geojson',
        type: 'line',
        paint: {
          'line-color': '#2E808E',
          'line-width': 2,
        },
      },
    ],
    orderLayout: 7,
  },
  {
    label: 'TUFLOW model extent',
    value: 'tuflow-model-extent',
    legendAlias: 'tuflow-model-extent',
    color: '#002664',
    tickerColor: '#000000',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/hydrology-and-flooding/TUFLOW Model Extent.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#002664',
          'fill-opacity': 0.5,
        },
      },
    ],
    orderLayout: 8,
  },
  {
    label: 'Hydro area',
    value: 'hydro-area',
    legendAlias: 'hydro-area',
    color: '#8CE0FF',
    tickerColor: '#000000',
    geojson: [
      {
        sourceUrl: '/data/geojson/hydrology-and-flooding/Hydro Area.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#8CE0FF',
          'fill-opacity': 0.8,
        },
      },
    ],
    orderLayout: 9,
  },
  {
    label: 'Flood catchments',
    value: 'flood-catchments',
    legendAlias: 'flood-catchments',
    color: '#002664',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/hydrology-and-flooding/Flood Catchments.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#002664',
          'fill-opacity': 0.75,
        },
      },
    ],
    orderLayout: 10,
  },
  {
    label: 'Water catchment',
    value: 'water-catchment',
    legendAlias: 'water-catchment',
    color: '#146CFD',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/hydrology-and-flooding/Water Catchment.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#146CFD',
          'fill-opacity': 0.8,
        },
      },
    ],
    orderLayout: 8,
  },
];

export const hydrologyAndFloodingLegends = [
  {
    title: 'Hydrology and flooding',
    label: 'Hydrology and flooding',
    value: 'title-hydrology-and-flooding',
  },
  {
    label: 'Reporting locations',
    value: 'reporting-locations',
    icon: <ReportingLocationsCulverts />,
  },
  {
    label: 'Existing flood depth (1% AEP)',
    value: 'existing-flood-depth-1-aep',
    icon: <ExistingFloodDepth1AEP />,
  },
  {
    label: 'Operational flood depth (1% AEP)',
    value: 'operational-flood-depth-1-aep',
    icon: <OperationalFloodDepth1AEP />,
  },
  {
    label: 'Existing culverts',
    value: 'existing-culverts',
    icon: <ExistingCulverts />,
  },
  {
    label: 'New culverts',
    value: 'new-culverts',
    icon: <NewCulverts />,
  },
  {
    label: 'Watercourses',
    value: 'water-courses',
    icon: <Watercourses />,
  },
  {
    label: 'Riverlines',
    value: 'riverlines',
    icon: <Riverlines />,
  },
  {
    label: 'TUFLOW model extent',
    value: 'tuflow-model-extent',
    icon: <TUFLOWModelExtent />,
  },
  {
    label: 'Hydro area',
    value: 'hydro-area',
    icon: <HydroArea />,
  },
  {
    label: 'Flood catchments',
    value: 'flood-catchments',
    icon: <FloodCatchments />,
  },
  {
    label: 'Water catchment',
    value: 'water-catchment',
    icon: <WaterCatchment />,
  },
];
