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
    markers: [
      {
        id: '1',
        coordinates: [150.586548721423782, -34.987819810924002],
        iconComponent: <AhimsSites />,
      },
      {
        id: '2',
        coordinates: [150.583389718313242, -35.001747727202449],
        iconComponent: <AhimsSites />,
      },
    ],
    geojson: [],
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
