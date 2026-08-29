function ProductFeatureBlock() {
    return (
        <>
            <section className="py-20" data-purpose="lifestyle-section">


                <div className="container mx-auto px-4 max-w-5xl flex flex-col-reverse md:flex-row items-center">

                    <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">

                        <img alt="Part of the Neural Universe" className="w-full max-w-md object-cover rounded-md shadow-lg"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuATsen6OqKZo4MjZDdPvOBMKJieK_xf_C3aFFxg6kxTHcBM3mqzfhnqwbr34ExHjY5qx3AoYfBoY3dJnU2JLtHdTWolkiTJBcuCGA3GKm8RlVksCpp3qzHa6e6Gfpe4FBYUqKKWfSw0hqFwxrosssfnDgPrOgRF8JfezxZ7Ziq27xE3VwJdiFreHSnJQ_G-09szTm0RUSO7dVHORiW2i0L7yK8qfbq4q__sz3t7jpgiOIa3GEHNqVI" />

                    </div>

                    <div className="md:w-1/2 text-center md:text-left md:pl-16">

                        <p className="text-brand-gray font-bold tracking-widest text-sm mb-4 uppercase">Summer 2020</p>

                        <h2 className="text-4xl font-bold mb-6 leading-tight">Part of the Neural Universe</h2>

                        <p className="text-brand-gray mb-8 text-lg">We know how large objects will act, but things on a small
                            scale.</p>

                        <div
                            className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">

                            <button
                                className="bg-brand-green hover:bg-green-600 text-white font-bold py-3 px-8 rounded uppercase text-sm">
                                Buy Now
                            </button>

                            <button
                                className="bg-transparent hover:bg-green-50 text-brand-green font-bold py-3 px-8 rounded border border-brand-green uppercase text-sm">
                                Read More
                            </button>

                        </div>

                    </div>

                </div>


            </section>
        </>
    )
}

export default ProductFeatureBlock