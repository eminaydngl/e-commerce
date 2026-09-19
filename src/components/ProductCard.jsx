import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function ProductCard({ product, viewMode }) {

    const categories = useSelector((state) => state.product.categories);

    const category = categories.find(
        (category) => category.id === product.category_id
    );

    const productNameSlug = product.name
        .toLowerCase()
        .replace(/ğ/g, "g")
        .replace(/ü/g, "u")
        .replace(/ş/g, "s")
        .replace(/ı/g, "i")
        .replace(/ö/g, "o")
        .replace(/ç/g, "c")
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "");

    return (
        <>
            <div className={viewMode === "list" ? "flex gap-3" : "w-[239px]"}>

                <Link
                    to={`/shop/${category.gender}/${category.title
                        .toLowerCase()
                        .replace(/ğ/g, "g")
                        .replace(/ü/g, "u")
                        .replace(/ş/g, "s")
                        .replace(/ı/g, "i")
                        .replace(/ö/g, "o")
                        .replace(/ç/g, "c")
                        .replace(/\s+/g, "-")}/${category.id}/${productNameSlug}/${product.id}`}
                    className={viewMode === "list" ? "flex gap-3" : "w-[239px] block"}
                >

                    <img src={product.images[0]?.url}
                        alt="" className={viewMode === "list" ? "h-70" : "h-[427px]"} />

                    <div className="p-6 flex flex-col gap-3">
                        <h5 className="text-center text-base font-bold text-brand-dark">{product.description}</h5>

                        <p className={viewMode === "list" ? "font-bold text-base text-brand-gray" : "text-center font-bold text-sm text-brand-gray"}>English Department</p>

                        <p className={viewMode === "list" ? "text-start text-xl" : "text-center"}>{product.price} TL</p>

                        <div className={viewMode === "list" ? "flex space-x-2" : "flex justify-center space-x-2"}>
                            <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                            <div className="w-4 h-4 rounded-full bg-green-500"></div>
                            <div className="w-4 h-4 rounded-full bg-orange-500"></div>
                            <div className="w-4 h-4 rounded-full bg-gray-800"></div>
                        </div>
                    </div>

                </Link>

            </div>

        </>
    )
}

export default ProductCard
