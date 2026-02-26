import React, { useState, useRef, useEffect } from 'react';
import './SearchAddress.scss';

interface SearchAddressProps {
  onLocationSelect?: (lat: number, lng: number, address: string) => void;
}

const SearchAddress: React.FC<SearchAddressProps> = ({ onLocationSelect }) => {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  // Initialize Google Places Autocomplete
  useEffect(() => {
    // Load Google Maps Places API script
    const loadGoogleMapsScript = () => {
      if (window.google && window.google.maps && window.google.maps.places) {
        initAutocomplete();
        return;
      }

      const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
      if (!apiKey) {
        console.error(
          'Google Maps API key is not configured. Please add VITE_GOOGLE_MAPS_API_KEY to your .env file.',
        );
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        initAutocomplete();
      };
      document.head.appendChild(script);
    };

    const initAutocomplete = () => {
      if (!inputRef.current) return;

      // NSW bounding box (approx coordinates)
      const nswBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(-37.5, 141.0), // Southwest corner
        new google.maps.LatLng(-28.15, 153.6), // Northeast corner
      );

      autocompleteRef.current = new google.maps.places.Autocomplete(
        inputRef.current,
        {
          types: ['address'],
          componentRestrictions: { country: 'au' }, // Restrict to Australia
          bounds: nswBounds, // Bias results to NSW
          strictBounds: true, // Only return results within NSW bounds
        },
      );

      autocompleteRef.current.addListener('place_changed', () => {
        const place = autocompleteRef.current?.getPlace();
        if (place && place.geometry && place.geometry.location) {
          const lat = place.geometry.location.lat();
          const lng = place.geometry.location.lng();
          const address = place.formatted_address || '';

          if (onLocationSelect) {
            onLocationSelect(lat, lng, address);
          }

          // Close the input after selection
          setIsInputVisible(false);
        }
      });
    };

    if (isInputVisible) {
      loadGoogleMapsScript();
    }
  }, [isInputVisible, onLocationSelect]);

  // Focus input when it becomes visible
  useEffect(() => {
    if (isInputVisible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isInputVisible]);

  const toggleInput = () => {
    setIsInputVisible(!isInputVisible);
  };

  const handleInputBlur = () => {
    // Delay hiding to allow clicking on autocomplete suggestions
    setTimeout(() => {
      if (inputRef.current && !inputRef.current.matches(':focus')) {
        setIsInputVisible(false);
      }
    }, 200);
  };

  return (
    <div className="search-address">
      {isInputVisible && (
        <input
          ref={inputRef}
          type="text"
          placeholder="Search for an address..."
          className="search-address__input"
          onBlur={handleInputBlur}
        />
      )}
      <button
        type="button"
        className="search-address__button"
        onClick={toggleInput}
        aria-label="Search address"
      >
        <svg
          width="33"
          height="32"
          viewBox="0 0 33 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="31.5489"
            height="31"
            rx="0.5"
            fill="white"
          />
          <rect
            x="0.5"
            y="0.5"
            width="31.5489"
            height="31"
            rx="0.5"
            stroke="#EEEEEE"
          />
          <circle
            cx="14.8994"
            cy="14.625"
            r="5.125"
            stroke="black"
            strokeWidth="2"
          />
          <path
            d="M20.7744 20.5L23.7744 23.5"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M20.0673 21.2071C20.4578 21.5976 21.091 21.5976 21.4815 21.2071C21.872 20.8166 21.872 20.1834 21.4815 19.7929L20.7744 20.5L20.0673 21.2071ZM18.7744 18.5L18.0673 19.2071L20.0673 21.2071L20.7744 20.5L21.4815 19.7929L19.4815 17.7929L18.7744 18.5Z"
            fill="black"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchAddress;
