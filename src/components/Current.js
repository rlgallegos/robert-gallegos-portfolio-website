import { useState } from "react"


function Current({currentRef}){
    const [isExpandedLearning, setIsExpandedLearning] = useState(false)
    const [isExpandedWorking, setIsExpandedWorking] = useState(false)

    function handleExpandLearning(){
        setIsExpandedLearning(!isExpandedLearning)
    }
    function handleExpandWorking(){
        setIsExpandedWorking(!isExpandedWorking)
    }

    return (
        <div ref={currentRef} className="w-full z-10">
            <div className="mx-auto my-6 w-3/4 md:w-1/3 p-4 bg-white border border-slate-800">
                <h2 className="text-xl md:text-3xl font-bold ">Current Endeavors</h2>
            </div>
            <div className="flex flex-col md:flex-row w-full md:w-[75vw] justify-evenly gap-4 mx-auto">

                <div className="bg-white w-[95vw] flex flex-col mx-auto p-8 border border-slate-800">
                    <div onClick={handleExpandLearning} 
                    className="py-2 md:w-1/3 flex items-center justify-center md:mb-4 border border-slate-800 active:bg-tertiary md:active:bg-transparent">
                        <h3 className="text-lg font-bold">What I'm Learning</h3>
                    </div>
                    <div className={`flex flex-col md:max-h-screen md:mt-0 text-justify translate-all duration-500 overflow-hidden ${isExpandedLearning ? 'max-h-screen mt-4' : 'max-h-0 md:max-h-auto'}`}>
                        <div className="flex flex-col gap-2">
                            <h4 className="text-xl">CS50’s Introduction to Artificial Intelligence with Python</h4>
                            <p className="w-full text-justify indent-5">
                                This course explores the concepts and algorithms at the foundation of modern artificial intelligence, 
                                diving into the ideas that give rise to technologies like game-playing engines, handwriting recognition, 
                                and machine translation. By course’s end, students emerge with experience in libraries for machine 
                                learning as well as knowledge of artificial intelligence principles that enable 
                                them to design intelligent systems of their own.
                            </p>
                            <h4 className="text-xl">AWS Cloud Practitioner Preparation</h4>
                            <p className="w-full text-justify indent-5">
                            This preparation course is an introductory program designed to provide foundational knowledge 
                            of Amazon Web Services (AWS). It covers essential cloud concepts, AWS services, pricing, and helps prepare 
                            individuals for the AWS Certified Cloud Practitioner certification exam.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-white w-[95vw] flex flex-col mx-auto p-8 border border-slate-800">
                    <div onClick={handleExpandWorking} 
                    className="py-2 md:w-1/3 flex items-center justify-center md:mb-4 border border-slate-800 active:bg-tertiary md:active:bg-transparent">
                        <h3 className="text-lg font-bold">What I'm Working On</h3>
                    </div>
                    <div className={`flex flex-col md:max-h-screen md:mt-0 text-justify translate-all duration-500 overflow-hidden ${isExpandedWorking ? 'max-h-screen mt-4' : 'max-h-0 md:max-h-auto'}`}>
                        <div className="flex flex-col gap-2">
                            <h4 className="text-xl">Skyvault</h4>
                            <ul>
                                <li>Integration with the Skyvault IOS and Android App</li>
                                <li>Integration with an Email Marketing / Delivery Service API</li>
                                <li>Minor CSS Changes</li>
                            </ul>
                            <h4 className="text-xl">Freelance Websites</h4>
                            <ul>
                                <li>Marketing website for a Life Coach</li>
                                <li>Portfolio website for a Stylist</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Current