import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './components/user/Home/Home';
import Support from './components/user/Support/Support';
import Navbar from './components/user/Layout/Navbar/Navbar';
import Footer from './components/user/Layout/Footer/Footer';

import './App.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <React.Fragment>

                    <Navbar/>

                    <Switch>
                        {/*Default Path*/}
                        <Route exact path='/' component={Home}/>

                        <Route
                            exact
                            path='/support' component={Support}/>
                    </Switch>

                    <Footer />

                </React.Fragment>
            </BrowserRouter>
        )
    }
}

export default App;
