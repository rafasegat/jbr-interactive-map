import {
  SiteAccessGates,
  ProposalBoundary,
  ProposedAncillaryFacility,
  CutAndFill,
} from '../../components/Icons/Legends';
import { defaultFilters } from './default';

export const constructionFiltersToShow = [
  {
    label: 'Site access gates',
    value: 'site-access-gates',
    legendAlias: 'site-access-gates',
    geojson: [],
    markers: [
      {
        id: '1',
        coordinates: [150.585944518487537, -34.987515952099479],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '2',
        coordinates: [150.586070497063162, -34.988613403303674],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '3',
        coordinates: [150.584119242898026, -35.001840212670977],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '4',
        coordinates: [150.584130976750799, -35.002001044586621],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '5',
        coordinates: [150.582071504578636, -35.007693990154401],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '6',
        coordinates: [150.580653383995866, -35.014832796155758],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '7',
        coordinates: [150.580606268098052, -35.014997462796671],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '8',
        coordinates: [150.57989221906513, -35.014985146962935],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '9',
        coordinates: [150.579706214630278, -35.018087593296663],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '10',
        coordinates: [150.579541979151486, -35.018923915836666],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '11',
        coordinates: [150.579310423438017, -35.020213035071514],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '12',
        coordinates: [150.578764808649595, -35.023128934215848],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '13',
        coordinates: [150.579059756162707, -35.02396866228171],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '14',
        coordinates: [150.580001375516815, -35.041400034657968],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '15',
        coordinates: [150.58313850983933, -35.002589127938563],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '16',
        coordinates: [150.586039723784552, -34.988555399940829],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '17',
        coordinates: [150.586149017632522, -34.988582031945917],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '18',
        coordinates: [150.583618638132918, -34.998359358839636],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '19',
        coordinates: [150.583872599379248, -34.999823363925906],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '20',
        coordinates: [150.583172475516761, -35.00123488825497],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '21',
        coordinates: [150.584135899086846, -35.002027790889024],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '22',
        coordinates: [150.582263197153367, -35.007961090303375],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '23',
        coordinates: [150.579613900237433, -35.018811930547741],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '24',
        coordinates: [150.57923659370681, -35.020867188418237],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '25',
        coordinates: [150.58315544075387, -35.001355533055431],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '26',
        coordinates: [150.578828599891438, -35.024029627777303],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '27',
        coordinates: [150.578617942333352, -35.026831504226834],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '28',
        coordinates: [150.580136686854871, -35.041505269963771],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '29',
        coordinates: [150.579300033585724, -35.021223865809148],
        iconComponent: <SiteAccessGates />,
      },
    ],
    orderLayout: 0,
    color: '#F4B5E6',
    tickerColor: '#000000',
  },
  {
    label: 'Proposal boundary',
    value: 'proposal-boundary',
    legendAlias: 'proposal-boundary',
    orderLayout: 1,
    color: '#D7153A',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/Construction activities/JBR2HR_Proposal_boundary.geojson',
        type: 'line',
        paint: {
          'line-color': '#D7153A',
          'line-width': 3,
        },
      },
    ],
  },
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
  {
    label: 'Cut and fill',
    value: 'cut-and-fill',
    legendAlias: 'cut-and-fill',
    orderLayout: 10,
    color: '#FAAF05',
    tickerColor: '#000000',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/Construction activities/JBR2HR_Cut_and_fill.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#FAAF05',
          'fill-opacity': 0.6,
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
    label: 'Site access gates',
    value: 'site-access-gates',
    icon: <SiteAccessGates />,
  },
  {
    label: 'Proposal boundary',
    value: 'proposal-boundary',
    icon: <ProposalBoundary />,
  },
  {
    label: 'Proposed ancillary facility',
    value: 'proposed-ancillary-facility',
    icon: <ProposedAncillaryFacility />,
  },
  {
    label: 'Cut and fill',
    value: 'cut-and-fill',
    icon: <CutAndFill />,
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
