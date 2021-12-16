import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { gsap, Power1, Power2 } from "gsap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CSSRulePlugin from "gsap/CSSRulePlugin"; // to get the css property

import introImage from "../../../../../front-end/src/assets/img/IMG_3876_2_720x.jpg";
import crossImage from "../../../../../front-end/src/assets/img/cross.png";
import salesProduct from "../../../../../front-end/src/assets/img/260437797_889392161942869_6313503206954777084_n 1.png";

import "./Home.css";

const Home = (props) => {
  // variables
  let container = useRef(null);
  let introImages = useRef(null);
  let introImagesReveal = CSSRulePlugin.getRule(
    ".home .intro-img-container:after"
  );
  let limitedEdImage = useRef(null);
  let limitedEdImageReveal = CSSRulePlugin.getRule(
    ".limited-edition-products-container:after"
  );

  // console.log(introImagesReveal);

  // gsap timeline
  let tl = gsap.timeline({ defaults: { ease: Power1.easeInOut } });

  useEffect(() => {
    // [1] Timeline: To prevent flashing when render, [2] Timeline: Animate heading, [3] Animate image reveal
    tl.to(container, { duration: 0, css: { visibility: "visible" } })
      .to(
        ".gsapIntroHeading",
        { y: "0%", duration: 1.2, stagger: 0.2 },
        "variableNameAny"
      )
      .to(introImagesReveal, {
        duration: 1,
        width: "0%",
        ease: Power2.easeInOut,
      })
      .from(introImages, {
        duration: 1,
        scale: 2,
        ease: Power2.easeOut,
        delay: -1,
      });
  }, []);

  return (
    <div className="home" ref={(el) => (container = el)}>
      <div className="introduction-bg">
        <div className="container">
          <div className="introduction">
            <div className="row">
              <div className="col-md-6">
                <div className="sub-title">
                  <span className="gsapIntroHeading">
                    Feel trendy. Feel authentic.
                  </span>
                </div>
                <div className="title">
                  <h2>
                    <span className="gsapIntroHeading">Explore your true</span>
                  </h2>
                  <h2>
                    <span className="gsapIntroHeading ">
                      style with <span className="emphasis">luxury</span>
                    </span>
                  </h2>
                  <h2>
                    <span className="gsapIntroHeading">
                      and <span className="emphasis">comfort.</span>
                    </span>
                  </h2>
                </div>
                <div className="description">
                  <p>
                    <span className="gsapIntroHeading">
                      anico debuted two consecutive pop-up shops in Taipei more
                      than a year ago. Featuring an all-black look, as well as
                      lifestyle activities such as a dining section where
                      consumers may.
                    </span>
                  </p>
                  <p>
                    <span className="gsapIntroHeading">
                      Find out more at
                      <a
                        href="https://emea.blvck.com/"
                        target="_blank"
                        className="pl-1 text-dark font-weight-bold font-italic"
                        style={{ textDecoration: "none" }}
                      >
                        blvck.com
                      </a>
                    </span>
                  </p>
                </div>
                <div className="d-flex flex-row bd-highlight mb-3">
                  <div className="py-1 bd-highlight">
                    <div className="btn-wrap">
                      <span className="gsapIntroHeading">
                        <Link to="/products">
                          <div className="btn btn-dark rounded-0 btn-shop">
                            Shop collections
                          </div>
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="py-1 bd-highlight">
                    <div className="btn-wrap">
                      <span className="gsapIntroHeading">
                        <a href="#featured">
                          <div className="btn btn-light rounded-0 btn-free-delivery">
                            Featured
                          </div>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="intro-img-container">
                  <img
                    src={introImage}
                    alt={introImage}
                    className="intro-img img-fluid"
                    ref={(el) => (introImages = el)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="featured-products" id="featured">
        <div className="container">
          <div className="title">2021 New Arrivals</div>
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

                <div className="item">
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

      <div className="limited-edition-products-container">
        <div className="limited-edition-products">
          <div className="sub-title">
            BLVCK
            <img
              src={crossImage}
              alt=""
              className="img-fluid collab-icon"
              width="30"
              // ref={(el) => (limitedEdImage = el)}
            />
            CASETIFY
          </div>

          <div className="title">LIMITED COLLAB.</div>

          <button className="btn btn-dark btn-limited-edition ">
            Shop now
          </button>
        </div>
      </div>

      <div className="sales-products container-fluid pl-0">
        <div className="row">
          <div className="col-md-6 img-section">
            <img
              src={salesProduct}
              alt="salesProduct"
              className="img-fluid img-sales-products"
            />
          </div>
          <div className="col-md-6">
            <div className="row top-section">
              <div className="col-md-12">
                <div className="sub-title">hot sales</div>
                <div className="title">
                  <span
                    style={{
                      fontWeight: "700",
                      color: "#ff577b",
                      marginRight: "0.8rem",
                    }}
                  >
                    Empower
                  </span>
                  with style that signals of
                  <span style={{ fontWeight: "700" }}> status</span> &
                  <span style={{ fontWeight: "700" }}> dominance</span>
                </div>
                <div className="d-flex justify-content-between wrapper">
                  <div className="p-2 bd-highlight">
                    <div className="price">$280</div>
                  </div>
                  <div className="p-2 bd-highlight"></div>
                  <div className="p-2 bd-highlight">
                    <button className="btn btn-outline-light btn-buy-now">
                      buy now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row bottom-section">
              <div className="col-md-4 pl-0 text-white">
                <div className="left-section">
                  <div className="title">850K</div>
                  <div className="sub-title">customers</div>
                </div>
              </div>
              <div className="col-md-8 right-section">
                <div className="title">New Collection</div>
                <div className="description">
                  Blvck Paris debuted two consecutive pop-up shops in Taipei
                  more than a year ago. Featuring an all-black look, as well as
                  lifestyle activities including a restaurant nook where
                  visitors may...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
