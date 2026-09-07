
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
import { setUser } from './store/actions/clientActions';
import { useEffect } from 'react';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("name");

    if (token && name) {
      dispatch(setUser({ token, name }));
    }
  }, []);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/shop" element={<ShopPage />} />
        <Route path='/product/:id' element={<ProductDetailPage />} />
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
