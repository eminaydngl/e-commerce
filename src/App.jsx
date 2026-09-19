import HomePage from './pages/HomePage'
import './App.css'
import ShopPage from './pages/ShopPage'
import { Routes, Route } from "react-router-dom";
import ProductDetailPage from './pages/ProductDetailPage';
import ScrollToTop from './components/ScrollToTop';
import ContactPage from './pages/ContactPage';
import TeamPage from './pages/TeamPage';
import AboutPage from './pages/AboutPage';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { categoriesThunk, productThunk, verifyThunk } from './store/actions/thunks';

function App() {

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(verifyThunk());
    dispatch(categoriesThunk());
    dispatch(productThunk());
  }, []);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/shop/:gender?/:categoryName?/:categoryId?" element={<ShopPage />} />
        <Route path='shop/:gender?/:categoryName/:categoryId/:productNameSlug/:productId' element={<ProductDetailPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/team' element={<TeamPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>

  )
}

export default App
