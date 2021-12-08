import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actionTypes from "../src/store/actions";

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

import "./App.css";

const App = (props) => {
  const [product_list, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products/get-products")
      .then((res) => {
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
          // console.log(tempObj, "OBJECT");

          // add product to the end of the array
          setProduct((product_list) => [...product_list, tempObj]);
        });
      })
      .catch((err) => console.log(`Error: ${err}`));
  }, []);

  // store to redux
  props.getProductsHandler(product_list);

  // console.log(product_list, "ARRAY");

  return (
    <BrowserRouter>
      <React.Fragment>
        <Navbar />
        <Switch>
          {/*Default Path*/}
          <Route exact path="/" component={Home} />

          {/* Support Page */}
          <Route exact path="/support" component={Support} />

          {/* Products Page */}
          <Route exact path="/products" render={() => <Products />} />

          {/* Product Detail Page */}
          <Route exact path="/products/:prodId" render={() => <Product />} />

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
