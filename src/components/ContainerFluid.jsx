function ContainerFluid() {
    return (
        <>
            <section className="bg-brand-teal text-white relative py-20" data-purpose="promo-banner">


                <div className="container mx-auto px-4 max-w-5xl flex flex-col md:flex-row items-center pt-10">

                    <div className="md:w-1/2 z-10 text-center md:text-left mb-10 md:mb-0">

                        <p className="text-sm font-bold tracking-widest uppercase mb-6">Summer 2020</p>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Vita classNameic<br />Product</h2>

                        <p className="text-sm mb-8 opacity-80 max-w-sm mx-auto md:mx-0">We know how large objects will act, We
                            know how are objects will act, We know</p>


                        <div
                            className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                            
                            <span className="text-2xl font-bold">$16.48</span>
                            
                            <button
                                className="bg-brand-green hover:bg-green-600 text-white font-bold py-3 px-8 rounded uppercase text-sm tracking-wide">
                                Add to Cart
                            </button>

                        </div>

                    </div>

                    <div className="md:w-1/2 flex justify-center items-end relative h-80 md:h-[500px]">

                        <img alt="Vita classNameic Product Model" className="object-cover h-full object-bottom"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaNNtF1p1YAvBaT3Kh3lrBGAYZ18Prr2C6c_-K1bEprt99KRlSO_3j3R_vcA_Oe_K0s-_aTxdP4381MRl1aUpMBUt5CQeT7LMD9yiSq-ZxJCMyhdy-WC9AK-vwdK0_okCQGpSFncJblWzFMmbL3hHSfvzNGWhmzhMX3Fq4lYbKV17KHWvTeCRSbb9YENHy1gfuiDYMZa77MojQxNIpMdtE5a0HpkhAOMO0jc9S94fV1bDq5fPHyvs" />
                    
                    </div>

                </div>


            </section>
        </>
    )
}

export default ContainerFluid