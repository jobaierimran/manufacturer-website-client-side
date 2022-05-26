import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import Footer from './Pages/Shared/Footer';
import Login from './Pages/Authentication/Login';
import SignUp from './Pages/Authentication/SignUp';
import Dashboard from './Pages/Dashboard/Dashboard';
import RequireAuth from './Pages/Authentication/RequireAuth';
import Users from './Pages/Dashboard/Users';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import ProductPurchase from './Pages/ProductDetails.js/ProductPurchase';
import RequireAdmin from './Pages/Authentication/RequireAdmin';
import NotFound from './Pages/Shared/NotFound';
import Blogs from './Pages/Blogs/Blogs';
import Portfolio from './Pages/Portfolio/Portfolio';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="/product/:productId" element={<RequireAuth><ProductPurchase></ProductPurchase></RequireAuth>}></Route>

        {/* Start Dashboard Route */}
        <Route path="/dashboard" element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route path="users" element={
            <RequireAuth>
              <Users></Users>
            </RequireAuth>}>
          </Route>
          <Route path="myOrders" element={
            <RequireAuth>
              <MyOrders></MyOrders>
            </RequireAuth>}>
          </Route>
          <Route path="addReview" element={
            <RequireAuth>
              <AddReview></AddReview>
            </RequireAuth>}>
          </Route>
          <Route path="addProduct" element={
            <RequireAdmin>
              <AddProduct></AddProduct>
            </RequireAdmin>}>
          </Route>
          <Route path="users" element={
            <RequireAdmin>
              <Users></Users>
            </RequireAdmin>}>
          </Route>
          <Route path="manageProducts" element={
            <RequireAdmin>
              <ManageProducts></ManageProducts>
            </RequireAdmin>}>
          </Route>
        </Route>
        {/* End Dashboard Route */}

        <Route path="login" element={<Login></Login>} />
        <Route path="signup" element={<SignUp></SignUp>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
