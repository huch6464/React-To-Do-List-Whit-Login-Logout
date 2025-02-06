import React from 'react';
import './App.css';

import { Route, Routes,BrowserRouter as Router } from 'react-router-dom';
import AboutUs from './pages/About';
import Todos from './components/Todos';
import { useContext } from 'react'
import Login from './pages/Login'
import { loginContext } from './context/loginContext'



function App() {
  const {state} = useContext(loginContext);
  return (
    <>
    { state.isLogin ?
     <Router>
        <Routes>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/' element={<Todos/>}/>
        </Routes>
     </Router>
     : <Login/>}
     </>
  )
};

export default App;

 
 