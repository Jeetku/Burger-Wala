import React from "react";
import {
  About,
  Cart,
  ConfirmOrder,
  Contact,
  Dashboard,
  Footer,
  Header,
  Home,
  Login,
  MyOrders,
  NotFound,
  OrderDetails,
  Orders,
  PaymentSuccess,
  Profile,
  Shipping,
  Users,
} from "./components";
import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import "./styles/shipping.scss";
import "./styles/confirmOrder.scss";
import "./styles/paymentSuccess.scss";
import "./styles/login.scss";
import "./styles/profile.scss";
import "./styles/table.scss";
import "./styles/orderDetails.scss";
import "./styles/dashboard.scss";
import "./styles/about.scss";
import "./styles/notfound.scss";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Header isAuthenticated={true} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/confirmorder" element={<ConfirmOrder />} />
          <Route path="/paymentsuccess" element={<PaymentSuccess />} />
          <Route path="/login" element={<Login />} />
          <Route path="/me" element={<Profile />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/order/:id" element={<OrderDetails />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
