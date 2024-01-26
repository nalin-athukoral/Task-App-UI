import logo from './logo.svg';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import SignIn from './pages/SignIn';
import ErrorPage from './pages/ErrorPage';
import LandPage from './pages/LandPage';
import SignUpPage from './pages/SignUpPage';
import { useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';

function App() {

  return (
    <div className='app'>
     <Navbar/>
      <Routes>
        <Route path='/' Component={LandPage} />
        <Route path='/about' Component={About} />
        <Route path='/signin' Component={SignIn} />
        <Route path='signup' Component={SignUpPage} />
        <Route path='/dashboard' Component={Dashboard} />
        <Route path='*' Component={ErrorPage} />
      </Routes>
      <ToastContainer />
    </div>
  )

}

export default App;
