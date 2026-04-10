import { AhimsSites, AHIPBoundary } from '../../components/Icons/Legends';
import { defaultFilters } from './default';

export const aboriginalCulturalHeritageFiltersToShow = [
  {
    label: 'Aboriginal heritage study boundary',
    value: 'aboriginal-heritage-study-boundary',
    legendAlias: 'aboriginal-heritage-study-boundary',
    color: '#694800',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/Aboriginal cultural heritage/JBR2HR_Aboriginal heritage study boundary.geojson',
        type: 'line',
        paint: {
          'line-color': '#9E5332',
          'line-width': 3,
        },
      },
    ],
    hasLineDivider: true,
    orderLayout: 1,
  },
  // {
  //   label: 'AHIP boundary',
  //   value: 'ahip-boundary',
  //   legendAlias: 'ahip-boundary',
  //   color: '#D7153A',
  //   tickerColor: '#FFFFFF',
  //   geojson: [
  //     {
  //       sourceUrl:
  //         '/data/geojson/Aboriginal cultural heritage/JBR2HR_AHIP Boundary.geojson',
  //       type: 'line',
  //       paint: {
  //         'line-color': '#9A5E93',
  //         'line-width': 3,
  //       },
  //     },
  //   ],
  //   hasLineDivider: true,
  //   orderLayout: 2,
  // },
];

export const aboriginalCulturalHeritageLegends = [
  {
    title: 'Aboriginal cultural heritage',
    label: 'Aboriginal cultural heritage',
    value: 'title-aboriginal-cultural-heritage',
  },
  {
    label: 'Aboriginal heritage study boundary',
    value: 'aboriginal-heritage-study-boundary',
    icon: <AhimsSites />,
  },
  // {
  //   label: 'AHIP boundary',
  //   value: 'ahip-boundary',
  //   icon: <AHIPBoundary />,
  // },
];

export const aboriginalCulturalHeritageFilters = [
  ...defaultFilters,
  {
    label: 'Aboriginal cultural heritage',
    value: 'aboriginal-cultural-heritage',
    legendAlias: 'aboriginal-cultural-heritage',
    color: '#694800',
    tickerColor: '#FFFFFF',
    filtersToShow: [...aboriginalCulturalHeritageFiltersToShow],
    legendsToShow: [...aboriginalCulturalHeritageLegends],
    orderLayout: 1,
  },
];
