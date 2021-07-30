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
import Product from "./components/user/Products/Product/Product";

import "./App.css";

class App extends Component {
    product_list = [
        {
            id: "1",
            name: "Nike Dri-FIT Indy Zip-Front",
            desc: "The Nike Dri-FIT Indy Zip-Front Sports Bra takes the lightweight design to the next level, with fabric made from at least 50% recycled polyester fibres.It's easy to get on and off, and it's extra cool at the back with breathable mesh.Thin, adjustable straps let you get the perfect fit.",
            price: 69,
            tag: "Sustainable Materials",
            imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2ae375f6-ac20-4cc0-92ff-ce0e307fb801/dri-fit-indy-zip-front-light-support-padded-sports-bra-K7ZvFg.png",
        },
        {
            id: "2",
            name: "Nike One Luxe",
            desc: "The Nike Dri-FIT One Luxe Leggings are super versatile and made with silky soft fabric that you can't see through.They keep you confidently covered for any workout—or any time.Part of the Nike Luxe line, they're a super-comfortable, lightweight second skin you'll want to live in.They're made from at least 50% recycled polyester fibres.This product is made from at least 50% recycled polyester fibres.",
            price: 109,
            tag: "Sustainable Materials",
            imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3226adca-9e72-45b9-9fba-8231283829de/one-luxe-mid-rise-leggings-S5cp94.png",
        },
        {
            id: "3",
            name: "Nike Sportswear Swoosh",
            desc: "Ready for cooler weather, the Nike Sportswear Swoosh T-Shirt is a go-to styling piece you can pair with your favourite leggings and sneakers.Heavyweight cotton and our Oversized Top design give it a relaxed, comfortable feel.",
            price: 59,
            tag: "Just In",
            imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a9b6d9e7-e267-48de-85a7-088ccc6ddd37/sportswear-swoosh-t-shirt-HdPxtG.png",
        },
        {
            id: "4",
            name: "Nike Dri-FIT One Luxe",
            desc: "The Nike Dri-FIT One Luxe Top is designed for all the ways you work out—from yoga to HIIT to long runs. As part of the Nike Luxe line, this top defines luxury with buttery-soft and smooth fabric that breathes to keep you dry and cool. It's made from at least 75% recycled polyester fibres.",
            price: 65,
            tag: "Sustainable Materials",
            imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/18ddfdf8-8054-43c1-a76b-f489d963f6ff/dri-fit-one-luxe-standard-fit-short-sleeve-top-KM5GHX.png",
        },
        {
            id: "5",
            name: "Nike x AMBUSH",
            desc: "The Nike x AMBUSH Crop Top features sweat-wicking technology and soft knit fabrics to create a comfortable feel, while its bold colour-blocking creates a futuristic look for the worldwide stage.",
            price: 119,
            tag: "Exclusively on  SNKRS",
            imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/22fe3165-fa1d-4365-9b5b-b79d55f1a808/ambush-short-sleeve-t-shirt.png",
        },
    ];

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
                        <Route
                            exact
                            path="/products"
                            render={() => (
                                <Products product_list={this.product_list} />
                            )}
                        />

                        {/* Product Detail Page */}
                        <Route
                            exact
                            path="/products/:prodId"
                            render={() => (
                                <Product product_list={this.product_list} />
                            )}
                        />

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
