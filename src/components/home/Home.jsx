import React from "react";
import "./Home.css";

import { CgArrowsHAlt } from "react-icons/cg";
import { GrStar } from "react-icons/gr";
import { CgTag } from "react-icons/cg";
import { FaQuoteLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  AOS.init({
    duration: 2000,
  });
  return (
    <section id="Home" data-aos="zoom-in-up">
      <div className="carousel-img">
        <div className="high-rise"></div>
        <div className="text">
          <h5>Fast Food Restaurant </h5>
          <p>
            Doloremque, itaque aperiam facilis rerum, commodi, temporibus
            sapiente ad mollitia laborum quam quisquam esse error unde. Tempora
            ex doloremque, labore, sunt repellat dolore, iste magni quos nihil
            ducimus libero ipsam.{" "}
          </p>
          <div className="button-text">
            <Link to="./Reservation" className="link-one">
              <h6>Make a Reservation</h6>
            </Link>
          </div>
        </div>
      </div>
      <section className="blue-container">
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
      </section>
      <section id="Restaurant">
        <h3>Our Restaurant in Tulum </h3>
        <div className="restorans-img row">
          <div className="translate col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 ">
            <img className="d-block w-100" src="./assets/rest1.jpg" alt="r" />
          </div>
          <div className="translate col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <img className="d-block w-100" src="./assets/rest2.jpg" alt="r" />
          </div>
          <div className="translate col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <img className="d-block w-100" src="./assets/rest3.jpg" alt="r" />
          </div>
          <div className="translate col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <img className="d-block w-100" src="./assets/rest4.jpg" alt="r" />
          </div>
        </div>
      </section>{" "}
      <div className="burger-container">
        <div className="burger-page">
          {" "}
          <img src="./assets/specials-1.png" alt="burger" />
        </div>
        <div className="burger-text">
          <h3>Nuestra Historia</h3>
          <p>
            The Rhino Hill Restaurant has been built in the best traditions of
            Mediterranean cuisine, bringing a sunny atmosphere to the with light
            and calm colors, stone mosaic walls, southern ornaments and fresh
            design elements. The restaurant’s menu combines Italian, Spanish,
            French and Greek cuisine, complemented by a specially designed
            Mediterranean wine list. The menu is designed by Jānis Sokolovskis,
            the restaurant's chef and co-owner, winner of several international
            culinary competitions. According to him, it combines the best
            products in a way that is understandable to the gourmets of our
            region, with the characteristic, familiar taste of the Riviera. The
            restaurant serves a combination of the best products from today and
            the world, which reveals the restaurant's usual as well as new
            nuances of taste. The extensive wine list, with more than 450 items,
            is created by the well-known sommelier and restaurant co-owner
            Eduards Jakuševskis and combines wines from several countries and
            regions.{" "}
          </p>
        </div>
      </div>
      <section id="deals" className="container-fluid">
        <div className="overlay"></div>
        <div className="weekly-deals row text-center">
          <div className="explanation">
            <h3>WEEKLY DEALS</h3>
            <h5>Our Weekly Deals</h5>
          </div>
        </div>
        <div className="row ">
          <div className="menu col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <img src="./assets/menu1.jpg" alt="m" />
            <div className="menu-items">
              {" "}
              <table>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
                <tr>
                  <td>
                    <h4>Garlic Shrimp Pasta</h4>
                  </td>
                  <td>
                    <h4>
                      <span>$20.5</span>
                    </h4>
                  </td>
                </tr>
              </table>
              <p>Want a super satisfying, quick and easy dinner.</p>
            </div>
          </div>
          <div className="menu col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
            <img src="./assets/menu2.jpg" alt="m" />
            <div className="menu-items">
              <table>
                <tr>
                  <th></th>
                  <th></th>
                </tr>
                <tr>
                  <td>
                    <h4>Garlic Shrimp Pasta</h4>
                  </td>
                  <td>
                    <h4>
                      <span>$20.5</span>
                    </h4>
                  </td>
                </tr>
              </table>

              <p>Want a super satisfying, quick and easy dinner.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="menu col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <img src="./assets/menu3.jpg" alt="m" />
            <div className="menu-items">
              <table>
                <tr>
                  <th></th>
                  <th></th>
                </tr>
                <tr>
                  <td>
                    <h4>Garlic Shrimp Pasta</h4>
                  </td>
                  <td>
                    <h4>
                      <span>$20.5</span>
                    </h4>
                  </td>
                </tr>
              </table>
              <p>Want a super satisfying, quick and easy dinner.</p>
            </div>
          </div>
          <div className="menu col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <img src="./assets/menu4.jpg" alt="m" />
            <div className="menu-items">
              <table>
                <tr>
                  <th></th>
                  <th></th>
                </tr>
                <tr>
                  <td>
                    <h4>Garlic Shrimp Pasta</h4>
                  </td>
                  <td>
                    <h4>
                      <span>$20.5</span>
                    </h4>
                  </td>
                </tr>
              </table>
              <p>Want a super satisfying, quick and easy dinner.</p>
            </div>
          </div>
        </div>

        <div className="reserve row text-center">
          <h5>Online Reservation </h5>
        </div>
      </section>
      <section id="team container-fluid">
        <div className="team-def">
          <h3>Our Team</h3>
          <h5>Global-Class Professional Service</h5>
          <p>“The Standard of Excellence for Chefs.”</p>
        </div>

        <div className="chefs row">
          <div className="individual-chefs  col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="individual-chef-img">
              <img src="./assets/jiko1.jpeg" alt="chef" />
            </div>

            <div className="chef">
              <h3>Steve Kelly </h3>
              <h4>Master Chef in Tulum</h4>
            </div>
          </div>
          <div className="individual-chefs  col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="individual-chef-img">
              <img src="./assets/jiko2.jpeg" alt="chef" />
            </div>

            <div className="chef">
              <h3>Ola Brown</h3>
              <h4>Master Chef in Cairo</h4>
            </div>
          </div>

          <div className="individual-chefs  col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="individual-chef-img">
              {" "}
              <img src="./assets/jiko4.jpeg" alt="chef" />
            </div>

            <div className="chef">
              <h3>Staci Bush</h3>
              <h4>Master Chef in Los Angeles</h4>
            </div>
          </div>
          <div className="individual-chefs  col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
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
        <div
          id="carouselExampleInterval"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="review-box-img">
                <img src="./assets/rev1.jpeg" alt="r" />
              </div>
              <div className="reveiw-box-name">
                <h3>Andrés de Fonollosa</h3>
                <h4>Actor, writer and artist</h4>
              </div>
              <div className="comment">
                <p>
                  De verdad... ¿qué hay de lo que no te guste Rhino Hill
                  Restaurant? El servicio es excelente, el ambiente es
                  insuperable y la comida es absolutamente increíble. Nunca
                  decepciones en ningún momento. de dia o de noche!
                </p>
              </div>
              <div className="stars">
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
              </div>
            </div>

            <div class="carousel-item">
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
                  yourselves yet again.We really enjoyed the breakfast buffet as
                  requested last week . Great organisation and keen service . My
                  team and I say thank you. We will be back again and again.
                </p>
              </div>
              <div className="stars">
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
              </div>
            </div>

            <div class="carousel-item">
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
                  and found this hotel to be the best by far.. our server
                  Euphema is courteous.Good food selection and sparkling wine
                  also we will be back again we going to recommend her again.
                </p>
              </div>
              <div className="stars">
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
              </div>
            </div>

            <div class="carousel-item">
              <div className="review-box-img">
                <img src="./assets/rev4.jpeg" alt="r" />
              </div>
              <div className="reveiw-box-name">
                <h3>Zana (Alexandra) Moss</h3>
                <h4>Human Performance Specialist </h4>
              </div>
              <div className="comment">
                <p>
                  The restaurant has a way of Making Guests come back for more,{" "}
                  My Family felt wanted here, From how our Reservation was taken{" "}
                  to how the service was delivered its always amazing - the{" "}
                  consistency on food and service delivery.
                </p>
              </div>
              <div className="stars">
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
              </div>
            </div>
          </div>
        </div>
        <div className="quote row text-center">
          <FaQuoteLeft />
        </div>
      </section>
    </section>
  );
};

export default Home;
