
import { HiOutlineExternalLink, HiOutlineMail } from "react-icons/hi";

function Intro(){
    const tailwindCSSSubtitle = "text-secondary text-lg"

    return (
        <div className="section flex flex-col mx-4 md:mx-2">
            <div className="flex flex-col md:flex-row md:justify-between space-x-4" data-aos='fade-down' data-aos-delay='100' >
                <div className="w-1/2 md:1/3 lg:w-1/5 xl:1/6 h-full fade-in bg-secondary flex items-center p-4 mx-auto md:ml-0">
                    <img src="headshot1.jpg" alt="headshot" />
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
                <h3 className="text-secondary text-3xl font-bold my-8">Introduction</h3>
                <p className="text-secondary text-justify">Born and raised in a small town in Northern California, I left my hometown
                and moved to Southern California to attend the University of California: Riverside. I studied there, including a year abroad
                in Lyon, FR, eventually graduating with my B.A. in French. From there, I worked, but continued my passion for languages, certifying my
                fluency with the French government, and attaining an advanced level in Spanish. I also studied German and Arabic. Professionally, 
                I founded a few start-ups, eventually resulting in the development of an app currently out for IOS and Android.
                <br /><br />
                The original developer I worked with seemed to struggle to be able to develop the app, and so eventually I had to move on to a second 
                developer. This second developer was incredible. He worked super efficiently, but in addition to that, he helped me to 
                understand what the issues had been with the first developer. I found myself more intrigued than I thought I would be by the more 
                complex intracicies of coding.
                <br /><br />
                After talking with this developer, I signed up for Harvard's CS50 course online. It is essentially an online course that just provides 
                you an introduction to computer science, starting from 1's and 0's up through web-development. I learned to code in C (Grandfather C), 
                and absolutely fell in love. I found myself coding all night until dawn, filling any space I could with problem-solving, even jotting 
                down potential solutions on my notepad at work.
                <br /><br />
                From there, it's not hard to see why I signed up for a coding bootcamp. Flatiron worked with Python and JavaScript, which I had 
                preliminary knowledge of. I just recently completed the program, but while the bootcamp is over, my education has just begun. 
                Take a look at some of the projects below. If you have any questions, feel free to reach out!
                </p>
            </div>
        </div>
    )
}
export default Intro