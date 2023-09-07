import { useEffect, useRef, useState } from "react";
import { GrMailOption, GrLinkedinOption, GrGithub } from "react-icons/gr";

import Gadget from "../assets/Gadget";

function Intro({gadget, setGadget, portfolioSectionRef, languageCubeRef, testimonialRef, currentRef}){
    const [away, setAway] = useState(false)
    const [isNavBarExpanded, setIsNavBarExpanded] = useState(false)
    const gadgetRef = useRef(null)

    function handleEmail(){
        window.location.href = 'mailto:rlgallegos85@gmail.com'
    }
    function handleLinkedIn(){
        const linkedInURL = 'https://www.linkedin.com/in/rlgallegos/'
        window.open(linkedInURL, '_blank')
    }
    function handleGithub(){
        const githubURL = 'https://github.com/rlgallegos'
        window.open(githubURL, '_blank')
    }
    function handleExpandNavBar(){
        setIsNavBarExpanded(!isNavBarExpanded)
    }

    useEffect(() => {
        const handleScroll = () => {
            const portfolioSection = portfolioSectionRef.current
            const languageCube = languageCubeRef.current
            const testimonial = testimonialRef.current
            const current = currentRef.current
            
            if (portfolioSection && languageCube && testimonial) {
                const portfolioRect = portfolioSection.getBoundingClientRect()
                const languageCubeRect = languageCube.getBoundingClientRect()
                const testimonialRect = testimonial.getBoundingClientRect()
                const currentRect = current.getBoundingClientRect()
                

                if (window.scrollY === 0) {
                    setGadget('');
                    setAway(false);
                    return
                } else {
                    setAway(true)
                }
                if (currentRect.top <= window.innerHeight - window.innerHeight / 3) {
                    gadgetRef.current.classList.remove('rotate-360')
                    setGadget("What I'm up to lately!")
                }
                else if (testimonialRect.top <= window.innerHeight / 2 && testimonialRect.bottom >= window.innerHeight / 2) {
                    gadgetRef.current.classList.add('rotate-360')
                    setGadget('See what people had to say!');
                }
                else if (languageCubeRect.bottom >= window.innerHeight / 2 && languageCubeRect.bottom <= window.innerHeight) {
                    gadgetRef.current.classList.remove('rotate-360')
                    setGadget('Click a language and say hello!');
                }
                else if (portfolioRect.top <= window.innerHeight / 2 && portfolioRect.bottom >= window.innerHeight) {
                    setGadget('Tap on a project to learn more!')
                    gadgetRef.current.classList.add('rotate-360')
                } 
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [setGadget, languageCubeRef, portfolioSectionRef, testimonialRef, currentRef]);


    return (
        <div className="flex flex-col w-full h-1/2 z-20 mb-36 bg-transparent" >

            {/* Desktop nav bar */}
            <nav className={`w-full bg-white hidden md:block fixed translate-all duration-500 ${away ? 'h-20': 'h-28'}`} >
                <div className=" h-full w-full flex">

                    {/* Left of central image */}
                    <div className="w-2/5 h-full flex items-end justify-evenly">
                        <h1 className="fatface text-5xl">Robert Gallegos</h1>
                        <h3 className="text-xl">New York, NY</h3>
                    </div>

                    <div className="w-1/5">
                        {/* Space Gadget Occupies */}
                    </div>

                    {/* Right of central image */}
                    <div className="w-2/5 h-full flex items-end justify-evenly">
                        <h2 className="text-2xl">Software Engineer / Web Developer</h2>
                        <div className="flex justify-between">
                            <div onClick={handleEmail} 
                            className="point h-8 w-16 flex items-center justify-center hover:bg-tertiary hover:border hover:border-slate-800">
                                <GrMailOption className="point h-3/4 w-full" />
                            </div>
                            <div onClick={handleLinkedIn}
                            className="point h-8 w-16 flex items-center justify-center hover:bg-tertiary hover:border hover:border-slate-800">
                                <GrLinkedinOption className="point h-3/4 w-full" />
                            </div>
                            <div onClick={handleGithub}
                            className="point h-8 w-16 flex items-center justify-center hover:bg-tertiary hover:border hover:border-slate-800">
                                <GrGithub className="point h-3/4 w-full" />
                            </div>
                        </div>
                    </div>
                </div>
                <Gadget gadget={gadget} setGadget={setGadget} away={away} gadgetRef={gadgetRef} />
                <hr className="border border-slate-800" />
            </nav>

            {/* Mobile nav bar */}
            <nav className="flex flex-col items-end fixed md:hidden w-full h-16 z-20 bg-white border border-slate-800">
                <div className="w-full h-full flex justify-between items-end pl-4 pr-2">
                    <h1 className="fatface text-2xl">Robert Gallegos</h1>
                    <img onClick={handleExpandNavBar} className={`h-full translate-all duration-300 ${isNavBarExpanded ? 'rotate-360' : ''}`} src="/gadget-transparent.png" alt="gadget" />
                </div>
                <div className={`w-full flex items-center justify-evenly bg-white translate-all duration-500 ${isNavBarExpanded ? 'h-12 border border-slate-800' : 'h-0'}`}>
                    <h3 className={`text-md text-left bg-white translate-opacity duration-500 ${isNavBarExpanded ? 'opacity-100 delay-200' : 'opacity-0'}`}>Software Engineer</h3>
                    <GrGithub onClick={handleGithub} className="h-3/4 w-auto" />
                    <GrLinkedinOption onClick={handleLinkedIn} className="h-3/4 w-auto" />
                    <GrMailOption onClick={handleEmail} className="h-3/4 w-auto" />
                </div>
            </nav>

        </div>
    )
}
export default Intro