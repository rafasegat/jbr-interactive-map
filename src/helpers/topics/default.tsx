import {
  generalFilters,
  generalLegends,
  keyFeaturesFilters,
  keyFeaturesLegends,
} from './proposal-overview';

export const defaultFilters = [
  {
    label: 'Base layers',
    value: 'base-layers',
    legendAlias: 'base-layers',
    filtersToShow: [...generalFilters],
    legendsToShow: [...generalLegends],
    color: '#002664',
    tickerColor: '#FFFFFF',
  },
  {
    label: 'Key features',
    value: 'key-features',
    legendAlias: 'key-features',
    geojson: [],
    filtersToShow: [...keyFeaturesFilters],
    legendsToShow: [...keyFeaturesLegends],
    color: '#002664',
    tickerColor: '#FFFFFF',
  },
];
