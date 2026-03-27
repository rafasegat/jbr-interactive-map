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
          'circle-stroke-color': '#941B00',
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
        type: 'fill',
        paint: {
          'fill-color': '#faaf05',
          'fill-opacity': 0.5,
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
          '/data/geojson/noise-and-vibration/Construction Study Area.geojson',
        type: 'line',
        paint: {
          'line-color': '#22272B',
          'line-width': 2,
        },
      },
    ],
  },
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
          '/data/geojson/noise-and-vibration/Day 2030/OpCntrs_Day_2030_35dBA.GeoJSON',
        type: 'fill',
        paint: {
          'fill-color': opNoiseDayDbaColors['35'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/Day 2030/OpCntrs_Day_2030_40dBA.GeoJSON',
        type: 'fill',
        paint: {
          'fill-color': opNoiseDayDbaColors['40'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/Day 2030/OpCntrs_Day_2030_45dBA.GeoJSON',
        type: 'fill',
        paint: {
          'fill-color': opNoiseDayDbaColors['45'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/Day 2030/OpCntrs_Day_2030_50dBA.GeoJSON',
        type: 'fill',
        paint: {
          'fill-color': opNoiseDayDbaColors['50'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/Day 2030/OpCntrs_Day_2030_55dBA.GeoJSON',
        type: 'fill',
        paint: {
          'fill-color': opNoiseDayDbaColors['55'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/Day 2030/OpCntrs_Day_2030_60dBA.GeoJSON',
        type: 'fill',
        paint: {
          'fill-color': opNoiseDayDbaColors['60'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/Day 2030/OpCntrs_Day_2030_65dBA.GeoJSON',
        type: 'fill',
        paint: {
          'fill-color': opNoiseDayDbaColors['65'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/Day 2030/OpCntrs_Day_2030_70dBA.GeoJSON',
        type: 'fill',
        paint: {
          'fill-color': opNoiseDayDbaColors['70'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/Day 2030/OpCntrs_Day_2030_75dBA.GeoJSON',
        type: 'fill',
        paint: {
          'fill-color': opNoiseDayDbaColors['75'],
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
          '/data/geojson/noise-and-vibration/Night 2030/OpCntrs_Night_2030_35dBA.GeoJSON',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['35'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/Night 2030/OpCntrs_Night_2030_40dBA.GeoJSON',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['40'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/Night 2030/OpCntrs_Night_2030_45dBA.GeoJSON',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['45'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/Night 2030/OpCntrs_Night_2030_50dBA.GeoJSON',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['50'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/Night 2030/OpCntrs_Night_2030_55dBA.GeoJSON',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['55'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/Night 2030/OpCntrs_Night_2030_60dBA.GeoJSON',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['60'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/Night 2030/OpCntrs_Night_2030_65dBA.GeoJSON',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['65'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/Night 2030/OpCntrs_Night_2030_70dBA.GeoJSON',
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
          '/data/geojson/noise-and-vibration/Day 2040/OpCntrs_Day_2040_35dBA.GeoJSON',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['35'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/Day 2040/OpCntrs_Day_2040_40dBA.GeoJSON',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['40'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/Day 2040/OpCntrs_Day_2040_45dBA.GeoJSON',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['45'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/Day 2040/OpCntrs_Day_2040_50dBA.GeoJSON',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['50'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/Day 2040/OpCntrs_Day_2040_55dBA.GeoJSON',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['55'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/Day 2040/OpCntrs_Day_2040_60dBA.GeoJSON',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['60'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/Day 2040/OpCntrs_Day_2040_65dBA.GeoJSON',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['65'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/Day 2040/OpCntrs_Day_2040_70dBA.GeoJSON',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['70'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/Day 2040/OpCntrs_Day_2040_75dBA.GeoJSON',
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
          '/data/geojson/noise-and-vibration/Night 2040/OpCntrs_Night_2040_35dBA.GeoJSON',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['35'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/Night 2040/OpCntrs_Night_2040_40dBA.GeoJSON',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['40'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/Night 2040/OpCntrs_Night_2040_45dBA.GeoJSON',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['45'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/Night 2040/OpCntrs_Night_2040_50dBA.GeoJSON',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['50'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/Night 2040/OpCntrs_Night_2040_55dBA.GeoJSON',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['55'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/Night 2040/OpCntrs_Night_2040_60dBA.GeoJSON',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['60'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/Night 2040/OpCntrs_Night_2040_65dBA.GeoJSON',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['65'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/Night 2040/OpCntrs_Night_2040_70dBA.GeoJSON',
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
          '/data/geojson/noise-and-vibration/worst-case-scenario/Worst-case_35dBA.GeoJSON',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['35'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/worst-case-scenario/Worst-case_40dBA.GeoJSON',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['40'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/worst-case-scenario/Worst-case_45dBA.GeoJSON',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['45'],
          'fill-opacity': 0.4,
        },
      },

      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/worst-case-scenario/Worst-case_50dBA.GeoJSON',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['50'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/worst-case-scenario/Worst-case_55dBA.GeoJSON',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['55'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/worst-case-scenario/Worst-case_60dBA.GeoJSON',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['60'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/worst-case-scenario/Worst-case_65dBA.GeoJSON',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['65'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/worst-case-scenario/Worst-case_70dBA.GeoJSON',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['70'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/worst-case-scenario/Worst-case_75dBA.GeoJSON',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['75'],
          'fill-opacity': 0.4,
        },
      },
      {
        sourceUrl:
          '/data/geojson/noise-and-vibration/worst-case-scenario/Worst-case_80dBA.GeoJSON',
        type: 'fill',
        paint: {
          'fill-color': paletteColors['80'],
          'fill-opacity': 0.4,
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
