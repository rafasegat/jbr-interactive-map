import ExternalLink from '../../components/Icons/ExternalLink';
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
        stackPriority: 1,
        popupContent: (
          <div>
            <h3>Jervis Bay Road intersection upgrade</h3>
            <a
              href="https://www.transport.nsw.gov.au/projects/current-projects/jervis-bay-road-and-princes-highway-intersection"
              target="_blank"
              rel="noopener noreferrer"
              className="button-link"
            >
              <ExternalLink color="#fff" />
              <span>Go to project page</span>
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
