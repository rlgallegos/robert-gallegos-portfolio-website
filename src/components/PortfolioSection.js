import PortfolioCard from "../assets/PortfolioCard";
import { projects } from "../data";

function PortfolioSection({onPopup, portfolioSectionRef}) {

    let cardList = []
    if (projects){
        cardList = projects.map(project => {
            return <PortfolioCard key={project.id} project={project} onPopup={onPopup}/>
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