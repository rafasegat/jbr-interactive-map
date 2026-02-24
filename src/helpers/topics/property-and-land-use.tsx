import { conceptDesignFilters, conceptDesignLegends } from './concept-design';
import {
  LandscapeCharacterAreas,
  LandUseZoning,
  NationalParks,
  StateForests,
  LandscapeViewpoints,
} from '../../components/Icons/Legends';
import ImageSlider from '../../components/ImageSlider/ImageSlider';

export const propertyAndLandUseFilters = [
  {
    label: 'Concept design',
    value: 'concept-design',
    legendAlias: 'concept-design',
    geojson: [],
    filtersToShow: [...conceptDesignFilters],
    legendsToShow: [...conceptDesignLegends],
    orderLayout: 1,
    color: '#002664',
    tickerColor: '#FFFFFF',
  },
  {
    label: 'Local government area',
    value: 'local-government-area',
    legendAlias: 'local-government-area',
    geojson: [],
    orderLayout: 2,
    color: '#F4B5E6',
    tickerColor: '#000000',
  },
  {
    label: 'Land use zoning',
    value: 'land-use-zoning',
    legendAlias: 'land-use-zoning',
    color: '#EFA1B0',
    tickerColor: '#000000',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/property-and-land-use/Land Use Zoning.geojson',
        type: 'line',
        paint: {
          'line-color': '#EFA1B0',
          'line-width': 2,
        },
      },
    ],
    hasLineDivider: true,
    orderLayout: 3,
  },
  {
    label: 'Landscape character areas',
    value: 'landscape-character-areas',
    legendAlias: 'landscape-character-areas',
    color: '#f4b5e6',
    tickerColor: '#000000',
    geojson: [
      {
        sourceUrl:
          '/data/geojson/property-and-land-use/Landscape Character Areas.geojson',
        type: 'line',
        paint: {
          'line-color': '#f4b5e6',
          'line-width': 2,
        },
      },
    ],
    orderLayout: 4,
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
        // icon: ArtistImpressionIcon,
        iconUrl: './images/gallery.svg',
        popupContent: (
          <>
            <div>
              <ImageSlider
                images={[
                  '/images/viewpoint/vp2/vp2-1.png',
                  '/images/viewpoint/vp2/vp2-2.png',
                  '/images/viewpoint/vp2/vp2-3.png',
                ]}
              />
            </div>

            <p>
              <span className="bold">Viewpoint 2</span> - Current
            </p>
          </>
        ),
      },
      {
        id: 'VP3',
        coordinates: [150.58434289804944, -34.9960901756142],
        iconUrl: './images/gallery.svg',
        popupContent: (
          <>
            <div>
              <ImageSlider
                images={[
                  '/images/viewpoint/vp2/vp2-1.png',
                  '/images/viewpoint/vp2/vp2-2.png',
                  '/images/viewpoint/vp2/vp2-3.png',
                ]}
              />
            </div>

            <p>
              <span className="bold">Viewpoint 3</span> - Current
            </p>
          </>
        ),
      },
      {
        id: 'VP8',
        coordinates: [150.57981453972766, -35.01862370663883],
        iconUrl: './images/gallery.svg',
        popupContent: (
          <>
            <div>
              <ImageSlider
                images={[
                  '/images/viewpoint/vp2/vp2-1.png',
                  '/images/viewpoint/vp2/vp2-2.png',
                  '/images/viewpoint/vp2/vp2-3.png',
                ]}
              />
            </div>

            <p>
              <span className="bold">Viewpoint 8</span> - Current
            </p>
          </>
        ),
      },
      {
        id: 'VP11',
        coordinates: [150.5790955237636, -35.02692075809039],
        iconUrl: './images/gallery.svg',
        popupContent: (
          <>
            <div>
              <ImageSlider
                images={[
                  '/images/viewpoint/vp2/vp2-1.png',
                  '/images/viewpoint/vp2/vp2-2.png',
                  '/images/viewpoint/vp2/vp2-3.png',
                ]}
              />
            </div>

            <p>
              <span className="bold">Viewpoint 11</span> - Current
            </p>
          </>
        ),
      },
    ],
    orderLayout: 5,
  },
  {
    label: 'State forests',
    value: 'state-forests',
    legendAlias: 'state-forests',
    color: '#33BB6A',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl: '/data/geojson/property-and-land-use/State Forests.geojson',
        type: 'line',
        paint: {
          'line-color': '#33BB6A',
          'line-width': 2,
        },
      },
    ],
    orderLayout: 6,
  },
  {
    label: 'National parks',
    value: 'national-parks',
    legendAlias: 'national-parks',
    color: '#0b3f47',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl: '/data/geojson/property-and-land-use/National Parks.geojson',
        type: 'line',
        paint: {
          'line-color': '#0b3f47',
          'line-width': 2,
        },
      },
    ],
    orderLayout: 7,
  },
];

export const propertyAndLandUseLegends = [
  {
    title: 'Property and land use',
    label: 'title',
    value: 'title',
  },
  {
    label: 'Land use zoning',
    value: 'land-use-zoning',
    icon: <LandUseZoning />,
  },
  {
    label: 'Landscape character areas',
    value: 'landscape-character-areas',
    icon: <LandscapeCharacterAreas />,
  },
  {
    label: 'Landscape viewpoints',
    value: 'landscape-viewpoints',
    icon: <LandscapeViewpoints />,
  },
  {
    label: 'State forests',
    value: 'state-forests',
    icon: <StateForests />,
  },
  {
    label: 'National parks',
    value: 'national-parks',
    icon: <NationalParks />,
  },
];
