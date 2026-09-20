import { useParams } from "react-router-dom"
import BestsellerProducts from "../components/ProductDetail/BestsellerProducts"
import ProductDetailSection from "../components/ProductDetail/ProductDetailsSection"
import ProductInfo from "../components/ProductDetail/ProductInfo"
import Footer from "../layout/Footer"
import Header from "../layout/Header"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { detailPageThunk } from "../store/actions/thunks"

function ProductDetailPage({setisOpenCartCartDrawer}) {

    const { productId } = useParams();

    const fetchState = useSelector((state) => state.product.fetchState);

    const dispatch = useDispatch();

    useEffect(() => {
        if (productId) {
            dispatch(detailPageThunk(productId));
            console.log("PRODUCT DETAİL PAGE KISMI : ", product);
        }
    }, [productId, dispatch]);

    const product = useSelector((state) => state.product.product);

    console.log("REDUX'TAN GELEN PRODUCT:", product);


    return (
        <>
            <Header />
            {fetchState === "FETCHING" ? (
                <div className="flex justify-center items-center h-[500px]">
                    <div className="w-12 h-12 border-4 border-gray-200 border-t-brand-blue rounded-full animate-spin"></div>
                </div>
            ) : (
                product?.id && <ProductInfo product={product} setisOpenCartCartDrawer={setisOpenCartCartDrawer}/>
            )}
            <ProductDetailSection />
            <BestsellerProducts />
            <Footer />
        </>
    )
}

export default ProductDetailPage 