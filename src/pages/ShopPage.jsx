import { useEffect, useState } from "react"
import CategorySection from "../components/Shop/CategorySection"
import FilterBar from "../components/Shop/FilterBar"
import ProductGrid from "../components/Shop/ProductGrid"
import Footer from "../layout/Footer"
import Header from "../layout/Header"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { filterThunk } from "../store/actions/thunks"

function ShopPage() {

    const [viewMode, setViewMode] = useState("glid");
    const [filter, setFilter] = useState("");
    const [sort, setSort] = useState("");
    const [appliedFilter, setAppliedFilter] = useState("");

    const { categoryId } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(filterThunk({
            category: categoryId,
            filter: filter,
            sort: sort
        }));

    }, [categoryId, sort, dispatch]);

    console.log("URL'den gelen kategori:", categoryId);


    return (
        <>
            <Header />
            <CategorySection />
            <FilterBar
                filter={filter}
                setFilter={setFilter}
                appliedFilter={appliedFilter}
                setAppliedFilter={setAppliedFilter}
                sort={sort}
                setSort={setSort}
                setViewMode={setViewMode}
            />
            <ProductGrid
                viewMode={viewMode}
                category={categoryId}
                filter={appliedFilter}
                sort={sort}
            />
            <Footer />
        </>
    )
}

export default ShopPage