import React from "react";
import "./Find.css";
import { FaTwitter } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Find = () => {
  return (
    <section id="about-us" className="container-fluid">
      <div className="hill-one row">
        <div className="tweet col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <h3>OUR TWITTER</h3>
          <p>
            Went for dinner with a few friends a couple of weeks ago.
            <br /> The ambience is fantastic, the food was excellent <br /> and{" "}
            <span>the staff were extremely friendly</span>.
            <br /> I’d definitely recommend it.
          </p>
          <div className="tweet-icon">
            <FaTwitter />
          </div>
        </div>
        <div className="social col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <h3>Find Us</h3>
          <div className="social-a">
            <div className="face">
              {" "}
              <SiFacebook />
            </div>
            <div className="face">
              {" "}
              <BsInstagram />
            </div>
            <div className="face">
              {" "}
              <BsLinkedin />
            </div>
            <div className="face">
              {" "}
              <FaTwitter />
            </div>
          </div>
        </div>
        <div className="form col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <h3>News Letter</h3>
          <form action="">
            <input
              type="email"
              name="email"
              placeholder="Signup for a Weekly News Letter"
              required
            />
          </form>
        </div>
      </div>
      <div className="last row">
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <h4>+8(876)09876543</h4>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <h4> 27th Westlands, Nairobi, NRB 100198</h4>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <h4>Rhinohillrestaurant@rhino.com</h4>
        </div>
      </div>
    </section>
  );
};

export default Find;
