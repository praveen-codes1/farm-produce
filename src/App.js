import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Selling from "./Selling";
import Buying from "./Buying";
import Payment from "./Payment";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Selling</Link></li>
            <li><Link to="/buying">Buying</Link></li>
            <li><Link to="/payment">Payment</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Selling />} />
          <Route path="/buying" element={<Buying />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
