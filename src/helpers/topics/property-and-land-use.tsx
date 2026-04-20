import ImageSlider from '../../components/ImageSlider/ImageSlider';
import { defaultFilters } from './default';
import { rectangleIcon, VisualEnvelope } from '../../components/Icons/Legends';

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
    label: 'LCZ 1 - Road infrastructure and mixed use',
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
