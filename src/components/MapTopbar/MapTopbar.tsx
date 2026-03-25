import { useEffect, useRef, useState } from 'react';
import './MapTopbar.scss';
import ArrowDown from '../Icons/ArrowDown';
import Check from '../Icons/Check';
import { enumTabs } from '../../helpers/constants';
import { useAppContext } from '../../context/useAppContext';
import FilterIcon from '../Icons/Filter';
import { Filter } from '../../types/map';

export type TabActive = 'satellite' | 'default';

const MapTopbar = () => {
  const { state, getTopicActive, setTabActive, setFilterOptionsSelected } =
    useAppContext();
  const { tabActive, filterOptionsSelected } = state;
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        setIsFilterOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="map-topbar">
      <div
        className={`filter-group ${isFilterOpen ? 'is-open' : 'is-closed'}`}
        aria-expanded={isFilterOpen}
        ref={filterRef}
      >
        <button
          className="filter"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <FilterIcon />
          <span>Filter</span>
          <ArrowDown />
        </button>
        {isFilterOpen && (
          <div className="filter-selectable">
            <ul className="list-options media-list">
              {getTopicActive()
                ?.filters?.sort(
                  (a: Filter, b: Filter) =>
                    (a.orderLayout || 0) - (b.orderLayout || 0),
                )
                ?.filter((filter: Filter) => !filter.dontShowInFilters)
                ?.map((filter: Filter, index: number) => {
                  const isChecked = filterOptionsSelected.includes(
                    filter.value,
                  );
                  return (
                    <li
                      key={`optionsLayer-${index}`}
                      className={`list-options-item ${
                        isChecked ? 'is-checked' : 'not-checked'
                      } ${filter.hasLineDivider ? 'has-line-divider' : ''}`}
                    >
                      <input
                        id={`optionsLayersSelected-${filter.value}`}
                        key={`optionsLayersSelected-${filter.value}`}
                        readOnly
                        onClick={() => {
                          if (isChecked) {
                            // When unchecking, remove this filter and all nested filters
                            let filtersToRemove = [filter.value];
                            if (filter.filtersToShow) {
                              const nestedFilterValues =
                                filter.filtersToShow.map(
                                  (f: Filter) => f.value,
                                );
                              filtersToRemove = [
                                ...filtersToRemove,
                                ...nestedFilterValues,
                              ];
                            }
                            setFilterOptionsSelected(
                              filterOptionsSelected.filter(
                                (value: string) =>
                                  !filtersToRemove.includes(value),
                              ),
                            );
                          } else {
                            // When checking, add this filter and all nested filters
                            let filtersToAdd = [filter.value];
                            if (filter.filtersToShow) {
                              const nestedFilterValues =
                                filter.filtersToShow.map(
                                  (f: Filter) => f.value,
                                );
                              filtersToAdd = [
                                ...filtersToAdd,
                                ...nestedFilterValues,
                              ];
                            }
                            setFilterOptionsSelected([
                              ...filterOptionsSelected,
                              ...filtersToAdd,
                            ]);
                          }
                        }}
                        type="checkbox"
                        checked={isChecked}
                        value={filter.value}
                      />
                      {filter.iconUrl && (
                        <img
                          width={33}
                          src={filter.iconUrl}
                          alt={filter.label}
                        />
                      )}
                      <span
                        className="input-cover"
                        style={{
                          backgroundColor: isChecked
                            ? filter.color
                            : `${filter.color}`,
                        }}
                      >
                        {isChecked && <Check color={filter.tickerColor} />}
                      </span>
                      <label htmlFor={`optionsLayersSelected-${filter.value}`}>
                        <span className="title">{filter.label}</span>
                      </label>
                    </li>
                  );
                })}
            </ul>
          </div>
        )}
      </div>
      <div className="tab">
        <button
          className={tabActive === enumTabs.satellite ? 'active' : ''}
          onClick={() => {
            setTabActive(enumTabs.satellite);
          }}
          aria-disabled={tabActive !== enumTabs.satellite}
        >
          Satellite
        </button>
        <button
          className={tabActive === enumTabs.default ? 'active' : ''}
          onClick={() => {
            setTabActive(enumTabs.default);
          }}
          aria-disabled={tabActive !== enumTabs.default}
        >
          Default
        </button>
      </div>
    </div>
  );
};

export default MapTopbar;
