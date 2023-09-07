

function Snapshot({showSnapshot}){
    return (
        <div className={`w-full flex flex-col gap-y-4 translate-all h-0 py-4 overflow-hidden ${showSnapshot ? 'h-3/4 duration-500' : '' }`}>
            
            <div className="w-full h-1/2 overflow-hidden flex flex-col items-start justify-evenly">
                <h3 className="text-xl md:text-2xl mb-2 ">Tech Stack</h3>
                <ul className={`text-sm md:text-lg flex gap-x-8 gap-y-1 transition-opacity flex-wrap delay-500 duration-700 ${showSnapshot ? 'opacity-100' : 'opacity-0'}`}>
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>React.js</li>
                    <li>TypeScript</li>
                    <li>TailwindCSS</li>
                    <li>BCrypt</li>
                    <li>Flask (RESTful)</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
            </div>
            
            <div className="w-full h-1/2 overflow-hidden flex flex-col items-start justify-evenly">
                <h3 className="text-xl md:text-2xl mb-2 ">Diplomas / Certifications</h3>
                <ul className={`text-sm md:text-lg text-left flex flex-col gap-x-8 gap-y-1 transition-opacity flex-wrap delay-500 duration-700 ${showSnapshot ? 'opacity-100' : 'opacity-0'}`}>
                    <li>Bachelor of Arts (UC: Riverside)</li>
                    <li>Cert. in Software Engineering (Flatiron School)</li>
                    <li>CS50x Cert. in CS (Harvard EDX)</li>
                </ul>
            </div>

        </div>
    )
}
export default Snapshot