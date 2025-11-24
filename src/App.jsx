import React from 'react';

import {Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './Pages/Home';
import ProductDetails from './components/ProductDetails';
import Footer from './components/footer';
import PageNotFound from './Pages/PageNotFound';
import './App.css';
import UserComponent from './Pages/UserComponent';

import PaginationProvider from "./components/contexts/PaginationContext" 
import ProductList from './components/ProductList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './Pages/Cart';


function App() {
  
  return (
    
    <>
     <NavBar></NavBar>
    <PaginationProvider>
     

      <Routes>
        
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/user" element={<UserComponent></UserComponent>}></Route>
         <Route path="/products" element={<ProductList></ProductList>}></Route>
        <Route path="/product/:id" element={<ProductDetails></ProductDetails>}></Route>
      
        <Route path="/home" element={<Navigate to="/" />}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      
      </PaginationProvider>
  
    
    </>
  );
}

export default App;
