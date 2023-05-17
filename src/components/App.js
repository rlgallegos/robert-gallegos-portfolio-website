// import logo from '../logo.svg';
import '../App.css';
import PortfolioSection from './PortfolioSection'
import Intro from './Intro';
import EducationSection from './EducationSection';

import { useEffect, useState } from 'react';
import ProjectDetailsPopup from './ProjectDetailsPopup';




function App() {
  const [popup, setPopup] = useState(null)
  const [isBlurry, setIsBlurry] = useState(false)


  function handlePopup(project){
      setIsBlurry(true)
      setPopup(project)
  }


  return (
    <div className={`App bg-primary`}>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      {popup && <ProjectDetailsPopup project={popup} setPopup={setPopup} setIsBlurry={setIsBlurry} />}
      <main className={`mx-2 md:mx-6 py-2 md:py-6 ${isBlurry && 'blur'}`}>
          <Intro />
          <PortfolioSection onPopup={handlePopup}/>
          <EducationSection />

      </main>
    </div>
  );
}

export default App;
