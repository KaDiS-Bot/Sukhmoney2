import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './assets/components/Home';
import Login from './assets/components/Login';
import ContactUs from './assets/components/ContactUs';
import Signup from './assets/components/Signup';
import MoreInfo from './assets/components/MoreInfo';
function App() {
  return (

    <BrowserRouter>    
    {/* // <div className='text-center'>App</div> */}
     <Routes>
     <Route path='/' element={<Home /> } />
     <Route path='/home' element={<Home /> } />
     <Route path='/login' element={<Login /> } />
     <Route path='/contactus' element={<ContactUs /> } />
     <Route path='/signup' element={<Signup /> } />
     <Route path='/moreinfo' element={<MoreInfo /> } />

    </Routes>
    
    
    
    {/* <div>Home</div> */}
    </BrowserRouter>
  )
}

export default App