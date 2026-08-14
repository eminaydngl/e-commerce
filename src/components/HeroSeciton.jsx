function HeroSection() {
    return (
        <>
            <section className="relative bg-brand-bg-blue" data-purpose="hero">


                <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center justify-between">

                    <div className="text-white md:w-1/2 z-10 text-center md:text-left mb-10 md:mb-0 pl-0 md:pl-10">
                        
                        <h5 className="font-bold tracking-widest text-sm mb-6 uppercase">Summer 2020</h5>
                        
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">NEW COLLECTION</h1>
                        
                        <p className="text-lg mb-8 max-w-md mx-auto md:mx-0">We know how large objects will act, but things on a
                            small scale.</p>
                        
                        <button
                            className="bg-brand-green hover:bg-green-600 text-white font-bold py-4 px-10 rounded text-xl uppercase tracking-wider">
                            Shop Now
                        </button>
                    
                    </div>
                    
                    <div className="md:w-1/2 flex justify-center md:justify-end relative h-[400px] md:h-[600px]">
                        <img alt="New Collection Model" className="object-cover object-center h-full"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuByTLmCHqrlM3040_zTWPNxxjmIkdUZ9aFaYz8qOS8CqIbCB7X6QHZ07B-sJQg7ojACnZmAWT6r54A2OuDvu-q8oXM7KpekbkoYuqkb-xbcW-Yx8Uw7mw3ODmW7wSq8P1SvntTs-XdIAbAjn374o1cZ-Aca8nwxDFIk0RNo9Km82ENbpnSVLlNLRVZfFjfeSFgcf_Lo2SjVNU2yLH__fWh4ZmeFF2UQAuXPcJ_n2zQpt8Mnlp0EJi4" />
                    
                    </div>
                </div>
                
            </section>
        </>
    )
}

export default HeroSection