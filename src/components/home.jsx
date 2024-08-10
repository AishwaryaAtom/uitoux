import React from "react";
import Navbar from "./navbar";
import { useDispatch } from "react-redux";

import { addItemToCart } from "../assets/reducer/cartReducer.jsx";
import { common } from "./common.js";
import Footer from "./footer.jsx";
export default function Home() {
  const products = [
    {
      image: "/img/product-1.jpeg",
      sku: "SKU:A43-44328-B",
      description: "Glossy Grey 19'Alumininum Wheel AR -19",
      rating: 4,
      reviews: 25,
      price: "$589.00",
    },
    {
      image: "/img/product-2.jpeg",
      sku: "SKU:729-51203-B",
      description: "Twin Exhaust Pipe from Brandix z54",
      rating: 4,
      reviews: 25,
      price: "$749.00",
    },
    {
      image: "/img/product-3.jpeg",
      sku: "SKU:573-49386-B",
      description: "Motor Oil Level-5",
      rating: 4,
      reviews: 25,
      price: "$23.00",
    },
    {
      image: "/img/product-4.jpeg",
      sku: "SKU:753-38573-B",
      description: "Brandix Engine Block-z4",
      rating: 4,
      reviews: 25,
      price: "$452.00",
    },
    {
      image: "/img/product-5.jpeg",
      sku: "SKU:472-67382-B",
      description: "Glossy Grey 19'Alumininum Wheel AR -19",
      rating: 4,
      reviews: 25,
      price: "$345.00",
    },
  ];
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
   alert("ITEM WILL BE ADDED TO CART")
    dispatch(
      addItemToCart({
        id: product.id,
        price: parseFloat(product.price.replace("$", "")),
        description: product.description,
        image: product.image,
      })
    );
  };
  return (
    <>
    <div className="common-bg">
      <Navbar />
      <div className="container-sm ">
        <div className="home-page">
          <div
            id="customCarousel"
            class="carousel slide mt-5"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div
                class="carousel-item active"
                style={{ backgroundImage: `url("/img/slide-1.jpeg")` }}
              >
                <div class="col-md-5 carousel-caption ">
                  <span className="title">30% OFF</span>
                  <p className="desc">When Buying Parts With Installation</p>
                  <p className="shor-desc">
                    Installation of parts in the services of our partner
                  </p>
                  <button class=" shop-now-btn">Shop Now</button>
                </div>
              </div>
              <div
                class="carousel-item"
                style={{ backgroundImage: `url("/img/slide-1.jpeg")` }}
              >
                <div class="col-md-5  carousel-caption ">
                  <span className="title">30% OFF</span>
                  <p className="desc">When Buying Parts With Installation</p>
                  <p className="shor-desc">
                    Installation of parts in the services of our partner
                  </p>
                  <button class=" shop-now-btn">Shop Now</button>
                </div>
              </div>
              <div
                class="carousel-item"
                style={{ backgroundImage: `url("/img/slide-1.jpeg")` }}
              >
                <div class="col-md-5  carousel-caption">
                  <span className="title">30% OFF</span>
                  <p className="desc">When Buying Parts With Installation</p>
                  <p className="shor-desc">
                    Installation of parts in the services of our partner
                  </p>
                  <button class=" shop-now-btn">Shop Now</button>
                </div>
              </div>
            </div>

            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#customCarousel"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#customCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#customCarousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
          </div>
          <div class="image-grid mt-5">
            <table class="image-table">
              <tr>
                <td>
                  <img src="/img/brand-1.png" alt="Image 1" />
                  <p>AIMPARTS</p>
                </td>
                <td>
                  <img src="/img/brand-2.png" alt="Image 2" />
                  <p>WINDENGINE</p>
                </td>
                <td>
                  <img src="/img/brand-3.png" alt="Image 3" />
                  <p>TURBOELECTRIC</p>
                </td>
                <td>
                  <img src="/img/brand-4.png" alt="Image 4" />
                  <p>STARONE</p>
                </td>
                <td>
                  <img src="/img/brand-5.png" alt="Image 5" />
                  <p>BRANDIX</p>
                </td>
                <td>
                  <img src="/img/brand-6.png" alt="Image 6" />
                  <p>ABS-BRAND</p>
                </td>
                <td>
                  <img src="/img/brand-7.png" alt="Image 7" />
                  <p>GREATCIRCLE</p>
                </td>
                <td>
                  <img src="/img/brand-8.png" alt="Image 8" />
                  <p>JUSTROMB</p>
                </td>
              </tr>
              <tr>
                <td>
                  <img src="/img/brand-9.png" alt="Image 9" />
                  <p>FASTWHEEL</p>
                </td>
                <td>
                  <img src="/img/brand-10.png" alt="Image 10" />
                  <p>STRROYKA-X</p>
                </td>
                <td>
                  <img src="/img/brand-11.png" alt="Image 11" />
                  <p>MISSION-51</p>
                </td>
                <td>
                  <img src="/img/brand-12.png" alt="Image 12" />
                  <p>FUELCORP</p>
                </td>
                <td>
                  <img src="/img/brand-13.png" alt="Image 13" />
                  <p>REDGATE</p>
                </td>
                <td>
                  <img src="/img/brand-14.png" alt="Image 14" />
                  <p>BLOCKS</p>
                </td>
                <td>
                  <img src="/img/brand-15.png" alt="Image 15" />
                  <p>BLACKBOX</p>
                </td>
                <td>
                  <img src="/img/brand-16.png" alt="Image 16" />
                  <p>SQUAREGARAGE</p>
                </td>
              </tr>
            </table>
          </div>
          {/* Nav */}
          <nav className="navbar navbar-expand-lg custom-nav-1 mt-5 products-nav">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <h6 className=""> Featured Products</h6>
                </li>
              </ul>
              <ul className="navbar-nav d-flex ">
                <li>
                  <a className="nav-link active">All</a>
                </li>
                <li>
                  <a className="nav-link">Power Tools</a>
                </li>
                <li>
                  <a className="nav-link">Hand Tools</a>
                </li>
                <li>
                  <a className="nav-link">Pumbing</a>
                </li>
                <li>
                  <div class="parallelogram-container">
                    <div class="parallelogram-arrow left-arrow">
                      <span>&lt;</span>
                    </div>
                    <div class="parallelogram-arrow  right-arrow">
                      <span>&gt;</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          <div className="portrait-container">
            {products.map((product, index) => (
              <div className="portrait-box" key={index}>
                <img src={product.image} alt={`Image ${index + 1}`} />
                <div className="icon top-right">
                  <img src="/img/quickview.svg" alt="view" />
                </div>
                <p className="sku mb-0">{product.sku}</p>
                <p className="description mb-0">{product.description}</p>
                <div className="rating-container">
                  <div className="stars">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span
                        key={i}
                        className={`star ${i < product.rating ? "filled" : ""}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="reviews">{product.reviews} reviews</span>
                </div>
                <div className="d-flex align-items-center justify-content-between cart-img mt-2">
                  <p className="description mb-0">{product.price}</p>
                  <img
                    src="/img/cart-20.svg"
                    alt="view"
                    width={20}
                    height={20}
                    onClick={() => handleAddToCart(product)}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="col-md-12 add-container ">
            <div
              className=" col-md-6 background-div"
              style={{ backgroundImage: `url("/img/banner1.jpeg")` }}
            >
              <div className="content">
                <h2 className="title-1">MOTOR OILS</h2>
                <p className="add-desc">
                  Synthetic moptor oil with free shipping
                </p>
                <button className="shop-2-btn">Shop Now</button>
              </div>
            </div>
            <div
              className="col-md-6  background-div"
              style={{ backgroundImage: `url("/img/banner2.jpeg")` }}
            >
              <div className="content">
                <span className="title-2">SAVE UPTO $40</span>
                <p className="add-desc">
                  Luxurious interior part for real aethetes.
                </p>
                <button className="shop-2-btn">Shop Now</button>
              </div>
            </div>
          </div>
          <div
            className="mt-5 d-flex align-items-center justify-content-between shipping"
            style={{ borderTop: "1px solid #a1a1b1" }}
          >
            <div className="d-flex align-items-center">
              <div>
                <img src="/img/free-delivery.svg " className="me-2"></img>
              </div>
              <div>
                <h6 className="mb-0">Free Shipping</h6>
                <p className="mb-0">For orders from $50</p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div>
                <img src="/img/24-hours.svg" className="me-2"></img>
              </div>
              <div>
                <h6 className="mb-0">Support 24 hours</h6>
                <p className="mb-0">For orders from $50</p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div>
                <img src="/img/payment-security.svg" className="me-2"></img>
              </div>
              <div>
                <h6 className="mb-0">Free Shipping</h6>
                <p className="mb-0">For orders from $50</p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div>
                <img src="/img/tag.svg" className="me-2"></img>
              </div>
              <div>
                <h6 className="mb-0">Hot Offer</h6>
                <p className="mb-0">For orders from $50</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer/>
      </>
  );
}
