/// <reference types="react-scripts" />

// Google Maps types
declare global {
  interface Window {
    google: typeof google;
  }
}

declare namespace google.maps {
  class LatLng {
    constructor(lat: number, lng: number);
  }

  class LatLngBounds {
    constructor(sw?: LatLng, ne?: LatLng);
  }

  namespace places {
    class Autocomplete {
      constructor(inputField: HTMLInputElement, opts?: AutocompleteOptions);
      addListener(eventName: string, handler: () => void): void;
      getPlace(): PlaceResult;
    }

    interface AutocompleteOptions {
      types?: string[];
      componentRestrictions?: {
        country: string | string[];
      };
      bounds?: google.maps.LatLngBounds;
      strictBounds?: boolean;
    }

    interface PlaceResult {
      formatted_address?: string;
      geometry?: {
        location: {
          lat(): number;
          lng(): number;
        };
      };
    }
  }
}
