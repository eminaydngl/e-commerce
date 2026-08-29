
import HomePage from './pages/HomePage'
import './App.css'
import ShopPage from './pages/ShopPage'
import { Routes, Route } from "react-router-dom";
import ProductDetailPage from './pages/ProductDetailPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/shop" element={<ShopPage />} />
        <Route path='/product/:id' element={<ProductDetailPage />} />
      </Routes>
    </>

  )
}

export default App
