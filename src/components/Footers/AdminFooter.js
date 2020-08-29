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
/*eslint-disable*/
import React from 'react';

// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from 'reactstrap';

class Calendar extends React.Component {
    render() {
        return (
            <>
                <Container fluid>
                    <footer className="footer pt-0">
                        <Row className="align-items-center justify-content-lg-between">
                            <Col lg="6">
                                <div className="copyright text-center text-lg-left text-muted">
                                    © {new Date().getFullYear()}{' '}
                                    <a className="font-weight-bold ml-1" href="https://www.creative-tim.com?ref=adpr-admin-footer" target="_blank">
                                        TROWBRIDGE
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </footer>
                </Container>
            </>
        );
    }
}

export default Calendar;
