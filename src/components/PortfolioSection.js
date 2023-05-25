import { useEffect, useState } from "react";
import PortfolioCard from "./PortfolioCard";

function PortfolioSection({onPopup}) {
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
        <div className="section my-[30vh]" data-aos='fade-in'>
            <h2 className="text-secondary text-3xl font-bold my-6 mx-auto text-center">Key Projects</h2>
            <div className=" w-5/6 mx-auto flex flex-col lg:flex-row lg:gap-4">
                {cardList}
            </div>
        </div>
    )
}

export default PortfolioSection;