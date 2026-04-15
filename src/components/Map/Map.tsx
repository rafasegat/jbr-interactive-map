/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import MapLegend from '../MapLegend/MapLegend';
import { appMetadata } from '../../helpers/constants';
import Reset from '../Icons/Reset';
import { useAppContext } from '../../context/useAppContext';
import { expandFilters } from '../../context/context';
import { enumTabs } from '../../helpers/constants';
import { listOfTopicsToAddLayer } from '../../helpers/constants';
import { Filter, GeoJsonLayer } from '../../types/map';
import SearchAddress from '../SearchAddress/SearchAddress';

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
  const [mapLoaded, setMapLoaded] = useState(false);
  const [styleLoaded, setStyleLoaded] = useState(0); // Counter to trigger re-renders on style changes
  const [layersReady, setLayersReady] = useState(false); // Flag to indicate layers are added and ready
  const [isLoading, setIsLoading] = useState(true); // Loading state for map and GeoJSON
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const geojsonCache = useRef<globalThis.Map<string, any>>(
    new globalThis.Map(),
  );
  const markersRef = useRef<globalThis.Map<string, mapboxgl.Marker>>(
    new globalThis.Map(),
  );

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
        maxBounds: appMetadata.map.maxBounds,
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
            maxWidth: 120,
            unit: 'metric',
          }),
          'bottom-right',
        );
      }
    });

    // when click console log the coordinates
    // mapRef.current.on('click', (event) => {
    //   console.log(`[${event.lngLat.lng}, ${event.lngLat.lat}]`);
    // });

    // Wait for style to load
    mapRef.current.on('load', () => {
      setMapLoaded(true);
    });

    return () => {
      // Remove all markers
      markersRef.current.forEach((marker) => {
        marker.remove();
      });
      markersRef.current.clear();

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
    const addAllLayers = async () => {
      // Step 1: Collect all GeoJSON URLs that need to be fetched (not in cache)
      const fetchPromises: Promise<{ url: string; data: any } | null>[] = [];

      for (const filter of listOfTopicsToAddLayer) {
        const f1 = filter as Filter;
        if (f1.geojson?.length) {
          for (let index = 0; index < f1.geojson.length; index++) {
            const geojson = f1.geojson[index] as GeoJsonLayer;

            if (
              geojson.sourceUrl &&
              !geojsonCache.current.has(geojson.sourceUrl) &&
              !geojson.source
            ) {
              // Create fetch promise for this URL
              const fetchPromise = fetch(geojson.sourceUrl)
                .then((response) => response.json())
                .then((data) => ({ url: geojson.sourceUrl!, data }))
                .catch((error) => {
                  console.log(`GeoJSON missing ${geojson.sourceUrl}`);
                  return null;
                });
              fetchPromises.push(fetchPromise);
            }
          }
        }
      }

      // Step 2: Fetch all GeoJSON files in parallel
      if (fetchPromises.length > 0) {
        // console.log(
        //   `Fetching ${fetchPromises.length} GeoJSON files in parallel...`,
        // );
        const results = await Promise.all(fetchPromises);

        // Store all results in cache
        results.forEach((result) => {
          if (result) {
            geojsonCache.current.set(result.url, result.data);
          }
        });
      }

      // Step 3: Add white overlay layer between basemap and data layers
      if (mapRef.current && !mapRef.current.getSource('white-overlay-source')) {
        mapRef.current.addSource('white-overlay-source', {
          type: 'geojson',
          data: {
            type: 'Feature',
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [-180, -90],
                  [180, -90],
                  [180, 90],
                  [-180, 90],
                  [-180, -90],
                ],
              ],
            },
            properties: {},
          },
        });
        mapRef.current.addLayer({
          id: 'white-overlay-layer',
          type: 'fill',
          source: 'white-overlay-source',
          paint: {
            'fill-color': '#ffffff',
            'fill-opacity': 0.5,
          },
        } as mapboxgl.AnyLayer);
      }

      // Step 4: Add layers for direct GeoJSON in filters
      // Sort in reverse: higher orderLayout added first (bottom), lower added last (top)
      for (const filter of listOfTopicsToAddLayer) {
        // Process direct GeoJSON in this filter
        const f2 = filter as Filter;
        if (f2.geojson?.length) {
          for (let index = 0; index < f2.geojson.length; index++) {
            const geojson = f2.geojson[index] as GeoJsonLayer;
            const sourceId = `topic-source-${filter.value}-${index}`;
            const layerId = `topic-layer-${filter.value}-${index}`;

            // Get data from source or cache
            let geojsonData: any = geojson.source || {};

            if (
              geojson.sourceUrl &&
              geojsonCache.current.has(geojson.sourceUrl)
            ) {
              geojsonData = geojsonCache.current.get(geojson.sourceUrl);
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
        // Process markers if they exist in this filter
        const typedFilterForMarkers = filter as Filter;
        if (typedFilterForMarkers?.markers?.length) {
          typedFilterForMarkers.markers.forEach((marker) => {
            const markerId = `marker-${filter.value}-${marker.id}`;

            // Skip if marker already exists
            if (markersRef.current.has(markerId)) {
              return;
            }

            // Calculate z-index based on position in ordering list
            // Higher index = rendered on top
            const orderIndex = listOfTopicsToAddLayer.findIndex(
              (f) => f.value === filter.value,
            );
            const zIndex = orderIndex !== -1 ? 100 + orderIndex : 100;

            // Create custom element for marker
            const el = document.createElement('div');
            el.className = `${filter.value}-marker `;
            el.style.cursor = 'pointer';
            el.style.display = 'none'; // Initially hidden
            el.style.zIndex = zIndex.toString(); // Set z-index for proper stacking

            // Inner wrapper: icon + optional tooltip live here.
            // Keeping the tooltip out of `el` prevents Mapbox from
            // mis-measuring the anchor element on every scroll repaint.
            const iconWrapper = document.createElement('div');
            iconWrapper.style.cssText =
              'position:relative;display:inline-flex;overflow:visible';
            el.appendChild(iconWrapper);

            if (marker.iconComponent) {
              ReactDOM.render(marker.iconComponent, iconWrapper);
            } else if (marker.iconUrl) {
              const img = document.createElement('img');
              img.src = marker.iconUrl;
              img.style.width = '32px';
              img.style.height = '32px';
              iconWrapper.appendChild(img);
            }

            // Create marker with custom element
            const markerCustomEl = new mapboxgl.Marker({
              element: el,
            })
              .setLngLat(marker.coordinates as [number, number])
              .addTo(mapRef.current!);

            // Store marker in ref
            markersRef.current.set(markerId, markerCustomEl);

            // Add hover tooltip (only if isTooltip is true and text exists)
            if (marker.isTooltip && marker.text) {
              const tooltip = document.createElement('div');
              tooltip.style.cssText = [
                'position:absolute',
                'bottom:calc(100% + 10px)',
                'left:50%',
                'transform:translateX(-50%)',
                'background:#fff',
                'color:#000',
                'font-size:1rem',
                'font-weight:400',
                'width:max-content',
                'max-width:min(300px, calc(100vw - 32px))',
                'white-space:normal',
                'padding:0.5rem',
                'border-radius:0',
                'box-shadow:0 2px 6px rgba(0,0,0,0.2)',
                'pointer-events:none',
                'display:none',
                'z-index:9999',
              ].join(';');

              const tooltipText = document.createElement('span');
              tooltipText.textContent = marker.text;
              tooltip.appendChild(tooltipText);

              // Triangle arrow pointing down
              const arrow = document.createElement('span');
              arrow.style.cssText = [
                'position:absolute',
                'bottom:-6px',
                'left:50%',
                'transform:translateX(-50%)',
                'width:0',
                'height:0',
                'border-left:6px solid transparent',
                'border-right:6px solid transparent',
                'border-top:6px solid #fff',
                'display:block',
                'filter:drop-shadow(0 2px 1px rgba(0,0,0,0.1))',
              ].join(';');
              tooltip.appendChild(arrow);

              // Append tooltip to iconWrapper (not el) so el's dimensions stay
              // exactly the icon size — no drift when Mapbox repositions on scroll
              iconWrapper.appendChild(tooltip);
              el.addEventListener('mouseenter', () => {
                tooltip.style.display = 'block';
                // Lift this marker's stacking context above all others while hovered
                el.style.zIndex = '190';
              });
              el.addEventListener('mouseleave', () => {
                tooltip.style.display = 'none';
                // Restore original z-index
                el.style.zIndex = zIndex.toString();
              });
            }

            // Add popup to marker on click (only if popupContent exists)
            if (marker.popupContent) {
              const popupContainer = document.createElement('div');

              const popup = new mapboxgl.Popup({
                closeButton: true,
                closeOnClick: true,
                maxWidth: '400px',
                offset: {
                  top: [0, 15],
                  'top-left': [0, 15],
                  'top-right': [0, 15],
                  bottom: [0, -20],
                  'bottom-left': [0, -20],
                  'bottom-right': [0, -20],
                  left: [15, -5],
                  right: [-15, -5],
                },
              }).setDOMContent(popupContainer);

              ReactDOM.render(marker.popupContent, popupContainer);

              markerCustomEl.getElement().addEventListener('click', () => {
                if (mapRef.current) {
                  mapRef.current.flyTo({
                    center: marker.coordinates as [number, number],
                    zoom: mapRef.current.getZoom(),
                    duration: 1000,
                  });
                  popup.setOffset([0, -20]);
                  markerCustomEl.setPopup(popup);
                }
              });
            }
          });
        }
      }

      // Step 5: Lift road label layers above all dynamic vector layers.
      // Called after ALL GeoJSON layers are added so the labels always render on top.
      // 'esri-road-labels'  → satellite (ESRI raster overlay)
      // 'road-label'        → default map (Mapbox app streets-v11 vector label layer)
      // 'road-number-shield'→ default map (highway route shields)
      // moveLayer() with no beforeId moves the layer to the very top of the stack.
      if (mapRef.current) {
        const roadLabelLayerIds = [
          'esri-road-labels',
          'road-label',
          'road-number-shield',
        ];
        for (const id of roadLabelLayerIds) {
          if (mapRef.current.getLayer(id)) {
            mapRef.current.moveLayer(id);
          }
        }
      }
    };

    const loadLayers = async () => {
      setLayersReady(false); // Signal that layers are being updated
      setIsLoading(true);
      await addAllLayers();
      // Wait for next frame to ensure all layers are fully registered in Mapbox
      requestAnimationFrame(() => {
        setLayersReady(true); // Signal that layers are ready
        setIsLoading(false); // Hide loading indicator only if we showed it
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
          typedFilter.geojson?.forEach(
            (geojson: GeoJsonLayer, index: number) => {
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
            },
          );

          // Update visibility for nested filters if filtersToShow exists
          if (typedFilter.filtersToShow) {
            typedFilter.filtersToShow.forEach((nestedFilter: Filter) => {
              const isNestedFilterSelected = filterOptionsSelected.includes(
                nestedFilter.value,
              );
              const shouldNestedBeVisible =
                isTopicActive && isFilterSelected && isNestedFilterSelected;

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

              // Update marker visibility for nested filters
              const nestedTyped = nestedFilter as Filter;
              if (nestedTyped?.markers?.length) {
                nestedTyped.markers.forEach((marker) => {
                  const markerId = `marker-${nestedFilter.value}-${marker.id}`;
                  const markerInstance = markersRef.current.get(markerId);
                  if (markerInstance) {
                    const el = markerInstance.getElement();
                    el.style.display = shouldNestedBeVisible ? 'block' : 'none';
                  }
                });
              }
            });
          }

          // Update marker visibility for active topic
          const typedFilterForMarkers = filter as Filter;
          if (typedFilterForMarkers?.markers?.length) {
            typedFilterForMarkers.markers.forEach((marker) => {
              const markerId = `marker-${filter.value}-${marker.id}`;
              const markerInstance = markersRef.current.get(markerId);
              if (markerInstance) {
                const el = markerInstance.getElement();
                el.style.display = shouldBeVisible ? 'block' : 'none';
              }
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
          typedFilter.geojson?.forEach(
            (geojson: GeoJsonLayer, index: number) => {
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
            },
          );

          // Update visibility for nested filters if filtersToShow exists
          if (typedFilter.filtersToShow && isTopicActive) {
            typedFilter.filtersToShow.forEach((nestedFilter: Filter) => {
              const isNestedFilterSelected = filterOptionsSelected.includes(
                nestedFilter.value,
              );
              const shouldNestedBeVisible =
                isFilterSelected && isNestedFilterSelected;

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

              // Update marker visibility for nested filters
              const nestedTyped = nestedFilter as Filter;
              if (nestedTyped?.markers?.length) {
                nestedTyped.markers.forEach((marker) => {
                  const markerId = `marker-${nestedFilter.value}-${marker.id}`;
                  const markerInstance = markersRef.current.get(markerId);
                  if (markerInstance) {
                    const el = markerInstance.getElement();
                    el.style.display = shouldNestedBeVisible ? 'block' : 'none';
                  }
                });
              }
            });
          }

          // Update marker visibility
          const typedFilterForMarkers = filter as Filter;
          if (typedFilterForMarkers?.markers?.length) {
            typedFilterForMarkers.markers.forEach((marker) => {
              const markerId = `marker-${filter.value}-${marker.id}`;
              const markerInstance = markersRef.current.get(markerId);
              if (markerInstance) {
                const el = markerInstance.getElement();
                el.style.display = shouldBeVisible ? 'block' : 'none';
              }
            });
          }
        });
      });
  }, [filterOptionsSelected, mapLoaded, layersReady, topicActive, styleLoaded]);

  const handleLocationSelect = (lat: number, lng: number, address: string) => {
    if (mapRef.current) {
      mapRef.current.flyTo({
        center: [lng, lat],
        zoom: 16, // Zoom in closer for address view
        duration: 2000,
      });
    }
  };

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
    const defaultFilters = ['base-layers', 'key-features'];
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
      <SearchAddress onLocationSelect={handleLocationSelect} />

      <MapLegend />
    </section>
  );
};

export default Map;
