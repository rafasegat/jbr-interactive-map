import {
  LocalGovernmentArea,
  ProposalBoundary,
  OperationalBoundary,
  ConceptDesign,
  DesignCulverts,
  Chainage,
  Drainage,
  Pavement,
  CutAndFill,
  ProposedAncillaryFacility,
  DrainageBasins,
} from '../../components/Icons/Legends';

export const conceptDesignFilters = [
  {
    label: 'Local government areas',
    value: 'local-government-areas',
    legendAlias: 'local-government-area',
    geojson: [
      {
        sourceUrl: '/data/geojson/extras/Local Government Areas.geojson',
        type: 'line',
        // paint: {
        //   'line-color': '#d7153a',
        //   'line-width': 3,
        // },
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
        sourceUrl: '/data/geojson/concept-design/Proposal boundary.json',
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
        sourceUrl: '/data/geojson/concept-design/Operational boundary.json',
        type: 'line',
        paint: {
          'line-color': '#faaf05',
          'line-width': 3,
        },
        slot: 'top',
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
        sourceUrl: '/data/geojson/concept-design/Drainage.json',
        type: 'line',
        paint: {
          'line-color': '#146cfd',
          'line-width': 3,
          'line-dasharray': [3, 4],
        },
        slot: 'top',
      },
    ],
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
        sourceUrl: '/data/geojson/concept-design/Design culverts.json',
        type: 'line',
        paint: {
          'line-color': '#002664',
          'line-width': 2,
        },
        slot: 'top',
      },
    ],
  },
  {
    label: 'Chainages',
    value: 'chainages',
    legendAlias: 'chainages',
    orderLayout: 5,
    color: '#F3631B',
    tickerColor: '#000000',
    geojson: [
      {
        sourceUrl: '/data/geojson/concept-design/Chainage.json',
        type: 'circle',
        paint: {
          'circle-radius': 4,
          'circle-color': '#ffffff',
          'circle-stroke-color': '#f3631b',
          'circle-stroke-width': 2,
        },
        slot: 'top',
      },
    ],
  },
  {
    label: 'Concept design',
    value: 'concept-design',
    legendAlias: 'concept-design',
    orderLayout: 6,
    color: '#A4A7A9',
    tickerColor: '#000000',
    geojson: [
      {
        sourceUrl: '/data/geojson/concept-design/Concept design.json',
        type: 'line',
        paint: {
          'line-color': '#495054',
          'line-opacity': 1,
        },
        slot: 'top',
      },
    ],
  },
  {
    label: 'Pavement',
    value: 'pavement',
    legendAlias: 'pavement',
    orderLayout: 7,
    color: '#8C8C8C',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl: '/data/geojson/concept-design/Pavement.json',
        type: 'line',
        paint: {
          'line-color': '#495054',
          'line-opacity': 1,
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
        sourceUrl: '/data/geojson/concept-design/Cut and fill.json',
        type: 'line',
        paint: {
          'line-color': '#faaf05',
          'line-opacity': 1,
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
          '/data/geojson/concept-design/Proposed Ancillary Facility.json',
        type: 'line',
        paint: {
          'line-color': '#495054',
          'line-opacity': 1,
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
        sourceUrl: '/data/geojson/concept-design/Basins 1509.json',
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
        sourceUrl: '/data/geojson/concept-design/Basins 2209.json',
        type: 'line',
        paint: {
          'line-color': '#146cfd',
          'line-width': 2,
        },
      },
    ],
  },
];

export const conceptDesignLegends = [
  {
    title: 'Concept design',
    label: 'title',
    value: 'title',
    icon: '-',
  },
  {
    label: 'Chainages',
    value: 'chainages',
    icon: <Chainage />,
  },
  {
    label: 'Drainage',
    value: 'drainage',
    icon: <Drainage />,
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
    label: 'Concept design',
    value: 'concept-design',
    icon: <ConceptDesign />,
  },
  {
    label: 'Local government area',
    value: 'local-government-area',
    icon: <LocalGovernmentArea />,
  },
  {
    label: 'Proposed ancillary facility',
    value: 'proposed-ancillary-facility',
    icon: <ProposedAncillaryFacility />,
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
];
