import LeftSidebar from './components/LeftSidebar/LeftSidebar';
import MapTopbar from './components/MapTopbar/MapTopbar';
import Map from './components/Map/Map';
import Modal from './components/Modal/Modal';
import HowToUse from './components/ContentTopics/HowToUse';
import { useAppContext } from './context/useAppContext';

import './App.scss';

const App = () => {
  const { state, closeModal } = useAppContext();
  const { isModalOpen } = state;

  return (
    <div className="jbr-interactive-map">
      <div className="main-content">
        <LeftSidebar />
        <div className="map-content">
          <MapTopbar />
          <Map />
        </div>
      </div>
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <HowToUse />
      </Modal>
    </div>
  );
};

export default App;
