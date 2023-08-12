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
import RequireAuth from './Pages/Shared/RequireAuth';
import Purchase from './Pages/Home/Purchase';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile/MyProfile';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import AddProduct from './Pages/Dashboard/AddProduct';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import RequireAdmin from './Pages/Shared/RequireAdmin';
import RequireGeneralUser from './Pages/Shared/RequireGeneralUser';
import Payment from './Pages/Dashboard/Payment';
import Footer from './Pages/Shared/Footer';
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/myPortfolio' element={<MyPortfolio />} />
        <Route
          path='/dashboard'
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }>
          <Route
            path='payment/:id'
            element={
              <RequireGeneralUser>
                <Payment />
              </RequireGeneralUser>
            }
          />
          <Route index element={<MyProfile />} />
          <Route
            path='myOrders'
            element={
              <RequireGeneralUser>
                <MyOrders />
              </RequireGeneralUser>
            }
          />
          <Route
            path='addReview'
            element={
              <RequireGeneralUser>
                <AddReview />
              </RequireGeneralUser>
            }
          />
          <Route
            path='manageOrders'
            element={
              <RequireAdmin>
                <ManageOrders />
              </RequireAdmin>
            }
          />
          <Route
            path='addProduct'
            element={
              <RequireAdmin>
                <AddProduct />
              </RequireAdmin>
            }
          />
          <Route
            path='makeAdmin'
            element={
              <RequireAdmin>
                <MakeAdmin />
              </RequireAdmin>
            }
          />
          <Route
            path='manageProducts'
            element={
              <RequireAdmin>
                <ManageProducts />
              </RequireAdmin>
            }
          />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route
          path='/purchase/:id'
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
