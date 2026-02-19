import { useAppContext } from '../../context/useAppContext';
import ArrowRight from '../Icons/ArrowRight';

const ZoneSelector = ({
  direction = 'vertical',
  onChange,
}: {
  direction?: 'vertical' | 'horizontal';
  onChange: (option: string) => void;
}) => {
  const { state, setZoneOptionsSelected } = useAppContext();
  const { zoneOptionsSelected } = state;

  return (
    <div className={`zone-layer ${direction}`}>
      <ul className="list-options">
        {['a'].map((option: any, index: number) => {
          const isChecked = zoneOptionsSelected.includes(option.id);
          return (
            <li
              key={`optionsLayer-${index}`}
              className={`list-options-item ${option.id} ${
                isChecked ? 'is-checked' : 'not-checked'
              }`}
            >
              <a
                href="#"
                onClick={() => {
                  // if (direction === 'vertical') {
                  onChange(option);
                  setZoneOptionsSelected([option.id]);
                }}
              >
                <span className="title">{option.name}</span>
                <ArrowRight />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ZoneSelector;
