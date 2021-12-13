import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { gsap, Power2 } from "gsap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import introImage from "../../../../../front-end/src/assets/img/IMG_3876_2_720x.jpg";
import crossImage from "../../../../../front-end/src/assets/img/cross.png";
import salesProduct from "../../../../../front-end/src/assets/img/260437797_889392161942869_6313503206954777084_n 1.png";

import "./Home.css";

const Home = (props) => {
  // variables
  let home = useRef(null);
  let introImages = useRef(null);
  let introContent = useRef(null);

  // declarations
  let tl = gsap.timeline();

  useEffect(() => {
    // image vars - get first child of div
    const introImagesFirst = introImages.firstElementChild;

    // content vars
    const introHeadLineFirst = introContent.children[0];
    const introHeadLineSecond = introContent.children[1];
    const introContentP = introContent.children[2];
    const introButtons = introContent.children[3];

    // to prevent page flashing during slow rendering
    gsap.to(home, { duration: 0, css: { visibility: "visible" } }); // parent, properties

    // image animations
    tl.from(introImagesFirst, {
      duration: 1.2,
      y: 500,
      ease: Power2.easeOut,
    }).from(
      introImagesFirst.firstElementChild,
      {
        duration: 1,
        opacity: 0,
        scale: 0.6,
        ease: Power2.easeInOut,
      },
      0.2,
      "Start"
    );

    console.log(introHeadLineFirst);

    // content animations
    tl.from(
      [introHeadLineFirst, introHeadLineSecond],
      {
        duration: 1,
        y: 44,
        ease: Power2.easeOut,
        delay: 0.8,
        stagger: 0.2,
        opacity: 0,
      },
      0.15,
      "Start"
    )
      .from(
        introContentP,
        {
          duration: 1,
          y: 20,
          opacity: 0,
          ease: Power2.easeOut,
          delay: 0.8,
          stagger: 0.2,
        },
        1.4
      )
      .from(
        introButtons,
        {
          duration: 1,
          y: 20,
          opacity: 0,
          ease: Power2.easeOut,
          delay: 0.8,
          stagger: 0.2,
        },
        1.6
      );
  }, []);

  return (
    <div className="home" ref={(el) => (home = el)}>
      <div className="introduction-bg">
        <div className="container">
          <div className="introduction">
            <div className="row">
              <div className="col-md-6" ref={(el) => (introContent = el)}>
                <div className="sub-title">Feel trendy. Feel authentic.</div>
                <div className="title">
                  Explore your true style with
                  <span className="emphasis ml-3">luxury</span> and
                  <span className="emphasis ml-3">comfort.</span>
                </div>
                <div className="description">
                  anico debuted two consecutive pop-up shops in Taipei more than
                  a year ago. Featuring an all-black look, as well as lifestyle
                  activities such as a dining section where consumers may.
                  <br />
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
                <div className="intro-images">
                  <div
                    className="intro-images-inner"
                    ref={(el) => (introImages = el)}
                  >
                    <div className="intro-image-first">
                      <img
                        src={introImage}
                        alt=""
                        className="intro-img img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="testimonial">
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
      </div> */}

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

      <div className="limited-edition-products">
        {/* <img
          src={limitedEditionProduct}
          alt="limited edition bg"
          className="img-fluid img-limited-edition-products"
        /> */}
        <div className="sub-title">
          BLVCK
          <img
            src={crossImage}
            alt=""
            className="img-fluid collab-icon"
            width="30"
          />
          CASETIFY
        </div>

        <div className="title">LIMITED COLLAB.</div>

        <div className="btn btn-dark btn-limited-edition ">Shop now</div>
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
                  <span style={{ fontWeight: "700", color: "#ff577b" }}>
                    Empower
                  </span>{" "}
                  with style that signals of
                  <span style={{ fontWeight: "700" }}> status</span> &
                  <span style={{ fontWeight: "700" }}> dominance</span>
                </div>
                <div class="d-flex justify-content-between wrapper">
                  <div class="p-2 bd-highlight">
                    <div className="price">$280</div>
                  </div>
                  <div class="p-2 bd-highlight"></div>
                  <div class="p-2 bd-highlight">
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
