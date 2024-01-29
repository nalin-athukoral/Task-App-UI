import logo from './logo.svg';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from './utils';
import { LandPage, About, GoogleLogin, ErrorPage, SignUpPage, TestPage, Dashboard } from './pages/index';
import { Navbar } from './components/index';
import AddPost from './components/AddPost';

function App() {

  // const [profile, setProfile] = useState(() => {
  //   const storedData = localStorage.getItem('profile');
  //   return storedData ? JSON.parse(storedData) : null;

  // });

  // useEffect(() => {
  //   setProfile(JSON.parse(localStorage.getItem('profile')));
  // }, [profile]);

  return (
    <div className='app'>
     {/* Navabr componrntd */}
      <Navbar />
      {/* All the application Routes */}
      <Routes>
        <Route path='/' Component={LandPage} />
        <Route path='/addpost' Component={AddPost} />
        <Route path='/login' Component={GoogleLogin} />
        <Route path='signup' Component={SignUpPage} />
        <Route path='/dashboard' Component={Dashboard} />
        {/* <Route path='/test' element={<ProtectedRoute>
          <TestPage />
        </ProtectedRoute>} /> */}
        <Route path='/test' Component={TestPage} />
        <Route path='/google' Component={GoogleLogin} />
        <Route path='*' Component={ErrorPage} />
      </Routes>
      {/* Toast Container */}
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
