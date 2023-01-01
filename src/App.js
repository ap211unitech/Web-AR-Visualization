import { Fragment, useEffect, useRef, useState } from 'react';
import './App.css';

// Components
import Navbar from './components/Nav/Navbar';
import Convocation_Video from './components/Convocation_Video/CV'
import ResearchHighlights from './components/Research_Highlights/Research_Highlights';
import Footer from './components/Footer/Footer';
import Announcements from './components/Extras/Announcements';
import Events from './components/Extras/Events';
import News from './components/Extras/News';
import RH_Full_Detail from './components/RH_Full_Detail';

function App() {

  const [RHFull, setRHFull] = useState({});

  return (
    <Fragment>
      <a-scene
        // raycaster="far: 20; interval: 1000; objects: .clickable"
        cursor="rayOrigin: mouse; fuse: false; fuseTimeout: 50"
      >

        {/* <a-entity camera /> */}
        {/* <a-sky color="white"></a-sky> */}

        <Navbar />
        <Convocation_Video />

        <ResearchHighlights RHFull={RHFull} setRHFull={setRHFull} />
        <RH_Full_Detail RHFull={RHFull} />

        <a-entity position="38 50 0">
          <Announcements />
          <Events />
          <News />


          <Footer />
        </a-entity>

        <a-camera>
          <a-cursor camera look-controls wasd-controls geometry="primitive: ring; radiusInner: 0.005; radiusOuter: 0.009" color="red" style={{ "zIndex": 9999 }}></a-cursor>
        </a-camera>

      </a-scene>
    </Fragment>
  );
}

export default App;
