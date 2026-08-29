import ProductCard from "../ProductCard"

function ProductGrid({viewMode}) {
    return (
        <>
            <section className="flex flex-col gap-12">

                <div className={viewMode === "list" ? "flex flex-col md:gap-4 md:pl-55" :"flex flex-col items-center md:flex-row justify-center gap-8"}>
                    <ProductCard id={42} picture={"https://picsum.photos/id/42/400/500"} viewMode={viewMode}/>
                    <ProductCard id={31} picture={"https://picsum.photos/id/31/400/500"} viewMode={viewMode}/>
                    <ProductCard id={22} picture={"https://picsum.photos/id/22/400/500"} viewMode={viewMode}/>
                    <ProductCard id={4} picture={"https://picsum.photos/id/4/400/500"}  viewMode={viewMode}/>
                </div>

                <div className={viewMode === "list" ? "flex flex-col md:gap-4 md:pl-55" :"flex flex-col items-center md:flex-row justify-center gap-8"}>
                    <ProductCard id={54} picture={"https://picsum.photos/id/54/400/500"} viewMode={viewMode}/>
                    <ProductCard id={61} picture={"https://picsum.photos/id/61/400/500"} viewMode={viewMode}/>
                    <ProductCard id={49} picture={"https://picsum.photos/id/49/400/500"} viewMode={viewMode}/>
                    <ProductCard id={91} picture={"https://picsum.photos/id/91/400/500"} viewMode={viewMode}/>
                </div>

                <div className={viewMode === "list" ? "flex flex-col md:gap-4 md:pl-55 mb-4" :"flex flex-col items-center md:flex-row justify-center gap-8"}>
                    <ProductCard id={19} picture={"https://picsum.photos/id/19/400/500"} viewMode={viewMode}/>
                    <ProductCard id={100} picture={"https://picsum.photos/id/100/400/500"} viewMode={viewMode}/>
                    <ProductCard id={11} picture={"https://picsum.photos/id/11/400/500"} viewMode={viewMode}/>
                    <ProductCard id={75} picture={"https://picsum.photos/id/75/400/500"} viewMode={viewMode}/>
                </div>

            </section>
        </>
    )
}

export default ProductGrid