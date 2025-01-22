import React from 'react';

import { Route,BrowserRouter as Router,Routes} from 'react-router-dom'
import Homepage from './pages/Homepage';

import Layout from './pages/Layout';
import ProductPage from './pages/ProductPage';
import Card from './Card';
import Counter from './Counter';
import Table from './Table';


const MyRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage/>}/>
          <Route path='/products' element={<ProductPage/>} />
          <Route path='/card' element={<Card/>}/>
          <Route path='/counter' element={<Counter/>}/>
          <Route path='/productPage' element={<ProductPage/>}/>

          <Route path='/table' element={<Table/>}/>

          {/* <Route path='/first'element={<First/>}/> */}
        </Route> 
        
      </Routes>
    </Router>
  );
};

export default MyRoute;
