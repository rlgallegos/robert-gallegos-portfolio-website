

function EducationCard({education}) {
    const tailwindCSSSection = 'flex flex-col lg:flex-row my-4 border border-color-secondary md:p-8 items-center bg-darkBlue'

    let descriptionParagraphs = education.summary.map(paragraph => {
        return <p className="text-secondary text-justify my-4">{paragraph}</p>
    })

    const skillList = education.skills.map(skill => {
        return <li className="text-secondary" key={skill}>{skill}</li>
    })

    return (
        <div className={tailwindCSSSection} data-aos='fade-right'>
            <div className="w-1/2 sm:w-1/4 flex items-center">
                <img className="w-3/4 mx-auto p-4" src={education.image} alt="institution logo"/>
            </div>
            <div className="w-4/5 sm:w-3/4 pb-8">
                <h3 className="text-secondary text-xl font-bold my-4">{education.name}</h3>
                <p className="text-left text-secondary my-8">{descriptionParagraphs}</p>
                <h5 className="text-secondary text-lg font-bold mb-2">Skills acquired:</h5>
                <ul className="grid grid-cols-3">
                    {skillList}
                </ul>
            </div>
        </div>
    )
}
export default EducationCard