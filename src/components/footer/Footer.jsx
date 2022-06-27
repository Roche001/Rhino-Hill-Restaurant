import React from "react";
import "./Footer.css";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  return (
    <section id="footer">
      <div className="copy">
        <small>
          {" "}
          Rhino Hill Restaurant <AiOutlineCopyrightCircle /> 2022 Some Rights
          Reserved
        </small>
      </div>
    </section>
  );
};

export default Footer;
