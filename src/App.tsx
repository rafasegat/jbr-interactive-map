import LeftSidebar from './components/LeftSidebar/LeftSidebar';
import MapTopbar from './components/MapTopbar/MapTopbar';
import Map from './components/Map/Map';

import './App.scss';

const App = () => {
  return (
    <div className="jbr-interactive-map">
      <div className="main-content">
        <LeftSidebar />
        <div className="map-content">
          <MapTopbar />
          <Map />
        </div>
      </div>
    </div>
  );
};

export default App;
