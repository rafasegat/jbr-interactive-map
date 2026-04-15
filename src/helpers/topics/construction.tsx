import { ProposedAncillaryFacility } from '../../components/Icons/Legends';
import { defaultFilters } from './default';

export const constructionFiltersToShow = [
  {
    label: 'Proposed ancillary facility',
    value: 'proposed-ancillary-facility',
    legendAlias: 'proposed-ancillary-facility',
    orderLayout: 9,
    color: '#767C7F',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/Construction activities/JBR2HR_Proposed_ancillary_facilities.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#D912AE',
          'fill-opacity': 0.4,
        },
      },
    ],
  },
];

export const constructionLegends = [
  {
    title: 'Construction activities',
    label: 'Construction activities',
    value: 'title-construction-activities',
    icon: '',
  },
  {
    label: 'Proposed ancillary facility',
    value: 'proposed-ancillary-facility',
    icon: <ProposedAncillaryFacility />,
  },
];

export const constructionFilters = [
  ...defaultFilters,
  {
    label: 'Construction activities',
    value: 'construction-activities',
    legendAlias: 'construction-activities',
    filtersToShow: [...constructionFiltersToShow],
    legendsToShow: [...constructionLegends],
    color: '#002664',
    tickerColor: '#FFFFFF',
  },
];
