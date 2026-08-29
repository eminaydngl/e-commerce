import { useState } from "react"
import CategorySection from "../components/Shop/CategorySection"
import FilterBar from "../components/Shop/FilterBar"
import ProductGrid from "../components/Shop/ProductGrid"
import Footer from "../layout/Footer"
import Header from "../layout/Header"

function ShopPage(){

    const [viewMode , setViewMode] = useState("glid");

    return (
        <>
            <Header />
            <CategorySection />
            <FilterBar setViewMode={setViewMode}/>
            <ProductGrid viewMode={viewMode}/>
            <Footer />
        </>
    )
}

export default ShopPage