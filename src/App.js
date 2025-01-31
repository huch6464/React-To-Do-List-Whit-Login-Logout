import React from 'react';
import './App.css';
import Home from './pages/Home';
import { Route, Routes,BrowserRouter as Router } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
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
          <Route path='/' element={<Home/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/todos' element={<Todos/>}/>
        </Routes>
     </Router>
     : <Login/>}
     </>
  )
};

export default App;

 
 