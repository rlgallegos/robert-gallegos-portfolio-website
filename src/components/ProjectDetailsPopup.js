
function ProjectDetailsPopup({project, setPopup, setIsBlurry}){

    function handleExit(e){
        if (!e.target.closest(".popup") || e.target.textContent === 'Exit') {
            setPopup(null)
            setIsBlurry(false)
        }
    }
    let descriptionParagraphs = project.description.map(paragraph => {
        return <p className="text-justify md:mx-8 my-2 indent-5">{paragraph}</p>
    })

    return (
        <div className="backdrop w-screen h-screen fixed z-40" onClick={handleExit}>
            <div className="popup p-4 w-full md:w-3/4 h-[75vh] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white fixed z-50 border border-slate-800 overflow-scroll">
                <div className="p-2 lg:p-4">
                    <h2 className="text-3xl font-bold my-4">{project.title}</h2>
                    <div className="border-2 border-slate-800 rounded-lg ring-2 ring-offset-2 ring-slate-800 p-4 my-4 flex flex-col">
                        <video src={project.video} autoPlay loop muted playsInline loading='lazy' ></video>
                    </div>
                    <h3 className="text-lg font-bold text-left md:mx-8 mt-8 mb-4">Description:</h3>
                    {descriptionParagraphs}
                </div>
                <br />
                <button className="exit-button px-12 py-1 border border-slate-800 rounded-3xl text-slate-800 hover:bg-tertiary" onClick={handleExit}>Exit</button>
            </div>
        </div>

    )
}
export default ProjectDetailsPopup