import React from "react";
import "./Find.css";
import { FaTwitter } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { HiPhone } from "react-icons/hi";
import { HiMail } from "react-icons/hi";

const Find = () => {
  return (
    <div className="find-card row">
      <div className="first-card  col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <h4>Contact Us </h4>
        <h5>
          <span>
            <ImLocation2 />
          </span>
          27th Westlands, Nairobi, NRB 100198
        </h5>
        <h5>
          <span>
            <HiMail />
          </span>
          Rhinohillrestaurant@rhino.com
        </h5>{" "}
        <h5>
          {" "}
          <span>
            <HiPhone />
          </span>
          Call: +8(876)09876543
        </h5>
      </div>
      <div className="find-social  col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <h4>Rhino Hill Restaurant</h4>
        <p>
          Went for dinner with a few friends a couple of weeks ago. The ambience
          is fantastic, the food was excellent and
          <span>the staff were extremely friendly</span>. I’d definitely
          recommend it.
        </p>
        <div className="social-one">
          <a href="www.facebook.com">
            <FaTwitter />
          </a>{" "}
          <a href="www.facebook.com">
            <SiFacebook />
          </a>{" "}
          <a href="www.facebook.com">
            <BsInstagram />
          </a>{" "}
          <a href="www.facebook.com">
            <BsLinkedin />
          </a>
        </div>
      </div>
      <div className="find-reserv  col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <h4>Opening Hours</h4>
        <h5>Monday-Friday:09:00-22:00</h5>
        <h5>Weekends:11:00-9:00</h5>
      </div>
    </div>
  );
};

export default Find;
