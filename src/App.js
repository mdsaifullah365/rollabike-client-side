import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Blogs from './Pages/Blogs/Blogs';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import Navbar from './Pages/Shared/Navbar';
import Signup from './Pages/Signup/Signup';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/myPortfolio' element={<MyPortfolio />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
