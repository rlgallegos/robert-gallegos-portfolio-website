

function Gadget({gadget, setGadget, away, gadgetRef}){
    function handleClickGadget(){
        if (gadget){
            setGadget(false)
            return
        } else {
            setGadget("Hey there! I'm Gadget.")
        }
    }

    return (
        <div onClick={handleClickGadget} 
        className={`absolute bottom-0 w-[150px] h-[150px] left-1/2 transform -translate-x-1/2 translate-y-1/2 mx-auto duration-500
        ${away ? 'top-1 left-20 z-50' : 'bg-white'}`}>

            <img src="/gadget-transparent.png" alt="gadget" ref={gadgetRef}
            className={`point w-full h-full mx-auto duration-1000 ${away ? 'rotate-360' : 'border border-slate-800'}`}/>

            <div className={`bg-white transition-all min-w-full duration-500 transform relative bottom-5
            ${gadget ? 'h-auto translate-y-0 border border-slate-800 p-2' : 'h-0 -translate-y-full p-0'}`}>

                <h4 className={`transition-all duration-500 
                ${gadget ? 'opacity-100' : 'opacity-0'}`}  >{gadget}</h4>
            </div>

        </div>
    )
}
export default Gadget