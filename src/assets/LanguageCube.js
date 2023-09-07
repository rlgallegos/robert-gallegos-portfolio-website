import { useEffect, useMemo, useRef, useState } from 'react'
import Typed from 'typed.js';
import Snapshot from './Snapshot';

import { intros } from '../data'



function LanguageCube({languageCubeRef, onScrollToCurrent}){
    const [expandedIntro, setExpandedIntro] = useState(false)
    const [showSnapshot, setShowSnapshot] = useState(false)

    const typedRef = useRef(null); // Create a ref for the Typed instance

    const options = useMemo(() => ({
        strings: [],
        typeSpeed: 50,
        backSpeed: 10,
        showCursor: false,
        smartBackspace: true,
        onComplete: () => {
            setTimeout(() => {
                typedRef.current.el.classList.add('hidden')
                console.log(typedRef.current.el)
                setShowSnapshot(true)
            }, 2000)
        }
    }), [])
      
    useEffect(() => {
      typedRef.current = new Typed("#introduction", options)
      return () => {
        typedRef.current.destroy()
      }
    }, [options])
  
    function handleClick(e) {
        // Set up
        typedRef.current.el.classList.remove('hidden')
        setShowSnapshot(false)

        // Deleting and re-creating typed object with new strings
        typedRef.current.destroy()
        typedRef.current = new Typed("#introduction", {
            ...options,
            strings: intros[e.target.id],
        })

        // Start Typed animation
        typedRef.current.start()

        if (!expandedIntro) {
        setExpandedIntro(true)
        }
    }

    return (
    <div
    className={` bg-white opacity-90 border flex border-slate-800 translate-all w-[95vw] mx-auto duration-500 flex-col md:flex-row
    ${expandedIntro ? 'md:w-2/3 h-auto md:h-[55vh]' : ' md:h-[50vh] md:w-[50vh]'}`}>

        <div className={`cube-container md:h-full py-20 md:py-0 flex md:justify-center md:items-center mx-auto translate-all duration-500
        ${expandedIntro ? 'md:w-2/5 h-1/4' : 'h-full'} `}
        ref={languageCubeRef}>

            <div className={`cube point ${expandedIntro ? '' : ''}`}>
                <div id='en' className="face front " onClick={handleClick}>
                    Hello
                </div>
                <div id='sp' className="face back " onClick={handleClick}>
                    Hola
                </div>
                <div id='fr' className="face right " onClick={handleClick}>
                    Bonjour
                </div>
                <div id='ger' className="face left " onClick={handleClick}>
                    Hallo
                </div>
                <div className="face top ">
                    <img src="/gadget-transparent.png" alt="gadget" />
                </div>
                <div className="face bottom ">
                </div>
            </div>
        </div>

        <div className={`flex flex-col md:h-full my-4 md:my-auto items-center justify-center text-xl translate-all duration-500 ${expandedIntro ? 'md:w-3/5 h-3/4 p-4 md:p-0' : 'md:w-0 h-0 p-0'}`}>
            
            <div id='introduction' className={`md:h-full min-h-[10vh] flex items-center justify-center `} ></div>

            <Snapshot showSnapshot={showSnapshot} />

            <button onClick={onScrollToCurrent}
            className={`translate-all transition-width h-10 overflow-hidden my-4 md:my-auto rounded-md
            ${showSnapshot ? 'w-36 border border-slate-800 duration-1000 delay-[2000ms]' : 'w-0'}`}>
                <span className={`transition-all duration-300 h-full w-full text-sm flex items-center justify-center ${showSnapshot ? 'opacity-100 delay-[2500ms]' : 'opacity-0'}`}>
                    Current Endeavors
                </span>
            </button>

        </div>

    </div>
    )
}
export default LanguageCube