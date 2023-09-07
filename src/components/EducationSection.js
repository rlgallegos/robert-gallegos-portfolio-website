import { useEffect, useState } from "react"

import EducationCard from "../assets/EducationCard"


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

    return (
        <div className="section mx-4 sm:mx-2" >
            <h2 className="text-secondary text-3xl font-bold my-6" data-aos='fade-in'>Education</h2>
            <div >
                {cardList}
            </div>
        </div>
    )
}
export default EducationSection