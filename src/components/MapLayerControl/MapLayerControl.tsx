import { useState } from 'react';
import { useAppContext } from '../../context/useAppContext';
import ArrowDown from '../Icons/ArrowDown';
import './MapLayerControl.scss';

const MapLayerControl = () => {
  const { state, setFilterOptionsSelected, getTopicActive } = useAppContext();
  const { filterOptionsSelected } = state;
  const [isExpanded, setIsExpanded] = useState(true);

  const contourOptions = [
    {
      value: 'potential-worst-case-construction-scenario',
      label: 'Potential worst-case construction scenario',
    },
  ];

  const operationalNoiseOptions = [
    { value: 'day-2030', label: 'Day 2030' },
    { value: 'night-2030', label: 'Night 2030' },
    { value: 'day-2040', label: 'Day 2040' },
    { value: 'night-2040', label: 'Night 2040' },
  ];

  const handleContourChange = (value: string) => {
    // Remove all contour and operational noise options, then add selected contour
    const filtered = filterOptionsSelected.filter(
      (opt) =>
        !contourOptions.some((c) => c.value === opt) &&
        !operationalNoiseOptions.some((o) => o.value === opt),
    );
    setFilterOptionsSelected([...filtered, value]);
  };

  const handleOperationalNoiseChange = (value: string) => {
    // Remove all operational noise and contour options, then add selected operational noise
    const filtered = filterOptionsSelected.filter(
      (opt) =>
        !operationalNoiseOptions.some((o) => o.value === opt) &&
        !contourOptions.some((c) => c.value === opt),
    );
    setFilterOptionsSelected([...filtered, value]);
  };

  const getSelectedContour = () => {
    return (
      contourOptions.find((opt) => filterOptionsSelected.includes(opt.value))
        ?.value || ''
    );
  };

  const getSelectedOperationalNoise = () => {
    return (
      operationalNoiseOptions.find((opt) =>
        filterOptionsSelected.includes(opt.value),
      )?.value || ''
    );
  };

  return (
    <div className="map-layer-control">
      <div className="map-layer-control__header">
        <h4>Map layer control</h4>
        <button
          className={isExpanded ? 'expanded' : ''}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <ArrowDown />
        </button>
      </div>
      {isExpanded && (
        <div className="map-layer-control__content">
          <div className="map-layer-control__rows">
            <div className="map-layer-control__row">
              <h5>Contours</h5>
              <div className="map-layer-control__radio-groupx">
                {contourOptions.map((option) => (
                  <label
                    key={option.value}
                    className="map-layer-control__radio-label"
                  >
                    <input
                      type="radio"
                      name="contours"
                      value={option.value}
                      checked={getSelectedContour() === option.value}
                      onChange={() => handleContourChange(option.value)}
                    />
                    <svg
                      className="map-layer-control__radio-circle"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="23"
                        height="23"
                        rx="11.5"
                        stroke="#495054"
                      />
                      <circle
                        className="map-layer-control__radio-inner"
                        cx="12"
                        cy="12"
                        r="8"
                        fill={
                          getTopicActive()?.filters?.find(
                            (f) => f.value === option.value,
                          )?.color || 'red'
                        }
                      />
                    </svg>
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="map-layer-control__row">
              <h5>Operational noise contours</h5>
              <div className="map-layer-control__radio-group">
                {operationalNoiseOptions.map((option) => (
                  <label
                    key={option.value}
                    className="map-layer-control__radio-label"
                  >
                    <input
                      type="radio"
                      name="operational-noise"
                      value={option.value}
                      checked={getSelectedOperationalNoise() === option.value}
                      onChange={() =>
                        handleOperationalNoiseChange(option.value)
                      }
                    />
                    <svg
                      className="map-layer-control__radio-circle"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="23"
                        height="23"
                        rx="11.5"
                        stroke="#495054"
                      />
                      <circle
                        className="map-layer-control__radio-inner"
                        cx="12"
                        cy="12"
                        r="8"
                        fill={
                          getTopicActive()?.filters?.find(
                            (f) => f.value === option.value,
                          )?.color || 'red'
                        }
                      />
                    </svg>
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapLayerControl;
