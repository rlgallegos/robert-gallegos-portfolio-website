// import logo from '../logo.svg';
import '../App.css';
import PortfolioSection from './PortfolioSection'
import Intro from './Intro';
import EducationSection from './EducationSection';

import { useState } from 'react';
import ProjectDetailsPopup from './ProjectDetailsPopup';




function App() {
  const [popup, setPopup] = useState(null)
  const [isBlurry, setIsBlurry] = useState(false)


  function handlePopup(project){
      setIsBlurry(true)
      setPopup(project)
  }


  return (
    <div className='App bg-cover bg-center bg-no-repeat bg-gradient-to-b from-darkBlue to-lightBlue'>
      {popup && <ProjectDetailsPopup project={popup} setPopup={setPopup} setIsBlurry={setIsBlurry} />}
      <main className={`sm:mx-2 md:mx-6 py-2 md:py-6 flex flex-col ${isBlurry && 'blur'}`}>
          <Intro />
          <PortfolioSection onPopup={handlePopup}/>
          <EducationSection />

      </main>
    </div>
  );
}

export default App;
