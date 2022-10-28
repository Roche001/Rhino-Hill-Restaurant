import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Reservation.css";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const Speciality = () => {
  AOS.init({
    duration: 2000,
  });
  const [startDate, setStartDate] = useState(new Date());
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section
        id="Speciality"
        className="container-fluid nopadding"
        data-aos="zoom-in-up"
      >
        <div className="table">
          <h3>MAKE AN ONLINE RESERVATION</h3>
          <p>Maximum luxury. Exclusive sensation.</p>
        </div>
        <div className="reservation row text-center">
          <h4>Online booking terms and conditions</h4>
          <p>Contractual cancellation rights are included in all versions.</p>
        </div>
        <div className="forms-resrve row">
          <div className="book-table col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <label>Book Table</label>
            <div className="picker-a">
              <DatePicker
                className="picker"
                placeholderText={"dd/mm/yyyy"}
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
              />
            </div>
            <div className="picker-a">
              <select className="picker">
                <option value="5:00am">5:00 am</option>
                <option value="5:30am">5:30 am</option>
                <option value="6:00am">6:00 am</option>
                <option value="6:30am">6:30 am</option>
                <option selected="selected" value="7:00am">
                  7:00 am
                </option>
                <option value="7:30am">7:30 am</option>
                <option value="8:00am">8:00 am</option>
                <option value="8:30am">8:30 am</option>
                <option value="9:00am">9:00 am</option>
                <option value="9:30am">9:30 am</option>
                <option value="10:00am">10:00 am</option>
                <option value="10:30am">10:30 am</option>
                <option value="11:00am">11:00 am</option>
                <option value="11:30am">11:30 am</option>
                <option value="12:00pm">12:00 pm</option>
                <option value="12:30pm">12:30 pm</option>
                <option value="1:00pm">1:00 pm</option>
                <option value="1:30pm">1:30 pm</option>
                <option value="2:00pm">2:00 pm</option>
                <option value="2:30pm">2:30 pm</option>
                <option value="3:00pm">3:00 pm</option>
                <option value="3:30pm">3:30 pm</option>
                <option value="4:00pm">4:00 pm</option>
                <option value="4:30pm">4:30 pm</option>
                <option value="5:00pm">5:00 pm</option>
                <option value="5:30pm">5:30 pm</option>
                <option value="6:00pm">6:00 pm</option>
                <option value="6:30pm">6:30 pm</option>
                <option value="7:00pm">7:00 pm</option>
                <option value="7:30pm">7:30 pm</option>
                <option value="8:00pm">8:00 pm</option>
                <option value="8:30pm">8:30 pm</option>
                <option value="9:00pm">9:00 pm</option>
                <option value="9:30pm">9:30 pm</option>
                <option value="10:00pm">10:00 pm</option>
                <option value="10:30pm">10:30 pm</option>
                <option value="11:00pm">11:00 pm</option>
                <option value="11:30pm">11:30 pm</option>
              </select>
            </div>
            <div className="picker-a">
              <select className="picker">
                <option value="Lambert - New York City">
                  Rhino Hill Restaurant- Nairobi
                </option>
                <option value="Lambert - Washington">
                  Rhino Hill Restaurant- Pretoria
                </option>
                <option value="Lambert - Florida ">
                  Rhino Hill Restaurant - Tulum
                </option>
              </select>
            </div>
            <div className="picker-a">
              <select id="numperson" className="picker">
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
                <option value="5">5 People</option>
                <option value="6">6 People</option>
              </select>
            </div>
          </div>
          <div className="contact-details col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <label> Customer Info</label>
            <div className="put">
              <input type="Name" name="Name" placeholder="Name" required />
            </div>
            <div className="put">
              {" "}
              <input
                type="E-mail"
                name="E-mail"
                placeholder="E-mail"
                required
              />
            </div>
            <div className="put">
              <input type="phone" name="phone" placeholder="Phone" required />
            </div>

            <textarea
              name="Message"
              id="Message"
              cols="20"
              rows="2"
              placeholder="Leave Message"
            ></textarea>
          </div>
        </div>
        <div className="button-sm row text-center">
          <button type="submit" className="btn-bg">
            Make a Reservation
          </button>
        </div>

        <div className="operations">
          <div className="opening">
            <h3>OPENING HOURS </h3>
            <h5>Call For Reservations </h5>
          </div>
          <div className="days">
            <div className="monday">
              <h3>Monday to Friday</h3>
              <h4>09:00</h4>
              <h4>22:00</h4>
            </div>
            <div className="weekends">
              <h3>Weekends</h3>
              <h4>11:00</h4>
              <h4>19:00</h4>
            </div>
          </div>

          <div className="number">
            <h4>+8(876)09876543</h4>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Speciality;
