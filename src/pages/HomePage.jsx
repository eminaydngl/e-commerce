import Header from "../layout/Header"
import Footer from "../layout/Footer"
import EditorsPickSection from "../components/Home/EditorsPickSection"
import HeroSection from "../components/HeroSeciton"
import ProductPromoBanner from "../components/Home/ProductPromoBanner"
import ProductFeatureBlock from "../components/Home/ProductFeatureBlock"
import FeaturedPostsSection from "../components/Home/FeaturedPostsSection"
import BestsellerSection from "../components/Home/BestsellerSection"

function HomePage(){
    return (
        <>
        <Header />
        <HeroSection />
        <EditorsPickSection />
        <BestsellerSection />
        <ProductPromoBanner />
        <ProductFeatureBlock />
        <FeaturedPostsSection />
        <Footer />
        </>
    )
}

export default HomePage