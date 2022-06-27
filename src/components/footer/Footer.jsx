import React from "react";
import "./Footer.css";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

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
