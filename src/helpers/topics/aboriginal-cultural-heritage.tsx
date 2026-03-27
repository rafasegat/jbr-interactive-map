import { AhimsSites } from '../../components/Icons/Legends';
import { defaultFilters } from './default';

export const aboriginalCulturalHeritageFilters = [
  ...defaultFilters,
  {
    label: 'AHIMS sites',
    value: 'ahims-sites',
    legendAlias: 'ahims-sites',
    color: '#694800',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/aboriginal-cultural-heritage/AHIMS Sites.geojson',
        type: 'circle',
        paint: {
          'circle-radius': 4,
          'circle-color': '#FFF',
          'circle-stroke-color': '#694800',
          'circle-stroke-width': 2,
        },
      },
    ],
    hasLineDivider: true,
    orderLayout: 3,
  },
];

export const aboriginalCulturalHeritageLegends = [
  {
    title: 'Aboriginal cultural heritage',
    label: 'Aboriginal cultural heritage',
    value: 'title-aboriginal-cultural-heritage',
  },
  {
    label: 'AHIMS sites',
    value: 'ahims-sites',
    icon: <AhimsSites />,
  },
];
