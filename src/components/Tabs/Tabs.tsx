import React, { ReactNode, useState } from 'react';
import './Tabs.scss';

type Props = {
  children: ReactNode
};

const Tabs = ({ children }: Props) => {
  const [tabActive, setTabActive] = useState<string>('');
  return (
    <div className="tabs">
      <ul className="tab">
        {
          React.Children.map(children, (child: any, index: number) => {
            if (!child || !child.props || !child.props.className) return;
            const name = child.props.className;
            return (
              <li className={`tab ${name === tabActive || (!tabActive && index === 0) ? 'active' : ''}`}>
                <button type="button" onClick={() => {
                  setTabActive(name)
                }}>{name}</button>
              </li>
            );
          })
        }
      </ul>
      <div className="tab-content">
        {
          React.Children.map(children, (child: any, index: number) => {
            const name = child.props.className;
            return name === tabActive || (!tabActive && index === 0) ? <div >{child}</div> : null;
          })
        }
      </div>
    </div>
  );
}

export default Tabs;
