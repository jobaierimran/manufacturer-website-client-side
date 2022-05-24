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

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

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
            <RequireAuth>
              <AddProduct></AddProduct>
            </RequireAuth>}>
          </Route>
          <Route path="users" element={
            <RequireAuth>
              <Users></Users>
            </RequireAuth>}>
          </Route>
          <Route path="manageProducts" element={
            <RequireAuth>
              <ManageProducts></ManageProducts>
            </RequireAuth>}>
          </Route>
        </Route>
        {/* End Dashboard Route */}

        <Route path="login" element={<Login></Login>} />
        <Route path="signup" element={<SignUp></SignUp>} />
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
