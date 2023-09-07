import TestimonialCard from "../assets/TestimonialCard"

import { testimonials } from "../data"

function Testimonials({testimonialRef}){
    const testimonialBlocks = testimonials.map(testimonial => {
        return <TestimonialCard key={testimonial.id} testimonial={testimonial} />
    })

    return (
        <div className="w-full flex flex-col my-6 z-10">
            <div className="mx-auto my-6 w-3/4 md:w-1/3 p-4 bg-white border border-slate-800" >
                <h2 className="text-xl md:text-3xl font-bold">Shoutouts</h2>
            </div>
            <div className="w-full md:w-3/4 mx-auto gap-8 flex flex-col md:flex-row justify-evenly " ref={testimonialRef}>
                {testimonialBlocks}
            </div>
        </div>
    )
}
export default Testimonials