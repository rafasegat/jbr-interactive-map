import { defaultFilters } from './default';

export const cumulativeFilters = [
  ...defaultFilters,
  {
    label: 'Cumulative',
    value: 'cumulative',
    legendAlias: 'cumulative',
    color: '#d912ae',
    tickerColor: '#FFFFFF',
    markers: [
      {
        id: '1',
        coordinates: [150.587664898039321, -34.983307187439877],
        iconUrl: './images/gallery.svg',
        popupContent: (
          <div>
            <h3>Jervis Bay Road and Princes Highway intersection</h3>
            <a
              href="https://www.transport.nsw.gov.au/projects/current-projects/jervis-bay-road-and-princes-highway-intersection"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jervis Bay Road and Princes Highway intersection project
            </a>
          </div>
        ),
      },
    ],
    orderLayout: 1,
    dontShowInLegend: true,
    dontShowInFilters: false,
    defaultSelected: true,
  },
];

// export const cumulativeLegends = [
//   {
//     title: 'Cumulative',
//     label: 'Cumulative',
//     value: 'title-cumulative',
//   },
//   {
//     label: 'Cumulative',
//     value: 'cumulative',
//     icon: <CumulativeIcon />,
//   },
// ];
