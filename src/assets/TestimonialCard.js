

function TestimonialCard({testimonial}){
    

    return (
        <>
        
            {/* Desktop Card */}
            <div className="md:w-1/5 bg-white hidden md:flex flex-col flex-grow p-6 border border-slate-800">
                <img src={testimonial.pic} className="w-2/3 mx-auto my-4" alt="reviewer" loading="lazy" />
                <p className="h-full w-full text-justify indent-5">{testimonial.text}</p>
            </div>

            {/* Mobile Card */}
            <div className="bg-white w-[95vw] mx-auto md:hidden p-4 border border-slate-800">
                <div className="w-1/4 flex items-center justify-center float-left mr-4 mb-1 border border-slate-800">
                    <img src={testimonial.pic} className="w-full" alt="reviewer" loading="lazy" />
                </div>
                <p className="w-full text-justify indent-5">{testimonial.text}</p>
            </div>
        </>
    )
}
export default TestimonialCard