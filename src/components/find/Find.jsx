import React from "react";
import "./Find.css";
import { FaTwitter } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const Find = () => {
  AOS.init({
    duration: 2000,
  });
  return (
    <section id="about-us" className="container-fluid" data-aos="zoom-in-up">
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
    </section>
  );
};

export default Find;
