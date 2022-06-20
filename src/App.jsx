import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Account from "./components/account/Account";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Top from "./components/top/Top";
import Popular from "./components/popular/Popular";
import Reservation from "./components/reservation/Reservation";
import Shop from "./components/shop/Shop";
import Find from "./components/find/Find";
const App = () => {
  return (
    <Router>
      <Top />
      <AnimatePresence>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Popular" exact element={<Popular />} />
          <Route path="/Reservation" exact element={<Reservation />} />
          <Route path="/Account" exact element={<Account />} />
          <Route path="/Contacts" exact element={<Contacts />} />
          <Route path="/Shop" exact element={<Shop />} />
        </Routes>
      </AnimatePresence>
      <Find />
      <Footer />
    </Router>
  );
};

export default App;
