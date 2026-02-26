import {
  ReportingLocationsCulverts,
  Riverlines,
  ExistingFloodDepth1AEP,
  ExistingCulverts,
  WaterCatchment,
  FloodCatchments,
  Watercourses,
  HydroArea,
  TUFLOWModelExtent,
} from '../../components/Icons/Legends';
import { defaultFilters } from './default';

export const hydrologyAndFloodingFilters = [
  ...defaultFilters,
  {
    label: 'Reporting locations/existing culverts',
    value: 'reporting-locations-existing-culverts',
    legendAlias: 'reporting-locations-existing-culverts',
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
          'line-dasharray': [1, 2],
        },
      },
    ],
    orderLayout: 4,
  },
  {
    label: 'Existing culverts',
    value: 'existing-culverts',
    legendAlias: 'existing-culverts',
    color: '#002664',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/hydrology-and-flooding/Existing Culverts.geojson',
        type: 'line',
        paint: {
          'line-color': '#002664',
          'line-width': 3,
        },
      },
    ],
    orderLayout: 5,
  },
  {
    label: 'Riverlines',
    value: 'riverlines',
    legendAlias: 'riverlines',
    color: '#8CE0FF',
    tickerColor: '#000000',
    geojson: [
      {
        sourceUrl: '/data/geojson/hydrology-and-flooding/River Lines.geojson',
        type: 'line',
        paint: {
          'line-color': '#8CE0FF',
          'line-width': 2,
        },
      },
    ],
    orderLayout: 6,
  },
  {
    label: 'Watercourses',
    value: 'water-courses',
    legendAlias: 'water-courses',
    color: '#8CE0FF',
    tickerColor: '#000000',
    geojson: [
      {
        sourceUrl: '/data/geojson/hydrology-and-flooding/Water Courses.geojson',
        type: 'line',
        paint: {
          'line-color': '#8CE0FF',
          'line-width': 3,
          'line-dasharray': [1, 2],
        },
      },
    ],
    orderLayout: 7,
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
    orderLayout: 9,
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
    orderLayout: 10,
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
    orderLayout: 11,
  },
];

export const hydrologyAndFloodingLegends = [
  {
    title: 'Hydrology and flooding',
    label: 'title',
    value: 'title',
  },
  {
    label: 'Reporting locations/existing culverts',
    value: 'reporting-locations-existing-culverts',
    icon: <ReportingLocationsCulverts />,
  },
  {
    label: 'Existing flood depth (1% AEP)',
    value: 'existing-flood-depth-1-aep',
    icon: <ExistingFloodDepth1AEP />,
  },
  {
    label: 'Existing culverts',
    value: 'existing-culverts',
    icon: <ExistingCulverts />,
  },
  {
    label: 'Riverlines',
    value: 'riverlines',
    icon: <Riverlines />,
  },
  {
    label: 'Watercourses',
    value: 'water-courses',
    icon: <Watercourses />,
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
    label: 'Hydro area',
    value: 'hydro-area',
    icon: <HydroArea />,
  },
  {
    label: 'TUFLOW model extent',
    value: 'tuflow-model-extent',
    icon: <TUFLOWModelExtent />,
  },
];
