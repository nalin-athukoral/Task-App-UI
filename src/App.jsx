import logo from './logo.svg';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from './utils'; 
import { LandPage, About, GoogleLogin, ErrorPage, SignUpPage, TestPage, Dashboard } from './pages/index';
import { Navbar } from './components/index';

function App() {

  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' Component={LandPage} />
        <Route path='/about' Component={About} />
        <Route path='/login' Component={GoogleLogin} />
        <Route path='signup' Component={SignUpPage} />
        <Route path='/dashboard' Component={Dashboard} />
        <Route path='/test' element={<ProtectedRoute>
          <TestPage />
        </ProtectedRoute>} />
        <Route path='/google' Component={GoogleLogin} />
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
