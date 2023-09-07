import { useEffect, useState } from "react";
import PortfolioCard from "../assets/PortfolioCard";

function PortfolioSection({onPopup, portfolioSectionRef}) {
    const [projects, setProjects] = useState(null)

    useEffect(() => {
        fetch('/projects.json').then(res => res.json().then(data => setProjects(data)))
    }, [])

    let cardList = []
    if (projects){
        let delay = 0
        cardList = projects.map(project => {
            delay += 100
            return <PortfolioCard key={project.id} project={project} aosDelay={delay} onPopup={onPopup}/>
        })
    }
 
    return(
        <div className="my-[10vh] w-full" data-aos='fade-in' ref={portfolioSectionRef}  >
                <div className="mx-auto my-6 w-3/4 md:w-1/3 p-4 bg-white border border-slate-800">
                    <h2 className="text-xl md:text-3xl font-bold ">Key Projects</h2>
                </div>
                <div className=" w-full mx-auto flex flex-col gap-y-8 lg:gap-4">
                    {cardList}
                </div>
        </div>
    )
}

export default PortfolioSection;