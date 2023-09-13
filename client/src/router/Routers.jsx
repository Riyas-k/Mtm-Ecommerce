//pages
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import ProductDetailes from "../pages/ProductDetailes";
import Watchlist from "../pages/Watchlist";
import Contact from "../pages/Contact";
import Carrers from "../pages/Carrers";
import Term from "../pages/Term";
import Healp from "../pages/Healp";

//Auth
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";

//admin
import AddProduct from "../admin/AdminPages/AddProduct";
import Dashboard from "../admin/AdminPages/Dashboard";
import ListProduct from "../admin/AdminPages/ListProduct";
import Orders from "../admin/AdminPages/Orders";
import Users from "../admin/AdminPages/Users";

//admin auth
// import AdminLogin from '../admin/AdminComponents/Adminauth/AdminLogin';
import { Navigate, Route, Routes } from "react-router-dom";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="home" element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="shop/id" element={<ProductDetailes />} />
      <Route path="cart" element={<Cart />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="watchlist" element={<Watchlist />} />
      <Route path="contact" element={<Contact />} />
      <Route path="terms" element={<Term />} />
      <Route path="help" element={<Healp />} />
      <Route path="careers" element={<Carrers />} />

      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />

      <Route path="/admin" element={<Dashboard />} />
      <Route path="/admin/addProduct" element={<AddProduct />} />
      <Route path="/admin/allproducts" element={<ListProduct />} />
      <Route path="/admin/orders" element={<Orders />} />
      <Route path="/admin/users" element={<Users />} />
    </Routes>
  );
};

export default Routers;
