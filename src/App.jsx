
import HomePage from './pages/HomePage'
import './App.css'
import ShopPage from './pages/ShopPage'
import { Routes, Route } from "react-router-dom";
import ProductDetailPage from './pages/ProductDetailPage';
import ScrollToTop from './components/ScrollToTop';
import ContactPage from './pages/ContactPage';
import TeamPage from './pages/TeamPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/shop" element={<ShopPage />} />
        <Route path='/product/:id' element={<ProductDetailPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/team' element={<TeamPage />}/>
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </>

  )
}

export default App
