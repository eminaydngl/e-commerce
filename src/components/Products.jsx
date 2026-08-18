import ProductCard from "./ProductCard"

function Products(){
    return (
        <>
        <section className="flex flex-col gap-20">
            <div className="text-center flex flex-col gap-3 my-6">
                <h4 className="font-normal text-xl text-brand-gray">Featured Products</h4>
                <p className="text-2xl font-bold">BESTSELLER PRODUCTS</p>
                <p className="font-normal text-sm text-brand-gray">problems trying to resolve the conflict between</p>
            </div>

            <div className="flex flex-col items-center md:flex-row gap-8 justify-center">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>

            <div className="flex flex-col items-center md:flex-row gap-8 justify-center">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />

            </div>
        </section>
        </>
    )
}

export default Products