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

  // Collect all legends to display in filter-order via a single pass
  const allLegendsToShow: Legend[] = [];

  // Track whether the topic-level section title has been inserted yet
  let topicTitleInserted = false;

  const topicFilters = topic?.filters ?? [];
  topicFilters.forEach((filter: Filter) => {
    if (filter.legendsToShow) {
      // --- Filter has its own inline legends (e.g. LCAs, land use zoning, key-features) ---
      if (!filterOptionsSelected.includes(filter.value)) return;

      const hasFiltersToShow = !!filter.filtersToShow?.length;

      filter.legendsToShow.forEach((nestedLegend: Legend) => {
        // Avoid duplicates
        if (
          allLegendsToShow.find((l: Legend) => l.value === nestedLegend.value)
        )
          return;

        // Title item
        if (nestedLegend.title && nestedLegend.value.includes('title')) {
          if (hasFiltersToShow) {
            const hasAnyNestedFilterSelected = filter.filtersToShow?.some(
              (f: Filter) => filterOptionsSelected.includes(f.value),
            );
            if (hasAnyNestedFilterSelected) allLegendsToShow.push(nestedLegend);
          } else {
            allLegendsToShow.push(nestedLegend);
          }
          return;
        }

        if (hasFiltersToShow) {
          const nestedFilter = filter.filtersToShow?.find(
            (f: Filter) => f.legendAlias === nestedLegend.value,
          );
          if (
            nestedFilter &&
            filterOptionsSelected.includes(nestedFilter.value)
          ) {
            allLegendsToShow.push(nestedLegend);
          }
        } else {
          allLegendsToShow.push(nestedLegend);
        }
      });
    } else {
      // --- Filter uses topic-level legends (matched by legendAlias) ---
      if (!filterOptionsSelected.includes(filter.value)) return;

      // Insert topic-level section title once, before the first matching entry
      if (!topicTitleInserted) {
        const titleLegend = legends.find(
          (l: Legend) => l.title && l.value?.includes('title'),
        );
        if (
          titleLegend &&
          !allLegendsToShow.find((l: Legend) => l.value === titleLegend.value)
        ) {
          allLegendsToShow.push(titleLegend);
        }
        topicTitleInserted = true;
      }

      // Special logic for Drainage basins legend
      if (filter.legendAlias === 'drainage-basins') {
        const bothSelected =
          filterOptionsSelected.includes('drainage-basins-15-9') &&
          filterOptionsSelected.includes('drainage-basins-22-9');
        if (bothSelected) {
          const legend = legends.find(
            (l: Legend) => l.value === 'drainage-basins',
          );
          if (
            legend &&
            !allLegendsToShow.find((l: Legend) => l.value === legend.value)
          ) {
            allLegendsToShow.push(legend);
          }
        }
        return;
      }

      const matchingLegend = legends.find(
        (l: Legend) => l.value === filter.legendAlias,
      );
      if (
        matchingLegend &&
        !allLegendsToShow.find((l: Legend) => l.value === matchingLegend.value)
      ) {
        allLegendsToShow.push(matchingLegend);
      }
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
      {isExpanded &&
        (() => {
          // Group flat legend list into sections by title entries
          const sections: { title: Legend | null; items: Legend[] }[] = [];
          let cur: { title: Legend | null; items: Legend[] } | null = null;
          allLegendsToShow.forEach((l) => {
            if (l.value.includes('title')) {
              cur = { title: l, items: [] };
              sections.push(cur);
            } else {
              if (!cur) {
                cur = { title: null, items: [] };
                sections.push(cur);
              }
              cur.items.push(l);
            }
          });
          return (
            <div className="legend-sections">
              {sections.map((section, si) => (
                <React.Fragment key={si}>
                  {section.title && (
                    <div
                      className={`legend-title${si === 0 ? ' legend-title--first' : ''}`}
                    >
                      <h3>{section.title.title || section.title.label}</h3>
                    </div>
                  )}
                  {section.items.length > 0 && (
                    <ul
                      className={
                        section.title?.twoColumnLayout
                          ? 'legend-items legend-items--two-col'
                          : 'legend-items'
                      }
                    >
                      {section.items.map((legend, i) => (
                        <li key={`${legend.value}-${i}`}>
                          {legend.icon}
                          <span>{legend.label}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </React.Fragment>
              ))}
            </div>
          );
        })()}
    </div>
  );
};

export default MapLegend;
