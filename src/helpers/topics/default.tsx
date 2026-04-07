import {
  generalFilters,
  generalLegends,
  keyFeaturesFilters,
  keyFeaturesLegends,
} from './proposal-overview';

export const defaultFilters = [
  {
    label: 'General',
    value: 'general',
    legendAlias: 'general',
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
