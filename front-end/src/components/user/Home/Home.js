import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import introImage from "../../../../../front-end/src/assets/img/IMG_3876_2_720x.jpg";
import limitedEditionProduct from "../../../../../front-end/src/assets/img/social_share_1080x.jpg";

import "./Home.css";

const Home = (props) => {
  return (
    <div className="home">
      <div className="container">
        <div className="introduction">
          <div className="row">
            <div className="col-md-6">
              <div className="sub-title">Feel trendy. Feel authentic.</div>
              <div className="title">
                Explore your true style with
                <span className="emphasis ml-3">luxury</span> and
                <span className="emphasis ml-3">comfort.</span>
              </div>
              <div className="description">
                anico debuted two consecutive pop-up shops in Taipei more than a
                year ago. Featuring an all-black look, as well as lifestyle
                activities such as a dining section where consumers may. <br />
                <br />
                Find out more at
                <a
                  href="https://emea.blvck.com/"
                  target="_blank"
                  class="pl-1 text-dark font-weight-bold font-italic"
                  style={{ textDecoration: "none" }}
                >
                  blvck.com
                </a>
              </div>
              <div class="d-flex flex-row bd-highlight mb-3">
                <div class="py-1 bd-highlight">
                  <div className="btn-wrap">
                    <Link to="/products">
                      <div className="btn btn-dark rounded-0 btn-shop">
                        Shop collections
                      </div>
                    </Link>
                  </div>
                </div>
                <div class="py-1 bd-highlight">
                  <div className="btn-wrap">
                    <a href="#featured">
                      <div className="btn btn-light rounded-0 btn-free-delivery">
                        Featured
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img src={introImage} alt="" className="intro-img img-fluid" />
            </div>
          </div>
        </div>
      </div>

      <div className="testimonial">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="title">
                850,000+ customers worldwide since 2019
              </div>
            </div>
            <div className="col-md-6">
              <div class="d-flex justify-content-center text-center">
                <div class="px-5 bd-highlight">
                  <div
                    class="d-flex flex-column bd-highlight mb-3"
                    style={{ width: "11rem" }}
                  >
                    <div class="bd-highlight">
                      <div className="rating-figure">4.6</div>
                    </div>
                    <div class="bd-highlight">
                      <div className="rating-icons">
                        <i class="fas fa-star px-1"></i>
                        <i class="fas fa-star px-1"></i>
                        <i class="fas fa-star px-1"></i>
                        <i class="fas fa-star px-1"></i>
                        <i class="fas fa-star px-1"></i>
                      </div>
                    </div>
                    <div class="bd-highlight mt-1">
                      <div className="rating-description">60,578 ratings</div>
                    </div>
                  </div>
                </div>
                <div class="px-5 bd-highlight">
                  <div class="d-flex flex-column bd-highlight mb-3">
                    <div class="bd-highlight">
                      <div className="rating-figure">10M+</div>
                    </div>
                    <div class="bd-highlight mt-1 rating-description">
                      Worldwide Product sales per year
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="featured-products" id="featured">
        <div className="container">
          <div className="title">Designer's Choice</div>
          <div className="sub-title">
            We provide your dream modern and compact design
          </div>
        </div>
        <div className="container-fluid">
          <OwlCarousel
            className="owl-theme"
            loop
            margin={10}
            nav={false}
            items={4}
            stagePadding={60}
            lazyLoad={true}
            dots={false}
            // autoplay={true}
            margin={20}
            responsiveClass={true}
            responsive={{
              0: {
                items: 1,
                nav: false,
                loop: false,
                margin: 30,
              },
              600: {
                items: 3,
                nav: false,
                loop: false,
              },
              1000: {
                items: 3,
                nav: false,
                loop: false,
              },
            }}
            merge={true}
          >
            {props.product_list.map((item) => (
              <Link
                to={"/products/" + item.id}
                style={{
                  textDecoration: "none",
                  color: "unset",
                }}
              >
                <div className="tag">{item.tag}</div>

                <div class="item">
                  <img
                    src={
                      require(`../../../assets/products/${item.imgUrl}`).default
                    }
                    alt={item}
                    className="img-fluid"
                  />
                  <div className="item-information-container">
                    <div className="item-name">{item.name}</div>
                    <div className="item-price">${item.price.toFixed(2)}</div>
                  </div>
                </div>
              </Link>
            ))}
          </OwlCarousel>
        </div>
      </div>

      <div className="limited-edition-products"></div>
    </div>
  );
};

// STORE - Getting all the state from reducer.js
const mapStateToProps = (global_state) => {
  return {
    product_list: global_state.allProducts,
  };
};

export default connect(mapStateToProps, null)(Home);
