import {
  OperationalBoundary,
  SuburbsAndLocalities,
  Drainage,
  Pavement,
  LocalRoads,
  RegionalRoads,
  StateRoads,
  Watercourses,
  rectangleIcon,
  DetentionBasins,
  SharedPath,
  HouseIcon,
  ProposalBoundary,
  ProposedFaunaUnderpass,
  FaunaUnderPassIcon,
  TruckParking,
  BusStop,
  InfoIcon2,
  InfoIcon,
} from '../../components/Icons/Legends';

export const keyFeaturesFilters = [
  {
    label: 'Proposal boundary',
    value: 'proposal-boundary',
    legendAlias: 'proposal-boundary',
    orderLayout: 0,
    color: '#FAAF05',
    tickerColor: '#000000',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/Key features/JBR2HR_Proposal_boundary.geojson',
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
    orderLayout: 1,
    color: '#FAAF05',
    tickerColor: '#000000',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/Key features/JBR2HR_Operational boundary.geojson',
        type: 'line',
        paint: {
          'line-color': '#FAAF05',
          'line-width': 3,
        },
      },
    ],
  },
  {
    label: 'Pavement',
    value: 'pavement',
    legendAlias: 'pavement',
    orderLayout: 7,
    color: '#767C7F',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl: '/data/geojson/Key features/JBR2HR_Pavement.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#767C7F',
          'fill-opacity': 1,
        },
      },
      {
        sourceUrl: '/data/geojson/Key features/JBR2HR_Concept design.geojson',
        type: 'line',
        paint: {
          'line-color': '#CACCCD',
          'line-width': 1,
        },
      },
    ],
  },
  {
    label: 'Cut',
    value: 'cut',
    legendAlias: 'cut',
    orderLayout: 8,
    color: '#2E808E',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl: '/data/geojson/Key features/JBR2HR_Cut.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#FAAF05',
          'fill-opacity': 1,
        },
      },
    ],
  },
  {
    label: 'Fill',
    value: 'fill',
    legendAlias: 'fill',
    orderLayout: 9,
    color: '#59B500',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl: '/data/geojson/Key features/JBR2HR_Fill.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#59B500',
          'fill-opacity': 1,
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
        sourceUrl: '/data/geojson/Key features/JBR2HR_Drainage.geojson',
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
    legendAlias: 'detention-basins',
    orderLayout: 10,
    color: '#0B3F47',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/Key features/JBR2HR_Drainage basins_20250915.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#0B3F47',
          'fill-opacity': 0.6,
        },
      },
    ],
  },
  {
    label: 'Drainage basins 22/9',
    value: 'drainage-basins-22-9',
    legendAlias: 'detention-basins',
    orderLayout: 4,
    color: '#0B3F47',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/Key features/JBR2HR_Drainage basins_20250922.geojson',
        type: 'line',
        paint: {
          'line-color': '#0B3F47',
          'line-width': 2,
          'line-opacity': 0.6,
        },
      },
    ],
  },
  {
    label: 'Shared paths',
    value: 'shared-paths',
    legendAlias: 'shared-paths',
    orderLayout: 5,
    color: '#8055F1',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl: '/data/geojson/Key features/JBR2HR_SharedPaths.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#8055F1',
          'fill-opacity': 1,
        },
      },
    ],
  },
  {
    label: 'Proposed fauna underpass',
    value: 'proposed-fauna-underpass',
    legendAlias: 'proposed-fauna-underpass',
    color: '#441170',
    tickerColor: '#FFFFFF',
    markers: [
      {
        id: '1',
        coordinates: [150.5826765, -35.035773],
        iconComponent: <FaunaUnderPassIcon />,
        text: 'Proposed fauna underpass',
        isTooltip: true,
      },
      {
        id: '2',
        coordinates: [150.5825799, -35.0093653],
        iconComponent: <FaunaUnderPassIcon />,
        text: 'Proposed fauna underpass',
        isTooltip: true,
      },
    ],
    geojson: [
      {
        sourceUrl:
          '/data/geojson/Biodiversity/JBR2HR_Proposed fauna underpass.geojson',
        type: 'line',
        paint: {
          'line-color': '#65004D',
          'line-width': 12,
        },
      },
      {
        sourceUrl:
          '/data/geojson/Biodiversity/JBR2HR_Proposed fauna underpass.geojson',
        type: 'line',
        paint: {
          'line-color': '#D912AE',
          'line-width': 4,
          // 'line-dasharray': [4, 4],
        },
      },
    ],
    orderLayout: 6,
  },
  {
    label: 'Property access',
    value: 'property-access',
    legendAlias: 'property-access',
    color: '#0086C4',
    tickerColor: '#FFFFFF',
    geojson: [],
    markers: [
      {
        id: '1',
        coordinates: [150.58579573221144, -34.98773133606075],
        iconComponent: <HouseIcon />,
        text: 'Property access road one, from south of Willowgreen Road, to the Jervis Bay Road intersection - left-in access from Princes highway',
        isTooltip: true,
      },
      {
        id: '2',
        coordinates: [150.5860543, -34.9889137],
        iconComponent: <HouseIcon />,
        text: 'Property access road two, between the Jervis Bay Road intersection and Mortimer Road',
        isTooltip: true,
      },
      {
        id: '3',
        coordinates: [150.57986015727823, -35.01664118767905],
        iconComponent: <HouseIcon />,
        text: 'Property access road three, south of Sinclair Road',
        isTooltip: true,
      },
      {
        id: '4',
        coordinates: [150.5776437809143, -35.02690965493875],
        iconComponent: <HouseIcon />,
        text: 'Property access road four, south of the new Hawken Road intersection',
        isTooltip: true,
      },
    ],
    orderLayout: 1,
  },
  {
    label: 'New bus stop',
    value: 'new-bus-stop',
    legendAlias: 'new-bus-stop',
    color: '#50B0EA',
    tickerColor: '#FFFFFF',
    geojson: [],
    markers: [
      {
        id: '1',
        coordinates: [150.57849356178897, -35.02662729594235],
        iconComponent: <BusStop />,
      },
    ],
    orderLayout: 7,
  },
  {
    label: 'Truck parking area',
    value: 'truck-parking-area',
    legendAlias: 'truck-parking-area',
    color: '#0086C4',
    tickerColor: '#FFFFFF',
    geojson: [],
    markers: [
      {
        id: '1',
        coordinates: [150.57910751137211, -35.01967579768026],
        iconComponent: <TruckParking />,
        text: 'Northbound truck parking area',
        isTooltip: true,
      },
      {
        id: '2',
        coordinates: [150.57972791899448, -35.02999823619622],
        iconComponent: <TruckParking />,
        text: 'Southbound truck parking area',
        isTooltip: true,
      },
    ],
    orderLayout: 4,
  },
  {
    label: 'Info',
    value: 'info',
    legendAlias: 'info',
    color: '#0086C4',
    markers: [
      {
        id: '1',
        coordinates: [150.5884895, -34.9833529],
        iconComponent: <InfoIcon2 />,
        text: 'Tie in to Jervis Bay Road intersection',
        isTooltip: true,
      },
      {
        id: '2',
        coordinates: [150.5870272, -34.9870708],
        iconComponent: <InfoIcon2 />,
        text: 'Shared path on the eastern side of property access road two, from the bus bay at the Jervis Bay Road intersection to Mortimer Road',
        isTooltip: true,
      },
      {
        id: '3',
        coordinates: [150.5862651, -34.987359],
        iconComponent: <InfoIcon2 />,
        text: 'Widening existing two-lane carriageway to four lanes (two lanes in each direction) with median separation',
        isTooltip: true,
      },
      {
        id: '4',
        coordinates: [150.5826627, -35.0042044],
        iconComponent: <InfoIcon2 />,
        text: 'Emergency U-Turn facility',
        isTooltip: true,
      },
      {
        id: '5',
        coordinates: [150.5835377, -35.0084962],
        iconComponent: <InfoIcon2 />,
        text: 'Gorindah Road permanently closed between Barron Road and the existing Princes Highway',
        isTooltip: true,
      },
      {
        id: '6',
        coordinates: [150.5771599, -35.0245687],
        iconComponent: <InfoIcon2 />,
        text: 'New grade-separated intersection at Hawken Road with an underpass providing connectivity between Hawken Road and Blackbutt Range Road',
        isTooltip: true,
      },
      {
        id: '7',
        coordinates: [150.5762206, -35.024592],
        iconComponent: <InfoIcon2 />,
        text: 'Link road',
        isTooltip: true,
      },
      {
        id: '8',
        coordinates: [150.5774854, -35.0257916],
        iconComponent: <InfoIcon2 />,
        text: 'Underpass providing connectivity under the Princes Highway',
        isTooltip: true,
      },
      {
        id: '9',
        coordinates: [150.5789868, -35.0425542],
        iconComponent: <InfoIcon2 />,
        text: 'Tie in to existing Princes Highway',
        isTooltip: true,
      },
    ],
  },
];

export const generalFilters = [
  {
    label: 'Local roads',
    value: 'local-roads',
    legendAlias: 'local-roads',
    color: '#CDD3D6',
    tickerColor: '#000000',
    geojson: [
      {
        sourceUrl: '/data/geojson/General/JBR2HR_Local roads.geojson',
        type: 'line',
        paint: {
          'line-color': '#cdd3d6',
          'line-opacity': 1,
          'line-width': 1,
        },
      },
    ],
    orderLayout: 1,
  },
  {
    label: 'Regional roads',
    value: 'regional-roads',
    legendAlias: 'regional-roads',
    color: '#CDD3D6',
    tickerColor: '#000000',
    geojson: [
      {
        sourceUrl: '/data/geojson/General/JBR2HR_Regional roads.geojson',
        type: 'line',
        paint: {
          'line-color': '#cdd3d6',
          'line-opacity': 1,
          'line-width': 2,
        },
      },
    ],
    orderLayout: 2,
  },
  {
    label: 'State roads',
    value: 'state-roads',
    legendAlias: 'state-roads',
    color: '#CDD3D6',
    tickerColor: '#000000',
    geojson: [
      {
        sourceUrl: '/data/geojson/General/JBR2HR_State roads.geojson',
        type: 'line',
        paint: {
          'line-color': '#cdd3d6',
          'line-opacity': 1,
          'line-width': 3,
        },
      },
    ],
    orderLayout: 3,
  },
  {
    label: 'Suburbs and localities',
    value: 'suburbs-and-localities',
    legendAlias: 'suburbs-and-localities',
    orderLayout: 4,
    color: '#486F75',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/General/JBR2HR_Suburbs and localities.geojson',
        type: 'line',
        paint: {
          'line-color': '#486f75',
          'line-opacity': 1,
        },
      },
    ],
  },
  {
    label: 'Watercourses',
    value: 'water-courses',
    legendAlias: 'water-courses',
    color: '#0B3F47',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl: '/data/geojson/General/JBR2HR_Watercourses.geojson',
        type: 'line',
        paint: {
          'line-color': '#0B3F47',
          'line-width': 1,
          'line-dasharray': [3, 2.5],
        },
      },
    ],
    orderLayout: 6,
  },
  {
    label: 'National parks',
    value: 'national-parks',
    legendAlias: 'national-parks',
    color: '#00AA45',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl: '/data/geojson/General/JBR2HR_National parks.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#00AA45',
          'fill-opacity': 0.15,
        },
      },
    ],
    orderLayout: 7,
  },
  {
    label: 'State forests',
    value: 'state-forests',
    legendAlias: 'state-forests',
    color: '#004000',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl: '/data/geojson/General/JBR2HR_State forests.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#004000',
          'fill-opacity': 0.15,
        },
      },
    ],
    orderLayout: 8,
    dontShowInFilters: false,
  },
];

export const keyFeaturesLegends = [
  {
    title: 'Key features of the proposal',
    label: 'Key features',
    value: 'title-key-features',
    icon: '',
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
    label: 'Pavement',
    value: 'pavement',
    icon: <Pavement />,
  },
  {
    label: 'Cut',
    value: 'cut',
    icon: rectangleIcon('#FAAF05', 1),
  },
  {
    label: 'Fill',
    value: 'fill',
    icon: rectangleIcon('#59B500', 1),
  },
  {
    label: 'Drainage',
    value: 'drainage',
    icon: <Drainage />,
  },
  {
    label: 'Detention basins',
    value: 'detention-basins',
    icon: <DetentionBasins />,
  },
  {
    label: 'Shared paths',
    value: 'shared-paths',
    icon: <SharedPath />,
  },
  {
    label: 'Proposed fauna underpass',
    value: 'proposed-fauna-underpass',
    icon: <ProposedFaunaUnderpass />,
  },
  {
    label: 'New bus stop',
    value: 'new-bus-stop',
    icon: <BusStop />,
  },
  {
    label: 'Truck parking area',
    value: 'truck-parking-area',
    icon: <TruckParking />,
  },
];

export const generalLegends = [
  {
    title: 'Base layers',
    label: 'base-layers',
    value: 'title-base-layers',
    icon: '',
  },
  {
    label: 'Local roads',
    value: 'local-roads',
    icon: <LocalRoads />,
  },
  {
    label: 'Regional roads',
    value: 'regional-roads',
    icon: <RegionalRoads />,
  },
  {
    label: 'State roads',
    value: 'state-roads',
    icon: <StateRoads />,
  },
  {
    label: 'Suburbs and localities',
    value: 'suburbs-and-localities',
    icon: <SuburbsAndLocalities />,
  },
  {
    label: 'Watercourses',
    value: 'water-courses',
    icon: <Watercourses />,
  },
  {
    label: 'National parks',
    value: 'national-parks',
    icon: rectangleIcon('#00AA45', 0.2),
  },
  {
    label: 'State forests',
    value: 'state-forests',
    icon: rectangleIcon('#004000', 0.2),
  },
];
