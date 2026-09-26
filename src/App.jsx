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
import { useEffect, useState } from 'react';
import { categoriesThunk, productThunk, verifyThunk } from './store/actions/thunks';
import CartDrawerContext from './components/CartDrawerContext';
import ShopingCartPage from './pages/ShopingCartPage';
import PaymentPage from './pages/PaymentPage';
import instance from './api/axios';
import ProtectedRoute from './components/ProtectedRoute';
import OrdersPage from './pages/OrdersPage';

function App() {

  const [isOpenCartCartDrawer, setisOpenCartCartDrawer] = useState(false);

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(verifyThunk());
    dispatch(categoriesThunk());
    dispatch(productThunk());
  }, []);

  return (

    <>

      <ScrollToTop />
      <div
        className={`transition-all duration-300 ${isOpenCartCartDrawer
          ? "lg:mr-[150px]"
          : "mr-0"
          }`}
      >
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/shop/:gender?/:categoryName?/:categoryId?" element={<ShopPage />} />
          <Route path='shop/:gender?/:categoryName/:categoryId/:productNameSlug/:productId'
            element={<ProductDetailPage setisOpenCartCartDrawer={setisOpenCartCartDrawer} />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/team' element={<TeamPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/shoppingCard' element={<ShopingCartPage />} />
          <Route path="/myOrders" element={<OrdersPage />} />
          <Route
            path="/payment"
            element={
              <ProtectedRoute>
                <PaymentPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
      {isOpenCartCartDrawer && (
        <CartDrawerContext
          isOpenCartCartDrawer={isOpenCartCartDrawer}
          setisOpenCartCartDrawer={setisOpenCartCartDrawer}
        />
      )}

    </>

  );

}

export default App

