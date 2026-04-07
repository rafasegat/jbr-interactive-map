import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { TabActive } from '../components/MapTopbar/MapTopbar';
import { appMetadata } from '../helpers/constants';
import { Topic, Filter } from '../types/map';

// Define the context state interface
interface AppState {
  topicActive: string;
  tabActive: TabActive;
  filterOptionsSelected: string[];
  zoneOptionsSelected: string[];
  isModalOpen: boolean;
}

// Define the context interface
interface AppContextType {
  state: AppState;
  getTopicActive: () => Topic | undefined;
  setTopicActive: (topic: string) => void;
  setTabActive: (tab: TabActive) => void;
  setFilterOptionsSelected: (options: string[]) => void;
  setZoneOptionsSelected: (options: string[]) => void;
  openModal: () => void;
  closeModal: () => void;
}

// Create the context
const AppContext = createContext<AppContextType | undefined>(undefined);

/**
 * NOTE: localStorage was intentionally removed from this implementation.
 *
 * Previous implementation attempted to persist state across sessions using localStorage,
 * but it was causing filter reset issues during development. The current implementation
 * uses in-memory state only, which resets to default on page reload.
 *
 * If persistence is needed in the future:
 * 1. Save state to localStorage in a useEffect watching state changes
 * 2. Load from localStorage in getInitialState()
 * 3. Handle JSON serialization/deserialization errors gracefully
 * 4. Consider using a debounced save to avoid performance issues
 *
 */

// Helper function to expand filters to include nested filtersToShow
const expandFilters = (filterValues: string[], topicSlug: string): string[] => {
  const topic = appMetadata.topics.find((t) => t.slug === topicSlug);
  if (!topic || !topic.filters) return filterValues;

  const expandedFilters = [...filterValues];

  filterValues.forEach((filterValue) => {
    const filter = topic.filters?.find(
      (f: Filter) => f.value === filterValue,
    ) as Filter | undefined;
    if (filter && filter.filtersToShow) {
      filter.filtersToShow.forEach((nestedFilter: Filter) => {
        if (
          !expandedFilters.includes(nestedFilter.value) &&
          (!nestedFilter.dontShowInFilters || nestedFilter.defaultSelected)
        ) {
          expandedFilters.push(nestedFilter.value);
        }
      });
    }
  });

  return expandedFilters;
};

// Helper function to get initial state
const getInitialState = (): AppState => {
  const defaultFilters = ['general', 'key-features'];
  return {
    topicActive: 'default',
    tabActive: 'satellite',
    filterOptionsSelected: expandFilters(defaultFilters, 'default'),
    zoneOptionsSelected: [],
    isModalOpen: false,
  };
};

// Provider component
interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, setState] = useState<AppState>(getInitialState);

  // State setters
  const setTopicActive = (topic: string) => {
    setState((prev) => ({ ...prev, topicActive: topic }));
  };

  const setTabActive = (tab: TabActive) => {
    setState((prev) => ({ ...prev, tabActive: tab }));
  };

  const setFilterOptionsSelected = (options: string[]) => {
    setState((prev) => ({ ...prev, filterOptionsSelected: options }));
  };

  const setZoneOptionsSelected = (options: string[]) => {
    setState((prev) => ({ ...prev, zoneOptionsSelected: options }));
  };

  const openModal = (content: ReactNode) => {
    setState((prev) => ({ ...prev, isModalOpen: true }));
  };

  const closeModal = () => {
    setState((prev) => ({ ...prev, isModalOpen: false }));
  };

  const contextValue: AppContextType = {
    state,
    getTopicActive: () => {
      return appMetadata.topics.find((item) => item.slug === state.topicActive);
    },
    setTopicActive,
    setTabActive,
    setFilterOptionsSelected,
    setZoneOptionsSelected,
    openModal,
    closeModal,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
export { AppContext, expandFilters };
export type { AppContextType };
