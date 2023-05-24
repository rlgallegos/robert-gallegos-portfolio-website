

function EducationCard({education}) {
    const tailwindCSSSection = 'grid grid-cols-3 my-4 border border-color-secondary p-8 items-center'

    let descriptionParagraphs = education.summary.map(paragraph => {
        return <p className="text-secondary text-justify mx-8 my-2">{paragraph}</p>
    })

    const skillList = education.skills.map(skill => {
        return <li className="text-secondary" key={skill}>{skill}</li>
    })

    return (
        <div className={tailwindCSSSection} data-aos='fade-right'>
            <div>
                <img className="w-1/2 mx-auto" src={education.image}/>
            </div>
            <div className="col-span-2 mx-4">
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