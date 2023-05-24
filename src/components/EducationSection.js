import { useEffect, useState } from "react"

import EducationCard from "./EducationCard"


function EducationSection(){
    const [educations, setEducations] = useState()

    useEffect(() => {
        fetch('/education.json').then(res => res.json().then(data => setEducations(data)))
    }, [])

    console.log(educations)

    let cardList = []
    if (educations){
        cardList = educations.map(education => {
            return <EducationCard key={education.id} education={education} />
        })
    }

    const tailwindCSSSection = 'grid grid-cols-3 my-4 border border-color-secondary p-8'

    return (
        <div className="section h-auto" >
            <h2 className="text-secondary text-3xl font-bold my-6" data-aos='fade-in'>Education</h2>
            <div >
                {cardList}


                {/* <div className={tailwindCSSSection} data-aos='fade-right'>
                    <div>
                        <img className="w-1/2 mx-auto" src="flatiron-logo.png"/>
                    </div>
                    <div className="col-span-2 mx-4">
                        <h3 className="text-secondary text-xl font-bold my-4">Flatiron School</h3>
                        <p className="text-left text-secondary">This is a sample text about my time at Flatiron</p>
                    </div>
                </div>
                <div className={tailwindCSSSection} data-aos='fade-right'>
                    <div>
                        <img className="w-1/2 mx-auto" src="ucr-logo.png"/>
                    </div>
                    <div className="col-span-2 mx-4">
                        <h3 className="text-secondary text-xl font-bold my-4">University of California: Riverside</h3>
                        <p className="text-left text-secondary">This is a sample text about my time at UCR</p>
                    </div>
                </div>
                <div className={tailwindCSSSection} data-aos='fade-right'>
                    <div>
                        <img className="w-1/2 mx-auto" src="speech-bubble.png"/>
                    </div>
                    <div className="col-span-2 mx-4">
                        <h3 className="text-secondary text-xl font-bold my-4">Language Education</h3>
                        <p className="text-left text-secondary">This is a sample text about my language education</p>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
export default EducationSection