import { conceptDesignFilters, conceptDesignLegends } from './concept-design';
import {
  ContoursBridge,
  ContoursCompound,
  ContoursCorridor,
  ContoursDrainage,
  ContoursEarthworks,
  ContoursRoadFurniture,
  ContoursResurfacing,
  NoiseCatchmentAreas,
  NoiseLoggerLocations,
  NoiseReceivers,
  ContoursPaving,
  ContoursUtility,
  ContoursSite,
  ContoursVibrationBuffers,
  OperationalNoiseContours2030Day,
  OperationalNoiseContours2030Night,
  OperationalNoiseContours2040Day,
  OperationalNoiseContours2040Night,
  OperationalNoiseStudyArea,
  ConstructionStudyArea,
  LocalGovernmentArea,
  ConceptDesign,
} from '../../components/Icons/Legends';

export const noiseAndVibrationFilters = [
  {
    label: 'Concept design',
    value: 'concept-design',
    legendAlias: 'concept-design',
    icon: <ConceptDesign />,
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
    icon: <LocalGovernmentArea />,
    geojson: [],
    orderLayout: 2,
    color: '#F4B5E6',
    tickerColor: '#000000',
  },
  {
    label: 'Noise logger locations',
    value: 'noise-logger-locations',
    legendAlias: 'noise-logger-locations',
    icon: <NoiseLoggerLocations />,
    color: '#941B00',
    tickerColor: '#FFFFFF',
    orderLayout: 3,
    geojson: [
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/Noise logger locations.json',
        type: 'circle',
        paint: {
          'circle-radius': 4,
          'circle-color': '#ffffff',
          'circle-stroke-color': '#22272b',
          'circle-stroke-width': 2,
        },
      },
    ],
    hasLineDivider: true,
  },
  {
    label: 'Noise catchment areas',
    value: 'noise-catchment-areas',
    legendAlias: 'noise-catchment-areas',
    icon: <NoiseCatchmentAreas />,
    orderLayout: 4,
    color: '#941B00',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/Noise catchment areas.json',
        type: 'line',
        paint: {
          'line-color': '#faaf05',
          'line-opacity': 1,
          'line-width': 2,
        },
      },
    ],
  },
  {
    label: 'Noise receivers',
    value: 'noise-receivers',
    legendAlias: 'noise-receivers',
    icon: <NoiseReceivers />,
    orderLayout: 5,
    color: '#941B00',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl: '/data/geojson/noise-and-vibration/Noise Receivers.json',
        type: 'fill',
        paint: {
          'fill-color': '#941b00',
          'fill-opacity': 0.5,
        },
      },
    ],
  },
  {
    label: 'Contours-bridge',
    value: 'contours-bridge',
    legendAlias: 'contours-bridge',
    icon: <ContoursBridge />,
    orderLayout: 6,
    color: '#002664',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl: '/data/geojson/noise-and-vibration/Contours_Bridge.json',
        type: 'fill',
        paint: {
          'fill-color': '#22272b',
          'fill-opacity': 0.2,
        },
      },
    ],
  },
  {
    label: 'Contours-compound',
    value: 'contours-compound',
    legendAlias: 'contours-compound',
    icon: <ContoursCompound />,
    orderLayout: 7,
    color: '#002664',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl: '/data/geojson/noise-and-vibration/Contours_Compound.json',
        type: 'fill',
        paint: {
          'fill-color': '#8092b1',
          'fill-opacity': 0.2,
        },
      },
    ],
  },
  {
    label: 'Contours-corridor',
    value: 'contours-corridor',
    legendAlias: 'contours-corridor',
    icon: <ContoursCorridor />,
    orderLayout: 8,
    color: '#8CE0FF',
    tickerColor: '#000000',
    geojson: [
      {
        sourceUrl: '/data/geojson/noise-and-vibration/Contours_Corridor.json',
        type: 'fill',
        paint: {
          'fill-color': '#8Ce0ff',
          'fill-opacity': 0.15,
        },
      },
    ],
  },
  {
    label: 'Contours-drainage',
    value: 'contours-drainage',
    legendAlias: 'contours-drainage',
    icon: <ContoursDrainage />,
    color: '#CBEDFD',
    tickerColor: '#000000',
    orderLayout: 9,
    geojson: [
      {
        sourceUrl: '/data/geojson/noise-and-vibration/Contours_Drainage.json',
        type: 'fill',
        paint: {
          'fill-color': '#CBEDFD',
          'fill-opacity': 0.15,
        },
      },
    ],
  },
  {
    label: 'Contours-earthworks',
    value: 'contours-earthworks',
    legendAlias: 'contours-earthworks',
    icon: <ContoursEarthworks />,
    color: '#004000',
    tickerColor: '#FFFFFF',
    orderLayout: 10,
    geojson: [
      {
        sourceUrl: '/data/geojson/noise-and-vibration/Contours_Earthworks.json',
        type: 'fill',
        paint: {
          'fill-color': '#004000',
          'fill-opacity': 0.15,
        },
      },
    ],
  },
  {
    label: 'Contours-paving',
    value: 'contours-paving',
    legendAlias: 'contours-paving',
    icon: <ContoursPaving />,
    orderLayout: 11,
    color: '#00AA45',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl: '/data/geojson/noise-and-vibration/Contours_Paving.json',
        type: 'fill',
        paint: {
          'fill-color': '#00AA45',
          'fill-opacity': 0.15,
        },
      },
    ],
  },
  {
    label: 'Contours-resurfacing',
    value: 'contours-resurfacing',
    legendAlias: 'contours-resurfacing',
    icon: <ContoursResurfacing />,
    orderLayout: 12,
    color: '#A8EDB3',
    tickerColor: '#000000',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/Contours_Resurfacing.json',
        type: 'fill',
        paint: {
          'fill-color': '#A8EDB3',
          'fill-opacity': 0.15,
        },
      },
    ],
  },
  {
    label: 'Contours-road furniture',
    value: 'contours-road-furniture',
    legendAlias: 'contours-road-furniture',
    icon: <ContoursRoadFurniture />,
    color: '#DBFADF',
    tickerColor: '#000000',
    orderLayout: 13,
    geojson: [
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/Contours_Road Furniture.json',
        type: 'fill',
        paint: {
          'fill-color': '#DBFADF',
          'fill-opacity': 0.2,
        },
      },
    ],
  },
  {
    label: 'Contours-site',
    value: 'contours-site',
    legendAlias: 'contours-site',
    icon: <ContoursSite />,
    color: '#22272B',
    tickerColor: '#FFFFFF',
    orderLayout: 14,
    geojson: [
      {
        sourceUrl: '/data/geojson/noise-and-vibration/Contours_Site.json',
        type: 'fill',
        paint: {
          'fill-color': '#22272B',
          'fill-opacity': 0.3,
        },
      },
    ],
  },
  {
    label: 'Contours-utility',
    value: 'contours-utility',
    legendAlias: 'contours-utility',
    icon: <ContoursUtility />,
    color: '#CDD3D6',
    tickerColor: '#000000',
    orderLayout: 15,
    geojson: [
      {
        sourceUrl: '/data/geojson/noise-and-vibration/Contours_Utility.json',
        type: 'fill',
        paint: {
          'fill-color': '#CDD3D6',
          'fill-opacity': 0.2,
        },
      },
    ],
  },
  {
    label: 'Contours-vibration buffers',
    value: 'contours-vibration-buffers',
    legendAlias: 'contours-vibration-buffers',
    icon: <ContoursVibrationBuffers />,
    color: '#F9B18D',
    tickerColor: '#000000',
    orderLayout: 16,
    geojson: [
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/Contours_Vibration Buffers.json',
        type: 'fill',
        paint: {
          'fill-color': '#F9B18D',
          'fill-opacity': 0.2,
        },
      },
    ],
  },
  {
    label: 'Operational noise study area',
    value: 'operational-noise-study-area',
    legendAlias: 'operational-noise-study-area',
    icon: <OperationalNoiseStudyArea />,
    orderLayout: 17,
    color: '#F3631B',
    tickerColor: '#000000',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/Operational Noise Study Area.json',
        type: 'fill',
        paint: {
          'fill-color': '#f3631b',
          'fill-opacity': 0.2,
        },
      },
    ],
  },
  {
    label: 'Construction study area',
    value: 'construction-study-area',
    legendAlias: 'construction-study-area',
    icon: <ConstructionStudyArea />,
    orderLayout: 18,
    color: '#EB8A9C',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/Construction Study Area.json',
        type: 'fill',
        paint: {
          'fill-color': '#eb8a9c',
          'fill-opacity': 0.2,
        },
      },
    ],
  },
];

export const noiseAndVibrationLegends = [
  {
    title: 'Noise and vibration',
    label: 'title',
    value: 'title',
  },
  {
    label: 'Noise logger locations',
    value: 'noise-logger-locations',
    icon: <NoiseLoggerLocations />,
  },
  {
    label: 'Noise catchment areas',
    value: 'noise-catchment-areas',
    icon: <NoiseCatchmentAreas />,
  },
  {
    label: 'Noise receivers',
    value: 'noise-receivers',
    icon: <NoiseReceivers />,
  },
  {
    label: 'Contours-bridge',
    value: 'contours-bridge',
    icon: <ContoursBridge />,
  },
  {
    label: 'Contours-compound',
    value: 'contours-compound',
    icon: <ContoursCompound />,
  },
  {
    label: 'Contours-corridor',
    value: 'contours-corridor',
    icon: <ContoursCorridor />,
  },
  {
    label: 'Contours-drainage',
    value: 'contours-drainage',
    icon: <ContoursDrainage />,
  },
  {
    label: 'Contours-earthworks',
    value: 'contours-earthworks',
    icon: <ContoursEarthworks />,
  },
  {
    label: 'Contours-paving',
    value: 'contours-paving',
    icon: <ContoursPaving />,
  },
  {
    label: 'Contours-resurfacing',
    value: 'contours-resurfacing',
    icon: <ContoursResurfacing />,
  },
  {
    label: 'Contours-road-furniture',
    value: 'contours-road-furniture',
    icon: <ContoursRoadFurniture />,
  },
  {
    label: 'Contours-site',
    value: 'contours-site',
    icon: <ContoursSite />,
  },
  {
    label: 'Contours-utility',
    value: 'contours-utility',
    icon: <ContoursUtility />,
  },
  {
    label: 'Contours-vibration-buffers',
    value: 'contours-vibration-buffers',
    icon: <ContoursVibrationBuffers />,
  },
  {
    label: 'Operational noise contours-2030 Day',
    value: 'operational-noise-contours-2030-day',
    icon: <OperationalNoiseContours2030Day />,
  },
  {
    label: 'Operational noise contours-2030 Night',
    value: 'operational-noise-contours-2030-night',
    icon: <OperationalNoiseContours2030Night />,
  },
  {
    label: 'Operational noise contours-2040 Day',
    value: 'operational-noise-contours-2040-day',
    icon: <OperationalNoiseContours2040Day />,
  },
  {
    label: 'Operational noise contours-2040 Night',
    value: 'operational-noise-contours-2040-night',
    icon: <OperationalNoiseContours2040Night />,
  },
  {
    label: 'Operational noise study area',
    value: 'operational-noise-study-area',
    icon: <OperationalNoiseStudyArea />,
  },
  {
    label: 'Construction study area',
    value: 'construction-study-area',
    icon: <ConstructionStudyArea />,
  },
];
