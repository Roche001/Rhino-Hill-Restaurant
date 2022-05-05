import React, { Component } from "react";
import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { Autoplay, Pagination, Navigation } from "swiper";
import { CgArrowsHAlt } from "react-icons/cg";
import { GrStar } from "react-icons/gr";
import { CgTag } from "react-icons/cg";
import { FaQuoteLeft } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";

const Home = () => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
    >
      <section id="Home">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="slider"
        >
          <SwiperSlide className="slide">
            <div className="overlay"></div>
            <h4>Welcome to Rhino Hill Café</h4>
            <small>Food Made with Love</small>
            <img src="./assets/slider1.jpg" alt="s" />
          </SwiperSlide>
          <SwiperSlide className="slide">
            <div className="overlay"></div>
            <h4>Welcome to Rhino Hill Café</h4>
            <small>Food Made with Love</small>
            <img src="./assets/slider2.jpg" alt="s" />
          </SwiperSlide>
          <SwiperSlide className="slide">
            <div className="overlay"></div>
            <h4>Welcome to Rhino Hill Café</h4>
            <small>Food Made with Love</small>
            <img src="./assets/slider3.jpg" alt="s" />
          </SwiperSlide>
        </Swiper>

        <section id="about">
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
        <section id="Restaurant">
          <div className="restorans-img">
            <div className="translate">
              {" "}
              <img src="./assets/rest1.jpg" alt="r" />
              rhino-hill
            </div>
            <div className="translate">
              {" "}
              <img src="./assets/rest2.jpg" alt="r" />
            </div>
            <div className="translate">
              {" "}
              <img src="./assets/rest3.jpg" alt="r" />
            </div>
            <div className="translate">
              {" "}
              <img src="./assets/rest4.jpg" alt="r" />
            </div>
          </div>
          <div className="restorans">
            <h4>Our Restorāns</h4>
            <h5>The Rhino Hill Restaurant </h5>{" "}
            <p>
              The Rhino Hill Restaurant has been built in the best traditions of
              <br />
              Mediterranean cuisine, bringing a sunny atmosphere to the
              restaurant,
              <br />
              with light and calm colors, stone mosaic walls, southern ornaments
              and <br />
              fresh design elements. The restaurant’s menu combines Italian,{" "}
              <br />
              Spanish, French and Greek cuisine, complemented by a specially{" "}
              <br />
              designed Mediterranean wine list. The menu is designed by Jānis{" "}
              <br />
              Sokolovskis, the restaurant's chef and co-owner, winner of several{" "}
              <br />
              international culinary competitions. According to him, it combines
              the <br />
              best products in a way that is understandable to the gourmets of
              our <br />
              region, with the characteristic, familiar taste of the Riviera.
              The <br />
              restaurant serves a combination of the best products from today
              and <br />
              the world, which reveals the restaurant's usual as well as new
              nuances <br />
              of taste. The extensive wine list, with more than 450 items, is{" "}
              <br />
              created by the well-known sommelier and restaurant co-owner
              Eduards <br />
              Jakuševskis and combines wines from several countries and regions.{" "}
              <br />
            </p>
          </div>
        </section>
        <section id="deals">
          <div className="overlay"></div>
          <div className="weekly-deals">
            <div className="explanation">
              <h3>WEEKLY DEALS</h3>
              <h5>Our Weekly Deals</h5>
            </div>
          </div>
          <div className="dishes">
            <div className="menu">
              <img src="./assets/menu1.jpg" alt="m" />
              <div className="menu-items">
                <h4>
                  Garlic Shrimp Pasta <span>$20.5</span>
                </h4>
                <p>Want a super satisfying, quick and easy dinner.</p>
              </div>
            </div>
            <div className="menu">
              <img src="./assets/menu2.jpg" alt="m" />
              <div className="menu-items">
                <h4>
                  Garlic Shrimp Pasta <span>$20.5</span>
                </h4>
                <p>Want a super satisfying, quick and easy dinner.</p>
              </div>
            </div>
            <div className="menu">
              <img src="./assets/menu3.jpg" alt="m" />
              <div className="menu-items">
                <h4>
                  Garlic Shrimp Pasta <span>$20.5</span>
                </h4>
                <p>Want a super satisfying, quick and easy dinner.</p>
              </div>
            </div>
            <div className="menu">
              <img src="./assets/menu4.jpg" alt="m" />
              <div className="menu-items">
                <h4>
                  Garlic Shrimp Pasta <span>$20.5</span>
                </h4>
                <p>Want a super satisfying, quick and easy dinner.</p>
              </div>
            </div>
            <div className="menu">
              <img src="./assets/menu5.jpg" alt="m" />
              <div className="menu-items">
                <h4>
                  Garlic Shrimp Pasta <span>$20.5</span>
                </h4>
                <p>Want a super satisfying, quick and easy dinner.</p>
              </div>
            </div>
            <div className="menu">
              <img src="./assets/menu6.jpg" alt="m" />
              <div className="menu-items">
                <h4>
                  Garlic Shrimp Pasta <span>$20.5</span>
                </h4>
                <p>Want a super satisfying, quick and easy dinner.</p>
              </div>
            </div>
          </div>
          <div className="reserve">
            <h5>Online Reservation </h5>
          </div>
        </section>
        <section id="team">
          <div className="team-def">
            <h3>Our Team</h3>
            <h5>Global-Class Professional Service</h5>
            <p>“The Standard of Excellence for Chefs.”</p>
            <img src="./assets/Logo1.png" alt="l" />
          </div>

          <div className="chefs">
            <div className="individual-chefs">
              <div className="individual-chef-img">
                <img src="./assets/jiko1.jpeg" alt="chef" />
              </div>

              <div className="chef">
                <h3>Steve Kelly </h3>
                <h4>Master Chef in Tulum</h4>
              </div>
            </div>
            <div className="individual-chefs">
              <div className="individual-chef-img">
                <img src="./assets/jiko2.jpeg" alt="chef" />
              </div>

              <div className="chef">
                <h3>Ola Brown</h3>
                <h4>Master Chef in Cairo</h4>
              </div>
            </div>
            <div className="individual-chefs">
              <div className="individual-chef-img">
                {" "}
                <img src="./assets/jiko3.jpeg" alt="chef" />
              </div>

              <div className="chef">
                <h3>Nic Scobey</h3>
                <h4>Master Chef in Marrakesh</h4>
              </div>
            </div>
            <div className="individual-chefs">
              <div className="individual-chef-img">
                {" "}
                <img src="./assets/jiko4.jpeg" alt="chef" />
              </div>

              <div className="chef">
                <h3>Staci Bush</h3>
                <h4>Master Chef in Los Angeles</h4>
              </div>
            </div>
            <div className="individual-chefs">
              <div className="individual-chef-img">
                <img src="./assets/jiko5.jpeg" alt="chef" />
              </div>

              <div className="chef">
                <h3>Osayi Alile</h3>
                <h4>Master Chef in Nairobi</h4>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials">
          <div className="overlay"></div>
          <div className="test-header">
            <h3>TESTIMONIALS</h3>
            <h4>What Customers Say About Us</h4>
          </div>
          <div className="icons">
            <CgArrowsHAlt />
          </div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="testimonial-box"
          >
            <SwiperSlide className="review-box">
              <div className="review-box-img">
                <img src="./assets/rev1.jpeg" alt="r" />
              </div>
              <div className="reveiw-box-name">
                <h3>Andrés de Fonollosa</h3>
                <h4>Actor, writer and artist</h4>
              </div>
              <div className="comment">
                <p>
                  De verdad... ¿qué hay de lo que no te guste Rhino Hill <br />
                  Restaurant? El servicio es excelente, el ambiente es
                  insuperable <br />y la comida es absolutamente increíble.
                  Nunca decepciones en ningún momento. de dia o de noche!
                </p>
              </div>
              <div className="stars">
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
              </div>
            </SwiperSlide>
            <SwiperSlide className="review-box">
              <div className="review-box-img">
                <img src="./assets/rev2.jpeg" alt="r" />
              </div>
              <div className="reveiw-box-name">
                <h3>Silene Oliveira</h3>
                <h4>Actor, writer and artist</h4>
              </div>
              <div className="comment">
                <p>
                  Thank you Again @ Rhino Hill Restaurant team for outdoing{" "}
                  <br />
                  yourselves yet again.We really enjoyed the breakfast buffet as{" "}
                  requested last week . Great organisation <br /> and keen
                  service . My team and I say thank you. We will be back again
                  and again.
                </p>
              </div>
              <div className="stars">
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
              </div>
            </SwiperSlide>
            <SwiperSlide className="review-box">
              <div className="review-box-img">
                <img src="./assets/rev3.jpeg" alt="r" />
              </div>
              <div className="reveiw-box-name">
                <h3>Keanu Reeves</h3>
                <h4>
                  Actor{" "}
                  <span>
                    <CgTag />
                  </span>
                </h4>
              </div>
              <div className="comment">
                <p>
                  Food is delicious we were fortunate enough to visit Nairobi
                  and <br />
                  found this hotel to be the best by far.. our server Euphema is{" "}
                  <br />
                  courteous, efficient and helpful lady .Good food selection and{" "}
                  <br />
                  sparkling wine also we will be back again we going to
                  recommend <br />
                  her again..we had the pleasure of dealing with her service was{" "}
                  <br />
                  above special "shout out" to Valeria.
                </p>
              </div>
              <div className="stars">
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
              </div>
            </SwiperSlide>
            <SwiperSlide className="review-box">
              <div className="review-box-img">
                <img src="./assets/rev4.jpeg" alt="r" />
              </div>
              <div className="reveiw-box-name">
                <h3>Zana (Alexandra) Moss</h3>
                <h4>Human Performance Specialist </h4>
              </div>
              <div className="comment">
                <p>
                  The restaurant has a way of Making Guests come back for more,
                  My Family felt wanted here, <br /> From how our Reservation
                  was taken to how the service was delivered its always amazing
                  - the consistency on food and service delivery is to die for-
                  Moseti <br />
                  and Maurice have the best service there can be
                </p>
              </div>
              <div className="stars">
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="quote">
            <FaQuoteLeft />
          </div>
        </section>
      </section>
    </motion.div>
  );
};

export default Home;
