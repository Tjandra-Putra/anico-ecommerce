import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";

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

const App = () => {
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

          // ==== Programmer's note ====
          // Push element at end of array
          // setTheArray(prevArray => [...prevArray, newValue])

          // Update an entire array
          // setTheObject([...prevState, newValue]);
        });
      })
      .catch((err) => console.log(`Error: ${err}`));
  }, []);

  console.log(product_list, "ARRAY");

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
          <Route
            exact
            path="/products"
            render={() => <Products product_list={product_list} />}
          />

          {/* Product Detail Page */}
          <Route
            exact
            path="/products/:prodId"
            render={() => <Product product_list={product_list} />}
          />

          {/* Login Page */}
          <Route exact path="/login" component={Login} />

          {/* Register Page */}
          <Route exact path="/register" component={Register} />

          {/* Cart Page */}
          <Route exact path="/cart" render={() => <Cart />} />

          {/* Favourite Page */}
          <Route exact path="/favourite" component={Favourite} />
        </Switch>

        <Footer />
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
