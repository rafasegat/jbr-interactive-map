import {
  constructionActivitiesFilters,
  constructionActivitiesLegends,
  proposalOverviewFilters,
  proposalOverviewLegends,
} from './proposal-overview';

export const defaultFilters = [
  {
    label: 'Key features',
    value: 'key-features',
    legendAlias: 'key-features',
    geojson: [],
    filtersToShow: [...proposalOverviewFilters],
    legendsToShow: [...proposalOverviewLegends],
    color: '#002664',
    tickerColor: '#FFFFFF',
  },
  {
    label: 'Construction activities',
    value: 'construction-activities',
    legendAlias: 'construction-activities',
    filtersToShow: [...constructionActivitiesFilters],
    legendsToShow: [...constructionActivitiesLegends],
    color: '#002664',
    tickerColor: '#FFFFFF',
  },
];
