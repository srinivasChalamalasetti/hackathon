import React from 'react';
import Navbar from './LoginComponents/Navbar';
import Footer from './LoginComponents/Footer'; 
import {BrowserRouter, Routes,Route} from 'react-router-dom' 
import New from './LoginComponents/New';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />} />
        </Routes>
        <Routes>
          <Route path='/new' element={<New />} />
        </Routes> 
      </BrowserRouter> 
      <Footer /> 
    </> 
  );
}

export default App;

