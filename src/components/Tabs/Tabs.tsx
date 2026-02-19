import React, { ReactElement, ReactNode, useState } from 'react';
import './Tabs.scss';

type Props = {
  children: ReactNode;
};

const Tabs = ({ children }: Props) => {
  const [tabActive, setTabActive] = useState<string>('');
  return (
    <div className="tabs">
      <ul className="tab">
        {React.Children.map(children, (child, index: number) => {
          const tabChild = child as ReactElement<any>;
          if (!tabChild || !tabChild.props || !tabChild.props.className) return;
          const name = tabChild.props.className;
          return (
            <li
              className={`tab ${name === tabActive || (!tabActive && index === 0) ? 'active' : ''}`}
            >
              <button
                type="button"
                onClick={() => {
                  setTabActive(name);
                }}
              >
                {name}
              </button>
            </li>
          );
        })}
      </ul>
      <div className="tab-content">
        {React.Children.map(children, (child, index: number) => {
          const tabChild = child as ReactElement<any>;
          const name = tabChild.props.className;
          return name === tabActive || (!tabActive && index === 0) ? (
            <div>{tabChild}</div>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default Tabs;
