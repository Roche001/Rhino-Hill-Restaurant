import React from "react";
import "./Account.css";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { MdAttachEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { GiOfficeChair } from "react-icons/gi";
import { Si1Password } from "react-icons/si";
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
          <h2>Account Creation</h2>
          <p>A few clicks is all it takes.</p>
        </div>
      </section>
    </motion.div>
  );
};

export default Account;
