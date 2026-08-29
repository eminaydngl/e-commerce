import ProductCard from "../ProductCard"

function BestsellerSection(){
    return (
        <>
        <section className="flex flex-col gap-20">
            <div className="text-center flex flex-col gap-3 my-6">
                <h4 className="font-normal text-xl text-brand-gray">Featured Products</h4>
                <p className="text-2xl font-bold">BESTSELLER PRODUCTS</p>
                <p className="font-normal text-sm text-brand-gray">problems trying to resolve the conflict between</p>
            </div>

            <div className="flex flex-col items-center md:flex-row gap-8 justify-center">
                <ProductCard picture={"https://picsum.photos/id/614/400/500"}/>
                <ProductCard picture={"https://picsum.photos/id/643/400/500"}/>
                <ProductCard picture={"https://picsum.photos/id/604/400/500"}/>
                <ProductCard picture={"https://picsum.photos/id/424/400/500"}/>
            </div>

            <div className="flex flex-col items-center md:flex-row gap-8 justify-center">
                <ProductCard picture={"https://picsum.photos/id/124/400/500"}/>
                <ProductCard picture={"https://picsum.photos/id/1000/400/500"}/>
                <ProductCard picture={"https://picsum.photos/id/144/400/500"}/>
                <ProductCard picture={"https://picsum.photos/id/111/400/500"}/>

            </div>
        </section>
        </>
    )
}

export default BestsellerSection