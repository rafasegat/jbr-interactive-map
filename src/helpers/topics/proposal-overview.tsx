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
          'line-color': '#495054',
          'line-opacity': 1,
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
          'line-color': '#146cfd',
          'line-width': 3,
          'line-dasharray': [1, 2],
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
        type: 'line',
        paint: {
          'line-color': '#146cfd',
          'line-width': 2,
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
        type: 'line',
        paint: {
          'line-color': '#faaf05',
          'line-opacity': 1,
        },
      },
    ],
  },
  {
    label: 'Visual envelope map',
    value: 'visual-envelope-map',
    legendAlias: 'visual-envelope-map',
    orderLayout: 9,
    color: '#00AA45',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/proposal-overview/Visual envelope map.geojson',
        type: 'line',
        paint: {
          'line-color': '#00aa45',
          'line-opacity': 1,
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
    geojson: [
      {
        sourceUrl: '/data/geojson/proposal-overview/SiteAccessGates.geojson',
        type: 'line',
        paint: {
          'line-color': '#F4B5E6',
          'line-opacity': 1,
          'line-width': 2,
        },
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
          'line-color': '#d7153a',
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
          'line-color': '#faaf05',
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
    color: '#F3631B',
    tickerColor: '#000000',
    geojson: [
      {
        sourceUrl: '/data/geojson/proposal-overview/Construction zones.geojson',
        type: 'circle',
        paint: {
          'circle-radius': 4,
          'circle-color': '#ffffff',
          'circle-stroke-color': '#f3631b',
          'circle-stroke-width': 2,
        },
      },
    ],
  },
  {
    label: 'Proposed ancillary facility',
    value: 'proposed-ancillary-facility',
    legendAlias: 'proposed-ancillary-facility',
    orderLayout: 9,
    color: '#D912AE',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/proposal-overview/Proposed Ancillary Facility.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#D912AE',
          'fill-opacity': 1,
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
