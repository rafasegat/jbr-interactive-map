/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import MapLegend from '../MapLegend/MapLegend';
import { appMetadata } from '../../helpers/constants';
import Reset from '../Icons/Reset';
import { useAppContext } from '../../context/useAppContext';
import { expandFilters } from '../../context/context';
import { enumTabs } from '../../helpers/constants';
import { listOfTopicsToAddLayer } from '../../helpers/constants';
import { Filter, GeoJsonLayer } from '../../types/map';

import './Map.scss';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = appMetadata.map.accessToken;

const Map: React.FC = () => {
  const {
    state,
    getTopicActive,
    setFilterOptionsSelected,
    setTopicActive,
    setZoneOptionsSelected,
  } = useAppContext();
  const { tabActive, filterOptionsSelected, topicActive } = state;
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const geojsonCache = useRef<globalThis.Map<string, any>>(
    new globalThis.Map(),
  );
  const [mapLoaded, setMapLoaded] = useState(false);
  const [styleLoaded, setStyleLoaded] = useState(0); // Counter to trigger re-renders on style changes
  const [layersReady, setLayersReady] = useState(false); // Flag to indicate layers are added and ready
  const [isLoading, setIsLoading] = useState(true); // Loading state for map and GeoJSON

  // Initialize map on component mount
  useEffect(() => {
    try {
      mapRef.current = new mapboxgl.Map({
        container: mapContainer?.current || '',
        style: appMetadata.map.satelliteStyle,
        center: (appMetadata?.map?.defaultCenter || [0, 0]) as [number, number],
        zoom: appMetadata.map.defaultZoom,
        maxZoom: appMetadata.map.maxZoom,
        minZoom: appMetadata.map.minZoom,
      });
    } catch (error) {
      console.error('Error initializing map:', error);
      return;
    }

    // Add controls when map loads
    mapRef.current.on('load', () => {
      // Add zoom and rotation controls to the map after it's loaded
      if (mapRef.current) {
        mapRef.current.addControl(new mapboxgl.NavigationControl());
        mapRef.current.addControl(
          new mapboxgl.ScaleControl({
            maxWidth: 80,
            unit: 'metric',
          }),
        );
      }
    });

    // when click console log the coordinates
    mapRef.current.on('click', (event) => {
      console.log(`[${event.lngLat.lng}, ${event.lngLat.lat}]`);
    });

    // Wait for style to load
    mapRef.current.on('load', () => {
      setMapLoaded(true);
      // Initial loading will be handled by layersReady state
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  // Add all layers for all topics just once when map and style are loaded,
  // then control visibility separately
  useEffect(() => {
    if (!mapRef.current || !mapLoaded) return;

    // Add ALL layers for the active topic (visibility controlled separately)
    const addAllTopicLayers = async () => {
      if (!appMetadata.topics) return;

      for (const topic of appMetadata.topics) {
        if (!topic.filters) continue;

        // Add layers for direct GeoJSON in filters
        // Sort in reverse: higher orderLayout added first (bottom), lower added last (top)
        for (const filter of listOfTopicsToAddLayer) {
          // Process direct GeoJSON in this filter
          for (let index = 0; index < (filter?.geojson?.length || 0); index++) {
            const geojson = filter.geojson[index] as GeoJsonLayer;
            const sourceId = `topic-source-${filter.value}-${index}`;
            const layerId = `topic-layer-${filter.value}-${index}`;

            // Support both direct data (source) and lazy loading (sourceUrl)
            let geojsonData: any = geojson.source || {};

            if (geojson.sourceUrl) {
              // Check cache first
              if (geojsonCache.current.has(geojson.sourceUrl)) {
                geojsonData = geojsonCache.current.get(geojson.sourceUrl);
              } else if (!geojson.source) {
                // Load GeoJSON from URL only if not in cache
                try {
                  const response = await fetch(geojson.sourceUrl);
                  geojsonData = await response.json();
                  // Store in cache
                  geojsonCache.current.set(geojson.sourceUrl, geojsonData);
                } catch (error) {
                  console.error(
                    `Failed to load GeoJSON from ${geojson.sourceUrl}:`,
                    error,
                  );
                  continue;
                }
              }
            }

            if (mapRef.current && !mapRef.current.getSource(sourceId)) {
              mapRef.current.addSource(sourceId, {
                type: 'geojson',
                data: geojsonData,
              });
            }

            if (mapRef.current && !mapRef.current.getLayer(layerId)) {
              mapRef.current.addLayer({
                id: layerId,
                type: (geojson.type || 'fill') as
                  | 'fill'
                  | 'line'
                  | 'circle'
                  | 'symbol'
                  | 'raster'
                  | 'fill-extrusion'
                  | 'heatmap'
                  | 'hillshade'
                  | 'background'
                  | 'sky'
                  | 'custom',
                source: sourceId,
                layout: {
                  ...(geojson.layout || {}),
                  visibility: 'none', // Start hidden, visibility controlled separately
                },
                paint: geojson.paint || {},
              } as mapboxgl.AnyLayer);
            }
          }
        }
      }
    };

    const loadLayers = async () => {
      setLayersReady(false); // Signal that layers are being updated
      // Only show loading spinner on initial load, not on style changes
      // if (styleLoaded === 0) {
      setIsLoading(true);
      // }
      await addAllTopicLayers();

      // Wait for next frame to ensure all layers are fully registered in Mapbox
      requestAnimationFrame(() => {
        setLayersReady(true); // Signal that layers are ready
        // if (styleLoaded === 0) {
        setIsLoading(false); // Hide loading indicator only if we showed it
        // }
      });
    };

    loadLayers();
  }, [mapLoaded, styleLoaded]);

  // Change map style based on tabActive
  useEffect(() => {
    if (!mapRef.current || !mapLoaded) return;

    const style =
      tabActive === enumTabs.satellite
        ? appMetadata.map.satelliteStyle
        : appMetadata.map.defaultStyle;

    mapRef.current.setStyle(style);

    // Wait for style to load, then re-add controls and trigger layer re-add
    mapRef.current.once('style.load', () => {
      setStyleLoaded((prev) => prev + 1);
    });
  }, [tabActive, mapLoaded]);

  // Control layer visibility based on filter selections and when filters or topic change
  useEffect(() => {
    if (!mapRef.current || !mapLoaded || !layersReady) return;

    const activeTopic = getTopicActive();
    const allTopics = appMetadata.topics || [];
    if (!activeTopic) return;

    // First pass: collect all layer IDs that should be visible via filtersToShow in the active topic
    const layersVisibleViaFiltersToShow = new Set();

    // Loop through all topics  to find the active topic and
    // determine which layers should be visible based on filtersToShow
    allTopics.forEach((topic) => {
      if (!topic.filters) return;
      const isTopicActive = topic.slug === activeTopic.slug;

      if (isTopicActive) {
        topic.filters.forEach((filter) => {
          const isFilterSelected = filterOptionsSelected.includes(filter.value);
          const typedFilter = filter as Filter;

          if (typedFilter.filtersToShow && isFilterSelected) {
            typedFilter.filtersToShow.forEach((nestedFilter: Filter) => {
              const isNestedFilterSelected = filterOptionsSelected.includes(
                nestedFilter.value,
              );

              if (isNestedFilterSelected) {
                nestedFilter?.geojson?.forEach(
                  (geojson: GeoJsonLayer, index: number) => {
                    const layerId = `topic-layer-${nestedFilter.value}-${index}`;
                    layersVisibleViaFiltersToShow.add(layerId);
                  },
                );
              }
            });
          }
        });
      }
    });

    // Second pass: set visibility for all layers except the activetopic
    allTopics
      .filter((topic) => topic.slug !== activeTopic.slug)
      .forEach((topic) => {
        if (!topic.filters) return;

        const isTopicActive = topic.slug === activeTopic.slug;

        topic.filters.forEach((filter) => {
          const isFilterSelected = filterOptionsSelected.includes(filter.value);
          const shouldBeVisible = isTopicActive && isFilterSelected;
          const typedFilter = filter as Filter;

          // Update visibility for direct GeoJSON layers
          // Skip if layer is being shown via filtersToShow
          filter?.geojson?.forEach((geojson: GeoJsonLayer, index: number) => {
            const layerId = `topic-layer-${filter.value}-${index}`;

            if (mapRef.current && mapRef.current.getLayer(layerId)) {
              // Only update if not already visible via filtersToShow
              if (!layersVisibleViaFiltersToShow.has(layerId)) {
                mapRef.current.setLayoutProperty(
                  layerId,
                  'visibility',
                  shouldBeVisible ? 'visible' : 'none',
                );
              }
            }
          });

          // Update visibility for nested filters if filtersToShow exists
          if (typedFilter.filtersToShow && isTopicActive && isFilterSelected) {
            typedFilter.filtersToShow.forEach((nestedFilter: Filter) => {
              const isNestedFilterSelected = filterOptionsSelected.includes(
                nestedFilter.value,
              );
              const shouldNestedBeVisible = isNestedFilterSelected;

              nestedFilter?.geojson?.forEach(
                (geojson: GeoJsonLayer, index: number) => {
                  const layerId = `topic-layer-${nestedFilter.value}-${index}`;

                  if (mapRef.current && mapRef.current.getLayer(layerId)) {
                    mapRef.current.setLayoutProperty(
                      layerId,
                      'visibility',
                      shouldNestedBeVisible ? 'visible' : 'none',
                    );
                  }
                },
              );
            });
          }
        });
      });

    // Third pass: ensure layers for the active topic are set to visible if their filters are selected
    allTopics
      .filter((topic) => topic.slug === activeTopic.slug)
      .forEach((topic) => {
        if (!topic.filters) return;

        const isTopicActive = topic.slug === activeTopic.slug;

        topic.filters.forEach((filter) => {
          const isFilterSelected = filterOptionsSelected.includes(filter.value);
          const shouldBeVisible = isTopicActive && isFilterSelected;
          const typedFilter = filter as Filter;

          // Update visibility for direct GeoJSON layers
          // Skip if layer is being shown via filtersToShow
          filter?.geojson?.forEach((geojson: GeoJsonLayer, index: number) => {
            const layerId = `topic-layer-${filter.value}-${index}`;

            if (mapRef.current && mapRef.current.getLayer(layerId)) {
              // Only update if not already visible via filtersToShow
              if (!layersVisibleViaFiltersToShow.has(layerId)) {
                mapRef.current.setLayoutProperty(
                  layerId,
                  'visibility',
                  shouldBeVisible ? 'visible' : 'none',
                );
              }
            }
          });

          // Update visibility for nested filters if filtersToShow exists
          if (typedFilter.filtersToShow && isTopicActive && isFilterSelected) {
            typedFilter.filtersToShow.forEach((nestedFilter: Filter) => {
              const isNestedFilterSelected = filterOptionsSelected.includes(
                nestedFilter.value,
              );
              const shouldNestedBeVisible = isNestedFilterSelected;

              nestedFilter?.geojson?.forEach(
                (geojson: GeoJsonLayer, index: number) => {
                  const layerId = `topic-layer-${nestedFilter.value}-${index}`;

                  if (mapRef.current && mapRef.current.getLayer(layerId)) {
                    mapRef.current.setLayoutProperty(
                      layerId,
                      'visibility',
                      shouldNestedBeVisible ? 'visible' : 'none',
                    );
                  }
                },
              );
            });
          }
        });
      });
  }, [filterOptionsSelected, mapLoaded, layersReady, topicActive, styleLoaded]);

  const resetMap = () => {
    // reset map to center
    if (mapRef.current) {
      mapRef.current.setCenter(
        appMetadata.map.defaultCenter as [number, number],
      );
      mapRef.current.setZoom(appMetadata.map.defaultZoom);
      // reset compass orientation
      mapRef.current.setBearing(0);
    }
    // Clear active topic to remove layers
    setTopicActive('default');
    const defaultFilters = ['concept-design', 'local-government-area'];
    setFilterOptionsSelected(expandFilters(defaultFilters, 'default'));
    setZoneOptionsSelected([]);
    // Close all popups
    const popups = document.getElementsByClassName('mapboxgl-popup');
    while (popups[0]) {
      popups[0].remove();
    }
  };

  const classesLayers = '';
  //   filterOptionsSelected?.pathList
  //     ?.map((option) => option.toLowerCase().replace(/\s/g, '-'))
  //     ?.join(' ') +
  //   ' ' +
  //   filterOptionsSelected?.mediaList
  //     ?.map((option) => option.toLowerCase().replace(/\s/g, '-'))
  //     ?.join(' ');

  return (
    <section id="mapbox" className={`mapbox ${classesLayers}`}>
      <div className="map-container" ref={mapContainer} />
      {isLoading && (
        <div className="map-loading-overlay">
          <div className="map-loading-spinner">
            <div className="spinner"></div>
            <p>Loading map data...</p>
          </div>
        </div>
      )}
      <button
        className="reset-button"
        onClick={() => {
          resetMap();
        }}
        aria-label="Reset map to default view"
      >
        <Reset />
      </button>
      <MapLegend />
    </section>
  );
};

export default Map;
