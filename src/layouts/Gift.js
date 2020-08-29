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
import GiftNavbar from 'components/Navbars/GiftNavbar.js';
import AdminFooter from 'components/Footers/AdminFooter.js';
import Sidebar from 'components/Sidebar/Sidebar.js';

import routes from 'routes.js';

class Gift extends React.Component {
    state = {
        sidenavOpen: true,
    };
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
            if (prop.layout === '/gift') {
                return <Route exact path={prop.layout + prop.path} component={prop.component} key={key} />;
            } else {
                return null;
            }
        });
    };
    getBrandText = (path) => {
        for (let i = 0; i < routes.length; i++) {
            if (this.props.location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
                return routes[i].name;
            }
        }
        return 'Brand';
    };
    // toggles collapse between mini sidenav and normal
    toggleSidenav = (e) => {
        if (document.body.classList.contains('g-sidenav-pinned')) {
            document.body.classList.remove('g-sidenav-pinned');
            document.body.classList.add('g-sidenav-hidden');
        } else {
            document.body.classList.add('g-sidenav-pinned');
            document.body.classList.remove('g-sidenav-hidden');
        }
        this.setState({
            sidenavOpen: !this.state.sidenavOpen,
        });
    };
    getNavbarTheme = () => {
        return this.props.location.pathname.indexOf('admin/alternative-dashboard') === -1 ? 'dark' : 'light';
    };
    render() {
        return (
            <>
                <Sidebar
                    {...this.props}
                    routes={routes}
                    toggleSidenav={this.toggleSidenav}
                    sidenavOpen={this.state.sidenavOpen}
                    logo={{
                        innerLink: '/',
                        imgSrc: require('assets/img/brand/blue.png'),
                        imgAlt: '...',
                    }}
                />
                <div className="main-content" ref="mainContent" onClick={this.closeSidenav}>
                    <GiftNavbar
                        {...this.props}
                        theme={this.getNavbarTheme()}
                        toggleSidenav={this.toggleSidenav}
                        sidenavOpen={this.state.sidenavOpen}
                        brandText={this.getBrandText(this.props.location.pathname)}
                    />
                    <Switch>
                        {this.getRoutes(routes)}
                        <Redirect from="*" to="/gift" />
                    </Switch>
                    <AdminFooter />
                </div>
                {this.state.sidenavOpen ? <div className="backdrop d-xl-none" onClick={this.toggleSidenav} /> : null}
            </>
        );
    }
}

export default Gift;
