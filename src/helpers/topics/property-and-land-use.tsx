import ImageSlider from '../../components/ImageSlider/ImageSlider';
import { defaultFilters } from './default';

const rectangleIcon = (color: string) => {
  return (
    <svg
      width="24"
      height="12"
      viewBox="0 0 24 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="12" fill={color} />
    </svg>
  );
};

export const propertyAndLandUseLegends = [
  {
    title: 'Landscape and visual',
    label: 'Landscape and visual',
    value: 'title-property-and-land-use',
  },
  {
    label: 'National parks',
    value: 'national-parks',
    icon: rectangleIcon('#00AA454D'),
  },
  {
    label: 'State forests',
    value: 'state-forests',
    icon: rectangleIcon('#0040004D'),
  },
];

const lcaLegends = [
  {
    title: 'LCAs',
    label: 'LCAs',
    value: 'title-lcas',
  },
  {
    label: 'Rural residential',
    value: 'Rural residential',
    icon: rectangleIcon('#FAAF05B2'),
  },
  {
    label: 'Road infrastructure',
    value: 'Road infrastructure',
    icon: rectangleIcon('#D7153AB2'),
  },
  {
    label: 'Forested land',
    value: 'Forested land',
    icon: rectangleIcon('#146CFD'),
  },
];

export const landUseZoningLegends = [
  {
    title: 'Land use zoning',
    label: 'Land use zoning',
    value: 'title-land-use-zoning',
  },
  {
    label: 'W2 - Recreational waterways',
    value: 'W2 - Recreational waterways',
    icon: rectangleIcon('#8CE0FF'),
  },
  {
    label: 'W1 - Natural waterways',
    value: 'W1 - Natural waterways',
    icon: rectangleIcon('#CBEDFD'),
  },
  {
    label: 'SP3 - Tourist',
    value: 'SP3 - Tourist',
    icon: rectangleIcon('#22272BB2'),
  },
  {
    label: 'SP2 - Infrastructure',
    value: 'SP2 - Infrastructure',
    icon: rectangleIcon('#CDD3D699'),
  },
  {
    label: 'SP1 - Special activities',
    value: 'SP1 - Special activities',
    icon: rectangleIcon('#49505480'),
  },
  {
    label: 'RU5 - Village',
    value: 'RU5 - Village',
    icon: rectangleIcon('#523719'),
  },
  {
    label: 'RU4 - Primary production small lots',
    value: 'RU4 - Primary production small lots',
    icon: rectangleIcon('#523719'),
  },
  {
    label: 'RU3 - Forestry',
    value: 'RU3 - Forestry',
    icon: rectangleIcon('#004000'),
  },
  {
    label: 'RU2 - Rural landscape',
    value: 'RU2 - Rural landscape',
    icon: rectangleIcon('#E8D0B5'),
  },
  {
    label: 'RU1 - Primary production',
    value: 'RU1 - Primary production',
    icon: rectangleIcon('#EDE3D7'),
  },
  {
    label: 'RE2 - Private recreation',
    value: 'RE2 - Private recreation',
    icon: rectangleIcon('#FAAF05'),
  },
  {
    label: 'RE1 - Public recreation',
    value: 'RE1 - Public recreation',
    icon: rectangleIcon('#FDE79A'),
  },
  {
    label: 'R5 - Large lot residential',
    value: 'R5 - Large lot residential',
    icon: rectangleIcon('#941B00'),
  },
  {
    label: 'R3 - Medium density residential',
    value: 'R3 - Medium density residential',
    icon: rectangleIcon('#F3631B'),
  },
  {
    label: 'R2 - Low density residential',
    value: 'R2 - Low density residential',
    icon: rectangleIcon('#FFCE99'),
  },
  {
    label: 'R1 - General residential',
    value: 'R1 - General residential',
    icon: rectangleIcon('#FDEDDF'),
  },
  {
    label: 'E4 - General industrial',
    value: 'E4 - General industrial',
    icon: rectangleIcon('#FDDEF2'),
  },
  {
    label: 'E3 - Productivity support',
    value: 'E3 - Productivity support',
    icon: rectangleIcon('#F4B5E6'),
  },
  {
    label: 'E1 - Local centre',
    value: 'E1 - Local centre',
    icon: rectangleIcon('#D912AE'),
  },
  {
    label: 'MU1 - Mixed use',
    value: 'MU1 - Mixed use',
    icon: rectangleIcon('#65004D'),
  },
  {
    label: 'C4 - Environmental living',
    value: 'C4 - Environmental living',
    icon: rectangleIcon('#0B3F47'),
  },
  {
    label: 'C3 - Environmental management',
    value: 'C3 - Environmental management',
    icon: rectangleIcon('#DBFADF'),
  },
  {
    label: 'C2 - Environmental conservation',
    value: 'C2 - Environmental conservation',
    icon: rectangleIcon('#A8EDB3'),
  },
  {
    label: 'C1 - National parks and nature reserves',
    value: 'C1 - National parks and nature reserves',
    icon: rectangleIcon('#00AA454D'),
  },
];

export const propertyAndLandUseFilters = [
  ...defaultFilters,
  {
    label: 'National parks',
    value: 'national-parks',
    legendAlias: 'national-parks',
    color: '#00AA45',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl: '/data/geojson/property-and-land-use/National Parks.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#486F75',
          'fill-opacity': 0.8,
        },
      },
    ],
    orderLayout: 1,
    hasLineDivider: true,
    dontShowInLegend: false,
    dontShowInFilters: false,
  },
  {
    label: 'State forests',
    value: 'state-forests',
    legendAlias: 'state-forests',
    color: '#004000',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl: '/data/geojson/property-and-land-use/State Forests.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#004000',
          'fill-opacity': 0.8,
        },
      },
    ],
    orderLayout: 2,
    dontShowInFilters: false,
  },
  {
    label: 'Landscape character areas',
    value: 'landscape-character-areas',
    legendAlias: 'landscape-character-areas',
    color: '#495054',
    tickerColor: '#FFFFFF',
    legendsToShow: [...lcaLegends],
    geojson: [
      {
        sourceUrl:
          '/data/geojson/property-and-land-use/Landscape Character Areas.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#F4B5E6',
          'fill-opacity': 0.8,
        },
      },
    ],
    orderLayout: 3,
    dontShowInLegend: false,
    dontShowInFilters: false,
  },
  {
    label: 'Land use zoning',
    value: 'land-use-zoning',
    legendAlias: 'land-use-zoning',
    color: '#495054',
    tickerColor: '#FFFFFF',
    legendsToShow: [...landUseZoningLegends],
    geojson: [
      {
        sourceUrl:
          '/data/geojson/property-and-land-use/Land Use Zoning.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#EB8A9C',
          'fill-opacity': 0.8,
        },
      },
    ],
    orderLayout: 4,
    dontShowInLegend: false,
    dontShowInFilters: false,
  },
  {
    label: 'Landscape viewpoints',
    value: 'landscape-viewpoints',
    legendAlias: 'landscape-viewpoints',
    color: '#d912ae',
    tickerColor: '#FFFFFF',
    markers: [
      {
        id: 'VP2',
        coordinates: [150.5845738079575, -34.99497628563275],
        iconUrl: './images/gallery.svg',
        popupContent: (
          <ImageSlider
            images={[
              {
                url: '/images/viewpoint/vp2/1.png',
                title: (
                  <>
                    <span className="bold">Viewpoint 2</span> - Current
                  </>
                ),
              },
              {
                url: '/images/viewpoint/vp2/2.png',
                title: (
                  <>
                    <span className="bold">Viewpoint 2</span> - 2-3 years
                  </>
                ),
              },
              {
                url: '/images/viewpoint/vp2/3.png',
                title: (
                  <>
                    <span className="bold">Viewpoint 2</span> - 8+ years
                  </>
                ),
              },
            ]}
          />
        ),
      },
      {
        id: 'VP3',
        coordinates: [150.58434289804944, -34.9960901756142],
        iconUrl: './images/gallery.svg',
        popupContent: (
          <ImageSlider
            images={[
              {
                url: '/images/viewpoint/vp3/1.png',
                title: (
                  <>
                    <span className="bold">Viewpoint 3</span> - Current
                  </>
                ),
              },
              {
                url: '/images/viewpoint/vp3/2.png',
                title: (
                  <>
                    <span className="bold">Viewpoint 3</span> - 2-3 years
                  </>
                ),
              },
              {
                url: '/images/viewpoint/vp3/3.png',
                title: (
                  <>
                    <span className="bold">Viewpoint 3</span> - 8+ years
                  </>
                ),
              },
            ]}
          />
        ),
      },
      {
        id: 'VP8',
        coordinates: [150.57981453972766, -35.01862370663883],
        iconUrl: './images/gallery.svg',
        popupContent: (
          <ImageSlider
            images={[
              {
                url: '/images/viewpoint/vp8/1.png',
                title: (
                  <>
                    <span className="bold">Viewpoint 8</span> - Current
                  </>
                ),
              },
              {
                url: '/images/viewpoint/vp8/2.png',
                title: (
                  <>
                    <span className="bold">Viewpoint 8</span> - 2-3 years
                  </>
                ),
              },
              {
                url: '/images/viewpoint/vp8/3.png',
                title: (
                  <>
                    <span className="bold">Viewpoint 8</span> - 8+ years
                  </>
                ),
              },
            ]}
          />
        ),
      },
      {
        id: 'VP11',
        coordinates: [150.5790955237636, -35.02692075809039],
        iconUrl: './images/gallery.svg',
        popupContent: (
          <ImageSlider
            images={[
              {
                url: '/images/viewpoint/vp11/1.png',
                title: (
                  <>
                    <span className="bold">Viewpoint 11</span> - Current
                  </>
                ),
              },
              {
                url: '/images/viewpoint/vp11/2.png',
                title: (
                  <>
                    <span className="bold">Viewpoint 11</span> - 2-3 years
                  </>
                ),
              },
              {
                url: '/images/viewpoint/vp11/3.png',
                title: (
                  <>
                    <span className="bold">Viewpoint 11</span> - 8+ years
                  </>
                ),
              },
            ]}
          />
        ),
      },
    ],
    orderLayout: 5,
    dontShowInLegend: true,
    dontShowInFilters: true,
    defaultSelected: true,
  },
];
