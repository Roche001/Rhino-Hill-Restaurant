import React from "react";
import "./Account.css";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const Account = () => {
  AOS.init({
    duration: 2000,
  });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section
        id="Account"
        className="container-fluid nopadding"
        data-aos="zoom-in-up"
      >
        <div className="account-header">
          <h2>Our Gallery</h2>
          <p>Some Photos from Our Restaurants</p>
        </div>

        <div className="part-elements">
          <div className="omera row">
            <div className="roche-img nopadding col-xl-6 col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="laydown"></div>
              <div className="word">
                <h4>Our Restaurant in Tulum </h4>
              </div>
              <img
                className="d-block w-100"
                src="./assets/int1.jpeg"
                alt="castle"
              />
            </div>
            <div className="roche-one nopadding  col-xl-3 col-lg-4 col-md-3 col-sm-6 col-xs-12">
              <div className="laydown"></div>{" "}
              <div className="word-one">
                <h4>Our Restaurant in Tulum</h4>
              </div>
              <img
                className="d-block w-100"
                src="./assets/int2.jpeg"
                alt="roma"
              />
            </div>
            <div className="roche-one nopadding  col-xl-3 col-lg-4 col-md-3 col-sm-6 col-xs-12">
              <div className="laydown"></div>
              <div className="word-one">
                <h4>Our Restaurant in Tulum</h4>
              </div>
              <img
                className="d-block w-100"
                src="./assets/int3.png"
                alt="rancho"
              />
            </div>{" "}
          </div>{" "}
          <div className="omera row">
            <div className="roche-one nopadding col-xl-3 col-lg-4 col-md-3 col-sm-6 col-xs-12">
              <div className="laydown"></div>
              <div className="word-one">
                <h4>Our Restaurant in Nairobi</h4>
              </div>
              <img
                className="d-block w-100"
                src="./assets/int5.jpeg"
                alt="bufallo"
              />
            </div>

            <div className="roche-one nopadding col-xl-3 col-lg-4 col-md-3 col-sm-6 col-xs-12">
              <div className="laydown"></div>
              <div className="word-one">
                <h4>Our Restaurant in Nairobi</h4>
              </div>
              <img
                className="d-block w-100"
                src="./assets/int6.png"
                alt="bufallo"
              />
            </div>

            <div className="roche-img  nopadding col-xl-6 col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="laydown"></div>
              <div className="word">
                <h4>Our Restaurant in Nairobi</h4>
              </div>
              <img
                className="d-block w-100"
                src="./assets/int7.png"
                alt="bed001"
              />
            </div>
          </div>{" "}
          <div className="omera row">
            <div className="roche-img nopadding col-xl-6 col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="laydown"></div>
              <div className="word">
                <h4>Our Restaurant in Pretoria</h4>
              </div>
              <img
                className="d-block w-100"
                src="./assets/int8.jpeg"
                alt="bed001"
              />
            </div>

            <div className="roche-one nopadding col-xl-3 col-lg-4 col-md-3 col-sm-6 col-xs-12">
              <div className="laydown"></div>
              <div className="word-one">
                <h4>Our Restaurant in Pretoria</h4>
              </div>
              <img
                className="d-block w-100"
                src="./assets/rest1.jpg"
                alt="office"
              />
            </div>
            <div className="roche-one nopadding col-xl-3 col-lg-4 col-md-3 col-sm-6 col-xs-12">
              <div className="laydown"></div>
              <div className="word-one">
                <h4>OOur Restaurant in Pretoria</h4>
              </div>
              <img
                className="d-block w-100"
                src="./assets/rest2.jpg"
                alt="office"
              />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Account;
