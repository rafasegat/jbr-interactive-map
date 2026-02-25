import { conceptDesignFilters, conceptDesignLegends } from './concept-design';

export const defaultFilters = [
  {
    label: 'Concept design',
    value: 'concept-design',
    legendAlias: 'concept-design',
    geojson: [],
    filtersToShow: [...conceptDesignFilters],
    legendsToShow: [...conceptDesignLegends],
    color: '#002664',
    tickerColor: '#FFFFFF',
  },
  {
    label: 'Local government area',
    value: 'local-government-area',
    legendAlias: 'local-government-area',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/local-government-area/LocalGovernmentArea.geojson',
        type: 'line',
        paint: {
          'line-color': '#F4B5E6',
          'line-opacity': 1,
          'line-width': 2,
        },
      },
    ],
    color: '#F4B5E6',
    tickerColor: '#000000',
  },
];
