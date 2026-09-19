import { useSelector } from "react-redux"
import ProductCard from "../ProductCard"

function BestsellerProducts() {

    const products = useSelector((state) => state.product.productList);

    const bestsellers = [...products]
        .sort((a, b) => b.sell_count - a.sell_count)
        .slice(0, 8);

    return (
        <>
            <section className="flex flex-col gap-6">
                <h3 className="font-bold text-2xl text-brand-dark flex justify-center md:justify-start md:ml-60 ">BESTSELLER PRODUCTS</h3>

                <div className="flex flex-wrap items-center justify-center gap-8 max-w-6xl mx-auto">
                    {bestsellers.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>
        </>
    )
}

export default BestsellerProducts