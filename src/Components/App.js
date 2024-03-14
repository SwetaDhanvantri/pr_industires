import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';

import {Route, Routes } from 'react-router-dom';
import Company from './Company';

import Contact from './Contact';
import ProductList from './ProductList';
import StickySocial from './StickySocial';
import ProductDetails from './ProductDetails';
import PlasticProducts from './PlasticProducts';
import RubberProducts from './RubberProducts';
import Biosage from './Biosage';
import Fabletechnology from './Fabletechnology'
// import './assets/style/style.css';
function App() {
  return (
    
      <>
    
      <Navbar/>
      <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Company'  element={<Company/>} />
        <Route path='/RubberProducts' element={<RubberProducts/>} />
        <Route path='/PlasticProducts' element={<PlasticProducts/>} />
        <Route path='/Biosage' element={<Biosage/>} />
        <Route path='/fabletechnology' element={<Fabletechnology/>} />
        {/* <Route path="/:type/:productName" component={ProductList} /> */}
        <Route path='/ProductList' element={<ProductList/>} />
        <Route path='/Contact' element={<Contact/>} />
      <Route path='/ProductDetails' element={<ProductDetails/>}/>
     
      
      </Routes>
      </div>
      
      <StickySocial/>
      <Footer/>
      </>
    
   
  
  )
}

export default App