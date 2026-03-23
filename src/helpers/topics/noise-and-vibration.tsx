import { defaultFilters } from '../topics/default';
import {
  NoiseCatchmentAreas,
  NoiseLoggerLocations,
  NoiseReceivers,
  OperationalNoiseStudyArea,
  ConstructionStudyArea,
} from '../../components/Icons/Legends';

const dbaRect = (color: string) => (
  <svg
    width="24"
    height="12"
    viewBox="0 0 24 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="24" height="12" fill={color} />
  </svg>
);

// dBA level colour ramps – update hex values to match the GeoJSON styling
const worstCaseDbaColors: Record<string, string> = {
  '35': '#ADCCFE',
  '40': '#ACE5CA',
  '45': '#D8F1B0',
  '50': '#FAEDB1',
  '55': '#FBDBA7',
  '60': '#F9C3A5',
  '65': '#EFB0A5',
  '70': '#D98B8F',
  '75': '#C4848C',
  '80': '#A16675',
};

const opNoiseDayDbaColors: Record<string, string> = {
  '35': '#ADCCFE',
  '40': '#ACE5CA',
  '45': '#D8F1B0',
  '50': '#FAEDB1',
  '55': '#FBDBA7',
  '60': '#F9C3A5',
  '65': '#EFB0A5',
  '70': '#D98B8F',
  '75': '#C4848C',
};

const opNoiseNightDbaColors: Record<string, string> = {
  '35': '#ADCCFE',
  '40': '#ACE5CA',
  '45': '#D8F1B0',
  '50': '#FAEDB1',
  '55': '#FBDBA7',
  '60': '#F9C3A5',
  '65': '#EFB0A5',
  '70': '#D98B8F',
};

const worstCaseLegends = [
  {
    title: 'Worst-case scenario noise contours',
    label: 'title',
    value: 'title-worst-case-contours',
    twoColumnLayout: true,
  },
  {
    label: '35 dBA',
    value: 'wc-35-dba',
    icon: dbaRect(worstCaseDbaColors['35']),
  },
  {
    label: '60 dBA',
    value: 'wc-60-dba',
    icon: dbaRect(worstCaseDbaColors['60']),
  },
  {
    label: '40 dBA',
    value: 'wc-40-dba',
    icon: dbaRect(worstCaseDbaColors['40']),
  },
  {
    label: '65 dBA',
    value: 'wc-65-dba',
    icon: dbaRect(worstCaseDbaColors['65']),
  },
  {
    label: '45 dBA',
    value: 'wc-45-dba',
    icon: dbaRect(worstCaseDbaColors['45']),
  },
  {
    label: '70 dBA',
    value: 'wc-70-dba',
    icon: dbaRect(worstCaseDbaColors['70']),
  },
  {
    label: '50 dBA',
    value: 'wc-50-dba',
    icon: dbaRect(worstCaseDbaColors['50']),
  },
  {
    label: '75 dBA',
    value: 'wc-75-dba',
    icon: dbaRect(worstCaseDbaColors['75']),
  },
  {
    label: '55 dBA',
    value: 'wc-55-dba',
    icon: dbaRect(worstCaseDbaColors['55']),
  },
  {
    label: '80 dBA',
    value: 'wc-80-dba',
    icon: dbaRect(worstCaseDbaColors['80']),
  },
];

const opNoiseDayLegends = [
  {
    title: 'Operational noise contours \u2013 Day 2030/40',
    label: 'title',
    value: 'title-op-noise-day',
    twoColumnLayout: true,
  },
  {
    label: '35 dBA',
    value: 'op-day-35-dba',
    icon: dbaRect(opNoiseDayDbaColors['35']),
  },
  {
    label: '60 dBA',
    value: 'op-day-60-dba',
    icon: dbaRect(opNoiseDayDbaColors['60']),
  },
  {
    label: '40 dBA',
    value: 'op-day-40-dba',
    icon: dbaRect(opNoiseDayDbaColors['40']),
  },
  {
    label: '65 dBA',
    value: 'op-day-65-dba',
    icon: dbaRect(opNoiseDayDbaColors['65']),
  },
  {
    label: '45 dBA',
    value: 'op-day-45-dba',
    icon: dbaRect(opNoiseDayDbaColors['45']),
  },
  {
    label: '70 dBA',
    value: 'op-day-70-dba',
    icon: dbaRect(opNoiseDayDbaColors['70']),
  },
  {
    label: '50 dBA',
    value: 'op-day-50-dba',
    icon: dbaRect(opNoiseDayDbaColors['50']),
  },
  {
    label: '75 dBA',
    value: 'op-day-75-dba',
    icon: dbaRect(opNoiseDayDbaColors['75']),
  },
  {
    label: '55 dBA',
    value: 'op-day-55-dba',
    icon: dbaRect(opNoiseDayDbaColors['55']),
  },
];

const opNoiseNightLegends = [
  {
    title: 'Operational noise contours \u2013 Night 2030/40',
    label: 'title',
    value: 'title-op-noise-night',
    twoColumnLayout: true,
  },
  {
    label: '35 dBA',
    value: 'op-night-35-dba',
    icon: dbaRect(opNoiseNightDbaColors['35']),
  },
  {
    label: '55 dBA',
    value: 'op-night-55-dba',
    icon: dbaRect(opNoiseNightDbaColors['55']),
  },
  {
    label: '40 dBA',
    value: 'op-night-40-dba',
    icon: dbaRect(opNoiseNightDbaColors['40']),
  },
  {
    label: '60 dBA',
    value: 'op-night-60-dba',
    icon: dbaRect(opNoiseNightDbaColors['60']),
  },
  {
    label: '45 dBA',
    value: 'op-night-45-dba',
    icon: dbaRect(opNoiseNightDbaColors['45']),
  },
  {
    label: '65 dBA',
    value: 'op-night-65-dba',
    icon: dbaRect(opNoiseNightDbaColors['65']),
  },
  {
    label: '50 dBA',
    value: 'op-night-50-dba',
    icon: dbaRect(opNoiseNightDbaColors['50']),
  },
  {
    label: '70 dBA',
    value: 'op-night-70-dba',
    icon: dbaRect(opNoiseNightDbaColors['70']),
  },
];

export const noiseAndVibrationFilters = [
  ...defaultFilters,
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
          '/data/geojson/noise-and-vibration/Noise logger locations.geojson',
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
          '/data/geojson/noise-and-vibration/Noise catchment areas.geojson',
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
        sourceUrl: '/data/geojson/noise-and-vibration/Noise Receivers.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#941b00',
          'fill-opacity': 0.5,
        },
      },
    ],
  },
  {
    label: 'Operational noise study area',
    value: 'operational-noise-study-area',
    legendAlias: 'operational-noise-study-area',
    icon: <OperationalNoiseStudyArea />,
    orderLayout: 5.1,
    color: '#F3631B',
    tickerColor: '#000000',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/Operational Noise Study Area.geojson',
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
    orderLayout: 5.2,
    color: '#EB8A9C',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/Construction Study Area.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#eb8a9c',
          'fill-opacity': 0.2,
        },
      },
    ],
  },
  {
    label: 'Contours - bridge',
    value: 'contours-bridge',
    legendAlias: 'contours-bridge',
    orderLayout: 6,
    color: '#002664',
    tickerColor: '#FFFFFF',
    dontShowInFilters: true,
    geojson: [
      {
        sourceUrl: '/data/geojson/noise-and-vibration/Contours_Bridge.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#22272b',
          'fill-opacity': 0.2,
        },
      },
    ],
  },
  {
    label: 'Contours - compound',
    value: 'contours-compound',
    legendAlias: 'contours-compound',
    orderLayout: 7,
    color: '#8092b1',
    tickerColor: '#FFFFFF',
    dontShowInFilters: true,
    geojson: [
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/Contours_Compound.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#8092b1',
          'fill-opacity': 0.2,
        },
      },
    ],
  },
  {
    label: 'Contours - corridor',
    value: 'contours-corridor',
    legendAlias: 'contours-corridor',
    orderLayout: 8,
    color: '#8CE0FF',
    tickerColor: '#000000',
    dontShowInFilters: true,
    geojson: [
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/Contours_Corridor.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#8Ce0ff',
          'fill-opacity': 0.15,
        },
      },
    ],
  },
  {
    label: 'Contours - drainage',
    value: 'contours-drainage',
    legendAlias: 'contours-drainage',
    color: '#CBEDFD',
    tickerColor: '#000000',
    orderLayout: 9,
    dontShowInFilters: true,
    geojson: [
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/Contours_Drainage.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#CBEDFD',
          'fill-opacity': 0.15,
        },
      },
    ],
  },
  {
    label: 'Contours - earthworks',
    value: 'contours-earthworks',
    legendAlias: 'contours-earthworks',
    color: '#004000',
    tickerColor: '#FFFFFF',
    orderLayout: 10,
    dontShowInFilters: true,
    geojson: [
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/Contours_Earthworks.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#004000',
          'fill-opacity': 0.15,
        },
      },
    ],
  },
  {
    label: 'Contours - paving',
    value: 'contours-paving',
    legendAlias: 'contours-paving',
    orderLayout: 11,
    color: '#00AA45',
    tickerColor: '#FFFFFF',
    dontShowInFilters: true,
    geojson: [
      {
        sourceUrl: '/data/geojson/noise-and-vibration/Contours_Paving.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#00AA45',
          'fill-opacity': 0.15,
        },
      },
    ],
  },
  {
    label: 'Day 2030',
    value: 'operational-noise-contours-2030-day',
    legendAlias: 'operational-noise-contours-2030-day',
    orderLayout: 11.1,
    color: '#B280A6',
    tickerColor: '#000000',
    dontShowInFilters: true,
    legendsToShow: [...opNoiseDayLegends],
    geojson: [
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/Operational Noise Contours_2030_Day.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#B280A6',
          'fill-opacity': 0.2,
        },
      },
    ],
  },
  {
    label: 'Night 2030',
    value: 'operational-noise-contours-2030-night',
    legendAlias: 'operational-noise-contours-2030-night',
    orderLayout: 11.2,
    color: '#8B4079',
    tickerColor: '#FFFFFF',
    dontShowInFilters: true,
    legendsToShow: [...opNoiseNightLegends],
    geojson: [
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/Operational Noise Contours_2030_Night.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#8B4079',
          'fill-opacity': 0.2,
        },
      },
    ],
  },
  {
    label: 'Day 2040',
    value: 'operational-noise-contours-2040-day',
    legendAlias: 'operational-noise-contours-2040-day',
    orderLayout: 11.3,
    color: '#8055F1',
    tickerColor: '#FFFFFF',
    dontShowInFilters: true,
    legendsToShow: [...opNoiseDayLegends],
    geojson: [
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/Operational Noise Contours_2040_Day.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#8055F1',
          'fill-opacity': 0.2,
        },
      },
    ],
  },
  {
    label: 'Night 2040',
    value: 'operational-noise-contours-2040-night',
    legendAlias: 'operational-noise-contours-2040-night',
    orderLayout: 11.4,
    color: '#734C94',
    tickerColor: '#FFFFFF',
    dontShowInFilters: true,
    legendsToShow: [...opNoiseNightLegends],
    geojson: [
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/Operational Noise Contours_2040_Night.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#734C94',
          'fill-opacity': 0.2,
        },
      },
    ],
  },
  {
    label: 'Potential worst-case construction scenario',
    value: 'potential-worst-case-construction-scenario',
    legendAlias: 'potential-worst-case-construction-scenario',
    orderLayout: 11.5,
    color: '#002664',
    tickerColor: '#FFFFFF',
    dontShowInFilters: true,
    legendsToShow: [...worstCaseLegends],
    geojson: [],
  },
  {
    label: 'Contours - resurfacing',
    value: 'contours-resurfacing',
    legendAlias: 'contours-resurfacing',
    orderLayout: 12,
    color: '#A8EDB3',
    tickerColor: '#000000',
    dontShowInFilters: true,
    geojson: [
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/Contours_Resurfacing.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#A8EDB3',
          'fill-opacity': 0.15,
        },
      },
    ],
  },
  {
    label: 'Contours - road furniture',
    value: 'contours-road-furniture',
    legendAlias: 'contours-road-furniture',
    color: '#DBFADF',
    tickerColor: '#000000',
    orderLayout: 13,
    dontShowInFilters: true,
    geojson: [
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/Contours_Road Furniture.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#DBFADF',
          'fill-opacity': 0.2,
        },
      },
    ],
  },
  {
    label: 'Contours - site',
    value: 'contours-site',
    legendAlias: 'contours-site',
    color: '#22272B',
    tickerColor: '#FFFFFF',
    orderLayout: 14,
    dontShowInFilters: true,
    geojson: [
      {
        sourceUrl: '/data/geojson/noise-and-vibration/Contours_Site.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#22272B',
          'fill-opacity': 0.3,
        },
      },
    ],
  },
  {
    label: 'Contours - utility',
    value: 'contours-utility',
    legendAlias: 'contours-utility',
    color: '#CDD3D6',
    tickerColor: '#000000',
    orderLayout: 15,
    dontShowInFilters: true,
    geojson: [
      {
        sourceUrl: '/data/geojson/noise-and-vibration/Contours_Utility.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#CDD3D6',
          'fill-opacity': 0.2,
        },
      },
    ],
  },
  {
    label: 'Contours - vibration buffers',
    value: 'contours-vibration-buffers',
    legendAlias: 'contours-vibration-buffers',
    color: '#F9B18D',
    tickerColor: '#000000',
    orderLayout: 16,
    dontShowInFilters: true,
    geojson: [
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/Contours_Vibration Buffers.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#F9B18D',
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
    value: 'title-noise-and-vibration',
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
