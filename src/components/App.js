import '../App.css';
import PortfolioSection from './PortfolioSection'
import Intro from './Intro';
import Testimonials from './Testimonials';
import LanguageCube from '../assets/LanguageCube';
import ProjectDetailsPopup from './ProjectDetailsPopup';
import Current from './Current';

import { useRef, useState } from 'react';




function App() {
    const [popup, setPopup] = useState(null)
    const [isBlurry, setIsBlurry] = useState(false)
    const [gadget, setGadget] = useState('')

    // References for updating Gadget on scroll
    const portfolioSectionRef = useRef(null)
    const languageCubeRef = useRef(null)
    const testimonialRef = useRef(null)
    const currentRef = useRef(null)

    function handlePopup(project){
        setIsBlurry(true)
        setPopup(project)
    }
    function handleScrollToCurrent(){
        currentRef.current.scrollIntoView({ behavior: 'smooth' });
    }


  return (
    <div className='App bg-white text-slate-800 pb-[25vh] overflow-x-hidden'>
        {popup && <ProjectDetailsPopup project={popup} setPopup={setPopup} setIsBlurry={setIsBlurry} />}
        <div className="w-full h-screen fixed bg-no-repeat bg-cover bg-center" style={{ backgroundImage: 'url(/fia-yang-2.jpg)' }} />
        <main className={`flex flex-col ${isBlurry && 'blur'}`}>
            <Intro gadget={gadget} setGadget={setGadget} 
            portfolioSectionRef={portfolioSectionRef} languageCubeRef={languageCubeRef} testimonialRef={testimonialRef} currentRef={currentRef} />
            <PortfolioSection onPopup={handlePopup} portfolioSectionRef={portfolioSectionRef} />
            <LanguageCube languageCubeRef={languageCubeRef} onScrollToCurrent={handleScrollToCurrent} />
            <Testimonials testimonialRef={testimonialRef} />
            <Current currentRef={currentRef} />
        </main>
    </div>
  );
}

export default App;
