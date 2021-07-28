import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/user/Layout/Navbar/Navbar";
import Footer from "./components/user/Layout/Footer/Footer";
import Home from "./components/user/Home/Home";
import Support from "./components/user/Support/Support";
import Products from "./components/user/Products/Products";
import Login from "./components/user/Login/Login";
import Register from "./components/user/Register/Register";
import Cart from "./components/user/Cart/Cart";
import Favourite from "./components/user/Favourite/Favourite";

import "./App.css";

class App extends Component {
    render() {
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
                        <Route exact path="/products" component={Products} />

                        {/* Login Page */}
                        <Route exact path="/login" component={Login} />

                        {/* Register Page */}
                        <Route exact path="/register" component={Register} />

                        {/* Cart Page */}
                        <Route exact path="/cart" component={Cart} />

                        {/* Favourite Page */}
                        <Route exact path="/favourite" component={Favourite} />
                    </Switch>

                    <Footer />
                </React.Fragment>
            </BrowserRouter>
        );
    }
}

export default App;
