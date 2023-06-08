
import { HiOutlineExternalLink, HiOutlineMail } from "react-icons/hi";

function Intro(){
    const tailwindCSSSubtitle = "text-secondary text-lg"

    return (
        <div className="section flex flex-col mx-4 md:mx-2">
            <div className="flex flex-col md:flex-row md:justify-between space-x-4" data-aos='fade-down' data-aos-delay='100' >
                <div className="w-1/2 md:1/3 lg:w-1/5 xl:1/6 h-full fade-in  flex items-center p-4 mx-auto md:ml-0">
                    <img className="border-4 border-secondary" src="headshot.jpg" alt="headshot" />
                </div>
                <div className="text-center md:text-right">
                    <div className="my-4 md:mt-0">
                        <h1 className="text-secondary text-3xl">Robert Gallegos</h1>
                        <h3 className={tailwindCSSSubtitle}>Software Engineer</h3>
                        <h3 className={tailwindCSSSubtitle}>New York, NY</h3>
                    </div>
                    <div className="my-4 border border-color-secondary p-4 text-right">
                        <h3 className={tailwindCSSSubtitle + ' font-bold text-center mb-2'}>Contact Me</h3>
                        <div className="flex flex-col sm:flex-row sm:justify-evenly sm:gap-6">
                            <a href="mailto:rlgallegos85@gmail.com" className={tailwindCSSSubtitle + ' flex items-center'}>
                                rlgallegos85@gmail.com<HiOutlineMail className="text-secondary mx-2" />
                            </a>
                            <a href="https://www.linkedin.com/in/rlgallegos/" className={tailwindCSSSubtitle + ' flex items-center'}>
                                Linkedin<HiOutlineExternalLink className="text-secondary mx-2" />
                            </a>
                        </div>
                    </div>
                    
                    <div className="my-4 text-left border border-color-secondary p-4">
                        <h3 className={tailwindCSSSubtitle + ' font-bold text-center mb-2'}>Languages</h3>
                        <ul className="text-secondary text-lg flex flex-wrap gap-4 sm:flex-row sm:justify-evenly sm:gap-6">
                            <li>Python</li>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>SQL</li>
                            <li>C</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div data-aos='fade-down' >
                <h3 className="text-secondary text-3xl font-bold my-8">Welcome!</h3>
                <p className="text-secondary text-justify">
                    Welcome to my portfolio! I'm a software engineer and web developer.
                    <br /><br />
                    I code using TypeScript / React for the frontend, and Python / Flask for the backend. Add in SQL -in its myriad forms- for the database, and 
                    sprinkle in a little Grandfather C for fun, and you have the recipe for some pretty cool projects. Below is a curated selection of a few of them. Take a look!
                </p>
            </div>
        </div>
    )
}
export default Intro