import React from "react";
import "./Shop.css";
import { GrStar } from "react-icons/gr";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
const Shop = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="shop-bg container-fluid" data-aos="zoom-in-up">
        <div className="shop-bg-bg">
          <div className="bg">
            <h3>Our Shop</h3>
            <p>The best of both worlds. Store and web.</p>
          </div>
        </div>
        <div className="shop container-fluid">
          <div className="row">
            <div className="shop-items col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 ">
              <div className="shop-img">
                <img
                  className="d-block w-100"
                  src="./assets/des1.jpeg"
                  alt="j"
                />
              </div>
              <div className="shop-info">
                <h4>Chocolate Cakes </h4>
              </div>
              <div className="shop-stars">
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
              </div>
              <div className="shop-button">
                <a href="#button" className="shop-btn">
                  {" "}
                  <span>$10.05</span>
                </a>
              </div>
            </div>
            <div className="shop-items col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 ">
              <div className="shop-img">
                <img
                  className="d-block w-100"
                  src="./assets/des2.jpeg"
                  alt="j"
                />
              </div>
              <div className="shop-info">
                <h4>Chocolate Cookies </h4>
              </div>
              <div className="shop-stars">
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
              </div>
              <div className="shop-button">
                <a href="#button" className="shop-btn">
                  {" "}
                  <span>$3.15</span>
                </a>
              </div>
            </div>
            <div className="shop-items col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 ">
              <div className="shop-img">
                <img
                  className="d-block w-100"
                  src="./assets/des3.jpeg"
                  alt="j"
                />
              </div>
              <div className="shop-info">
                <h4>Coffee Kisses </h4>
              </div>
              <div className="shop-stars">
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
              </div>
              <div className="shop-button">
                <a href="#button" className="shop-btn">
                  {" "}
                  <span>$5.00</span>
                </a>
              </div>
            </div>
            <div className="shop-items col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 ">
              <div className="shop-img">
                <img
                  className="d-block w-100"
                  src="./assets/des4.jpeg"
                  alt="j"
                />
              </div>
              <div className="shop-info">
                <h4>Caramel Walnuts </h4>
              </div>
              <div className="shop-stars">
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
              </div>
              <div className="shop-button">
                <a href="#button" className="shop-btn">
                  {" "}
                  <span>$10.50</span>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="shop-items col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 ">
              <div className="shop-img">
                <img src="./assets/des5.jpeg" alt="j" />
              </div>
              <div className="shop-info">
                <h4>Caramel Bacon </h4>
              </div>
              <div className="shop-stars">
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
              </div>
              <div className="shop-button">
                <a href="#button" className="shop-btn">
                  {" "}
                  <span>$14.25</span>
                </a>
              </div>
            </div>
            <div className="shop-items col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 ">
              <div className="shop-img">
                <img src="./assets/des6.jpeg" alt="j" />
              </div>
              <div className="shop-info">
                <h4>Liitle Smokies </h4>
              </div>
              <div className="shop-stars">
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
              </div>
              <div className="shop-button">
                <a href="#button" className="shop-btn">
                  {" "}
                  <span>$4.15</span>
                </a>
              </div>
            </div>
            <div className="shop-items col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 ">
              <div className="shop-img">
                <img src="./assets/drink1.jpeg" alt="j" />
              </div>
              <div className="shop-info">
                <h4>Honey Bourbon </h4>
              </div>
              <div className="shop-stars">
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
              </div>
              <div className="shop-button">
                <a href="#button" className="shop-btn">
                  {" "}
                  <span>$15.00</span>
                </a>
              </div>
            </div>
            <div className="shop-items col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 ">
              <div className="shop-img">
                <img src="./assets/drink2.jpeg" alt="j" />
              </div>
              <div className="shop-info">
                <h4>Marple cocktail </h4>
              </div>
              <div className="shop-stars">
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
              </div>
              <div className="shop-button">
                <a href="#button" className="shop-btn">
                  {" "}
                  <span>$20.00</span>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="shop-items col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 ">
              <div className="shop-img">
                <img src="./assets/drink3.jpeg" alt="j" />
              </div>
              <div className="shop-info">
                <h4>Mulled Wine </h4>
              </div>
              <div className="shop-stars">
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
              </div>
              <div className="shop-button">
                <a href="#button" className="shop-btn">
                  {" "}
                  <span>$15.00</span>
                </a>
              </div>
            </div>
            <div className="shop-items col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 ">
              <div className="shop-img">
                <img src="./assets/drink4.jpeg" alt="j" />
              </div>
              <div className="shop-info">
                <h4>Watermelon juice </h4>
              </div>
              <div className="shop-stars">
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
              </div>
              <div className="shop-button">
                <a href="#button" className="shop-btn">
                  {" "}
                  <span>$11.00</span>
                </a>
              </div>
            </div>
            <div className="shop-items col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 ">
              <div className="shop-img">
                <img src="./assets/drink5.jpeg" alt="j" />
              </div>
              <div className="shop-info">
                <h4>Orange Mojito</h4>
              </div>
              <div className="shop-stars">
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
              </div>
              <div className="shop-button">
                <a href="#button" className="shop-btn">
                  {" "}
                  <span>$20.00</span>
                </a>
              </div>
            </div>
            <div className="shop-items col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 ">
              <div className="shop-img">
                <img src="./assets/drink6.jpeg" alt="j" />
              </div>
              <div className="shop-info">
                <h4>Mulled Wine </h4>
              </div>
              <div className="shop-stars">
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
              </div>
              <div className="shop-button">
                <a href="#button" className="shop-btn">
                  {" "}
                  <span>$20.00</span>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="shop-items col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 ">
              <div className="shop-img">
                <img src="./assets/drink7.jpeg" alt="j" />
              </div>
              <div className="shop-info">
                <h4>Cream Shake </h4>
              </div>
              <div className="shop-stars">
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
              </div>
              <div className="shop-button">
                <a href="#button" className="shop-btn">
                  {" "}
                  <span>$15</span>
                </a>
              </div>
            </div>
            <div className="shop-items col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 ">
              <div className="shop-img">
                <img src="./assets/drink8.jpeg" alt="j" />
              </div>
              <div className="shop-info">
                <h4>Strawberry Colada</h4>
              </div>
              <div className="shop-stars">
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
              </div>
              <div className="shop-button">
                <a href="#button" className="shop-btn">
                  {" "}
                  <span>$15</span>
                </a>
              </div>
            </div>
            <div className="shop-items col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 ">
              <div className="shop-img">
                <img src="./assets/meal1.png" alt="j" />
              </div>
              <div className="shop-info">
                <h4>Garlic Butter Steak </h4>
              </div>
              <div className="shop-stars">
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
              </div>
              <div className="shop-button">
                <a href="#button" className="shop-btn">
                  {" "}
                  <span>$15.25</span>
                </a>
              </div>
            </div>
            <div className="shop-items col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 ">
              <div className="shop-img">
                <img src="./assets/meal6.jpeg" alt="j" />
              </div>
              <div className="shop-info">
                <h4>Chicken Barbecue</h4>
              </div>
              <div className="shop-stars">
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
              </div>
              <div className="shop-button">
                <a href="#button" className="shop-btn">
                  {" "}
                  <span>$10.50</span>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="shop-items col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 ">
              <div className="shop-img">
                <img src="./assets/meal2.jpeg" alt="j" />
              </div>
              <div className="shop-info">
                <h4>Lo Mein Noodles </h4>
              </div>
              <div className="shop-stars">
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
              </div>
              <div className="shop-button">
                <a href="#button" className="shop-btn">
                  {" "}
                  <span>$20.25</span>
                </a>
              </div>
            </div>
            <div className="shop-items col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 ">
              <div className="shop-img">
                <img src="./assets/meal3.jpeg" alt="j" />
              </div>
              <div className="shop-info">
                <h4>Kor Spicy Rice Cake </h4>
              </div>
              <div className="shop-stars">
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
              </div>
              <div className="shop-button">
                <a href="#button" className="shop-btn">
                  {" "}
                  <span>$3.25</span>
                </a>
              </div>
            </div>
            <div className="shop-items col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 ">
              <div className="shop-img">
                <img src="./assets/meal4.png" alt="j" />
              </div>
              <div className="shop-info">
                <h4>Jajangmyeon Beans</h4>
              </div>
              <div className="shop-stars">
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
              </div>
              <div className="shop-button">
                <a href="#button" className="shop-btn">
                  {" "}
                  <span>$8.50</span>
                </a>
              </div>
            </div>
            <div className="shop-items col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 ">
              <div className="shop-img">
                <img src="./assets/meal5.png" alt="j" />
              </div>
              <div className="shop-info">
                <h4>m Fried Chicken Bites </h4>
              </div>
              <div className="shop-stars">
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
              </div>
              <div className="shop-button row">
                <a href="#button" className="shop-btn">
                  {" "}
                  <span>$5.50</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-b">
          <a href="#button" className="btn-a">
            Browse More Products
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Shop;
