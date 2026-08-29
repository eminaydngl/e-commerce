import ProductCard from "../ProductCard"

function BestsellerProducts(){
    return (
        <>
        <section className="flex flex-col gap-6">
            <h3 className="font-bold text-2xl text-brand-dark flex justify-center md:justify-start md:ml-60 ">BESTSELLER PRODUCTS</h3>

            <div className="flex flex-col items-center md:flex-row gap-8 justify-center">

                <ProductCard id={614} picture={"https://picsum.photos/id/614/400/500"}/>
                <ProductCard id={643} picture={"https://picsum.photos/id/643/400/500"}/>
                <ProductCard id={604} picture={"https://picsum.photos/id/604/400/500"}/>
                <ProductCard id={424} picture={"https://picsum.photos/id/424/400/500"}/>

            </div>

            <div className="flex flex-col items-center md:flex-row gap-8 justify-center">

                <ProductCard id={124} picture={"https://picsum.photos/id/124/400/500"}/>
                <ProductCard id={1000} picture={"https://picsum.photos/id/1000/400/500"}/>
                <ProductCard id={144} picture={"https://picsum.photos/id/144/400/500"}/>
                <ProductCard id={111} picture={"https://picsum.photos/id/111/400/500"}/>

            </div>
        </section>
        </>
    )
}

export default BestsellerProducts