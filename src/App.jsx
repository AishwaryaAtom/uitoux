import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import "./assets/css/style.css";
import Home from "./components/home";
import { Provider } from "react-redux";
import store from "./assets/store/store";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
