import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './components/Home'
import Support from './components/user/Support/Support'

import './App.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <Switch>
                        {/*Default Path*/}
                        <Route exact path='/' component={Home}/>

                        <Route
                            exact
                            path='/support' component={Support} />
                    </Switch>
                </React.Fragment>
            </BrowserRouter>
        )
    }
}

export default App;
