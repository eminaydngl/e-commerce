import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../ProductCard"
import { useEffect, useState } from "react";
import { filterThunk } from "../../store/actions/thunks";

function ProductGrid({ viewMode, category, filter, sort }) {

    const [currentPage, setCurrentPage] = useState(1);

    const limit = useSelector((state) => state.product.limit)

    const products = useSelector((state) => state.product.productList) || [];

    const total = useSelector((state) => state.product.total);

    const fetchState = useSelector((state) => state.product.fetchState);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            filterThunk({
                category,
                filter,
                sort,
                limit,
                offset: (currentPage - 1) * limit
            })
        );
    }, [currentPage, category, filter, sort]);




    const totalPages = Math.ceil(total / limit);

    function getPageNumbers(currentPage, totalPages) {
        const delta = 2;
        const range = [];

        for (let i = Math.max(1, currentPage - delta); i <= Math.min(totalPages, currentPage + delta); i++) {
            range.push(i);
        }

        return range;
    }




    return (

        <>
            <section className="flex flex-col gap-12">

                {fetchState === "FETCHING" && (
                    <div className="flex justify-center items-center py-20">
                        <div className="w-10 h-10 border-4 border-brand-blue border-t-transparent rounded-full animate-spin"></div>
                    </div>
                )}

                {fetchState === "FETCHED" && (
                    <div className={viewMode === "list" ? "flex flex-col md:gap-4 md:pl-55" : "flex flex-col items-center md:flex-row flex-wrap justify-center gap-8 max-w-6xl mx-auto"}>
                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                viewMode={viewMode}
                            />
                        ))}
                    </div>
                )}

                {fetchState === "FAILED" && (
                    <p className="text-center text-red-500">Ürünler yüklenirken bir hata oluştu.</p>
                )}

            </section>

            <div className="flex items-center gap-2 justify-center mt-8">

                <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-1 rounded disabled:opacity-40"
                >
                    &lt;
                </button>

                {currentPage > 3 && (

                    <>

                        <button onClick={() => setCurrentPage(1)} className="px-3 py-1 rounded">1</button>
                        <span>...</span>

                    </>

                )}

                {getPageNumbers(currentPage, totalPages).map((page) => (

                    <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={currentPage === page ? "bg-brand-blue text-white px-3 py-1 rounded" : "px-3 py-1 rounded"}
                    >
                        {page}
                    </button>

                ))}

                {currentPage < totalPages - 2 && (

                    <>

                        <span>...</span>
                        <button onClick={() => setCurrentPage(totalPages)} className="px-3 py-1 rounded">{totalPages}</button>

                    </>
                )}

                <button
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 rounded disabled:opacity-40"
                >
                    &gt;
                </button>

            </div>


        </>


    )
}

export default ProductGrid 