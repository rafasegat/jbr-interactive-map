import { defaultFilters } from '../topics/default';
import {
  NoiseLoggerLocations,
  NoiseReceivers,
  OperationalNoiseStudyArea,
  ConstructionStudyArea,
  HumanComfortWorkingDistance,
  rectangleIcon,
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

const paletteColors = {
  35: '#146CFD',
  40: '#2FBF7A',
  45: '#9EDB3A',
  50: '#F2D13D',
  55: '#F5A623',
  60: '#F06A1E',
  65: '#D63A1F',
  70: '#B3161F',
  75: '#8A0A1A',
  80: '#630019',
};

export const noiseAndVibrationFiltersToShow = [
  {
    label: 'Noise logger locations',
    value: 'noise-logger-locations',
    legendAlias: 'noise-logger-locations',
    icon: NoiseLoggerLocations('NL'),
    orderLayout: 3,
    markers: [
      {
        id: 'NL1',
        coordinates: [150.58463314451248, -34.996401975496916],
        iconComponent: NoiseLoggerLocations('NL1'),
      },
      {
        id: 'NL1B',
        coordinates: [150.5872673513604, -34.98568097919864],
        iconComponent: NoiseLoggerLocations('NL1B'),
      },
      {
        id: 'NL2',
        coordinates: [150.58046947049104, -35.01238187120289],
        iconComponent: NoiseLoggerLocations('NL2'),
      },
      {
        id: 'NL3',
        coordinates: [150.57890267997055, -35.02861119259311],
        iconComponent: NoiseLoggerLocations('NL3'),
      },
      {
        id: 'NL4',
        coordinates: [150.58483792606646, -35.05133036848399],
        iconComponent: NoiseLoggerLocations('NL4'),
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
          '/data/geojson/Noise and vibration/JBR2HR_Operational noise study area.geojson',
        type: 'line',
        paint: {
          'line-color': '#694800',
          'line-width': 2,
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
          '/data/geojson/Noise and vibration/JBR2HR_Prelim construction study area.geojson',
        type: 'line',
        paint: {
          'line-color': '#22272B',
          'line-width': 2,
        },
      },
    ],
  },
  {
    label: 'Human comfort working distance',
    value: 'human-comfort-working-distance',
    legendAlias: 'human-comfort-working-distance',
    icon: <HumanComfortWorkingDistance />,
    orderLayout: 5.2,
    color: '#8055F1',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/Noise and vibration/JBR2HR_Human comfort working distance.geojson',
        type: 'line',
        paint: {
          'line-color': '#8055F1',
          'line-width': 3,
          'line-dasharray': [0.9, 0.75],
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
        sourceUrl:
          '/data/geojson/Noise and vibration/JBR2HR_Noise sensitive receivers.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#941b00',
          'fill-opacity': 0.5,
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
    icon: NoiseLoggerLocations('NL'),
  },
  {
    label: 'Operational noise study area (minimum)',
    value: 'operational-noise-study-area',
    icon: <OperationalNoiseStudyArea />,
  },
  {
    label: 'Construction study area',
    value: 'construction-study-area',
    icon: <ConstructionStudyArea />,
  },
  {
    label: 'Human comfort working distance',
    value: 'human-comfort-working-distance',
    icon: <HumanComfortWorkingDistance />,
  },
  {
    label: 'Noise receivers',
    value: 'noise-receivers',
    icon: <NoiseReceivers />,
  },
];

export const noiseCatchmentAreasFiltersToShow = [
  {
    label: 'NCA1',
    value: 'nca1',
    legendAlias: 'nca1',
    orderLayout: 1,
    color: '#FFB8C1',
    tickerColor: '#000000',
    geojson: [
      {
        sourceUrl: '/data/geojson/Noise and vibration/NCAs/JBR2HR_NCA1.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#FFB8C1',
          'fill-opacity': 0.5,
        },
      },
    ],
  },
  {
    label: 'NCA2',
    value: 'nca2',
    legendAlias: 'nca2',
    orderLayout: 2,
    color: '#CBF4D1',
    tickerColor: '#000000',
    geojson: [
      {
        sourceUrl: '/data/geojson/Noise and vibration/NCAs/JBR2HR_NCA2.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#CBF4D1',
          'fill-opacity': 0.5,
        },
      },
    ],
  },
  {
    label: 'NCA3',
    value: 'nca3',
    legendAlias: 'nca3',
    orderLayout: 3,
    color: '#FEF1C2',
    tickerColor: '#000000',
    geojson: [
      {
        sourceUrl: '/data/geojson/Noise and vibration/NCAs/JBR2HR_NCA3.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#FEF1C2',
          'fill-opacity': 0.5,
        },
      },
    ],
  },
  {
    label: 'NCA4',
    value: 'nca4',
    legendAlias: 'nca4',
    orderLayout: 4,
    color: '#BAECFF',
    tickerColor: '#000000',
    geojson: [
      {
        sourceUrl: '/data/geojson/Noise and vibration/NCAs/JBR2HR_NCA4.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#BAECFF',
          'fill-opacity': 0.5,
        },
      },
    ],
  },
];

const noiseCatchmentAreasLegends = [
  {
    title: 'Noise catchment areas',
    label: 'title',
    value: 'title-noise-catchment-areas',
    twoColumnLayout: true,
  },
  {
    label: 'NCA1',
    value: 'nca1',
    icon: rectangleIcon('#FFB8C1'),
  },
  {
    label: 'NCA3',
    value: 'nca3',
    icon: rectangleIcon('#FDE79A'),
  },
  {
    label: 'NCA2',
    value: 'nca2',
    icon: rectangleIcon('#A8EDB3'),
  },
  {
    label: 'NCA4',
    value: 'nca4',
    icon: rectangleIcon('#8CE0FF'),
  },
];

export const contoursFiltersToShow = [
  {
    label: 'Day 2030',
    value: 'day-2030',
    legendAlias: 'day-2030',
    orderLayout: 11.1,
    color: '#B280A6',
    tickerColor: '#000000',
    dontShowInFilters: true,
    legendsToShow: [...opNoiseDayLegends],
    geojson: [
      {
        sourceUrl:
          '/data/geojson/Noise and vibration/Day 2030/JBR2HR_OpCntrs_Day_2030_35dBA.geojson',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['35'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/Noise and vibration/Day 2030/JBR2HR_OpCntrs_Day_2030_40dBA.geojson',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['40'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/Noise and vibration/Day 2030/JBR2HR_OpCntrs_Day_2030_45dBA.geojson',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['45'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/Noise and vibration/Day 2030/JBR2HR_OpCntrs_Day_2030_50dBA.geojson',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['50'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/Noise and vibration/Day 2030/JBR2HR_OpCntrs_Day_2030_55dBA.geojson',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['55'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/Noise and vibration/Day 2030/JBR2HR_OpCntrs_Day_2030_60dBA.geojson',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['60'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/Noise and vibration/Day 2030/JBR2HR_OpCntrs_Day_2030_65dBA.geojson',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['65'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/Noise and vibration/Day 2030/JBR2HR_OpCntrs_Day_2030_70dBA.geojson',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['70'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/Noise and vibration/Day 2030/JBR2HR_OpCntrs_Day_2030_75dBA.geojson',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['75'],
          'fill-opacity': 0.4,
        },
      },
    ],
  },
  {
    label: 'Night 2030',
    value: 'night-2030',
    legendAlias: 'night-2030',
    orderLayout: 11.2,
    color: '#8B4079',
    tickerColor: '#FFFFFF',
    dontShowInFilters: true,
    legendsToShow: [...opNoiseNightLegends],
    geojson: [
      {
        sourceUrl:
          '/data/geojson/Noise and vibration/Night 2030/JBR2HR_OpCntrs_Night_2030_35dBA.geojson',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['35'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/Noise and vibration/Night 2030/JBR2HR_OpCntrs_Night_2030_40dBA.geojson',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['40'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/Noise and vibration/Night 2030/JBR2HR_OpCntrs_Night_2030_45dBA.geojson',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['45'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/Noise and vibration/Night 2030/JBR2HR_OpCntrs_Night_2030_50dBA.geojson',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['50'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/Noise and vibration/Night 2030/JBR2HR_OpCntrs_Night_2030_55dBA.geojson',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['55'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/Noise and vibration/Night 2030/JBR2HR_OpCntrs_Night_2030_60dBA.geojson',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['60'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/Noise and vibration/Night 2030/JBR2HR_OpCntrs_Night_2030_65dBA.geojson',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['65'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/Noise and vibration/Night 2030/JBR2HR_OpCntrs_Night_2030_70dBA.geojson',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['70'],
          'fill-opacity': 0.4,
        },
      },
    ],
  },
  {
    label: 'Day 2040',
    value: 'day-2040',
    legendAlias: 'day-2040',
    orderLayout: 11.3,
    color: '#8055F1',
    tickerColor: '#FFFFFF',
    dontShowInFilters: true,
    legendsToShow: [...opNoiseDayLegends],
    geojson: [
      {
        sourceUrl:
          '/data/geojson/Noise and vibration/Day 2040/JBR2HR_OpCntrs_Day_2040_35dBA.geojson',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['35'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/Noise and vibration/Day 2040/JBR2HR_OpCntrs_Day_2040_40dBA.geojson',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['40'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/Noise and vibration/Day 2040/JBR2HR_OpCntrs_Day_2040_45dBA.geojson',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['45'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/Noise and vibration/Day 2040/JBR2HR_OpCntrs_Day_2040_50dBA.geojson',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['50'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/Noise and vibration/Day 2040/JBR2HR_OpCntrs_Day_2040_55dBA.geojson',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['55'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/Noise and vibration/Day 2040/JBR2HR_OpCntrs_Day_2040_60dBA.geojson',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['60'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/Noise and vibration/Day 2040/JBR2HR_OpCntrs_Day_2040_65dBA.geojson',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['65'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/Noise and vibration/Day 2040/JBR2HR_OpCntrs_Day_2040_70dBA.geojson',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['70'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/Noise and vibration/Day 2040/JBR2HR_OpCntrs_Day_2040_75dBA.geojson',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['75'],
          'fill-opacity': 0.4,
        },
      },
    ],
  },
  {
    label: 'Night 2040',
    value: 'night-2040',
    legendAlias: 'night-2040',
    orderLayout: 11.4,
    color: '#734C94',
    tickerColor: '#FFFFFF',
    dontShowInFilters: true,
    legendsToShow: [...opNoiseNightLegends],
    geojson: [
      {
        sourceUrl:
          '/data/geojson/Noise and vibration/Night 2040/JBR2HR_OpCntrs_Night_2040_35dBA.geojson',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['35'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/Noise and vibration/Night 2040/JBR2HR_OpCntrs_Night_2040_40dBA.geojson',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['40'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/Noise and vibration/Night 2040/JBR2HR_OpCntrs_Night_2040_45dBA.geojson',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['45'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/Noise and vibration/Night 2040/JBR2HR_OpCntrs_Night_2040_50dBA.geojson',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['50'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/Noise and vibration/Night 2040/JBR2HR_OpCntrs_Night_2040_55dBA.geojson',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['55'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/Noise and vibration/Night 2040/JBR2HR_OpCntrs_Night_2040_60dBA.geojson',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['60'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/Noise and vibration/Night 2040/JBR2HR_OpCntrs_Night_2040_65dBA.geojson',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['65'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/Noise and vibration/Night 2040/JBR2HR_OpCntrs_Night_2040_70dBA.geojson',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['70'],
          'fill-opacity': 0.4,
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
    defaultSelected: true,
    legendsToShow: [...worstCaseLegends],
    geojson: [
      {
        sourceUrl:
          '/data/geojson/Noise and vibration/Worst-case/JBR2HR_Worst-case_35dBA.geojson',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['35'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/Noise and vibration/Worst-case/JBR2HR_Worst-case_40dBA.geojson',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['40'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/Noise and vibration/Worst-case/JBR2HR_Worst-case_45dBA.geojson',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['45'],
          'fill-opacity': 0.4,
        },
      },

      {
        sourceUrl:
          '/data/geojson/Noise and vibration/Worst-case/JBR2HR_Worst-case_50dBA.geojson',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['50'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/Noise and vibration/Worst-case/JBR2HR_Worst-case_55dBA.geojson',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['55'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/Noise and vibration/Worst-case/JBR2HR_Worst-case_60dBA.geojson',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['60'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/Noise and vibration/Worst-case/JBR2HR_Worst-case_65dBA.geojson',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['65'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/Noise and vibration/Worst-case/JBR2HR_Worst-case_70dBA.geojson',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['70'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/Noise and vibration/Worst-case/JBR2HR_Worst-case_75dBA.geojson',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['75'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/Noise and vibration/Worst-case/JBR2HR_Worst-case_80dBA.geojson',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['80'],
          'fill-opacity': 0.4,
        },
      },
    ],
  },
];

export const noiseAndVibrationFilters = [
  ...defaultFilters,
  {
    label: 'Noise and vibration',
    value: 'noise-and-vibration',
    legendAlias: 'noise-and-vibration',
    color: '#F3631B',
    tickerColor: '#FFFFFF',
    filtersToShow: [...noiseAndVibrationFiltersToShow],
    legendsToShow: [...noiseAndVibrationLegends],
    orderLayout: 1,
    geojson: [],
  },
  {
    label: 'Noise catchment areas',
    value: 'noise-catchment-areas',
    legendAlias: 'noise-catchment-areas',
    color: '#F3631B',
    tickerColor: '#FFFFFF',
    filtersToShow: [...noiseCatchmentAreasFiltersToShow],
    legendsToShow: [...noiseCatchmentAreasLegends],
    orderLayout: 2,
    geojson: [],
  },
  {
    label: 'Contours',
    value: 'contours',
    legendAlias: 'contours',
    color: '#F3631B',
    tickerColor: '#FFFFFF',
    filtersToShow: [...contoursFiltersToShow],
    orderLayout: 3,
    dontShowInFilters: true,
    defaultSelected: true,
  },
];
