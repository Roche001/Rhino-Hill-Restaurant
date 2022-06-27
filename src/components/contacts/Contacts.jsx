import React from "react";
import "./Contacts.css";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const Contacts = () => {
  const MapWithAMarker = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        defaultZoom={3}
        defaultCenter={{ lat: -1.2306616792179152, lng: 36.84835920697511 }}
      >
        <Marker
          position={{ lat: -1.2306616792179152, lng: 36.84835920697511 }}
        />
        <Marker position={{ lat: -25.764397, lng: 28.212818 }} />

        <Marker position={{ lat: 20.207623, lng: -87.464401 }} />
      </GoogleMap>
    ))
  );
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section id="Contact" className="container-fluid" data-aos="zoom-in-up">
        <div className="contact">
          <h3>OUR CONTACTS</h3>
          <p>where to find us</p>
        </div>
        <div className="contact-info row">
          <div className="contact-info-one col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <h4>CONTACT INFO</h4>
            <p>
              The Riviera restaurant has been built in the best traditions of
              Mediterranean cuisine, <br />
              bringing a sunny atmosphere to the restaurant, with light and calm
              colors, stone mosaic <br />
              walls, southern ornaments and fresh design elements. The
              restaurant’s menu combines <br />
              Italian, Spanish, French and Greek cuisine, complemented by a
              specially designed <br />
              Mediterranean wine list. The menu is designed by Jānis
              Sokolovskis, the restaurant's chef <br />
              and co-owner, winner of several international culinary
              competitions.
              <br /> According to him, it combines the best products in a way
              that is understandable to the gourmets <br />
              of our region, with the characteristic, familiar taste of the
              Riviera.{" "}
            </p>
          </div>
          <div className="contact-info-two col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="info-option-one">
              <h3>Rhino Hill Restaurant-Nairobi</h3>
              <p> 27th Westlands, Nairobi, NRB 100198</p>
              <p>Rhinohillrestaurant@rhino.com</p>
              <p>+8(876)09876543</p>
            </div>
            <div className="info-option-one">
              <h3>Rhino Hill Restaurant-Pretoria</h3>
              <p> 27th Pretoria, Nairobi, PTA 200198</p>
              <p>Rhinohillrestaurant@rhino.com</p>
              <p>+2(876)09876543</p>
            </div>
            <div className="info-option-one">
              <h3>Rhino Hill Restaurant-Tulum</h3>
              <p> 27th Westlands, Nairobi, TLM 300198</p>
              <p>Rhinohillrestaurant@rhino.com</p>
              <p>+7(890)09876543</p>
            </div>
          </div>
        </div>
        <div className="location row">
          <div className="location-h3">
            <h3>Our Location</h3>
            <p>Where To Find Us</p>
          </div>
          <div className="google-maps">
            <MapWithAMarker
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBAXOQcxZzrxgrzdLhtRcmdBaiPEWzFkD8"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `750px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
        </div>
        <div className="form-a row text-center">
          <div className="form-def">
            <h2>Get In Touch</h2>
            <p>Write to us</p>
          </div>
          <form>
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder=" E-mail" required />
            <input type="phone" name="phone" placeholder="Phone" required />

            <textarea
              name="message"
              rows="8"
              placeholder="Message"
              required
            ></textarea>
          </form>
        </div>
      </section>
    </motion.div>
  );
};

export default Contacts;
