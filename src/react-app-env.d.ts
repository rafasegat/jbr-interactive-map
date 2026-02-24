/// <reference types="react-scripts" />

// Google Maps types
declare global {
  interface Window {
    google: typeof google;
  }
}

declare namespace google.maps {
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
