import { appMetadata } from './constants';

// Cache for preloaded GeoJSON data
const geojsonCache = new Map<string, Record<string, any>>();

/**
 * Extracts all sourceUrl values from topic filters
 */
const getAllGeoJSONUrls = (): string[] => {
  const urls: string[] = [];

  appMetadata.topics
    .filter((topic) => topic.slug === 'concept-design')
    .forEach((topic) => {
      if (topic.filters) {
        topic.filters.forEach((filter) => {
          if (filter.geojson) {
            filter.geojson.forEach((geojson) => {
              if (geojson.sourceUrl) {
                urls.push(geojson.sourceUrl);
              }
            });
          }
        });
      }
    });

  return urls;
};

/**
 * Preloads a single GeoJSON file and stores it in cache
 */
const preloadGeoJSONFile = async (url: string): Promise<void> => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      geojsonCache.set(url, data);
    } else {
      console.warn(`Failed to preload ${url}: ${response.status}`);
    }
  } catch (error) {
    console.error(`Error preloading ${url}:`, error);
  }
};

/**
 * Preloads all GeoJSON files from all topics
 * Call this when the app mounts to load data in background
 */
export const preloadAllGeoJSON = async (): Promise<void> => {
  const urls = getAllGeoJSONUrls();
  console.log(`Preloading ${urls.length} GeoJSON files...`);

  // Load all files in parallel
  await Promise.all(urls.map((url) => preloadGeoJSONFile(url)));

  console.log('GeoJSON preloading complete');
};

/**
 * Gets cached GeoJSON data if available
 */
export const getCachedGeoJSON = (url: string): Record<string, any> | null => {
  return geojsonCache.get(url) || null;
};

/**
 * Checks if a URL is already cached
 */
export const isGeoJSONCached = (url: string): boolean => {
  return geojsonCache.has(url);
};
