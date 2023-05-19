import { HiOutlineExternalLink } from "react-icons/hi";
import { GiClick } from "react-icons/gi"

function PortfolioCard({project, aosDelay, onPopup}) {

    function handleClick(){
        onPopup(project)
    }

    return (
        <div className="w-1/3  mx-2" >
            <div className="relative transition-transform duration-300 hover:scale-105 border border-color-secondary p-4" data-aos='flip-left' data-aos-delay={aosDelay}>
                <img onClick={handleClick} className="link" src={project.image} alt="Visual preview of project"/>
                <GiClick className="absolute text-white right-2 bottom-2" />
            </div>
            
            <h3 onClick={handleClick} className="text-secondary text-xl my-2 link" data-aos='fade-in' data-aos-delay={aosDelay + 300}>{project.title}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 my-2 border border-color-secondary" data-aos='flip-left' data-aos-delay={aosDelay + 300}>
                <a href={project.git} className='link w-1/2 mx-auto p-2 flex items-center'>
                    <h4 className="text-secondary mx-2">GitHub</h4>
                    <HiOutlineExternalLink className="text-secondary" />
                </a>
                <a href={project.demo} className="link w-1/2 mx-auto p-2 flex items-center">
                    <h4 className="text-secondary mx-2">Demo</h4>
                    <HiOutlineExternalLink className="text-secondary" />
                </a>
            </div>
        </div>
    )
}

export default PortfolioCard;