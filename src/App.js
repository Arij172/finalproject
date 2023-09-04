import React from 'react';
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import Product from './component/Product';
import About from './component/About';
import Cart from './component/Cart';
import { Route, Routes } from 'react-router-dom';
import ProductDetail from './component/ProductDetail';
import Checkout from './component/Checkout'
import Contact from './component/Contact'
import Footer from './component/Footer'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
