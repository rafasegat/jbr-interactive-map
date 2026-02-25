import React, { useState } from 'react';
import { useAppContext } from '../../context/useAppContext';
import ArrowDown from '../Icons/ArrowDown';
import { Filter, Legend } from '../../types/map';

import './MapLegend.scss';

const MapLegend = () => {
  const { state, getTopicActive } = useAppContext();
  const { filterOptionsSelected } = state;
  const [isExpanded, setIsExpanded] = useState(true);

  const topic = getTopicActive();
  const legends = topic?.legends ?? [];

  // Collect all legends to display (including nested legends from filtersToShow)
  const allLegendsToShow: Legend[] = [];

  // Then, add legends from filters that have legendsToShow
  const topicFilters = topic?.filters ?? [];
  topicFilters.forEach((filter: Filter) => {
    if (filter.legendsToShow && filterOptionsSelected.includes(filter.value)) {
      filter.legendsToShow.forEach((nestedLegend: Legend) => {
        // If it's a title-only item, add it once if we have any matching nested filters
        if (nestedLegend.title && nestedLegend.value === 'title') {
          // Check if we haven't already added it and if we have any selected nested filters
          if (!allLegendsToShow.find((l: Legend) => l.value === 'title')) {
            const hasAnyNestedFilterSelected = filter.filtersToShow?.some(
              (f: Filter) => filterOptionsSelected.includes(f.value),
            );
            if (hasAnyNestedFilterSelected) {
              allLegendsToShow.push(nestedLegend);
            }
          }
          return;
        }

        // Check if this nested legend's filter is selected
        const nestedFilter = filter.filtersToShow?.find(
          (f: Filter) => f.legendAlias === nestedLegend.value,
        );
        if (
          nestedFilter &&
          filterOptionsSelected.includes(nestedFilter.value)
        ) {
          // Avoid duplicates
          if (
            !allLegendsToShow.find(
              (l: Legend) => l.value === nestedLegend.value,
            )
          ) {
            allLegendsToShow.push(nestedLegend);
          }
        }
      });
    }
  });

  // First, add legends for directly selected filters
  legends.forEach((legend) => {
    const topicFilters = topic?.filters ?? [];

    // If it's a title-only item, add it if we have any matching filters
    if (legend.title && legend.value === 'title') {
      allLegendsToShow.push(legend);
      return;
    }

    // Special logic for Drainage basins legend
    if (legend.value === 'drainage-basins') {
      const bothDrainageBasinsSelected =
        filterOptionsSelected.includes('drainage-basins-15-9') &&
        filterOptionsSelected.includes('drainage-basins-22-9');
      if (bothDrainageBasinsSelected) {
        allLegendsToShow.push(legend);
      }
      return;
    }

    const matchingFilter = topicFilters.find(
      (filter: Filter) => filter.legendAlias === legend.value,
    );
    if (
      matchingFilter &&
      filterOptionsSelected.includes(matchingFilter.value)
    ) {
      allLegendsToShow.push(legend);
    }
  });

  if (allLegendsToShow.length === 0) {
    return null; // Don't render the legend if there are no legends to display
  }

  return (
    <div className={`legends ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <div className="legend-header" onClick={() => setIsExpanded(!isExpanded)}>
        <h4>Legend</h4>
        <button
          className={`toggle-button ${!isExpanded ? 'rotated' : ''}`}
          aria-label={isExpanded ? 'Collapse legend' : 'Expand legend'}
        >
          <ArrowDown />
        </button>
      </div>
      {isExpanded && (
        <ul>
          {allLegendsToShow.map((legend: Legend, index: number) => {
            // If it's a title-only item, just render the title
            if (legend.title && legend.value === 'title') {
              return (
                <li key={`${legend.value}-${index}`} className="legend-title">
                  <h3>{legend.title}</h3>
                </li>
              );
            }

            // Otherwise render the regular legend item with optional title
            return (
              <React.Fragment key={`${legend.value}-${index}`}>
                {legend.title && (
                  <li className="legend-title">
                    <h3>{legend.title}</h3>
                  </li>
                )}
                <li>
                  {legend.icon}
                  <span>{legend.label}</span>
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default MapLegend;
