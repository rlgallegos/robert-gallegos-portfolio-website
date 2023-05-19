import { useEffect } from "react"


function ProjectDetailsPopup({project, setPopup, setIsBlurry}){

    function handleExit(e){
        if (!e.target.closest(".popup") || e.target.textContent == 'Exit') {
            setPopup(null)
            setIsBlurry(false)
        }
    }
    let descriptionParagraphs = project.description.map(paragraph => {
        return <p className="text-secondary text-justify mx-8 my-2">{paragraph}</p>
    })

    const languageList = project.languages.map(language => {
        return <li className="text-secondary" key={language}>{language}</li>
    })
    const skillList = project.skills.map(skill => {
        return <li className="text-secondary" key={skill}>{skill}</li>
    })

    return (
        <div className="backdrop w-screen h-screen fixed z-40" onClick={handleExit}>
            <div className="popup p-4 w-1/2 h-[75vh] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary fixed z-50 border border-secondary overflow-scroll">
                <div className="p-4">
                    <h2 className="text-secondary text-3xl font-bold my-4">{project.title}</h2>
                    <div className="border-2 border-secondary rounded-lg ring-2 ring-offset-2 ring-secondary p-4 my-4 flex flex-col">
                        <video src={project.video} autoPlay loop muted></video>
                    </div>
                    <h3 className="text-secondary text-lg font-bold text-left mx-8 mt-8 mb-4">Description:</h3>
                    {/* <p className="text-secondary text-justify mx-8">{project.description}</p> */}
                    {descriptionParagraphs}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 mx-auto text-justify">
                    <ul className="m-4">
                        <h3 className="text-secondary text-xl mb-4 font-bold">Languages Used</h3>
                        {languageList}
                    </ul>
                    <ul className="m-4">
                        <h3 className="text-secondary text-xl mb-4 font-bold">Skills Acquired</h3>
                        {skillList}
                    </ul>
                </div>
                <br />
                <button className="exit-button px-12 py-3 border border-secondary rounded-3xl text-secondary" onClick={handleExit}>Exit</button>
            </div>
        </div>

    )
}
export default ProjectDetailsPopup