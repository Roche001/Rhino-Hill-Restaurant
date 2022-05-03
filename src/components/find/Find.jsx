import React from "react";
import "./Find.css";
import { FaTwitter } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { GiRhinocerosHorn } from "react-icons/gi";

const Find = () => {
  return (
    <section id="about-us">
      <div className="hill-one">
        <div className="tweet">
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
        <div className="social">
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
        <div className="form">
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
      <div className="last">
        <h4>+8(876)09876543</h4> <GiRhinocerosHorn />
        <h4> 27th Westlands, Nairobi, NRB 100198</h4> <GiRhinocerosHorn />
        <h4>Rhinohillrestaurant@rhino.com</h4>
      </div>
    </section>
  );
};

export default Find;
