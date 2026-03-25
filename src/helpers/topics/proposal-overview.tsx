import {
  ProposalBoundary,
  OperationalBoundary,
  ConceptDesign,
  DesignCulverts,
  VisualEnvelopeMap,
  SuburbsAndLocalities,
  SiteAccessGates,
  ConstructionZones,
  Drainage,
  Pavement,
  CutAndFill,
  ProposedAncillaryFacility,
  DrainageBasins,
} from '../../components/Icons/Legends';

export const proposalOverviewFilters = [
  {
    label: 'Concept design',
    value: 'concept-design',
    legendAlias: 'concept-design',
    orderLayout: 6,
    color: '#A4A7A9',
    tickerColor: '#000000',
    geojson: [
      {
        sourceUrl: '/data/geojson/proposal-overview/Concept design.geojson',
        type: 'line',
        paint: {
          'line-color': '#A4A7A9',
          'line-width': 3,
        },
      },
    ],
  },
  {
    label: 'Drainage',
    value: 'drainage',
    legendAlias: 'drainage',
    orderLayout: 3,
    color: '#146CFD',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl: '/data/geojson/proposal-overview/Drainage.geojson',
        type: 'line',
        paint: {
          'line-color': '#146CFD',
          'line-width': 3,
        },
      },
    ],
  },
  {
    label: 'Drainage basins 15/9',
    value: 'drainage-basins-15-9',
    legendAlias: 'drainage-basins',
    orderLayout: 10,
    color: '#146CFD',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl: '/data/geojson/proposal-overview/Basins 1509.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#146CFD',
          'fill-opacity': 1,
        },
      },
    ],
  },
  {
    label: 'Drainage basins 22/9',
    value: 'drainage-basins-22-9',
    legendAlias: 'drainage-basins',
    orderLayout: 11,
    color: '#146CFD',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl: '/data/geojson/proposal-overview/Basins 2209.geojson',
        type: 'line',
        paint: {
          'line-color': '#146cfd',
          'line-width': 2,
        },
      },
    ],
  },
  {
    label: 'Pavement',
    value: 'pavement',
    legendAlias: 'pavement',
    orderLayout: 7,
    color: '#495054',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl: '/data/geojson/proposal-overview/Pavement.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#495054',
          'fill-opacity': 1,
        },
      },
    ],
  },
  {
    label: 'Cut and fill',
    value: 'cut-and-fill',
    legendAlias: 'cut-and-fill',
    orderLayout: 8,
    color: '#FAAF05',
    tickerColor: '#000000',
    geojson: [
      {
        sourceUrl: '/data/geojson/proposal-overview/Cut and fill.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#FAAF05',
          'fill-opacity': 0.6,
        },
      },
    ],
  },
  {
    label: 'Visual envelope map',
    value: 'visual-envelope-map',
    legendAlias: 'visual-envelope-map',
    orderLayout: 9,
    color: '#8055F166',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/proposal-overview/Visual envelope map.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#8055F1',
          'fill-opacity': 0.4,
        },
      },
    ],
  },
  {
    label: 'Suburbs and localities',
    value: 'suburbs-and-localities',
    legendAlias: 'suburbs-and-localities',
    orderLayout: 7,
    color: '#486F75',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl: '/data/geojson/proposal-overview/Suburbs.geojson',
        type: 'line',
        paint: {
          'line-color': '#486f75',
          'line-opacity': 1,
        },
      },
    ],
  },
];

export const constructionActivitiesFilters = [
  {
    label: 'Site access gates',
    value: 'site-access-gates',
    legendAlias: 'site-access-gates',
    geojson: [],
    markers: [
      {
        id: '1',
        coordinates: [150.58594451848754, -34.98751595209948],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '2',
        coordinates: [150.58607049706316, -34.988613403303674],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '3',
        coordinates: [150.58411924289803, -35.00184021267098],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '4',
        coordinates: [150.5841309767508, -35.00200104458662],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '5',
        coordinates: [150.58207150457864, -35.0076939901544],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '6',
        coordinates: [150.58065338399587, -35.01483279615576],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '7',
        coordinates: [150.58060626809805, -35.01499746279667],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '8',
        coordinates: [150.57989221906513, -35.014985146962935],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '9',
        coordinates: [150.57970621463028, -35.01808759329666],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '10',
        coordinates: [150.5795419791515, -35.018923915836666],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '11',
        coordinates: [150.57931042343802, -35.020213035071514],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '12',
        coordinates: [150.5787648086496, -35.02312893421585],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '13',
        coordinates: [150.5790597561627, -35.02396866228171],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '14',
        coordinates: [150.58000137551682, -35.04140003465797],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '15',
        coordinates: [150.58313850983933, -35.00258912793856],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '16',
        coordinates: [150.58603972378455, -34.98855539994083],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '17',
        coordinates: [150.58614901763252, -34.98858203194592],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '18',
        coordinates: [150.58361863813292, -34.998359358839636],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '19',
        coordinates: [150.58387259937925, -34.999823363925906],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '20',
        coordinates: [150.58317247551676, -35.00123488825497],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '21',
        coordinates: [150.58413589908685, -35.002027790889024],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '22',
        coordinates: [150.58226319715337, -35.007961090303375],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '23',
        coordinates: [150.57961390023743, -35.01881193054774],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '24',
        coordinates: [150.5792365937068, -35.02086718841824],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '25',
        coordinates: [150.58315544075387, -35.00135553305543],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '26',
        coordinates: [150.57882859989144, -35.0240296277773],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '27',
        coordinates: [150.57861794233335, -35.026831504226834],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '28',
        coordinates: [150.58013668685487, -35.04150526996377],
        iconComponent: <SiteAccessGates />,
      },
      {
        id: '29',
        coordinates: [150.57930003358572, -35.02122386580915],
        iconComponent: <SiteAccessGates />,
      },
    ],
    orderLayout: 0,
    color: '#F4B5E6',
    tickerColor: '#000000',
  },
  {
    label: 'Design culverts',
    value: 'design-culverts',
    legendAlias: 'design-culverts',
    orderLayout: 4,
    color: '#002664',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl: '/data/geojson/proposal-overview/Design culverts.geojson',
        type: 'line',
        paint: {
          'line-color': '#002664',
          'line-width': 2,
          'line-dasharray': [2, 3],
        },
      },
    ],
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
        sourceUrl: '/data/geojson/proposal-overview/Proposal boundary.geojson',
        type: 'line',
        paint: {
          'line-color': '#D7153A',
          'line-width': 3,
        },
      },
    ],
  },
  {
    label: 'Operational boundary',
    value: 'operational-boundary',
    legendAlias: 'operational-boundary',
    orderLayout: 2,
    color: '#FAAF05',
    tickerColor: '#000000',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/proposal-overview/Operational boundary.geojson',
        type: 'line',
        paint: {
          'line-color': '#FAAF05',
          'line-width': 3,
        },
      },
    ],
  },
  {
    label: 'Construction zones',
    value: 'construction-zones',
    legendAlias: 'construction-zones',
    orderLayout: 5,
    color: '#8CE0FF66',
    tickerColor: '#000000',
    geojson: [
      {
        sourceUrl: '/data/geojson/proposal-overview/Construction zones.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#8CE0FF',
          'fill-opacity': 0.4,
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
          '/data/geojson/proposal-overview/Proposed Ancillary Facility.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#767C7F',
          'fill-opacity': 0.4,
        },
      },
    ],
  },
];

export const proposalOverviewLegends = [
  {
    title: 'Key features',
    label: 'Key features',
    value: 'title-key-features',
    icon: '',
  },
  {
    label: 'Concept design',
    value: 'concept-design',
    icon: <ConceptDesign />,
  },
  {
    label: 'Drainage',
    value: 'drainage',
    icon: <Drainage />,
  },
  {
    label: 'Drainage basins',
    value: 'drainage-basins',
    icon: <DrainageBasins />,
  },
  {
    label: 'Pavement',
    value: 'pavement',
    icon: <Pavement />,
  },
  {
    label: 'Cut and fill',
    value: 'cut-and-fill',
    icon: <CutAndFill />,
  },
  {
    label: 'Visual envelope map',
    value: 'visual-envelope-map',
    icon: <VisualEnvelopeMap />,
  },
  {
    label: 'Suburbs and localities',
    value: 'suburbs-and-localities',
    icon: <SuburbsAndLocalities />,
  },
];

export const constructionActivitiesLegends = [
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
    label: 'Design culverts',
    value: 'design-culverts',
    icon: <DesignCulverts />,
  },
  {
    label: 'Proposal boundary',
    value: 'proposal-boundary',
    icon: <ProposalBoundary />,
  },
  {
    label: 'Operational boundary',
    value: 'operational-boundary',
    icon: <OperationalBoundary />,
  },
  {
    label: 'Construction zones',
    value: 'construction-zones',
    icon: <ConstructionZones />,
  },
  {
    label: 'Proposed ancillary facility',
    value: 'proposed-ancillary-facility',
    icon: <ProposedAncillaryFacility />,
  },
];
