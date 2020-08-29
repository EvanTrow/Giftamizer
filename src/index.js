/*!

=========================================================
* Argon Dashboard PRO React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// react library for routing
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// bootstrap rtl for rtl support page
import 'assets/vendor/bootstrap-rtl/bootstrap-rtl.scss';
// plugins styles from node_modules
import 'react-notification-alert/dist/animate.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
// plugins styles downloaded
import 'assets/vendor/fullcalendar/dist/fullcalendar.min.css';
import 'assets/vendor/sweetalert2/dist/sweetalert2.min.css';
import 'assets/vendor/select2/dist/css/select2.min.css';
import 'assets/vendor/quill/dist/quill.core.css';
import 'assets/vendor/nucleo/css/nucleo.css';
import 'assets/vendor/@fortawesome/fontawesome-free/css/all.min.css';
// core styles
import 'assets/scss/argon-dashboard-pro-react.scss?v1.1.0';

import GiftLayout from 'layouts/Gift.js';
import IndexView from 'layouts/Landing.js';
import LoginLayout from 'layouts/Login.js';
import SignUpLayout from 'layouts/SignUp.js';

// firebase core
// import { logout } from './helpers/auth';
import { firebaseAuth } from 'config/constants';

function PrivateRoute({ component: Component, authed, ...rest }) {
    return <Route {...rest} render={(props) => (authed === true ? <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />)} />;
}

function PublicRoute({ component: Component, authed, ...rest }) {
    return <Route {...rest} render={(props) => (authed === false ? <Component {...props} /> : <Redirect to="/gift" />)} />;
}

export default class App extends Component {
    state = {
        authed: false,
        loading: true,
    };
    componentDidMount() {
        this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    authed: true,
                    loading: false,
                });
            } else {
                this.setState({
                    authed: false,
                    loading: false,
                });
            }
        });
    }
    componentWillUnmount() {
        this.removeListener();
    }
    render() {
        return this.state.loading === true ? (
            <h1></h1>
        ) : (
            <BrowserRouter>
                <Switch>
                    <PublicRoute authed={this.state.authed} exact path="/" component={IndexView} />
                    <PublicRoute authed={this.state.authed} exact path="/login" component={LoginLayout} />
                    <PublicRoute authed={this.state.authed} exact path="/signup" component={SignUpLayout} />
                    <PrivateRoute authed={this.state.authed} path="/gift" component={GiftLayout} />
                </Switch>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
