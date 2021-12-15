import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actionTypes from "../src/store/actions";
import { gsap, Power1 } from "gsap";
import CustomCursor from "../src/components/user/CustomCursor/CustomCursor";

import Navbar from "./components/user/Layout/Navbar/Navbar";
import Footer from "./components/user/Layout/Footer/Footer";
import Home from "./components/user/Home/Home";
import Support from "./components/user/Support/Support";
import Products from "./components/user/Products/Products";
import Login from "./components/user/Login/Login";
import Register from "./components/user/Register/Register";
import Cart from "./components/user/Cart/Cart";
import Favourite from "./components/user/Favourite/Favourite";
import Product from "./components/user/Products/Product/Product";

import "./components/user/Home/Home.css";
import "./App.css";

const App = (props) => {
  const [product_list, setProduct] = useState([]);
  const [preloader, setPreLoader] = useState(true);
  const [timer, setTimer] = useState(3);

  let tl = gsap.timeline({ defaults: { ease: Power1.easeOut } });

  // loader timing
  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreLoader(false);
  };

  useEffect(() => {
    // loader animation
    tl.to(".loader-heading", { y: "0%", duration: 2, stagger: 0.2 });

    // loader timing count down
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);

    // get products
    axios
      .get("http://localhost:5000/api/products/get-products")
      .then((res) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        const allProducts = res.data;
        Object.keys(allProducts).map((key, index) => {
          let tempObj = {
            id: key,
            name: allProducts[key].product_title,
            desc: allProducts[key].product_description,
            price: allProducts[key].product_price,
            tag: allProducts[key].product_tag,
            imgUrl: allProducts[key].product_image_url,
            stock: allProducts[key].product_stock,
          };

          // add product to the end of the array
          setProduct((product_list) => [...product_list, tempObj]);
        });
      })
      .catch((err) => console.log(`Error: ${err}`));
  }, []);

  // store to redux
  props.getProductsHandler(product_list);

  useEffect(() => {
    // check after timer reaches target value then do something
    if (timer === 0) {
      tl.to(".loader-wrapper", {
        y: "100%",
        duration: 1.5,
        delay: 0.5,
      }).then(() => {
        // ensure loader only render once, with session storage
        sessionStorage.setItem("loader", "active");

        clear();
      });
    }
  }, [timer]); // listen to timer

  return (
    <BrowserRouter>
      <React.Fragment>
        {/* loader only loads once per session */}
        {sessionStorage.getItem("loader") !== "active" && preloader ? (
          <div className="loader-wrapper absolute">
            <h1>
              <span className="loader-heading">anico</span>
            </h1>

            <h2>
              <span className="loader-heading">
                Feel trendy. Feel authentic.
              </span>
            </h2>
          </div>
        ) : (
          <>
            <CustomCursor />

            <Navbar />
            <Switch>
              {/*Default Path*/}
              <Route exact path="/" component={Home} />

              {/* Support Page */}
              <Route exact path="/support" component={Support} />

              {/* Products Page */}
              <Route exact path="/products" render={() => <Products />} />

              {/* Product Detail Page */}
              <Route
                exact
                path="/products/:prodId"
                render={() => <Product />}
              />

              {/* Login Page */}
              <Route exact path="/login" component={Login} />

              {/* Register Page */}
              <Route exact path="/register" component={Register} />

              {/* Cart Page */}
              <Route exact path="/cart" render={() => <Cart />} />

              {/* Favourite Page */}
              <Route
                exact
                path="/favourite"
                render={() => {
                  if (props.sessionAuthData === null) {
                    return <Redirect to="/" />;
                  } else {
                    return <Favourite />;
                  }
                }}
              />
            </Switch>
            <Footer />
          </>
        )}
      </React.Fragment>
    </BrowserRouter>
  );
};

// REDUX SECTION

// STORE - Getting all the state from reducer.js
const mapStateToProps = (global_state) => {
  return {
    sessionAuthData: global_state.sessionAuthData,
    productList: global_state.allProducts,
  };
};

// ACTION - returning value to the reducer.js for processing and computation
const mapDispatchToProps = (dispatch) => {
  return {
    getProductsHandler: (product_list) =>
      dispatch({
        type: actionTypes.GET_PRODUCTS,
        product_list: product_list,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
