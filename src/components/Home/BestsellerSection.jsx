import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";

function BestsellerSection() {
    const products = useSelector((state) => state.product.productList) || [];

    const bestsellers = [...products]
        .sort((a, b) => b.sell_count - a.sell_count)
        .slice(0, 8);

    return (
        <section className="flex flex-col gap-20">
            <div className="text-center flex flex-col gap-3 my-6">
                <h4 className="font-normal text-xl text-brand-gray">Featured Products</h4>
                <p className="text-2xl font-bold">BESTSELLER PRODUCTS</p>
                <p className="font-normal text-sm text-brand-gray">problems trying to resolve the conflict between</p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 max-w-6xl mx-auto">
                {bestsellers.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}

export default BestsellerSection;


