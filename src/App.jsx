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
import Navbar from './components/Navbar';
import TestPage from './pages/TestPage';
import LoginComponent from './pages/GoogleLogin';
import GoogleLogin from './pages/GoogleLogin';

function App() {

  return (
    <div className='app'>
     <Navbar/>
      <Routes>
        <Route path='/' Component={LandPage} />
        <Route path='/about' Component={About} />
        <Route path='/login' Component={GoogleLogin} />
        <Route path='signup' Component={SignUpPage} />
        <Route path='/dashboard' Component={Dashboard} />
        <Route path='/test' Component={TestPage} />
        <Route path='/google' Component={LoginComponent} />
        <Route path='*' Component={ErrorPage} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  )

}

export default App;
