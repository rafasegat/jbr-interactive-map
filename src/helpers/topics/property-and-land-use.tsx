import { conceptDesignFilters, conceptDesignLegends } from './concept-design';
import {
  LandscapeCharacterAreas,
  LandUseZoning,
  NationalParks,
  StateForests,
  LandscapeViewpoints,
} from '../../components/Icons/Legends';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import { defaultFilters } from './default';
import { doesNotThrow } from 'assert';

export const propertyAndLandUseFilters = [
  ...defaultFilters,
  {
    label: 'Land use zoning',
    value: 'land-use-zoning',
    legendAlias: 'land-use-zoning',
    color: '#EB8A9C',
    tickerColor: '#000000',
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
    hasLineDivider: true,
    orderLayout: 3,
    dontShowInLegend: false,
    dontShowInFilters: false,
  },
  {
    label: 'Landscape character areas',
    value: 'landscape-character-areas',
    legendAlias: 'landscape-character-areas',
    color: '#F4B5E6',
    tickerColor: '#000000',
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
  {
    label: 'State forests',
    value: 'state-forests',
    legendAlias: 'state-forests',
    color: '#00AA45',
    tickerColor: '#FFFFFF',
    geojson: [
      {
        sourceUrl: '/data/geojson/property-and-land-use/State Forests.geojson',
        type: 'fill',
        paint: {
          'fill-color': '#00AA45',
          'fill-opacity': 0.8,
        },
      },
    ],
    orderLayout: 6,
    dontShowInFilters: false,
  },
  {
    label: 'National parks',
    value: 'national-parks',
    legendAlias: 'national-parks',
    color: '#486F75',
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
    orderLayout: 7,
    dontShowInLegend: false,
    dontShowInFilters: false,
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
