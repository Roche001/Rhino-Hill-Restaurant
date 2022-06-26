import React from "react";
import "./Popular.css";
import { motion } from "framer-motion";

const Popular = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section id="Popular" className="container-fluid">
        <div className="hot-deals">
          <div className="overlay-a"></div>
          <div className="food-one">
            <h3>HOT DISHES</h3>
            <p>You can help beat hunger!</p>
          </div>
        </div>
        <div className="dessert-container">
          <div className="row">
            <div className="dessert-container-box col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="dessert-img">
                <img src="./assets/meal1.png" alt="m" />
              </div>
              <div className="dessert-info">
                <h3>
                  Garlic Butter Steak <span>$12.25</span>
                </h3>
                <p>Want a super satisfying, quick and easy dinner.</p>
              </div>
            </div>
            <div className="dessert-container-box col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="dessert-img">
                <img src="./assets/meal2.jpeg" alt="m" />
              </div>
              <div className="dessert-info">
                <h3>
                  Mein Noodles <span>$20.25</span>
                </h3>
                <p>Want a super satisfying, quick and easy dinner.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="dessert-container-box col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="dessert-img">
                <img src="./assets/meal3.jpeg" alt="m" />
              </div>
              <div className="dessert-info">
                <h3>
                  Kor Spicy Rice Cake <span>$3.25</span>
                </h3>
                <p>Want a super satisfying, quick and easy dinner.</p>
              </div>
            </div>
            <div className="dessert-container-box col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
              <div className="dessert-img">
                <img src="./assets/meal4.png" alt="m" />
              </div>
              <div className="dessert-info">
                <h3>
                  Jajangmyeon Beans<span>$8.50</span>
                </h3>
                <p>Want a super satisfying, quick and easy dinner.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="dessert-container-box col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="dessert-img">
                <img src="./assets/meal5.png" alt="m" />
              </div>
              <div className="dessert-info">
                <h3>
                  Fried Chicken Bites <span>$5.50</span>
                </h3>
                <p>Want a super satisfying, quick and easy dinner.</p>
              </div>
            </div>
            <div className="dessert-container-box col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="dessert-img">
                <img src="./assets/meal6.jpeg" alt="m" />
              </div>
              <div className="dessert-info">
                <h3>
                  Chicken Barbecue <span>$10.50</span>
                </h3>
                <p>Want a super satisfying, quick and easy dinner.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="dessert">
          <div className="dessert-one">
            <h2>DESSERT</h2>
            <p>The Taste Of Simpler Times</p>
          </div>
        </div>
        <div className="dessert-container">
          <div className="dessert-container-box">
            <div className="dessert-img">
              <img src="./assets/des6.jpeg" alt="ds" />
            </div>
            <div className="dessert-info">
              <h3>
                Liitle Smokies <span>$4.15</span>
              </h3>
              <p>Little Smokies Wrapped in Bacon with brown sugar</p>
            </div>
          </div>
          <div className="dessert-container-box">
            <div className="dessert-img">
              <img src="./assets/des5.jpeg" alt="ds" />
            </div>
            <div className="dessert-info">
              <h3>
                Caramel Bacon <span>$14.25</span>
              </h3>
              <p>Little Smokies Wrapped in Bacon with brown sugar</p>
            </div>
          </div>
          <div className="dessert-container-box">
            <div className="dessert-img">
              <img src="./assets/des4.jpeg" alt="ds" />
            </div>
            <div className="dessert-info">
              <h3>
                Caramel Walnuts <span>$10.50</span>
              </h3>
              <p>Little Smokies Wrapped in Bacon with brown sugar</p>
            </div>
          </div>
          <div className="dessert-container-box">
            <div className="dessert-img">
              <img src="./assets/des3.jpeg" alt="ds" />
            </div>
            <div className="dessert-info">
              <h3>
                Coffee Kisses <span>$5.00</span>
              </h3>
              <p>Little Smokies Wrapped in Bacon with brown sugar</p>
            </div>
          </div>
          <div className="dessert-container-box">
            <div className="dessert-img">
              <img src="./assets/des2.jpeg" alt="ds" />
            </div>
            <div className="dessert-info">
              <h3>
                Chocolate Cookies <span>$3.15</span>
              </h3>
              <p>Little Smokies Wrapped in Bacon with brown sugar</p>
            </div>
          </div>
          <div className="dessert-container-box">
            <div className="dessert-img">
              <img src="./assets/des1.jpeg" alt="ds" />
            </div>
            <div className="dessert-info">
              <h3>
                Chocolate Cakes <span>$10.05</span>
              </h3>
              <p>Little Smokies Wrapped in Bacon with brown sugar</p>
            </div>
          </div>
        </div>
        <div className="wine" id="wine">
          <div className="wine-one">
            <h2>DRINKS</h2>
            <p>Drinks are just the beginning. You should see our bartenders.</p>
          </div>
        </div>
        <div className="drinks">
          <div className="drinks-container-box">
            <div className="drinks-img">
              <img src="./assets/drink3.jpeg" alt="ds" />
            </div>
            <div className="drinks-info">
              <h3>
                Mulled Wine <span>$20.00</span>
              </h3>
              <p>Little Smokies Wrapped in Bacon with brown sugar</p>
            </div>
          </div>
          <div className="drinks-container-box">
            <div className="drinks-img">
              <img src="./assets/drink2.jpeg" alt="ds" />
            </div>
            <div className="drinks-info">
              <h3>
                Marple cocktail<span>$20.00</span>
              </h3>
              <p>Keep the cold out this fall</p>
            </div>
          </div>
          <div className="drinks-container-box">
            <div className="drinks-img">
              <img src="./assets/drink1.jpeg" alt="ds" />
            </div>
            <div className="drinks-info">
              <h3>
                Honey Bourbon <span>$15.00</span>
              </h3>
              <p>Simply mixe everthing together</p>
            </div>
          </div>
          <div className="drinks-container-box">
            <div className="drinks-img">
              <img src="./assets/drink6.jpeg" alt="ds" />
            </div>
            <div className="drinks-info">
              <h3>
                Mulled Wine <span>$20.00</span>
              </h3>
              <p>Ooooh! this looks amazing</p>
            </div>
          </div>
          <div className="drinks-container-box">
            <div className="drinks-img">
              <img src="./assets/drink5.jpeg" alt="ds" />
            </div>
            <div className="drinks-info">
              <h3>
                Orange Mojito<span>$20.00</span>
              </h3>
              <p>Quick,beautiful and tastes delicious</p>
            </div>
          </div>
          <div className="drinks-container-box">
            <div className="drinks-img">
              <img src="./assets/drink4.jpeg" alt="ds" />
            </div>
            <div className="drinks-info">
              <h3>
                Watermelon juice <span>$11.00</span>
              </h3>
              <p>Quick drink looks refreshing</p>
            </div>
          </div>
          <div className="drinks-container-box">
            <div className="drinks-img">
              <img src="./assets/drink8.jpeg" alt="ds" />
            </div>
            <div className="drinks-info">
              <h3>
                Strawberry Colada<span>$20.00</span>
              </h3>
              <p>Smoothie-Cooking Classy</p>
            </div>
          </div>
          <div className="drinks-container-box">
            <div className="drinks-img">
              <img src="./assets/drink7.jpeg" alt="ds" />
            </div>
            <div className="drinks-info">
              <h3>
                Cream Shake <span>$20.00</span>
              </h3>
              <p>Low calorie high protein ice cream</p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Popular;
