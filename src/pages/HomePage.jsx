import Header from "../layout/Header"
import Footer from "../layout/Footer"
import ShopCard from "../components/ShopCard"
import HeroSection from "../components/HeroSeciton"
import Products from "../components/Products"
import ContainerFluid from "../components/ContainerFluid"
import ContainerFluid2 from "../components/ContainerFluid2"

function HomePage(){
    return (
        <>
        <Header />
        <HeroSection />
        <ShopCard />
        <Products />
        <ContainerFluid />
        <ContainerFluid2 />
        <Footer />
        </>
    )
}

export default HomePage