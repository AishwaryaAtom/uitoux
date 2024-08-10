import React from "react";
import { useState } from "react";
import { useSelector } from 'react-redux';
export default function Navbar() {
  const [selectedCurrency, setSelectedCurrency] = useState("RS");
  const [lang, setLang] = useState("EN");
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const handleCurrency = (event) => {
    setSelectedCurrency(event.target.textContent);
  };
  const handleLang = (event) => {
    setLang(event.target.textContent);
  };
  return (
    <div className="nav-bg">
      <nav className="navbar navbar-expand-lg custom-nav-1">
    <div className="container-sm">
     
          <a className="nav-link" href="#">
            {" "}
            About Us
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {" "}
                  Contacts
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {" "}
                  Store Location
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  {" "}
                  Track Order
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  {" "}
                  Blog
                </a>
              </li>
            </ul>
            <ul className="navbar-nav d-flex">
              <li>
                <a className="nav-link">Compare:2</a>
              </li>

              <li className="dropdown d-flex align-items-center ">
                <span className="dropdown-heading">Currency:</span>
                <a
                  className="nav-link dropdown-toggle p-0"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {selectedCurrency}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={handleCurrency}
                    >
                      RS
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={handleCurrency}
                    >
                      USD
                    </a>
                  </li>
                </ul>
              </li>
              <li className="dropdown d-flex align-items-center ms-2">
                <span className="dropdown-heading">Language:</span>
                <a
                  className="nav-link dropdown-toggle p-0"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {lang}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#" onClick={handleLang}>
                      EN
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#" onClick={handleLang}>
                      FR
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        {/* </div> */}
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg custom-nav-1">
      <div className="container-sm">
          <a className="nav-link" href="#">
            <img
              src="/img/logo.png"
              alt="logo-img"
              width={100}
              height={40}
              className="me-4"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="nav-bar-2 collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <div class="dropdown me-1">
                  <div className="dropdown-select">
                    <img
                      src="/img/car.svg"
                      alt="Car Icon"
                      className="dropdown-icon"
                    />
                    <span className="select-title">Select a Vehicle</span>
                    <div className="dropdown-arrows">
                      <span className="arrow-up">▲</span>
                      <span className="arrow-down">▼</span>
                    </div>
                  </div>
                  <ul className="dropdown-menu">
                    <li className="dropdown-item">Car 1</li>
                    <li className="dropdown-item">Car 2</li>
                    <li className="dropdown-item">Car 3</li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <div className="search-box ">
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Enter Keyword or Part Number"
                  />
                  <img
                    src="/img/search.svg"
                    alt="Zoom Icon"
                    className="search-icon"
                  />
                </div>
              </li>
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0 " style={{ gap: "20px" }}>
              <li className="nav-item">
                <div className="heart-icon-container">
                  <img
                    src="/img/heart.svg"
                    alt="Heart Icon"
                    className="heart-icon"
                    width={30}
                    height={30}
                  />
                  <div className="parallelogram">
                    <span className="count">0</span>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <div className="person-icon-container d-flex align-items-center">
                  <img
                    src="/img/person.svg"
                    alt="person Icon"
                    className="person-icon me-2"
                    width={30}
                    height={30}
                  />
                  <div>
                    <p className="welcome-msg mb-0">Hello,Log In</p>
                    <p className="account mb-0">My Account</p>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <div className="d-flex align-items-center">
                  <div className="heart-icon-container ">
                    <img
                      src="/img/cart.svg"
                      alt="cart Icon"
                      className="heart-icon me-2"
                      width={30}
                      height={30}
                    />
                    <div className="parallelogram-cart">
                      <span className="count">{totalQuantity}</span>
                    </div>
                  </div>
                  <div>
                    <p className="welcome-msg mb-0">Shopping Cart</p>
                    <p className="account mb-0"> ${totalPrice.toFixed(2)}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg navbar-3">
      <div className="container-sm">
          <div className="custom-select">
            <div className="select-icon">
              <img src="/img/list.svg" alt="Menu Icon" />
            </div>
            <select className="category-select">
              <option value="">Shop By Category</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
           
            <ul className="navbar-nav d-flex me-auto">
              <li className="dropdown d-flex align-items-center ">
                <select className="select-default">
                  <option value="">Home</option>
                  <option value="option1">1</option>
                  <option value="option2">2</option>
                  <option value="option3">3</option>
                </select>
              </li>
              <li className="dropdown d-flex align-items-center ms-2">
              <select className="select-default">
                  <option value="">Mega Menu</option>
                  <option value="option1">1</option>
                  <option value="option2">2</option>
                  <option value="option3">3</option>
                </select>
              </li>
              <li className="dropdown d-flex align-items-center ms-2">
              <select className="select-default">
                  <option value="">Shop</option>
                  <option value="option1">1</option>
                  <option value="option2">2</option>
                  <option value="option3">3</option>
                </select>
              </li>
              <li className="dropdown d-flex align-items-center ms-2">
              <select className="select-default">
                  <option value="">Blog</option>
                  <option value="option1">1</option>
                  <option value="option2">2</option>
                  <option value="option3">3</option>
                </select>
              </li>
              <li className="dropdown d-flex align-items-center ms-2">
              <select className="select-default">
                  <option value="">Account</option>
                  <option value="option1">1</option>
                  <option value="option2">2</option>
                  <option value="option3">3</option>
                </select>
              </li>
              <li className="dropdown d-flex align-items-center ms-2 select-default">
        Buy Theme
              </li>
            </ul>
            
            <ul className="navbar-nav ">
              <li>
                <a className="nav-link call">Call Us:<b>08925297807</b></a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
