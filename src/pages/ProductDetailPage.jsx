import { useParams } from "react-router-dom"
import BestsellerProducts from "../components/ProductDetail/BestsellerProducts"
import ProductDetailSection from "../components/ProductDetail/ProductDetailsSection"
import ProductInfo from "../components/ProductDetail/ProductInfo"
import Footer from "../layout/Footer"
import Header from "../layout/Header"

function ProductDetailPage() {

    const { id } = useParams();

    const allProduct = [{
        "id" : 42,
        "title": "Floating Phone",
        "price": 1139.33,
        "images": ["https://picsum.photos/id/42/400/500",
            "https://picsum.photos/id/26/400/500",
            "https://picsum.photos/id/37/400/500"],
        "reviewCount": 10,} ,
        {
        "id" : 31,
        "title": "Floating Phone 2",
        "price": 850,
        "images": ["https://picsum.photos/id/31/400/500",
            "https://picsum.photos/id/26/400/500",
            "https://picsum.photos/id/37/400/500"],
        "reviewCount": 145,} ,
        {
        "id" : 22,
        "title": "Floating Phone",
        "price": 2222.45,
        "images": ["https://picsum.photos/id/22/400/500",
            "https://picsum.photos/id/26/400/500",
            "https://picsum.photos/id/37/400/500"],
        "reviewCount": 10,} ,
        {
        "id" : 4,
        "title": "Floating Phone 2",
        "price": 450,
        "images": ["https://picsum.photos/id/4/400/500",
            "https://picsum.photos/id/26/400/500",
            "https://picsum.photos/id/37/400/500"],
        "reviewCount": 145,} ,
        {
        "id" : 54,
        "title": "Floating Phone",
        "price": 11.54,
        "images": ["https://picsum.photos/id/54/400/500",
            "https://picsum.photos/id/26/400/500",
            "https://picsum.photos/id/37/400/500"],
        "reviewCount": 10,} ,
        {
        "id" : 61,
        "title": "Floating Phone 2",
        "price": 785,
        "images": ["https://picsum.photos/id/61/400/500",
            "https://picsum.photos/id/26/400/500",
            "https://picsum.photos/id/37/400/500"],
        "reviewCount": 145,} ,
        {
        "id" : 49,
        "title": "Floating Phone",
        "price": 139.33,
        "images": ["https://picsum.photos/id/49/400/500",
            "https://picsum.photos/id/26/400/500",
            "https://picsum.photos/id/37/400/500"],
        "reviewCount": 10,} ,
        {
        "id" : 91,
        "title": "Floating Phone 2",
        "price": 486,
        "images": ["https://picsum.photos/id/91/400/500",
            "https://picsum.photos/id/26/400/500",
            "https://picsum.photos/id/37/400/500"],
        "reviewCount": 145,} ,
        {
        "id" : 19,
        "title": "Floating Phone",
        "price": 1000,
        "images": ["https://picsum.photos/id/19/400/500",
            "https://picsum.photos/id/26/400/500",
            "https://picsum.photos/id/37/400/500"],
        "reviewCount": 10,} ,
        {
        "id" : 100,
        "title": "Floating Phone 2",
        "price": 999,
        "images": ["https://picsum.photos/id/100/400/500",
            "https://picsum.photos/id/26/400/500",
            "https://picsum.photos/id/37/400/500"],
        "reviewCount": 145,} ,
        {
        "id" : 11,
        "title": "Floating Phone",
        "price": 1793.11,
        "images": ["https://picsum.photos/id/11/400/500",
            "https://picsum.photos/id/26/400/500",
            "https://picsum.photos/id/37/400/500"],
        "reviewCount": 10,} ,
        {
        "id" : 75,
        "title": "Floating Phone 2",
        "price": 7915.19,
        "images": ["https://picsum.photos/id/75/400/500",
            "https://picsum.photos/id/26/400/500",
            "https://picsum.photos/id/37/400/500"],
        "reviewCount": 145,} ,
        {
        "id" : 614,
        "title": "Floating Phone 2",
        "price": 7915.19,
        "images": ["https://picsum.photos/id/614/400/500",
            "https://picsum.photos/id/26/400/500",
            "https://picsum.photos/id/37/400/500"],
        "reviewCount": 614,} ,
        {
        "id" : 643,
        "title": "Floating Phone 2",
        "price": 643,
        "images": ["https://picsum.photos/id/643/400/500",
            "https://picsum.photos/id/26/400/500",
            "https://picsum.photos/id/37/400/500"],
        "reviewCount": 643,} ,
        {
        "id" : 604,
        "title": "Floating Phone",
        "price": 604,
        "images": ["https://picsum.photos/id/604/400/500",
            "https://picsum.photos/id/26/400/500",
            "https://picsum.photos/id/37/400/500"],
        "reviewCount": 604,} ,
        {
        "id" : 424,
        "title": "Floating Phone 2",
        "price": 424,
        "images": ["https://picsum.photos/id/424/400/500",
            "https://picsum.photos/id/26/400/500",
            "https://picsum.photos/id/37/400/500"],
        "reviewCount": 424,} ,
        {
        "id" : 124,
        "title": "Floating Phone",
        "price": 124.11,
        "images": ["https://picsum.photos/id/124/400/500",
            "https://picsum.photos/id/26/400/500",
            "https://picsum.photos/id/37/400/500"],
        "reviewCount": 124,} ,
        {
        "id" : 1000,
        "title": "Floating Phone 2",
        "price": 7915.19,
        "images": ["https://picsum.photos/id/1000/400/500",
            "https://picsum.photos/id/26/400/500",
            "https://picsum.photos/id/37/400/500"],
        "reviewCount": 1000,} ,
        {
        "id" : 144,
        "title": "Floating Phone 2",
        "price": 144.19,
        "images": ["https://picsum.photos/id/144/400/500",
            "https://picsum.photos/id/26/400/500",
            "https://picsum.photos/id/37/400/500"],
        "reviewCount": 144,} ,
        {
        "id" : 111,
        "title": "Floating Phone 2",
        "price": 111.19,
        "images": ["https://picsum.photos/id/111/400/500",
            "https://picsum.photos/id/26/400/500",
            "https://picsum.photos/id/37/400/500"],
        "reviewCount": 111,} ,
        
        
        
    ]

    const product = allProduct.find(p => p.id === Number(id));

    return (
        <>
            <Header />
            <ProductInfo product={product} />
            <ProductDetailSection />
            <BestsellerProducts />
            <Footer />
        </>
    )
}

export default ProductDetailPage