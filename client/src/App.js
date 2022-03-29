import React, { Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/pages/Home';
import About from './components/pages/About';
import ContactState from './context/contact/ContactState';
import "./App.css";

const App = () => {
  return (
    <ContactState>
      <BrowserRouter>
        <Fragment>
          <Navbar />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </Fragment>
      </BrowserRouter>
    </ContactState>
  );
};

export default App;
