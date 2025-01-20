import React from 'react';

import { Route,BrowserRouter as Router,Routes} from 'react-router-dom'

import First from './First'; // Fixed: import First correctly
import Second from './Second'; // Keep Second import
import Nav from './Nav';
import Header from './Header';
import Homepage from './pages/Homepage';
import Card from './Card';

const MyRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} /> {/* Fixed: Correct First component */}
        <Route path='/second' element={<Second />} /> {/* Second component unchanged */}

        <Route path='/nav' element={<Nav/>}/>
        <Route path='/header' element={<Header/>}/>
        <Route path='/card' element={<Card/>}/>
        
      </Routes>
    </Router>
  );
};

export default MyRoute;
