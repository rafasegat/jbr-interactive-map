import ImageSlider from '../../components/ImageSlider/ImageSlider';
import { defaultFilters } from './default';
import {
  rectangleIcon,
  StudyAreaLandscape,
  VisualEnvelope,
} from '../../components/Icons/Legends';

export const landscapeAndVisualFiltersToShow = [
  {
    label: 'Study area',
    value: 'landscape-and-visual-study-area',
    legendAlias: 'landscape-and-visual-study-area',
    color: '#8055F1',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/Landscape and visual/JBR2HR_LV_Study area.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#8055F1',
          'fill-opacity': 0.4,
        },
      },
    ],
  },
  {
    label: 'Key viewpoints',
    value: 'landscape-and-visual-key-viewpoints',
    legendAlias: 'landscape-and-visual-key-viewpoints',
    color: '#D7153A',
    tickerColor: '#FFFFFF',
    markers: [
      {
        id: '1',
        coordinates: [150.5817895, -35.0089387],
        iconUrl: './images/video.svg',
        stackPriority: 2,
        popupContent: (
          <div>
            <iframe
              width="350px"
              height="225"
              src="https://www.youtube.com/embed/C3k_hGiTw1Q?si=zLkWYzrJ3muhWaHN"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        ),
      },
    ],
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
                    <span className="bold">Viewpoint 2</span> - 10 years
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
                    <span className="bold">Viewpoint 3</span> - 10 years
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
                    <span className="bold">Viewpoint 8</span> - 10 years
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
                    <span className="bold">Viewpoint 11</span> - 10 years
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

export const landscapeAndVisualLegends = [
  {
    title: 'Landscape and visual',
    label: 'Landscape and visual',
    value: 'title-property-and-land-use',
  },
  {
    label: 'Study area/visual envelope map',
    value: 'landscape-and-visual-study-area',
    icon: <VisualEnvelope />,
  },
];

const lcaLegends = [
  {
    title: 'Landscape character zones (LCZs)',
    label: 'Landscape character zones (LCZs)',
    value: 'title-lcas',
  },
  {
    label: 'LCZ 1 - Road infrastructure',
    value: 'Road infrastructure',
    icon: rectangleIcon('#D7153AB2'),
  },
  {
    label: 'LCZ 2 - Rural residential and mixed use',
    value: 'Rural residential',
    icon: rectangleIcon('#FAAF05B2'),
  },
  {
    label: 'LCZ 3 - Forested land',
    value: 'Forested land',
    icon: rectangleIcon('#146CFDB2'),
  },
];

export const lcaFilters = [
  {
    label: 'Rural residential',
    value: 'Rural residential',
    legendAlias: 'Rural residential',
    color: '#FAAF05',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/Landscape and visual/LCZs/JBR2HR_LCZ_Rural Residential.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#FAAF05',
          'fill-opacity': 0.4,
        },
      },
    ],
  },
  {
    label: 'Road infrastructure',
    value: 'Road infrastructure',
    legendAlias: 'Road infrastructure',
    color: '#D7153A',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/Landscape and visual/LCZs/JBR2HR_LCZ_Road Infrastructure.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#D7153A',
          'fill-opacity': 0.4,
        },
      },
    ],
    orderLayout: 7,
  },
  {
    label: 'Forested land',
    value: 'Forested land',
    legendAlias: 'Forested land',
    color: '#146CFD',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/Landscape and visual/LCZs/JBR2HR_LCZ_Forested Land.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#146CFD',
          'fill-opacity': 0.4,
        },
      },
    ],
    orderLayout: 8,
  },
];

// export const landUseZoningFilters = [
//   {
//     label: 'C1 - National parks and nature reserves',
//     value: 'C1 - National parks and nature reserves',
//     legendAlias: 'C1 - National parks and nature reserves',
//     color: '#00AA454D',
//     tickerColor: '#FFFFFF',
//     geojson: [
//       {
//         sourceUrl:
//           '/data/geojson/property-and-land-use/land-use-zoning/C1_National Parks and Nature Reserves.GeoJSON',
//         type: 'fill',
//         paint: {
//           'fill-color': '#00AA45',
//           'fill-opacity': 0.3,
//         },
//       },
//     ],
//   },
//   {
//     label: 'C2 - Environmental conservation',
//     value: 'C2 - Environmental conservation',
//     legendAlias: 'C2 - Environmental conservation',
//     color: '#A8EDB3',
//     tickerColor: '#FFFFFF',
//     geojson: [
//       {
//         sourceUrl:
//           '/data/geojson/property-and-land-use/land-use-zoning/C2_Environmental Conservation.GeoJSON',
//         type: 'fill',
//         paint: {
//           'fill-color': '#A8EDB3',
//           'fill-opacity': 0.6,
//         },
//       },
//     ],
//     orderLayout: 6,
//   },
//   {
//     label: 'C3 - Environmental management',
//     value: 'C3 - Environmental management',
//     legendAlias: 'C3 - Environmental management',
//     color: '#DBFADF',
//     tickerColor: '#000000',
//     geojson: [
//       {
//         sourceUrl:
//           '/data/geojson/property-and-land-use/land-use-zoning/C3_Environmental Management.GeoJSON',
//         type: 'fill',
//         paint: {
//           'fill-color': '#DBFADF',
//           'fill-opacity': 0.6,
//         },
//       },
//     ],
//     orderLayout: 5,
//   },
//   {
//     label: 'C4 - Environmental living',
//     value: 'C4 - Environmental living',
//     legendAlias: 'C4 - Environmental living',
//     color: '#0B3F47',
//     tickerColor: '#FFFFFF',
//     geojson: [
//       {
//         sourceUrl:
//           '/data/geojson/property-and-land-use/land-use-zoning/C4_Environmental Living.GeoJSON',
//         type: 'fill',
//         paint: {
//           'fill-color': '#0B3F47',
//           'fill-opacity': 0.6,
//         },
//       },
//     ],
//     orderLayout: 4,
//   },
//   {
//     labe: 'E1 - Local centre',
//     value: 'E1 - Local centre',
//     legendAlias: 'E1 - Local centre',
//     color: '#D912AE',
//     tickerColor: '#FFFFFF',
//     geojson: [
//       {
//         sourceUrl:
//           '/data/geojson/property-and-land-use/land-use-zoning/E1_Local Centre.GeoJSON',
//         type: 'fill',
//         paint: {
//           'fill-color': '#D912AE',
//           'fill-opacity': 0.6,
//         },
//       },
//     ],
//     orderLayout: 3,
//   },
//   {
//     label: 'E3 - Productivity support',
//     value: 'E3 - Productivity support',
//     legendAlias: 'E3 - Productivity support',
//     color: '#F4B5E6',
//     tickerColor: '#000000',
//     geojson: [
//       {
//         sourceUrl:
//           '/data/geojson/property-and-land-use/land-use-zoning/E3_Productivity Support.GeoJSON',
//         type: 'fill',
//         paint: {
//           'fill-color': '#F4B5E6',
//           'fill-opacity': 0.6,
//         },
//       },
//     ],
//     orderLayout: 2,
//   },
//   {
//     label: 'E4 - General industrial',
//     value: 'E4 - General industrial',
//     legendAlias: 'E4 - General industrial',
//     color: '#FDDEF2',
//     tickerColor: '#000000',
//     geojson: [
//       {
//         sourceUrl:
//           '/data/geojson/property-and-land-use/land-use-zoning/E4_General Industrial.GeoJSON',
//         type: 'fill',
//         paint: {
//           'fill-color': '#FDDEF2',
//           'fill-opacity': 0.6,
//         },
//       },
//     ],
//     orderLayout: 1,
//   },
//   {
//     label: 'R1 - General residential',
//     value: 'R1 - General residential',
//     legendAlias: 'R1 - General residential',
//     color: '#FDEDDF',
//     tickerColor: '#000000',
//     geojson: [
//       {
//         sourceUrl:
//           '/data/geojson/property-and-land-use/land-use-zoning/R1_General Residential.GeoJSON',
//         type: 'fill',
//         paint: {
//           'fill-color': '#FDEDDF',
//           'fill-opacity': 0.6,
//         },
//       },
//     ],
//     orderLayout: 0,
//   },
//   {
//     label: 'R2 - Low density residential',
//     value: 'R2 - Low density residential',
//     legendAlias: 'R2 - Low density residential',
//     color: '#FFCE99',
//     tickerColor: '#000000',
//     geojson: [
//       {
//         sourceUrl:
//           '/data/geojson/property-and-land-use/land-use-zoning/R2_Low Density Residential.GeoJSON',
//         type: 'fill',
//         paint: {
//           'fill-color': '#FFCE99',
//           'fill-opacity': 0.6,
//         },
//       },
//     ],
//     orderLayout: 0,
//   },
//   {
//     label: 'R3 - Medium density residential',
//     value: 'R3 - Medium density residential',
//     legendAlias: 'R3 - Medium density residential',
//     color: '#F3631B',
//     tickerColor: '#000000',
//     geojson: [
//       {
//         sourceUrl:
//           '/data/geojson/property-and-land-use/land-use-zoning/R3_Medium Density Residential.GeoJSON',
//         type: 'fill',
//         paint: {
//           'fill-color': '#F3631B',
//           'fill-opacity': 0.6,
//         },
//       },
//     ],
//     orderLayout: 0,
//   },
//   {
//     label: 'R5 - Large lot residential',
//     value: 'R5 - Large lot residential',
//     legendAlias: 'R5 - Large lot residential',
//     color: '#941B00',
//     tickerColor: '#FFFFFF',
//     geojson: [
//       {
//         sourceUrl:
//           '/data/geojson/property-and-land-use/land-use-zoning/R5_Large Lot Residential.GeoJSON',
//         type: 'fill',
//         paint: {
//           'fill-color': '#941B00',
//           'fill-opacity': 0.6,
//         },
//       },
//     ],
//     orderLayout: 0,
//   },
//   {
//     label: 'RE1 - Public recreation',
//     value: 'RE1 - Public recreation',
//     legendAlias: 'RE1 - Public recreation',
//     color: '#FDE79A',
//     tickerColor: '#000000',
//     geojson: [
//       {
//         sourceUrl:
//           '/data/geojson/property-and-land-use/land-use-zoning/RE1_Public Recreation.GeoJSON',
//         type: 'fill',
//         paint: {
//           'fill-color': '#FDE79A',
//           'fill-opacity': 0.6,
//         },
//       },
//     ],
//     orderLayout: 0,
//   },
//   {
//     label: 'RE2 - Private recreation',
//     value: 'RE2 - Private recreation',
//     legendAlias: 'RE2 - Private recreation',
//     color: '#FAAF05',
//     tickerColor: '#000000',
//     geojson: [
//       {
//         sourceUrl:
//           '/data/geojson/property-and-land-use/land-use-zoning/RE2_Private Recreation.GeoJSON',
//         type: 'fill',
//         paint: {
//           'fill-color': '#FAAF05',
//           'fill-opacity': 0.6,
//         },
//       },
//     ],
//     orderLayout: 0,
//   },
//   {
//     label: 'RU1 - Primary production',
//     value: 'RU1 - Primary production',
//     legendAlias: 'RU1 - Primary production',
//     color: '#EDE3D7',
//     tickerColor: '#000000',
//     geojson: [
//       {
//         sourceUrl:
//           '/data/geojson/property-and-land-use/land-use-zoning/RU1_Primary Production.GeoJSON',
//         type: 'fill',
//         paint: {
//           'fill-color': '#EDE3D7',
//           'fill-opacity': 0.6,
//         },
//       },
//     ],
//     orderLayout: 0,
//   },
//   {
//     label: 'RU2 - Rural landscape',
//     value: 'RU2 - Rural landscape',
//     legendAlias: 'RU2 - Rural landscape',
//     color: '#E8D0B5',
//     tickerColor: '#000000',
//     geojson: [
//       {
//         sourceUrl:
//           '/data/geojson/property-and-land-use/land-use-zoning/RU2_Rural Landscape.GeoJSON',
//         type: 'fill',
//         paint: {
//           'fill-color': '#E8D0B5',
//           'fill-opacity': 0.6,
//         },
//       },
//     ],
//     orderLayout: 0,
//   },
//   {
//     label: 'RU3 - Forestry',
//     value: 'RU3 - Forestry',
//     legendAlias: 'RU3 - Forestry',
//     color: '#004000',
//     tickerColor: '#FFFFFF',
//     geojson: [
//       {
//         sourceUrl:
//           '/data/geojson/property-and-land-use/land-use-zoning/RU3_Forestry.GeoJSON',
//         type: 'fill',
//         paint: {
//           'fill-color': '#004000',
//           'fill-opacity': 0.3,
//         },
//       },
//     ],
//     orderLayout: 0,
//   },
//   {
//     label: 'RU4 - Primary production small lots',
//     value: 'RU4 - Primary production small lots',
//     legendAlias: 'RU4 - Primary production small lots',
//     color: '#523719',
//     tickerColor: '#FFFFFF',
//     geojson: [
//       {
//         sourceUrl:
//           '/data/geojson/property-and-land-use/land-use-zoning/RU4_Primary Production Small Lots.GeoJSON',
//         type: 'fill',
//         paint: {
//           'fill-color': '#523719',
//           'fill-opacity': 0.4,
//         },
//       },
//     ],
//     orderLayout: 0,
//   },
//   {
//     label: 'RU5 - Village',
//     value: 'RU5 - Village',
//     legendAlias: 'RU5 - Village',
//     color: '#523719',
//     tickerColor: '#FFFFFF',
//     geojson: [
//       {
//         sourceUrl:
//           '/data/geojson/property-and-land-use/land-use-zoning/RU5_Village.GeoJSON',
//         type: 'fill',
//         paint: {
//           'fill-color': '#523719',
//           'fill-opacity': 0.6,
//         },
//       },
//     ],
//     orderLayout: 0,
//   },
//   {
//     label: 'SP1 - Special activities',
//     value: 'SP1 - Special activities',
//     legendAlias: 'SP1 - Special activities',
//     color: '#49505480',
//     tickerColor: '#FFFFFF',
//     geojson: [
//       {
//         sourceUrl:
//           '/data/geojson/property-and-land-use/land-use-zoning/SP1_Special Activities.GeoJSON',
//         type: 'fill',
//         paint: {
//           'fill-color': '#495054',
//           'fill-opacity': 0.6,
//         },
//       },
//     ],
//     orderLayout: 0,
//   },
//   {
//     label: 'SP2 - Infrastructure',
//     value: 'SP2 - Infrastructure',
//     legendAlias: 'SP2 - Infrastructure',
//     color: '#CDD3D699',
//     tickerColor: '#000000',
//     geojson: [
//       {
//         sourceUrl:
//           '/data/geojson/property-and-land-use/land-use-zoning/SP2_Infrastructure.GeoJSON',
//         type: 'fill',
//         paint: {
//           'fill-color': '#CDD3D6',
//           'fill-opacity': 0.6,
//         },
//       },
//     ],
//     orderLayout: 0,
//   },
//   {
//     label: 'SP3 - Tourist',
//     value: 'SP3 - Tourist',
//     legendAlias: 'SP3 - Tourist',
//     color: '#22272BB2',
//     tickerColor: '#FFFFFF',
//     geojson: [
//       {
//         sourceUrl:
//           '/data/geojson/property-and-land-use/land-use-zoning/SP3_Tourist.GeoJSON',
//         type: 'fill',
//         paint: {
//           'fill-color': '#22272B',
//           'fill-opacity': 0.6,
//         },
//       },
//     ],
//     orderLayout: 0,
//   },
//   {
//     label: 'MU1 - Mixed use',
//     value: 'MU1 - Mixed use',
//     legendAlias: 'MU1 - Mixed use',
//     color: '#D7153A',
//     tickerColor: '#FFFFFF',
//     geojson: [
//       {
//         sourceUrl:
//           '/data/geojson/property-and-land-use/land-use-zoning/MU1_Mixed Use.GeoJSON',
//         type: 'fill',
//         paint: {
//           'fill-color': '#D7153A',
//           'fill-opacity': 0.4,
//         },
//       },
//     ],
//     orderLayout: 0,
//   },
//   {
//     label: 'W1 - Natural waterways',
//     value: 'W1 - Natural waterways',
//     legendAlias: 'W1 - Natural waterways',
//     color: '#CBEDFD',
//     tickerColor: '#000000',
//     geojson: [
//       {
//         sourceUrl:
//           '/data/geojson/property-and-land-use/land-use-zoning/W1_Natural Waterways.GeoJSON',
//         type: 'fill',
//         paint: {
//           'fill-color': '#CBEDFD',
//           'fill-opacity': 0.4,
//         },
//       },
//     ],
//     orderLayout: 9,
//   },
//   {
//     label: 'W2 - Recreational waterways',
//     value: 'W2 - Recreational waterways',
//     legendAlias: 'W2 - Recreational waterways',
//     color: '#8CE0FF',
//     tickerColor: '#000000',
//     geojson: [
//       {
//         sourceUrl:
//           '/data/geojson/property-and-land-use/land-use-zoning/W2_Recreational Waterways.GeoJSON',
//         type: 'fill',
//         paint: {
//           'fill-color': '#8CE0FF',
//           'fill-opacity': 0.4,
//         },
//       },
//     ],
//     orderLayout: 10,
//   },
// ];

// export const landUseZoningLegends = [
//   {
//     title: 'Land use zoning',
//     label: 'Land use zoning',
//     value: 'title-land-use-zoning',
//   },
//   {
//     label: 'W2 - Recreational waterways',
//     value: 'W2 - Recreational waterways',
//     icon: rectangleIcon('#8CE0FF'),
//   },
//   {
//     label: 'W1 - Natural waterways',
//     value: 'W1 - Natural waterways',
//     icon: rectangleIcon('#CBEDFD'),
//   },
//   {
//     label: 'SP3 - Tourist',
//     value: 'SP3 - Tourist',
//     icon: rectangleIcon('#22272BB2'),
//   },
//   {
//     label: 'SP2 - Infrastructure',
//     value: 'SP2 - Infrastructure',
//     icon: rectangleIcon('#CDD3D699'),
//   },
//   {
//     label: 'SP1 - Special activities',
//     value: 'SP1 - Special activities',
//     icon: rectangleIcon('#49505480'),
//   },
//   {
//     label: 'RU5 - Village',
//     value: 'RU5 - Village',
//     icon: rectangleIcon('#523719'),
//   },
//   {
//     label: 'RU4 - Primary production small lots',
//     value: 'RU4 - Primary production small lots',
//     icon: rectangleIcon('#523719'),
//   },
//   {
//     label: 'RU3 - Forestry',
//     value: 'RU3 - Forestry',
//     icon: rectangleIcon('#004000'),
//   },
//   {
//     label: 'RU2 - Rural landscape',
//     value: 'RU2 - Rural landscape',
//     icon: rectangleIcon('#E8D0B5'),
//   },
//   {
//     label: 'RU1 - Primary production',
//     value: 'RU1 - Primary production',
//     icon: rectangleIcon('#EDE3D7'),
//   },
//   {
//     label: 'RE2 - Private recreation',
//     value: 'RE2 - Private recreation',
//     icon: rectangleIcon('#FAAF05'),
//   },
//   {
//     label: 'RE1 - Public recreation',
//     value: 'RE1 - Public recreation',
//     icon: rectangleIcon('#FDE79A'),
//   },
//   {
//     label: 'R5 - Large lot residential',
//     value: 'R5 - Large lot residential',
//     icon: rectangleIcon('#941B00'),
//   },
//   {
//     label: 'R3 - Medium density residential',
//     value: 'R3 - Medium density residential',
//     icon: rectangleIcon('#F3631B'),
//   },
//   {
//     label: 'R2 - Low density residential',
//     value: 'R2 - Low density residential',
//     icon: rectangleIcon('#FFCE99'),
//   },
//   {
//     label: 'R1 - General residential',
//     value: 'R1 - General residential',
//     icon: rectangleIcon('#FDEDDF'),
//   },
//   {
//     label: 'E4 - General industrial',
//     value: 'E4 - General industrial',
//     icon: rectangleIcon('#FDDEF2'),
//   },
//   {
//     label: 'E3 - Productivity support',
//     value: 'E3 - Productivity support',
//     icon: rectangleIcon('#F4B5E6'),
//   },
//   {
//     label: 'E1 - Local centre',
//     value: 'E1 - Local centre',
//     icon: rectangleIcon('#D912AE'),
//   },
//   {
//     label: 'MU1 - Mixed use',
//     value: 'MU1 - Mixed use',
//     icon: rectangleIcon('#65004D'),
//   },
//   {
//     label: 'C4 - Environmental living',
//     value: 'C4 - Environmental living',
//     icon: rectangleIcon('#0B3F47'),
//   },
//   {
//     label: 'C3 - Environmental management',
//     value: 'C3 - Environmental management',
//     icon: rectangleIcon('#DBFADF'),
//   },
//   {
//     label: 'C2 - Environmental conservation',
//     value: 'C2 - Environmental conservation',
//     icon: rectangleIcon('#A8EDB3'),
//   },
//   {
//     label: 'C1 - National parks and nature reserves',
//     value: 'C1 - National parks and nature reserves',
//     icon: rectangleIcon('#00AA454D'),
//   },
// ];

export const propertyAndLandUseFilters = [
  ...defaultFilters,
  {
    label: 'Landscape and visual',
    value: 'landscape-and-visual',
    legendAlias: 'landscape-and-visual',
    orderLayout: 3,
    filtersToShow: [...landscapeAndVisualFiltersToShow],
    legendsToShow: [...landscapeAndVisualLegends],
    color: '#D7153A',
    tickerColor: '#FFFFFF',
    dontShowInFilters: false,
  },
  {
    label: 'Landscape character zones',
    value: 'landscape-character-zones',
    legendAlias: 'landscape-character-zones',
    color: '#D7153A',
    tickerColor: '#FFFFFF',
    filtersToShow: [...lcaFilters],
    legendsToShow: [...lcaLegends],
    orderLayout: 3,
    dontShowInLegend: false,
    dontShowInFilters: false,
  },
];
