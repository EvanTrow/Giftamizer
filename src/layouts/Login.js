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
import React from 'react';
// react library for routing
import { Route, Switch, Redirect } from 'react-router-dom';

// core components
import IndexNavbar from 'components/Navbars/IndexNavbar.js';
import AuthFooter from 'components/Footers/AuthFooter.js';

import IndexView from 'views/Index';
import LoginView from 'views/pages/examples/Login';
import RegisterView from 'views/pages/examples/Register';

class Login extends React.Component {
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.mainContent.scrollTop = 0;
        // document.body.classList.remove('bg-default');
    }
    componentWillUnmount() {
        // document.body.classList.add('bg-default');
    }
    componentDidUpdate(e) {
        if (e.history.pathname !== e.location.pathname) {
            document.documentElement.scrollTop = 0;
            document.scrollingElement.scrollTop = 0;
            this.refs.mainContent.scrollTop = 0;
        }
    }
    getRoutes = (routes) => {
        return routes.map((prop, key) => {
            if (prop.collapse) {
                return this.getRoutes(prop.views);
            }
            if (prop.layout === '/') {
                return <Route path={prop.layout + prop.path} component={prop.component} key={key} />;
            } else {
                return null;
            }
        });
    };
    render() {
        return (
            <>
                <div className="main-content" ref="mainContent">
                    <IndexNavbar />
                    <LoginView />
                    {/* <Switch>
                        <Route exact path="/" component={IndexView} />;
                        <Route exact path="/login" component={LoginView} />;
                        <Route exact path="/signup" component={RegisterView} />;
                    </Switch> */}
                </div>
                <AuthFooter />
            </>
        );
    }
}

export default Login;
