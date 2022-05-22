import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Blogs from "./Pages/Blogs/Blogs";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import Navbar from "./Pages/Shared/Navbar";
import Signup from "./Pages/Signup/Signup";
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from "./Pages/Shared/RequireAuth";
import Purchase from "./Pages/Home/Purchase";
import MyOrders from "./Pages/Dashboard/MyOrders";
import AddReview from "./Pages/Dashboard/AddReview";
import MyProfile from "./Pages/Dashboard/MyProfile";
import ManageOrders from "./Pages/Dashboard/ManageOrders";
import AddProduct from "./Pages/Dashboard/AddProduct";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin";
import ManageProducts from "./Pages/Dashboard/ManageProducts";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/myPortfolio" element={<MyPortfolio />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyOrders />} />
          <Route path="addReview" element={<AddReview />} />
          <Route path="myProfile" element={<MyProfile />} />
          <Route path="manageOrders" element={<ManageOrders />} />
          <Route path="addProduct" element={<AddProduct />} />
          <Route path="makeAdmin" element={<MakeAdmin />} />
          <Route path="manageProducts" element={<ManageProducts />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
