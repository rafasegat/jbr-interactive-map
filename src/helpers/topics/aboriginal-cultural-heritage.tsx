import { conceptDesignFilters, conceptDesignLegends } from './concept-design';
import { AhimsSites } from '../../components/Icons/Legends';

export const aboriginalCulturalHeritageFilters = [
  {
    label: 'Concept design',
    value: 'concept-design',
    legendAlias: 'concept-design',
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
    geojson: [],
    orderLayout: 2,
    color: '#F4B5E6',
    tickerColor: '#000000',
  },
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
          'circle-color': '#694800',
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
    label: 'title',
    value: 'title',
  },
  {
    label: 'AHIMS sites',
    value: 'ahims-sites',
    icon: <AhimsSites />,
  },
];
