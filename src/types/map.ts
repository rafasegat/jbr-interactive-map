import { ReactElement } from 'react';

export interface GeoJsonLayer {
  sourceUrl: string;
  type: string;
  paint: Record<string, any>;
  layout?: Record<string, any>;
  source?: Record<string, any>;
}

export interface Legend {
  label?: string;
  value: string;
  icon?: ReactElement | string;
  title?: string;
  twoColumnLayout?: boolean;
}

export interface Filter {
  label: string;
  value: string;
  legendAlias: string;
  orderLayout?: number;
  color: string;
  tickerColor: string;
  geojson?: GeoJsonLayer[];
  markers?: {
    id: string;
    coordinates: [number, number];
    popupContent?: ReactElement;
    iconUrl?: string;
    iconComponent?: ReactElement;
    text?: string;
    isTooltip?: boolean;
  }[];
  filtersToShow?: Filter[];
  legendsToShow?: Legend[];
  hasLineDivider?: boolean;
  iconUrl?: string;
  dontShowInLegend?: boolean;
  dontShowInFilters?: boolean;
  defaultSelected?: boolean;
}

export interface Topic {
  title: string;
  slug: string;
  content?: ReactElement | null;
  filters?: Filter[];
  legends?: Legend[];
  isOnMenu: boolean;
  color?: string;
  footer?: ReactElement | null;
}
