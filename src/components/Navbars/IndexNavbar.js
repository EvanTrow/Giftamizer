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
import { Link } from 'react-router-dom';
// reactstrap components
import { UncontrolledCollapse, NavbarBrand, Navbar, NavItem, NavLink, Nav, Container, Row, Col, UncontrolledTooltip, Button } from 'reactstrap';

class AdminNavbar extends React.Component {
    render() {
        return (
            <>
                <Navbar className="navbar-horizontal navbar-main navbar-dark bg-primary" expand="lg" id="navbar-main">
                    <Container>
                        <NavbarBrand to="/" tag={Link}>
                            <img alt="..." src={require('assets/img/brand/white.png')} />
                        </NavbarBrand>
                        <button
                            aria-controls="navbar-collapse"
                            aria-expanded={false}
                            aria-label="Toggle navigation"
                            className="navbar-toggler"
                            data-target="#navbar-collapse"
                            data-toggle="collapse"
                            id="navbar-collapse"
                            type="button"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <UncontrolledCollapse className="navbar-custom-collapse" navbar toggler="#navbar-collapse">
                            <div className="navbar-collapse-header">
                                <Row>
                                    <Col className="collapse-brand" xs="6">
                                        <Link to="/admin/dashboard">
                                            <img alt="..." src={require('assets/img/brand/blue.png')} />
                                        </Link>
                                    </Col>
                                    <Col className="collapse-close" xs="6">
                                        <button
                                            aria-controls="navbar-collapse"
                                            aria-expanded={false}
                                            aria-label="Toggle navigation"
                                            className="navbar-toggler"
                                            data-target="#navbar-collapse"
                                            data-toggle="collapse"
                                            id="navbar-collapse"
                                            type="button"
                                        >
                                            <span />
                                            <span />
                                        </button>
                                    </Col>
                                </Row>
                            </div>
                            <hr className="d-lg-none" />
                            <Nav className="align-items-lg-center ml-lg-auto" navbar>
                                <NavItem>
                                    <NavLink className="nav-link-icon" id="tooltip601201423" target="_blank">
                                        <i className="fab fa-facebook-square" />
                                        <span className="nav-link-inner--text d-lg-none">Facebook</span>
                                    </NavLink>
                                    <UncontrolledTooltip delay={0} target="tooltip601201423">
                                        Login with Facebook
                                    </UncontrolledTooltip>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link-icon" id="tooltip931502898" target="_blank">
                                        <i className="fab fa-google" />
                                        <span className="nav-link-inner--text d-lg-none">Google</span>
                                    </NavLink>
                                    <UncontrolledTooltip delay={0} target="tooltip931502898">
                                        Login with Google
                                    </UncontrolledTooltip>
                                </NavItem>
                                <NavItem className="d-none d-lg-block ml-lg-4">
                                    <Button className="btn-default btn-icon" color="default" to="/login" tag={Link}>
                                        <span className="btn-inner--icon">
                                            <i className="fas fa-sign-in-alt mr-2" />
                                        </span>
                                        <span className="nav-link-inner--text">Login</span>
                                    </Button>
                                </NavItem>
                                <NavItem className="d-none d-lg-block ml-lg-4">
                                    <Button className="btn-neutral btn-icon" color="default" to="/signup" tag={Link}>
                                        <span className="btn-inner--icon">
                                            <i className="fas fa-user-plus mr-2" />
                                        </span>
                                        <span className="nav-link-inner--text">Sign up</span>
                                    </Button>
                                </NavItem>
                            </Nav>
                        </UncontrolledCollapse>
                    </Container>
                </Navbar>
            </>
        );
    }
}

export default AdminNavbar;
